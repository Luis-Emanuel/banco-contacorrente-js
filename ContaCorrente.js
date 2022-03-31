import { Cliente } from "./Cliente.js";

export class ContaCorrente{
// ATRIBUTOS    
    agencia;
    #cliente;
    #saldo = 0;

//ACESSORES
    set cliente(novoValor){
        if(novoValor instanceof Cliente){
           this.#cliente = novoValor; 
        } 
    }

    get cliente(){
        return this.#cliente
    }

    get saldo(){
        return this.#saldo;
    }

//CONSTRUTOR  
    constructor(agencia, cliente){
        this.agencia = agencia;
        this.cliente = cliente;
    }    

//METODOS
    sacar(valor){
        if(this.#saldo >= valor){
            this.#saldo -= valor;
            return valor;
        };
    };

    depositar(valor){
        if(valor <= 0) return;
        this.#saldo += valor;  
    };

    transferir(valor, conta){
        const valorsacado = this.sacar(valor);
        conta.depositar(valorsacado)
    }
};
