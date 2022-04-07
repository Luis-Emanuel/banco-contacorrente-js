export class SistemaDeAutentificacao{
    static login(autenticavel, senha){
        if(SistemaDeAutentificacao.ehAutenticavel(autenticavel)){
            return autenticavel.autenticar(senha);
        }
        return false;
    }
    static ehAutenticavel(autenticavel){
        return "autenticar" in autenticavel && autenticavel.autenticar instanceof Function;
        }
}