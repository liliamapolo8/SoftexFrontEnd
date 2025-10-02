function gerar() {
  let numeros = [];
  let pares = 0;
  let impares = 0;
  //Criar vetor com 10 números aleatórios
  for (let i = 0; i < 10; i++) {
    let num = Math.floor(Math.random() * 100) + 1; // de 1 a 100
    numeros.push(num);

    if (num % 2 === 0) {
      pares++;
    } else {
      impares++;
    }
  }
  //Mostrar os resultados
  document.getElementById("vetor").textContent = "Vetor:" + numeros.join(", ");
  document.getElementById("resultado").textContent =
    "Pares: " + pares + " | Ímpares: " + impares;
}
