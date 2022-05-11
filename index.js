import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCcorrete.js";
//-------------CLIENTE 1------------------
const cliente1 = new Cliente("Emanuel",11122233309);
const contaCorrenteEmanuel = new ContaCorrente(cliente1,1001); 
//-------------CLIENTE 2------------------
const cliente2 = new Cliente("Leandra", 44455566609);
const contaCorrenteLeandra = new ContaCorrente(cliente2,1002);
//-------------OPERAÇÕES------------------
contaCorrenteEmanuel.despositar(500);
contaCorrenteEmanuel.transferir(100, contaCorrenteLeandra)
//-------------SAIDA------------------

console.log(contaCorrenteEmanuel.cliente);
console.log(contaCorrenteEmanuel);
console.log(contaCorrenteLeandra.cliente);
console.log(contaCorrenteLeandra);
console.log(ContaCorrente.numeroDeContas);