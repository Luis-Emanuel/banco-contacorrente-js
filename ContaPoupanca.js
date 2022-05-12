export class ContaPoupaca{
    #cliente;
    #saldoInicial;
    #agencia;
    constructor(cliente, saldoInicial, agencia){
        this.#cliente = cliente;
        this.#saldoInicial = saldoInicial;
        this.#agencia = agencia;
    }
}