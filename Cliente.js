export class Cliente{
    //CONSTRUTOR
    constructor(nome, cpf){
        this.nome = nome;
        this._cpf = cpf;
    };
    //ACESSORES
    get cpf(){
        return this._cpf;
    };
};
