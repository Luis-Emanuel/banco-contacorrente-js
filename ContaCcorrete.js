import { Cliente } from "./Cliente.js";

export class ContaCorrente{
    //ATRIBUTOS STATICO
    static numeroDeContas = 0;
    //ATRIBUTOS PUBLICOS
    agencia;
    //TRIBUTOS PRIVADOS
    #cliente;
    #saldo = 0;
    //ACESSORES
    get saldo(){
        return this.#saldo;
    };
    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this.#cliente = novoValor;
        };
    };
    get cliente(){
        return this.#cliente;
    };
    //CONSTRUTOR
    constructor(cliente, agencia){
        this.cliente = cliente;
        this.agencia = agencia;
        ContaCorrente.numeroDeContas += 1;
    };
    //FUNÇÕES ou METODOS
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