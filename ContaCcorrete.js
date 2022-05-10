import { Cliente } from "./Cliente.js";

export class ContaCorrente{
    //ATRIBUTOS PUBLICOS
    agencia;
    #cliente;
    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this.#cliente = novoValor;
        };
    };
    get cliente(){
        return this.#cliente;
    };
    //TRIBUTOS PRIVADOS
    #saldo = 0;
    get saldo(){
        return this.#saldo;
    };
    //FUNÇÕES
    sacar(valor){
        if(valor <= this.#saldo){
            this.#saldo = this.#saldo - valor;
            return valor;
        };
    };
    despositar(valor){
        if(valor < 0 ) return;
        this.#saldo = this.#saldo + valor;
    };
    transferir(valor, conta){
        conta.despositar(this.sacar(valor));
    };
};