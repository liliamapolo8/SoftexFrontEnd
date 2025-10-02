//Criando o vetor com 5 números
document.addEventListener("DOMContentLoaded", () => {
  let numeros = [10, 20, 30, 40, 50];

  // Variável para armazenar a soma
  let soma = 0;

  //Usando o for para percorrer o vetor
  for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
  }

  //Exibindo o resultado na tela
  document.getElementById("resultado").textContent =
    "A soma dos elementos é: " + soma;
});
