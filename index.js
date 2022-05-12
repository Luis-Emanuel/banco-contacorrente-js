import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCcorrete.js";
import { ContaPoupaca } from "./ContaPoupanca.js";
//-------------CLIENTE 1------------------
const cliente1 = new Cliente("Emanuel",11122233309);
const contaCorrenteEmanuel = new ContaCorrente(cliente1,1001); 
const ContaPoupacaEmanuel = new ContaPoupaca(cliente1, 200, 1001)
//-------------OPERAÇÕES------------------
contaCorrenteEmanuel.despositar(500);
//-------------SAIDA------------------


console.log(ContaPoupacaEmanuel);


