const form = document.getElementById("formAluno");
const tabela = document.getElementById("tabelaAlunos");

// Função para calcular média
function calcularMedia(n1, n2, n3) {
  return (n1 + n2 + n3) / 3;
}

// Função para determinar situação
function verificarSituacao(media) {
  if (media >= 7) return { texto: "Aprovado", classe: "aprovado" };
  if (media >= 5 && media <= 7)
    return { texto: "Recuperação", classe: "recuperacao" };
  return { texto: "Reprovado", classe: "reprovado" };
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const n1 = parseFloat(document.getElementById("nota1").value);
  const n2 = parseFloat(document.getElementById("nota2").value);
  const n3 = parseFloat(document.getElementById("nota3").value);

  const media = calcularMedia(n1, n2, n3).toFixed(2);
  const situacao = verificarSituacao(media);

  const novaLinha = document.createElement("tr");
  novaLinha.innerHTML = `
<td>${nome}</td>
<td>${n1}</td>
<td>${n2}</td>
<td>${n3}</td>
<td>${media}</td>
<td class="${situacao.classe}">${situacao.texto}</td>
`;

  tabela.appendChild(novaLinha);

  form.reset();
});
