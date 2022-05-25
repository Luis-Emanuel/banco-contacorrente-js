export class Cliente{
    //CONSTRUTOR
    constructor(nome, cpf, senha){
        this.nome = nome;
        this._cpf = cpf;
        this._senha = senha
    };
    autenticar(){
        return true
    }
    //ACESSORES
    get cpf(){
        return this._cpf;
    };
};
