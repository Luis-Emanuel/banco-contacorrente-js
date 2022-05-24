import { Conta } from "./Conta.js";

export class ContaPoupaca extends Conta{
    //CONSTRUTOR
    constructor(agencia, cliente, saldoInicial){
        super(agencia, cliente, saldoInicial)
    }
    //FUNÇÕES
    sacar(valor){
       const taxa = 1.02;
       return this._sacar(taxa, valor)
    }
}