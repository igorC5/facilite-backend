// src/produto/produto.controller.ts
import { Body, Controller, Post, Get } from '@nestjs/common';
import { ProdutoService } from './produtos.service';

@Controller('produtos')
export class ProdutoController {
  constructor(private readonly produtoService: ProdutoService) {}

  @Post()
  async criarProduto(
    @Body() body: { nome: string; preco_venda: number },
  ) {
    console.log(body);
    return this.produtoService.criarProduto(body);
  }

  @Get()
  async listarProdutos() {
    return this.produtoService.listarProdutos();
  }
}
