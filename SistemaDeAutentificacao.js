export class SistemaDeAutentificacao{
    static login(funcionario, senha){
       return funcionario.senha == senha;
    }
}