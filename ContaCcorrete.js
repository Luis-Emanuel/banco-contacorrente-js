import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{
    //ATRIBUTOS
    static numeroDeContas = 0;  
    //CONSTRUTOR
    constructor(agencia, cliente){
        super(agencia, cliente, 0)
        ContaCorrente.numeroDeContas += 1;
    };
    sacar(valor){
       let taxa = 1.1;
       return this._sacar(taxa, valor);
    };
};