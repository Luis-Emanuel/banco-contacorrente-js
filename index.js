import { Cliente } from "./Cliente.js";
import { Conta } from "./Conta.js";
import { ContaCorrente } from "./ContaCcorrete.js";
import { ContaPoupaca } from "./ContaPoupanca.js";
//-------------CLIENTE 1------------------
const cliente1 = new Cliente("Emanuel",11122233309);
const contaCorrenteEmanuel = new ContaCorrente(1001, cliente1); 
const ContaPoupacaEmanuel = new ContaPoupaca(1001, cliente1, 200)

contaCorrenteEmanuel.despositar(500);
contaCorrenteEmanuel.sacar(50)
//-------------SAIDA------------------

 
console.log(ContaPoupacaEmanuel);
console.log(contaCorrenteEmanuel);


