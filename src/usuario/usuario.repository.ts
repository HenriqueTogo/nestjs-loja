import { Injectable } from "@nestjs/common";

@Injectable()
export class UsuarioRepository {
    
    private usuarios : string[] = [];
    
    async salvar(usuario) {
        this.usuarios.push(usuario);        
    }

    async listar() {
       return this.usuarios;
    }

}