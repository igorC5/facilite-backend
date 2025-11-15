-- CreateTable
CREATE TABLE "Produto" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "valor" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Produto_pkey" PRIMARY KEY ("id")
);
