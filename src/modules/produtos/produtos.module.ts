// src/produto/produto.module.ts
import { Module } from '@nestjs/common';
import { ProdutoController } from './produtos.controller';
import { PrismaService } from 'src/infra/prisma/prisma.service';
import { ProdutoService } from './produtos.service';

@Module({
  controllers: [ProdutoController],
  providers: [ProdutoService, PrismaService],
})
export class ProdutoModule {}
