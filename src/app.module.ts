import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './infra/prisma/prisma.module';
import { ProdutoModule } from './modules/produtos/produtos.module';

@Module({
  imports: [PrismaModule, ProdutoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
