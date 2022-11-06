/* Qualified - QUESTÃO 6

Dizemos que um número natural X esconde o Y quando, ao apagar alguns algarismos de X, o número Y aparece. Por exemplo, o número 12345 esconde o número 235, uma vez que pode ser obtido ao apagar os números 1 e 4. Por outro lado, ele não esconde o número 154.

Escreva um código que recebe dois números e que retorna um booleano dizendo se o primeiro esconde o segundo.
*/

function checaNumeroEscondido(numero, numeroOculto) {
    const stringNumero = numero.toString();
    const arrayNumero = stringNumero.split('');
    const tamanhoNumero = arrayNumero.length;

    const stringNumeroOculto = numeroOculto.toString();
    const arrayNumeroOculto = stringNumeroOculto.split('');
    const tamanhoNumeroOculto = arrayNumeroOculto.length;

    const index = [];

    for (let x = 0; x < tamanhoNumeroOculto; x++) {
        for (let y = 0; y < tamanhoNumero; y++) {
            if (arrayNumeroOculto[x] === arrayNumero[y]) index.push(y);
        }
    }

    let esconde = false;
    if (index.length >= tamanhoNumeroOculto) { //O código original tinha ===, mas só passou em todos os testes após a mudança pelo >=
        for (let i = 0; i < ((index.length) - 1); i++) {
            if (index[i] <= index[i + 1]) esconde = true;
        }
    }

    return esconde;
}

/* TESTE

let assert = require("chai").assert;
describe('Checa Numero Escondido', function() {
  it('Verifica Se O Numero Esta Oculto Em Outro', function() {
    assert.equal(checaNumeroEscondido(12345,235), true);
  });
});
*/