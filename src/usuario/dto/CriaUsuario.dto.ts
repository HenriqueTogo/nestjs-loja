import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";
import { EmailEhUnico } from "../validacao/email-eh-unico.validator";

export class CriaUsuarioDTO {

    @IsNotEmpty({ message: 'O nome não pode ser vazio' })
    nome: string;

    @IsEmail(undefined, { message: 'O e-mail inválido' })
    @EmailEhUnico({ message: 'Já existe um usuário com esse e-mail' })
    email: string;

    @MinLength(6, { message: 'A senha deve ter no mínimo 6 caracteres' })
    senha: string;
}