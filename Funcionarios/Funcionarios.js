export class Funcionarios {
    constructor(nome, cpf, salario){
        this._nome = nome;
        this._cpf = cpf;
        this._salario = salario;
        
        this._bonificacao = 1;
        this._senha;
    }
    get senha(){
        return this._senha;
    }
    cadastro(senha){
        this._senha = senha;
    }
}