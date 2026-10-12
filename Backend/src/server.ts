import "dotenv/config";
import "express-async-errors";
import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import { authRouter } from "./routes/auth";
import { categoriasRouter } from "./routes/categorias";
import { produtosRouter } from "./routes/produtos";
import { artigosRouter } from "./routes/artigos";
import { autenticar } from "./middlewares/autenticar";

const app = express();

//faz o limite enxergar o IP real do visitante atrás da Vercel
app.set("trust proxy", 1);

app.use(cors({ origin: process.env.FRONTEND_URL || true }));
app.use(express.json());

app.get("/saude", (_req, res) => {
  res.json({ ok: true });
});

app.use("/auth", authRouter);
app.use("/categorias", categoriasRouter);
app.use("/produtos", produtosRouter);
app.use("/artigos", artigosRouter);

app.get("/admin/ping", autenticar, (_req, res) => {
  res.json({ ok: true, usuarioId: res.locals.usuarioId });
});

app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err);
  res.status(500).json({ erro: "Erro interno do servidor" });
});

const porta = Number(process.env.PORT) || 3333;
app.listen(porta, () => {
  console.log(`Servidor rodando na porta ${porta}`);
});