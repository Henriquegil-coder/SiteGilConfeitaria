import "dotenv/config";
import "express-async-errors";
import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import { prisma } from "./lib/prisma";
import { authRouter } from "./routes/auth";
import { autenticar } from "./middlewares/autenticar";

const app = express();

app.use(cors({ origin: process.env.FRONTEND_URL || true }));
app.use(express.json());

app.get("/saude", (_req, res) => {
  res.json({ ok: true });
});

app.use("/auth", authRouter);

app.get("/admin/ping", autenticar, (_req, res) => {
  res.json({ ok: true, usuarioId: res.locals.usuarioId });
});

app.get("/produtos", async (_req, res) => {
  const produtos = await prisma.produto.findMany({
    where: { ativo: true },
    include: { categoria: true },
    orderBy: { nome: "asc" },
  });
  res.json(produtos);
});

app.get("/artigos", async (_req, res) => {
  const artigos = await prisma.artigo.findMany({
    where: { publicado: true },
    select: {
      id: true,
      titulo: true,
      slug: true,
      resumo: true,
      imagemCapa: true,
      publicadoEm: true,
    },
    orderBy: { publicadoEm: "desc" },
  });
  res.json(artigos);
});

app.get("/artigos/:slug", async (req, res) => {
  const artigo = await prisma.artigo.findFirst({
    where: { slug: req.params.slug, publicado: true },
  });
  if (!artigo) {
    res.status(404).json({ erro: "Artigo não encontrado" });
    return;
  }
  res.json(artigo);
});

app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err);
  res.status(500).json({ erro: "Erro interno do servidor" });
});

const porta = Number(process.env.PORT) || 3333;
app.listen(porta, () => {
  console.log(`Servidor rodando na porta ${porta}`);
});
