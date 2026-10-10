import { Router } from "express";
import { prisma } from "../lib/prisma";
import { autenticar } from "../middlewares/autenticar";
import { criarSlug, lerId } from "../lib/util";

export const categoriasRouter = Router();

categoriasRouter.get("/", async (_req, res) => {
  const categorias = await prisma.categoria.findMany({
    orderBy: { nome: "asc" },
  });
  res.json(categorias);
});

categoriasRouter.post("/", autenticar, async (req, res) => {
  const nome = req.body?.nome;
  if (typeof nome !== "string" || !nome.trim()) {
    res.status(400).json({ erro: "Informe o nome" });
    return;
  }

  const slug = criarSlug(nome);
  if (!slug) {
    res.status(400).json({ erro: "Nome inválido" });
    return;
  }

  const existe = await prisma.categoria.findFirst({
    where: { OR: [{ nome: nome.trim() }, { slug }] },
  });
  if (existe) {
    res.status(409).json({ erro: "Já existe uma categoria com esse nome" });
    return;
  }

  const categoria = await prisma.categoria.create({
    data: { nome: nome.trim(), slug },
  });
  res.status(201).json(categoria);
});

categoriasRouter.delete("/:id", autenticar, async (req, res) => {
  const id = lerId(req.params.id);
  if (!id) {
    res.status(400).json({ erro: "Id inválido" });
    return;
  }

  const existe = await prisma.categoria.findUnique({ where: { id } });
  if (!existe) {
    res.status(404).json({ erro: "Categoria não encontrada" });
    return;
  }

  await prisma.categoria.delete({ where: { id } });
  res.status(204).send();
});