// src/produto/dto/criar-produto.dto.ts
import { IsString, IsNumber, Min } from 'class-validator';

export class CriarProdutoDto {
  @IsString()
  nome: string;

  @IsNumber()
  @Min(0)
  valor: number;
}
