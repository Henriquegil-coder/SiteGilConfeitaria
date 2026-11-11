import { Router } from "express";
import { prisma } from "../lib/prisma";
import { autenticar } from "../middlewares/autenticar";
import { criarSlug, lerId } from "../lib/util";

export const artigosRouter = Router();

const camposLista = {
  id: true,
  titulo: true,
  slug: true,
  categoria: true,
  resumo: true,
  imagemCapa: true,
  publicado: true,
  publicadoEm: true,
};

function lerArtigo(corpo: any) {
  const { titulo, categoria, resumo, conteudo, imagemCapa, publicado } =
    corpo ?? {};

  if (typeof titulo !== "string" || !titulo.trim()) {
    return { erro: "Informe o título" };
  }
  if (categoria != null && typeof categoria !== "string") {
    return { erro: "categoria inválida" };
  }
  if (typeof resumo !== "string" || !resumo.trim()) {
    return { erro: "Informe o resumo" };
  }
  if (typeof conteudo !== "string" || !conteudo.trim()) {
    return { erro: "Informe o conteúdo" };
  }
  if (imagemCapa != null && typeof imagemCapa !== "string") {
    return { erro: "imagemCapa inválida" };
  }

  return {
    dados: {
      titulo: titulo.trim(),
      categoria: (typeof categoria === "string" && categoria.trim()
        ? categoria.trim()
        : "Artigos") as string,
      resumo: resumo.trim(),
      conteudo: conteudo as string,
      imagemCapa: (imagemCapa?.trim() || null) as string | null,
      publicado: publicado === true,
    },
  };
}

artigosRouter.get("/", async (_req, res) => {
  const artigos = await prisma.artigo.findMany({
    where: { publicado: true },
    select: camposLista,
    orderBy: { publicadoEm: "desc" },
  });
  res.json(artigos);
});

// Lista todos, inclusive rascunhos (só para o administrador).
// Precisa ficar antes de "/:slug".
artigosRouter.get("/admin/todos", autenticar, async (_req, res) => {
  const artigos = await prisma.artigo.findMany({
    select: camposLista,
    orderBy: { criadoEm: "desc" },
  });
  res.json(artigos);
});

artigosRouter.get("/:slug", async (req, res) => {
  const artigo = await prisma.artigo.findFirst({
    where: { slug: req.params.slug, publicado: true },
  });
  if (!artigo) {
    res.status(404).json({ erro: "Artigo não encontrado" });
    return;
  }
  res.json(artigo);
});

artigosRouter.post("/", autenticar, async (req, res) => {
  const { dados, erro } = lerArtigo(req.body);
  if (!dados) {
    res.status(400).json({ erro });
    return;
  }

  const slug = criarSlug(dados.titulo);
  if (!slug) {
    res.status(400).json({ erro: "Título inválido" });
    return;
  }

  const existe = await prisma.artigo.findUnique({ where: { slug } });
  if (existe) {
    res.status(409).json({ erro: "Já existe um artigo com esse título" });
    return;
  }

  const artigo = await prisma.artigo.create({
    data: {
      ...dados,
      slug,
      publicadoEm: dados.publicado ? new Date() : null,
      autorId: res.locals.usuarioId,
    },
  });
  res.status(201).json(artigo);
});

artigosRouter.put("/:id", autenticar, async (req, res) => {
  const id = lerId(req.params.id);
  if (!id) {
    res.status(400).json({ erro: "Id inválido" });
    return;
  }

  const atual = await prisma.artigo.findUnique({ where: { id } });
  if (!atual) {
    res.status(404).json({ erro: "Artigo não encontrado" });
    return;
  }

  const { dados, erro } = lerArtigo(req.body);
  if (!dados) {
    res.status(400).json({ erro });
    return;
  }

  const artigo = await prisma.artigo.update({
    where: { id },
    data: {
      ...dados,
      publicadoEm: dados.publicado ? (atual.publicadoEm ?? new Date()) : null,
    },
  });
  res.json(artigo);
});

artigosRouter.delete("/:id", autenticar, async (req, res) => {
  const id = lerId(req.params.id);
  if (!id) {
    res.status(400).json({ erro: "Id inválido" });
    return;
  }

  const existe = await prisma.artigo.findUnique({ where: { id } });
  if (!existe) {
    res.status(404).json({ erro: "Artigo não encontrado" });
    return;
  }

  await prisma.artigo.delete({ where: { id } });
  res.status(204).send();
});