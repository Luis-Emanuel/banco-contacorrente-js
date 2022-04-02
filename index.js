import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";

//CLIENTES
const cliente1 =  new Cliente("Ricardo", 11122233309);

//CONTAS_CORRENTE
const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001, 0);

//CONTA_POUPANÇA
const contaPoupancaRicardo = new ContaPoupanca(cliente1, 1001, 0);

//DEPOSITO/SAQUE/TRANSFERENCIA
contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.sacar(100);
contaPoupancaRicardo.depositar(50);
contaPoupancaRicardo.sacar(10);

//SAIDA
console.log(contaPoupancaRicardo);
console.log(contaCorrenteRicardo);
