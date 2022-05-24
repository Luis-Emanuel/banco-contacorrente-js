import { Cliente } from "../Cliente.js";
//Classe abstrata
export class Conta{
    constructor(agencia, cliente, saldoInicial){
        if(this.constructor == Conta){
           throw new Error("Você não deveria instaciar um objeto do tipo CONTA diretamente pois essa classe e abstrata")
        }
        this._cliente = cliente;
        this._saldo = saldoInicial;
        this._agencia = agencia;
    }
    //FUNÇÕES
    //Método abstrato
    sacar(valor){
        throw new Error("O método Sacar da Conta e abstrato")
        
    };
    _sacar(taxa, valor){
        const valorSacado = taxa * valor
        if(valorSacado <= this._saldo){
            this._saldo = this._saldo - valorSacado;
            return valor;
        };
        return 0;
    }
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