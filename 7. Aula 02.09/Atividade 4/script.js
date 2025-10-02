// Mattriz 3x3 com notas (3 alunos x 3 provas)
let notas = [
  [8, 7, 9], //Aluno 1
  [6, 9, 7], //Aluno 2
  [10, 8, 9], //Aluno 3
];

//Pegando a tabela do HTML
let tabela = document.getElementById("tabela");

//Criando cabeçalho
let cabecalho = tabela.insertRow();
cabecalho.insertCell().textContent = "Aluno";
cabecalho.insertCell().textContent = "Prova 1";
cabecalho.insertCell().textContent = "Prova 2";
cabecalho.insertCell().textContent = "Prova 3";
cabecalho.insertCell().textContent = "Média";

//Preenchendo a tabela e calculando a média
