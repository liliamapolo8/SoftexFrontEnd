function saudacao(nome) {
  return `Olá, ${nome}! Bem-Vindo(a).`;
}

document.addEventListener("DOMContentLoaded", () => {
  const bnt = document.getElementById("btnSaudar");
  const out = document.getElementById("out");
  const input = document.getElementById("nome");

  bnt.addEventListener("click", () => {
    const nome = input.value.trim();
    const alvo = nome || "Visitante";
    out.textContent = saudacao(alvo);
  });
});
