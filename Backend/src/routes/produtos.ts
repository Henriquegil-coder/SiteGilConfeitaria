import { Router } from "express";
import { prisma } from "../lib/prisma";
import { autenticar } from "../middlewares/autenticar";
import { lerId } from "../lib/util";

export const produtosRouter = Router();

function lerProduto(corpo: any) {
  const { nome, descricao, precoCentavos, imagem, ativo, categoriaId } =
    corpo ?? {};

  if (typeof nome !== "string" || !nome.trim()) {
    return { erro: "Informe o nome" };
  }
  if (typeof descricao !== "string") {
    return { erro: "Informe a descrição" };
  }
  if (!Number.isInteger(precoCentavos) || precoCentavos < 0) {
    return {
      erro: "precoCentavos deve ser um número inteiro (ex.: 4500 para R$ 45,00)",
    };
  }
  if (imagem != null && typeof imagem !== "string") {
    return { erro: "imagem inválida" };
  }
  if (categoriaId != null && !Number.isInteger(categoriaId)) {
    return { erro: "categoriaId inválido" };
  }

  return {
    dados: {
      nome: nome.trim(),
      descricao: descricao.trim(),
      precoCentavos: precoCentavos as number,
      imagem: (typeof imagem === "string" && imagem.trim()
        ? imagem.trim()
        : null) as string | null,
      ativo: ativo !== false,
      categoriaId: (categoriaId ?? null) as number | null,
    },
  };
}

// Lista pública. Aceita filtro por categoria: /produtos?categoria=bolos
produtosRouter.get("/", async (req, res) => {
  const categoria =
    typeof req.query.categoria === "string" ? req.query.categoria : undefined;

  const produtos = await prisma.produto.findMany({
    where: {
      ativo: true,
      ...(categoria ? { categoria: { slug: categoria } } : {}),
    },
    include: { categoria: true },
    orderBy: { nome: "asc" },
  });
  res.json(produtos);
});

// Lista completa, inclusive produtos desativados (só para o administrador).
produtosRouter.get("/admin/todos", autenticar, async (_req, res) => {
  const produtos = await prisma.produto.findMany({
    include: { categoria: true },
    orderBy: { nome: "asc" },
  });
  res.json(produtos);
});

produtosRouter.post("/", autenticar, async (req, res) => {
  const { dados, erro } = lerProduto(req.body);
  if (!dados) {
    res.status(400).json({ erro });
    return;
  }

  const produto = await prisma.produto.create({ data: dados });
  res.status(201).json(produto);
});

produtosRouter.put("/:id", autenticar, async (req, res) => {
  const id = lerId(req.params.id);
  if (!id) {
    res.status(400).json({ erro: "Id inválido" });
    return;
  }

  const existe = await prisma.produto.findUnique({ where: { id } });
  if (!existe) {
    res.status(404).json({ erro: "Produto não encontrado" });
    return;
  }

  const { dados, erro } = lerProduto(req.body);
  if (!dados) {
    res.status(400).json({ erro });
    return;
  }

  const produto = await prisma.produto.update({ where: { id }, data: dados });
  res.json(produto);
});

produtosRouter.delete("/:id", autenticar, async (req, res) => {
  const id = lerId(req.params.id);
  if (!id) {
    res.status(400).json({ erro: "Id inválido" });
    return;
  }

  const existe = await prisma.produto.findUnique({ where: { id } });
  if (!existe) {
    res.status(404).json({ erro: "Produto não encontrado" });
    return;
  }

  await prisma.produto.delete({ where: { id } });
  res.status(204).send();
});