function apresentar() {
  let nome = "Liliam";
  let hobby = "treinar boxe e ir à praia";

  const paragrafo = document.getElementById("mensagem");

  paragrafo.textContent =
    "Olá, eu sou " + nome + " e gosto muito de " + hobby + "!";
}
