import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

//CLIENTES
//--cliente 1--
const cliente1 =  new Cliente("Ricardo", 11122233309);
//--cliente 2--
const cliente2 =  new Cliente("Alicia", 88822233309);
const cliente3 = 2;

//CONTAS
//--conta 1--
const conta1 = new ContaCorrente(1001, cliente1);
//--conta 2--
const conta2 = new ContaCorrente(102, cliente2);

//DEPOSITO/SAQUE/TRANSFERENCIA
//--conta 1--
conta1.depositar(900);
conta1.sacar(300);
//--conta 2--
conta2.depositar(1200);
conta2.sacar(200);
conta2.transferir(100, conta1)

//SAIDA
console.log(conta1.cliente);
console.log(conta1);
console.log(conta2.cliente);
console.log(conta2);
