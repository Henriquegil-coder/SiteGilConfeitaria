import "dotenv/config";
import { prisma } from "../lib/prisma";

const categorias = [
  { nome: "Bolos", slug: "bolos" },
  { nome: "Tortas", slug: "tortas" },
  { nome: "Biscoitos", slug: "biscoitos" },
  { nome: "Geleias", slug: "geleias" },
  { nome: "Salgados", slug: "salgados" },
];

async function main() {
  const resultado = await prisma.categoria.createMany({
    data: categorias,
    skipDuplicates: true,
  });
  console.log(`Categorias criadas agora: ${resultado.count}`);
}

main()
  .catch((erro) => console.error(erro))
  .finally(() => prisma.$disconnect());