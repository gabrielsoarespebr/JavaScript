class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calculaIMC() {
        return this.peso / (this.altura * this.altura);
    }
}

const gabriel = new Pessoa('gabriel', 85, 1.75);
console.log(gabriel);
console.log('IMC: ', gabriel.calculaIMC().toFixed(2));