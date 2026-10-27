import { Router } from "express";
import { prisma } from "../lib/prisma";
import { autenticar } from "../middlewares/autenticar";

export const paginasRouter = Router();

// Páginas que o administrador pode ocultar. A Home e a Política de
// privacidade ficam de fora de propósito.
const PAGINAS = [
  { chave: "bolos", nome: "Bolos", grupo: "Produtos" },
  { chave: "tortas", nome: "Tortas", grupo: "Produtos" },
  { chave: "biscoitos", nome: "Biscoitos", grupo: "Produtos" },
  { chave: "geleias", nome: "Geleias", grupo: "Produtos" },
  { chave: "salgados", nome: "Salgados", grupo: "Produtos" },
  { chave: "blog", nome: "Blog", grupo: "Blog" },
  { chave: "nossa-historia", nome: "Nossa história", grupo: "Blog" },
  { chave: "producao-artesanal", nome: "Produção artesanal", grupo: "Blog" },
  { chave: "artigos", nome: "Artigos", grupo: "Blog" },
  { chave: "contato", nome: "Contato", grupo: "Institucionais" },
  { chave: "trabalhe-conosco", nome: "Trabalhe conosco", grupo: "Institucionais" },
  { chave: "redes-sociais", nome: "Redes sociais", grupo: "Institucionais" },
];

// Lista pública: toda página é visível, a menos que tenha sido ocultada.
paginasRouter.get("/", async (_req, res) => {
  const salvas = await prisma.paginaSite.findMany();
  const estado = new Map(salvas.map((pagina) => [pagina.chave, pagina.visivel]));

  res.json(
    PAGINAS.map((pagina) => ({
      ...pagina,
      visivel: estado.get(pagina.chave) ?? true,
    }))
  );
});

paginasRouter.put("/:chave", autenticar, async (req, res) => {
  const pagina = PAGINAS.find((item) => item.chave === req.params.chave);
  if (!pagina) {
    res.status(404).json({ erro: "Página não encontrada" });
    return;
  }

  const visivel = req.body?.visivel;
  if (typeof visivel !== "boolean") {
    res.status(400).json({ erro: "Informe visivel como verdadeiro ou falso" });
    return;
  }

  await prisma.paginaSite.upsert({
    where: { chave: pagina.chave },
    update: { visivel },
    create: { chave: pagina.chave, visivel },
  });

  res.json({ ...pagina, visivel });
});