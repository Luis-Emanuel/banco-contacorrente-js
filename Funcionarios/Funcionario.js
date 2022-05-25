export class Funcionario {
    constructor(cpf, nome, salario){
        this._cpf = cpf;
        this._nome = nome;
        this._salario = salario;

        this._bonificacao = 1;
        this._senha
    };
    autenticar(senha){
        return this._senha == senha;
    }
    cadastraSenha(senha){
        this._senha = senha
    }
};