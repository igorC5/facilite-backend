import { Body, Controller, Post, Get, Delete, Param, Put } from '@nestjs/common';
import { CriarClienteDTO } from './dto/clientes.dto';

@Controller('clientes')
export class ClienteController {
  constructor(private readonly produtoService: ProdutoService) {}

  @Post()
  async criarCliente(
    @Body() body: CriarClienteDTO,
  ) {
    return {
      data: await this.produtoService.criarProduto(body),
      message: 'sucesso',
    };
  }


}
