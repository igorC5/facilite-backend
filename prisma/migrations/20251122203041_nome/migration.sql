/*
  Warnings:

  - Added the required column `cfop` to the `Produto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ncm` to the `Produto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `unidade` to the `Produto` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Produto" ADD COLUMN     "cfop" TEXT NOT NULL,
ADD COLUMN     "ncm" TEXT NOT NULL,
ADD COLUMN     "unidade" TEXT NOT NULL;
