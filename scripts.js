let nome = document.getElementById("nome");
let idade = document.getElementById("idade");
let cargo = document.getElementById("cargo");
let salario = document.getElementById("salario");
let tabela = document.getElementById("tabela");
let funcionarios = [];

class Funcionario{
    constructor(nome,idade,cargo,salario){
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
        this.salario = salario;
    }

    get nome() {
    return this._nome;
    }

    set nome(novoNome) {
        this._nome = novoNome;
    }

    get idade() {
    return this._idade;
    }

    set idade(novaIdade) {
        this._idade = novaIdade;
    }

    get cargo() {
        return this._cargo;
    }

    set cargo(novoCargo) {
        this._cargo = novoCargo;
    }

    get salario() {
        return this._salario;
    }

    set salario(novoSalario) {
        this._salario = novoSalario;
}


    toString() {
        return `Nome: ${this.nome}, Idade: ${this.idade}, Cargo: ${this.cargo}, Salário: R$ ${this.salario.toFixed(2)}`;
    }
}

function cadastrarFuncionario() {
    let funcionario = new Funcionario(
        nome.value,
        Number(idade.value),
        cargo.value,
        Number(salario.value)
    );

    funcionarios.push(funcionario);

    alert(`Funcionário ${funcionario.nome} cadastrado com sucesso!`);
}

function atualizarTabela() {
    tabela.innerHTML = "";

    funcionarios.forEach((funcionario) => {
        let linha = tabela.insertRow();

        linha.insertCell().textContent = funcionario.nome;
        linha.insertCell().textContent = funcionario.idade;
        linha.insertCell().textContent = funcionario.cargo;
        linha.insertCell().textContent =
            funcionario.salario.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL"
            });
    });

}

document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();

    cadastrarFuncionario();
    atualizarTabela();

    document.querySelector("form").reset();
});