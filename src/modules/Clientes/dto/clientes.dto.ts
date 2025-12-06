import { IsString, IsNumber, Min, IsNotEmpty, isString } from 'class-validator';

export class ClienteDTO {
  @IsString()
  @IsNotEmpty({ message: 'O nome é obrigatório' })
  nome: string;

  @IsString()
  @IsNotEmpty({ message: 'tipo de pessoa não informado. Física/Júridica' })
  tipo_pessoa: string;

  @IsString()
  cpf: string;

  @IsString()
  cnpj: string;

  @IsString()
  telefone: string;

  @IsString()
  email: string;
}
