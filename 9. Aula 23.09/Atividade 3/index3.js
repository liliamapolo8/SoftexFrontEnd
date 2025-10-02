class Retangulo {
  constructor(largura, altura) {
    this.largura = largura;
    this.altura = altura;
  }

  area() {
    return `Área do retângulo: ${this.largura * this.altura}.`;
  }
  perimetro() {
    return `Perímetro do retângulo: ${2 * (this.largura + this.altura)}.`;
  }
}
const ret = new Retangulo(5, 3);
//Criando área
console.log(ret.area());
//Criando perímetro
console.log(ret.perimetro());
