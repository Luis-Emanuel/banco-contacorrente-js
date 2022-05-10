import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCcorrete.js";
//-------------CLIENTE 1------------------
const cliente1 = new Cliente();
cliente1.nome = "Emanuel";
cliente1.cpf = 11122233309;
const contaCorrenteEmanuel = new ContaCorrente(); 
contaCorrenteEmanuel.cliente = cliente1;
contaCorrenteEmanuel.agencia = 1001;
//-------------CLIENTE 2------------------
const cliente2 = new Cliente();
cliente2.nome = "Leandra";
cliente2.cpf = 44455566609;
const contaCorrenteLeandra = new ContaCorrente();
contaCorrenteLeandra.cliente = cliente2;
contaCorrenteLeandra.agencia = 1002;
//-------------OPERAÇÕES------------------
contaCorrenteEmanuel.despositar(500);
contaCorrenteEmanuel.transferir(100, contaCorrenteLeandra)


console.log(contaCorrenteEmanuel.agencia);
console.log(contaCorrenteEmanuel.cliente);
console.log(contaCorrenteEmanuel.saldo);
