import { Conta } from "./Conta.js"

export class ContaSalario extends Conta{
    //CONSTRUTOR
    constructor(cliente){
        super(100, cliente, 0)
    }
    //FUNÇÕES
    sacar(valor){
        const taxa = 1.01;
        return this._sacar(taxa, valor)
    }
}