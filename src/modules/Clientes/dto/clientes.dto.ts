import { IsString, IsNumber, Min, IsNotEmpty, isString } from 'class-validator';

export class CriarClienteDTO {
  @IsString()
  @IsNotEmpty({ message: 'O nome é obrigatório' })
  nome: string;

  @IsString()
  @IsNotEmpty({ message: 'tipo de pessoa não informado. Física/Júridica' })
  tipo_documento: string;
}
