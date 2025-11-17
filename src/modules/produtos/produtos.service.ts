import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/infra/prisma/prisma.service';

@Injectable()
export class ProdutoService {
  constructor(private prisma: PrismaService) {}
  
  async listarProdutos() {
    return this.prisma.produto.findMany();
  }

  async buscarProduto(id: number) {
    return this.prisma.produto.findUnique({
      where: { id },
    });
  }

  async criarProduto(data: { nome: string; preco_venda: number }){
    return this.prisma.produto.create({
      data,
    });
  }

  async atualizarProduto(id: number, data: { nome: string; preco_venda: number }) {
    return this.prisma.produto.update({
      where: { id },
      data,
    });
  }

  async excluirProduto(produtoId: number) {
    return this.prisma.produto.delete({
      where: {
        id: produtoId,
      }
    });
  }
}
