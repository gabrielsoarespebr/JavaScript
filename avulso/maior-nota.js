class Aluno {
    nome;
    notas;

    constructor(nome, notas) {
        this.nome = nome;
        this.notas = notas;
    }

    maiorNota() {
        const maiorNota = Math.max.apply(null, this.notas);
        return maiorNota;
    }
}

const gabriel = new Aluno("gabriel", [7.4, 8.2, 6.7, 6]);
console.log(gabriel);
console.log(gabriel.maiorNota());