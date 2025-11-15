/*
  Warnings:

  - You are about to drop the column `valor` on the `Produto` table. All the data in the column will be lost.
  - Added the required column `preco_venda` to the `Produto` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Produto" DROP COLUMN "valor",
ADD COLUMN     "preco_venda" DOUBLE PRECISION NOT NULL;
