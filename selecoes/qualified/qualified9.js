/* Qualified - QUESTÃO 9 (Passou em 4 dos 6 testes - Reprovou em um por retornar 'sem resposta' quando deveria retornar 'Qualiidef', e reprovou em outro por retornar 'sem resposta' quando deveria retornar 'dede')

Ao se comparar se uma string é maior que outra, considera-se a ordem alfabética ou lexicográfica. No caso, “abcd” < “adbc” < “bacd”.

Escreva uma função que receba uma string A e retorne uma string B, sendo que B é composta pelos mesmos caracteres que A reordenados.

B deve obedecer às seguintes condições:

Ser maior que A
Ser a menor string possível que cumpra as condições acima
Caso não seja possível encontrar uma string que cumpra as condições, retorne a string “sem reposta”.
Por exemplo:

A = “ab”
Logo, o resultado será “ba”

A = “abcde”
Logo, o resultado será “abced”

A = “ba”
Nesse caso, o resultado será “sem resposta"
*/

function menorStringMaior(name) {
    const tamanhoString = name.length;
    const valorASCIIultimaLetra = name.charCodeAt(tamanhoString - 1);
    const valorASCIIpenultimaLetra = name.charCodeAt(tamanhoString - 2);
    const array = name.split("");

    let decodifica = "sem resposta";
    if (valorASCIIultimaLetra > valorASCIIpenultimaLetra) {
        let armazenaLetra1 = String.fromCharCode(valorASCIIultimaLetra);
        let armazenaLetra2 = String.fromCharCode(valorASCIIpenultimaLetra);
        array.splice((tamanhoString - 2), 2, armazenaLetra1, armazenaLetra2);
        decodifica = array.join("");
    }

    return decodifica;
}

/* TESTE

let assert = require("chai").assert;
describe('Menor String Maior', function() {
  it('Teste', function() {
    assert.equal(menorStringMaior("abcde"), "abced");
  });
});
*/