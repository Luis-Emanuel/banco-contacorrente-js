import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutentificacao.js";

const diretor = new Diretor(12345678900, "Ronaldo", 10000)
const gerente = new Gerente(12345678901, "Adalton", 5000)
const cliente = new Cliente("Emanuel", 123456678902, "789")
diretor.cadastraSenha("123");
gerente.cadastraSenha("456");

const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "456");
const clienteEstaLogado = SistemaAutenticacao.login(cliente, "789")


console.log(diretorEstaLogado);  
console.log(gerenteEstaLogado);
console.log(clienteEstaLogado);
