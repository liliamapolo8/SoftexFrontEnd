//funcção que calcula o dobro
function dobro(x) {
  return x * 2;
}

//escopo principal
document.addEventListener("DOMContentLoaded", () => {
  const bnt = document.getElementById("btnCalcular");
  const input = document.getElementById("numero");
  const resultado = document.getElementById("resultado");

  bnt.addEventListener("click", () => {
    const valor = Number(input.value);
    if (isNaN(valor)) {
      resultado.textContent - "Digite um número Válido";
      return;
    }
    resultado.textContent = `O dobro de ${valor} é ${dobro(valor)}.`;
  });
});
