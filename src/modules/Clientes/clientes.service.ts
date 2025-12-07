import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/infra/prisma/prisma.service';
import { CriarClienteDTO } from './dto/clientes.dto';

@Injectable()
export class ClienteService {
  constructor(private prisma: PrismaService) {}
  
  async criarCliente(data: CriarClienteDTO){
    return this.prisma.produto.create({
      data,
    });
  }


}
