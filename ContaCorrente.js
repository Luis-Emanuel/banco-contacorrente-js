import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{
// ATRIBUTOS   
    static numeroDeContas = 0;

//CONSTRUTOR  
    constructor(cliente, agencia, saldoInicial){
        super(cliente, agencia, saldoInicial);
        ContaCorrente.numeroDeContas += 1;
    };    
    sacar(valor){
        let taxa = 1.1;
        const valorSacado = taxa * valor;
            return this._sacar( valor, taxa);
    }

};
