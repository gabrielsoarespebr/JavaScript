/* Qualified - QUESTÃO 3

Durante uma expedição tecnológica, sua equipe encontrou o que parece ser a senha que lhes dá acesso a um grande tesouro digital. Por sorte, sua equipe é formada pelas pessoas mais feras em programação e vocês rapidamente descobriram como decifrá-la.

Com a possibilidade de que vocês encontrem mais códigos contendo outras senhas, você foi designado à tarefa de desenvolver um algoritmo que decifra os códigos para não precisarem fazer isso de forma manual.

A senha é representada por um número binário de 10 dígitos formado pelo dígito predominante de cada coluna. Caso a coluna tenha a mesma quantidade de dígitos 0 e 1, deve se considerar o número 1.

Exemplo: A primeira coluna da lista tem como dígito predominante o número 1, sendo assim, o primeiro dígito - dos 10 - da senha é 1.

0110100000
1001011111
1110001010
0111010101
0011100110
1010011001
1101100100
1011010100
1001100111
1000011000

Desenvolva um algoritmo que receba um array de valores binários (como o exemplo acima) e retorne a representação decimal da senha.
*/

function calculaNumeroDaSenha(senha) {
    let qtdLinhas = senha.length;
    let tamanhoSenha = 10;
    let arraySenhaFinal = [];
    for (let x = 0; x < tamanhoSenha; x++) {
        let contadorZero = 0;
        let contadorUm = 0;
        for (let y = 0; y < qtdLinhas; y++) {
            if (senha[y][x] === '1') contadorUm++;
            else contadorZero++;
        }
        let digitoEscolhido = (contadorZero > contadorUm) ? 0 : 1;
        arraySenhaFinal.push(digitoEscolhido);
    }

    let soma = 0;
    let w = 0;
    for (let z = (tamanhoSenha - 1); z >= 0; z--) {
        soma += parseInt(arraySenhaFinal[z]) * (Math.pow(2, w));
        w++;
    }
    return soma;
}

/* TESTE

let assert = require("chai").assert;
describe('Calcula Numero Da Senha', function() {
  it('Retorna Senha Correta', function() {
    assert.equal(calculaNumeroDaSenha(["0110100000","1001011111","1110001010","0111010101","0011100110","1010011001","1101100100","1011010100","1001100111","1000011000"]), 724);
  });
});
*/