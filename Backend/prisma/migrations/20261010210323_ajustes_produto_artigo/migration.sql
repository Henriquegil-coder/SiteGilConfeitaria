-- AlterTable
ALTER TABLE "Artigo" ADD COLUMN     "categoria" TEXT NOT NULL DEFAULT 'Artigos';

-- AlterTable
ALTER TABLE "Produto" ALTER COLUMN "imagem" DROP NOT NULL;
