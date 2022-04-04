 //CLASSE ABSTRATA
export class Conta{
//CONSTRUTOR
    constructor(cliente, agencia, saldoInicial){
        if(this.constructor == Conta){
            throw new Error("Você não deveria instaciar um objeto do tipo conta diretamente, pois essa é uma classe abstrata")
        }

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
        throw new Error("O mètodo sacar da conta é abstrato")
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