class ContaBancaria {
  #saldo = 0; //Atributo privado

  depositar(valor) {
    if (valor > 0) {
      this.#saldo += valor;
      console.log(`Depósito de R$${valor.toFixed(2)} realizado com sucesso.`);
    } else {
      console.log("Valor de depósito inválido.");
    }
  }
  sacar(valor) {  
    if (valor <= 0) {
      console.log("Valor de saque inválido.");
    } else if (valor > this.#saldo) {
      console.log("Saldo insuficiente para realizar o saque.");
    } else {
      this.#saldo -= valor;
      console.log(`Saque de R$${valor.toFixed(2)} realizado com sucesso.`);
    }
  }
  verSaldo() {
    console.log(`Saldo atual: R$${this.#saldo.toFixed(2)}`);
    return this.#saldo;
  }
}

const conta = new ContaBancaria();

conta.depositar(100); // Depósito de R$100.00 realizado com sucesso.
conta.sacar(30); // Saque de R$30.00 realizado com sucesso.
conta.verSaldo(); // Deve exibir: Saldo atual: R$70.00
