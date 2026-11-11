# EC02 — Gerenciamento de Funcionários

Sistema de gerenciamento de funcionários desenvolvido como atividade prática de HTML, JavaScript e orientação a objetos.

## Funcionalidades

- Cadastro de funcionários com nome, idade, cargo e salário.
- Listagem dinâmica em tabela HTML.
- Edição e exclusão de funcionários.
- Classe `Funcionario`, com construtor, getters, setters e método `toString()`.
- Mensagens de confirmação das operações.
- Relatórios atualizados automaticamente:
  - Funcionários com salário acima de R$ 5.000.
  - Média salarial dos funcionários.
  - Cargos únicos, sem repetição.
  - Nomes dos funcionários em maiúsculas.

## Tecnologias utilizadas

- HTML5
- JavaScript
- Git e GitHub
- Docker Compose
- Nginx

## Como executar

**Pré-requisito:** Docker instalado e em execução.

1. Clone o repositório ou baixe os arquivos do projeto.
2. Abra o terminal na pasta do projeto.
3. Execute:

   `docker compose up -d`

4. Acesse a aplicação no navegador:

   `http://localhost:8081`

Para encerrar o contêiner:

`docker compose down`

## Armazenamento dos dados

Os funcionários são armazenados em um array de objetos JavaScript, na memória do navegador.

O sistema não utiliza banco de dados. Os registros são perdidos ao atualizar ou fechar a página.

## Organização do projeto

- `index.html`: formulário, tabela e interface dos relatórios.
- `scripts.js`: classe `Funcionario`, operações CRUD, eventos e relatórios.
- `compose.yaml`: configuração do contêiner Docker com Nginx.

## Exercícios implementados

1. Cadastro e listagem de funcionários.
2. Edição e exclusão de funcionários.
3. Funções anônimas e arrow functions.
4. Relatórios utilizando `filter()`, `map()`, `reduce()` e `Set`.