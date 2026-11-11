import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export function autenticar(req: Request, res: Response, next: NextFunction) {
  const cabecalho = req.headers.authorization;

  if (!cabecalho || !cabecalho.startsWith("Bearer ")) {
    res.status(401).json({ erro: "Token ausente" });
    return;
  }

  const segredo = process.env.JWT_SECRET;
  if (!segredo) {
    throw new Error("JWT_SECRET não configurado");
  }

  try {
    const payload = jwt.verify(cabecalho.slice(7), segredo) as jwt.JwtPayload;
    res.locals.usuarioId = Number(payload.sub);
    next();
  } catch {
    res.status(401).json({ erro: "Token inválido ou expirado" });
  }
}
