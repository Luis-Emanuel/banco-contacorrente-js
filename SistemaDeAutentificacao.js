export class SistemaDeAutentificacao{
    static login(autenticavel, senha){
       return autenticavel.autenticar(senha);
    }
}