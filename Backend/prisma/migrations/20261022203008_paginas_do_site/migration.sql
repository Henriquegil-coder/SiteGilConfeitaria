-- CreateTable
CREATE TABLE "PaginaSite" (
    "id" SERIAL NOT NULL,
    "chave" TEXT NOT NULL,
    "visivel" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "PaginaSite_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PaginaSite_chave_key" ON "PaginaSite"("chave");
