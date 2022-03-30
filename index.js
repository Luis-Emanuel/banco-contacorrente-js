import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 =  new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;

const cliente2 =  new Cliente();
cliente2.nome = "Alicia";
cliente2.cpf = 88822233309;



const conta1 = new ContaCorrente();
conta1.agencia = 1001;
conta1.cliente = cliente1;

conta1.depositar(900);
conta1.sacar(300);



const conta2 = new ContaCorrente
conta2.agencia = 102;
conta2.cliente = cliente2;

conta2.depositar(1200);
conta2.sacar(200);
conta2.transferir(100, conta1)


console.log(conta1);
console.log(conta2);
