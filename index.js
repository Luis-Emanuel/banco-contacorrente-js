import { Cliente } from "./Cliente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { Funcionarios } from "./Funcionarios/Funcionarios.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { SistemaDeAutentificacao } from "./SistemaDeAutentificacao.js";
//FUNCIONARIOS
const diretor = new Diretor("Lucas", 27398492722, 10000);
const gerente = new Gerente("Alfredo", 27398499922, 5000);
//CADASTRO
gerente.cadastro(123)
//LOGIN
const estaLogado = SistemaDeAutentificacao.login(gerente, 123);

console.log(estaLogado);