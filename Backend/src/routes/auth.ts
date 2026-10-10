import { Router } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { prisma } from "../lib/prisma";

export const authRouter = Router();

authRouter.post("/login", async (req, res) => {
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