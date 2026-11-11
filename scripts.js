let nome = document.getElementById("nome");
let idade = document.getElementById("idade");
let cargo = document.getElementById("cargo");
let salario = document.getElementById("salario");
let tabela = document.getElementById("tabela");
let botaoCadastro = document.getElementById("btnCadastrar");
let funcionarioEmEdicao = null;
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

const excluirFuncionario = (funcionario) => {
    let indice = funcionarios.findIndex((item) => item === funcionario);

    if (indice !== -1) {
        if (funcionarioEmEdicao === funcionario) {
            funcionarioEmEdicao = null;
            botaoCadastro.value = "Cadastrar";
            document.querySelector("form").reset();
        }
        funcionarios.splice(indice, 1);
        atualizarTabela();

        alert(`Funcionário ${funcionario.nome} excluído com sucesso!`);
    }
};

function editarFuncionario(funcionario) {
    nome.value = funcionario.nome;
    idade.value = funcionario.idade;
    cargo.value = funcionario.cargo;
    salario.value = funcionario.salario;

    funcionarioEmEdicao = funcionario;
    botaoCadastro.value = "Salvar";
}

const salvarEdicao = () => {
    if (funcionarioEmEdicao === null) {
        return;
    }

    funcionarioEmEdicao.nome = nome.value;
    funcionarioEmEdicao.idade = Number(idade.value);
    funcionarioEmEdicao.cargo = cargo.value;
    funcionarioEmEdicao.salario = Number(salario.value);

    alert(`Funcionário ${funcionarioEmEdicao.nome} atualizado com sucesso!`);

    funcionarioEmEdicao = null;
    botaoCadastro.value = "Cadastrar";
};

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

        let celulaAcoes = linha.insertCell();

        // Botão Editar
        let botaoEditar = document.createElement("button");
        botaoEditar.textContent = "Editar";
        botaoEditar.type = "button";

        // Botão Excluir
        let botaoExcluir = document.createElement("button");
        botaoExcluir.textContent = "Excluir";
        botaoExcluir.type = "button";

        celulaAcoes.appendChild(botaoEditar);
        celulaAcoes.appendChild(botaoExcluir);

        //Ação Botão Excluir
        botaoExcluir.addEventListener("click", function() {
            excluirFuncionario(funcionario);
        });

        //Ação Botão Editar
        botaoEditar.addEventListener("click", () => {
            editarFuncionario(funcionario);
        });
    });
    gerarRelatorios();
}

function gerarRelatorios() {
    // Funcionários com salário acima de R$ 5.000
    let salariosAltos = funcionarios.filter(
        (funcionario) => funcionario.salario > 5000
    );

    let nomesFuncionarios = salariosAltos.map(
        (funcionario) => funcionario.nome
    );

    let resultado = document.getElementById("relatorioSalariosAltos");

    resultado.textContent = nomesFuncionarios.length > 0
        ? nomesFuncionarios.join(", ")
        : "Nenhum funcionário com salário acima de R$ 5.000.";

    // Média salarial
    let somaSalarios = funcionarios.reduce(
        (soma, funcionario) => soma + funcionario.salario, 0
    );

    let mediaSalarial = funcionarios.length > 0
        ? somaSalarios / funcionarios.length
        : 0;

    let resultadoMedia = document.getElementById("relatorioMediaSalarial");

    resultadoMedia.textContent = mediaSalarial.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    }); 

    // Cargos únicos
    let cargos = funcionarios.map((funcionario) => funcionario.cargo);

    let cargosUnicos = [...new Set(cargos)];

    let resultadoCargos = document.getElementById("relatorioCargosUnicos");

    resultadoCargos.textContent = cargosUnicos.length > 0
        ? cargosUnicos.join(", ")
        : "Nenhum cargo cadastrado.";

    // Nomes dos funcionários em maiúsculas
    let nomesMaiusculos = funcionarios.map(
        (funcionario) => funcionario.nome.toUpperCase()
    );

    let resultadoNomes = document.getElementById("relatorioNomesMaiusculos");

    resultadoNomes.textContent = nomesMaiusculos.length > 0
        ? nomesMaiusculos.join(", ")
        : "Nenhum funcionário cadastrado.";    
    
}

document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();

    if (funcionarioEmEdicao === null) {
        cadastrarFuncionario();
    } else {
        salvarEdicao();
    }

    atualizarTabela();

    document.querySelector("form").reset();
});

gerarRelatorios();