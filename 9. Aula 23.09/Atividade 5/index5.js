// Classe Funcionario
class Funcionario {
  constructor(nome, salario) {
    this.nome = nome;
    this.salario = salario;
  }

  descricao() {
    return `Funcionário ${this.nome}, salário ${this.salario}`;
  }
}

// Classe Gerente (herda de Funcionario)
class Gerente extends Funcionario {
  constructor(nome, salario, departamento) {
    super(nome, salario); // chama o construtor da classe pai
    this.departamento = departamento;
  }

  // Sobrescrevendo o método descrição
  descricao() {
    return `Gerente ${this.nome}, salário ${this.salario}, departamento ${this.departamento}`;
  }
}

// Testando
const funcionario1 = new Funcionario("João", 2500);
console.log(funcionario1.descricao());
// saída: Funcionário João, salário 2500

const gerente1 = new Gerente("Maria", 5000, "Vendas");
console.log(gerente1.descricao());
// saída: Gerente Maria, salário 5000, departamento Vendas