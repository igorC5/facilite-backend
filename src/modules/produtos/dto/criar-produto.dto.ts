import { IsString, IsNumber, Min, IsNotEmpty } from 'class-validator';

export class CriarProdutoDto {
  @IsString()
  @IsNotEmpty({ message: 'O nome é obrigatório' })
  nome: string;

  @IsNumber()
  @Min(0, { message: 'O valor deve ser maior ou igual a zero' })
  preco_venda: number;

  @IsString()
  @IsNotEmpty({ message: 'O NCM é obrigatório' })
  ncm: string;

  @IsString()
  @IsNotEmpty({ message: 'A unidade é obrigatória' })
  unidade: string;
}
