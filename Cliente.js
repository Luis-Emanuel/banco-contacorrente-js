export class Cliente{
    //ATRIBUTOS PUBLICOS
    nome;
    //TRIBUTOS PRIVADOS
    #cpf;
    //ACESSORES
    get cpf(){
        return this.#cpf;
    };
    //CONSTRUTOR
    constructor(nome, cpf){
        this.nome = nome;
        this.#cpf = cpf;
    };
};
