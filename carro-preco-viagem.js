class Carro {
    marca;
    modelo;
    ano;
    cor;
    kmPorLitro;

    constructor(marca, modelo, ano, cor, kmPorLitro) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
        this.kmPorLitro = kmPorLitro;
    };

    gastoViagem(distancia, preco) {
        return ((distancia / this.kmPorLitro) * preco).toFixed(2);
    };
}

const carroDeGabriel = new Carro('Fiat', 'Idea', 2015, 'branco', 7);
console.log(carroDeGabriel);
console.log(carroDeGabriel.gastoViagem(100, 4.90));

const carroDeRafael = new Carro('Volkswagen', 'Voyage', 2018, 'chumbo', 11);
console.log(carroDeRafael);
console.log(carroDeRafael.gastoViagem(100, 4.90));
