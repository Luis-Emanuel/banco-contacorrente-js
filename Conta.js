import { Cliente } from "./Cliente.js";

export class Conta{
    constructor(agencia, cliente, saldoInicial){
        this._cliente = cliente;
        this._saldo = saldoInicial;
        this._agencia = agencia;
    }
    //FUNÇÕES
    sacar(valor){
        if(valor <= this._saldo){
            this._saldo = this._saldo - valor;
            return valor;
        };
    };
    despositar(valor){
        if(valor < 0 ) return;
        this._saldo = this._saldo + valor;
    };
    transferir(valor, conta){
        conta.despositar(this.sacar(valor));
    };
    //ACESSORES
    get saldo(){
        return this._saldo;
    };
    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        };
    };
    get cliente(){
        return this._cliente;
    };
}