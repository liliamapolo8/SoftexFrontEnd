class Carro {
  constructor(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }

  apresentar() {
    return `Carro da ${this.marca} , modelo ${this.modelo} e fabricado em ${this.ano}.`;
  }
}

//Criando carro 1
const carro1 = new Carro("Hyundai", "HB20", 2025);
console.log(carro1.apresentar());

//Criando carro 2
const carro2 = new Carro("Toyota", "SW4", 2012);
console.log(carro2.apresentar());
