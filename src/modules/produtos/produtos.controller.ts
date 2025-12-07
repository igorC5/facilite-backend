import { Body, Controller, Post, Get, Delete, Param, Put } from '@nestjs/common';
import { ProdutoService } from './produtos.service';
import { CriarProdutoDto } from './dto/criar-produto.dto';

@Controller('produtos')
export class ProdutoController {
  constructor(private readonly produtoService: ProdutoService) {}

  @Get()
  async listarProdutos() {
    return this.produtoService.listarProdutos();
  }

  @Get(':id')
  async buscarProduto(@Param('id') id: string) {
    return this.produtoService.buscarProduto(Number(id));
  }

  @Post()
  async criarProduto(
    @Body() body: CriarProdutoDto,
  ) {
    return {
      data: await this.produtoService.criarProduto(body),
      message: 'sucesso',
    };
  }

  @Put(':id')
  async atualizarProduto(
    @Param('id') id: number,
    @Body() body: { nome: string; preco_venda: number }
  ) {

    return {
      data: await this.produtoService.atualizarProduto(Number(id), body),
      message: 'sucesso',
    }
  }

  @Delete(':id')
  async excluirProduto(@Param('id') id: string) {
    return this.produtoService.excluirProduto(Number(id));
  }

}
