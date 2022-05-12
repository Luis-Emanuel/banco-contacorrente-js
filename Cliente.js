export class Cliente{
    //TRIBUTOS
    #cpf;
    //CONSTRUTOR
    constructor(nome, cpf){
        this.nome = nome;
        this.#cpf = cpf;
    };
    //ACESSORES
    get cpf(){
        return this.#cpf;
    };
};
