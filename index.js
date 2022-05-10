import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCcorrete.js";
//-------------CLIENTE 1------------------
const contaCorrenteEmanuel = new ContaCorrente(); 
contaCorrenteEmanuel.cliente = new Cliente();
contaCorrenteEmanuel.cliente.nome = "Emanuel";
contaCorrenteEmanuel.cliente.cpf = 11122233309;
contaCorrenteEmanuel.agencia = 1001;
//-------------CLIENTE 2------------------
const contaCorrenteLeandra = new ContaCorrente();
contaCorrenteLeandra.cliente = new Cliente();
contaCorrenteLeandra.cliente.nome = "Leandra";
contaCorrenteLeandra.cliente.cpf = 44455566609;
contaCorrenteLeandra.agencia = 1002;
//-------------OPERAÇÕES------------------
contaCorrenteEmanuel.despositar(500);
contaCorrenteEmanuel.transferir(100, contaCorrenteLeandra)


console.log(contaCorrenteEmanuel);
console.log(contaCorrenteLeandra);