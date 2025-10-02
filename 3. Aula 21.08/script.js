document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("numero");
    const btnGerar = document.getElementById("btnGerar");
    const btnLimpar = document.getElementById("btnLimpar");
    const btnLista = document.getElementById("resultado");

    function gerarTabuada () {
        const valor = Number (input.value);
        btnLista.innerHTML = '';

        if(Number.isNaN(valor)) {
            const li = document.createElement('li');
            btnLista.appendChild(li);
        }
        for (let i =1; i<=10; i++) {
            const li = document.createElementment('li');
            li.textContent = `${valor} x ${i} = ${valor * i}`;
            btnLista.appendChild(li);

        }
    }

    function limpar(){
        input.value='';
        btnLista.innerHTML='';
        input.focus();

    }
    btnGerar.addEventListener('click', gerarTabuada);
    btnLimpar.addEventListener('click',limpar);
    input.addEventListener('keydown', (e) => {
        if (e.key==='Enter') gerarTabuada();
    });
});