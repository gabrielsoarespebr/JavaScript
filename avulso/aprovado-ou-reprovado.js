class Aluno {
    nome;
    notas;

    constructor(nome, notas) {
        this.nome = nome;
        this.notas = notas;
    }

    situacaoEscolar() {
        let soma = 0;
        for (let i = 0; i < this.notas.length; i++) {
            soma += this.notas[i];
        };
        const media = soma / this.notas.length;
        const situacao = (media >= 7) ? "aprovado(a)" : "reprovado(a)";
        return `${this.nome} foi ${situacao} porque sua media foi ${media.toFixed(1)}`;
    }
}

const gabriel = new Aluno("gabriel", [7.4, 8.2, 6.7, 6]);
console.log(gabriel);
console.log(gabriel.situacaoEscolar());