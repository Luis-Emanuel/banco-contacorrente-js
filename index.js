import { Cliente } from "./Cliente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { SistemaDeAutentificacao } from "./SistemaDeAutentificacao.js";
//FUNCIONARIOS
const diretor = new Diretor("Lucas", 27398492722, 10000);
const gerente = new Gerente("Alfredo", 27398499922, 5000);

//CLIENTE
const cliente = new Cliente("Lais", 27398492111, 789)
//CADASTRO
gerente.cadastrarSenha(123)
diretor.cadastrarSenha(456)
//LOGIN
const gerenteEstaLogado = SistemaDeAutentificacao.login(gerente, 123);
const diretorEstaLogado = SistemaDeAutentificacao.login(diretor, 456);
const clienteEstaLogado = SistemaDeAutentificacao.login(cliente, 789);

console.log(gerenteEstaLogado);
console.log(diretorEstaLogado);
console.log(clienteEstaLogado);
