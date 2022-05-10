export class ContaCorrente{
    //ATRIBUTOS PUBLICOS
    agencia;
    cliente;
    
    //ATRIBUTOS PRIVADOS
    #saldo = 0;

    //FUNÇÕES
    sacar(valor){
        if(valor <= this.#saldo){
            this.#saldo = this.#saldo - valor;
            return valor;
        };
    };
    despositar(valor){
        if(valor < 0 ) return;
        this.#saldo = this.#saldo + valor
    };
    transferir(valor, conta){
        conta.despositar(this.sacar(valor));
    };
};