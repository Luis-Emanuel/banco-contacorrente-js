export class Cliente{
// ATRIBUTOS 
    nome;
    #cpf;  

//ACESSORES
    get cpf(){
       return this.#cpf;
    }

//CONSTRUTOR
    constructor(nome, cpf){
        this.nome = nome;
        this.#cpf = cpf
    }
};
