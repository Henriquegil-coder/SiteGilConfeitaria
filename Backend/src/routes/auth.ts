import { Router } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import rateLimit from "express-rate-limit";
import { prisma } from "../lib/prisma";

export const authRouter = Router();

const limitarLogin = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: { erro: "Muitas tentativas. Tente novamente em alguns minutos." },
});

authRouter.post("/login", limitarLogin, async (req, res) => {
  const { email, senha } = req.body ?? {};

  if (typeof email !== "string" || typeof senha !== "string") {
    res.status(400).json({ erro: "Informe e-mail e senha" });
    return;
  }

  const usuario = await prisma.usuario.findUnique({
    where: { email: email.trim().toLowerCase() },
  });
  const senhaCorreta = usuario
    ? await bcrypt.compare(senha, usuario.senhaHash)
    : false;

  if (!usuario || !senhaCorreta) {
    res.status(401).json({ erro: "E-mail ou senha inválidos" });
    return;
  }

  const segredo = process.env.JWT_SECRET;
  if (!segredo) {
    throw new Error("JWT_SECRET não configurado");
  }

  const token = jwt.sign({ sub: String(usuario.id) }, segredo, {
    expiresIn: "8h",
  });

  res.json({
    token,
    usuario: { id: usuario.id, nome: usuario.nome, email: usuario.email },
  });
});