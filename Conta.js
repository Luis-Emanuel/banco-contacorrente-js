export class Conta{
//CONSTRUTOR
    constructor(cliente, agencia, saldoInicial){
        this._cliente = cliente;
        this._agencia = agencia;
        this._saldo = saldoInicial;
    }
    
//ACESSORES
    set cliente(novoValor){
        if(novoValor instanceof Cliente){
        this._cliente = novoValor; 
        } 
    }

    get cliente(){
        return this._cliente
    }

    get saldo(){
        return this._saldo;
    }

//METODOS
    sacar(valor){
        let taxa = 1.0
        return this._sacar(valor, taxa)
    };
    
    _sacar(valor, taxa){
        const valorSacado = taxa * valor;
        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado;
            return valorSacado;
        };
        return 0;
    }

    depositar(valor){
        if(valor <= 0) return;
        this._saldo += valor;  
    };

    transferir(conta, valor){
        const valorsacado = this.sacar(valor);
        conta.depositar(valorsacado)
    } 
}