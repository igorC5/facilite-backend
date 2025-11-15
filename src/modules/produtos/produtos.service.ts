// src/produto/produto.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/infra/prisma/prisma.service';

@Injectable()
export class ProdutoService {
  constructor(private prisma: PrismaService) {}

  async criarProduto(data: { nome: string; preco_venda: number }){
    return this.prisma.produto.create({
      data,
    });
  }

  async listarProdutos() {
    return this.prisma.produto.findMany();
  }
}
