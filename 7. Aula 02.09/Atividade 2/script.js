function calcular() {
  //Criando vetor com os números digitados
  let numeros = [
    Number(document.getElementById("num1").value),
    Number(document.getElementById("num2").value),
    Number(document.getElementById("num3").value),
    Number(document.getElementById("num4").value),
    Number(document.getElementById("num5").value),
  ];
  // Encontrando maior e menor
  let maior = numeros[0];
  let menor = numeros[0];

  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > maior) {
      maior = numeros[i];
    }
    if (numeros[i] < menor) {
      menor = numeros[i];
    }
  }
  // Mostrando o resultado
  document.getElementById("resultado").textContent =
    "Maior número: " + maior + " | Menor número: " + menor;
}
