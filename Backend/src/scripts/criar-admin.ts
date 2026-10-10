import "dotenv/config";
import readline from "node:readline/promises";
import bcrypt from "bcryptjs";
import { prisma } from "../lib/prisma";

async function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const nome = (await rl.question("Nome: ")).trim();
  const email = (await rl.question("E-mail: ")).trim().toLowerCase();
  const senha = await rl.question("Senha (mínimo 8 caracteres): ");
  rl.close();

  if (!nome || !email || senha.length < 8) {
    console.log("Dados inválidos. Nada foi alterado.");
    return;
  }

  const senhaHash = await bcrypt.hash(senha, 10);
  const existente = await prisma.usuario.findUnique({ where: { email } });

  if (existente) {
    await prisma.usuario.update({
      where: { email },
      data: { nome, senhaHash },
    });
    console.log("Usuário já existia: nome e senha foram atualizados.");
    return;
  }

  await prisma.usuario.create({ data: { nome, email, senhaHash } });
  console.log("Administrador criado com sucesso.");
}

main()
  .catch((erro) => console.error(erro))
  .finally(() => prisma.$disconnect());