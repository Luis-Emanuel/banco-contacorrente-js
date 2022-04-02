export class Cliente{ 
//ACESSORES
    get cpf(){
       return this._cpf;
    }

//CONSTRUTOR
    constructor(nome, cpf){
        this.nome = nome;
        this._cpf = cpf
    }
};
