/* Qualified - QUESTÃO 4

Dada um texto qualquer e um lista de termos de pesquisa (sequencia de caracteres), retorne os primeiros K termos mais recorrentes na string, onde K é um parâmetro configurável.

Exemplo:

String: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"

Lista de termos: ["a", "em", "i", "el"]

K: 2

Resultado: ["i", "a"]

Explicação:

Ocorrências de cada termo,"i": 11, "a": 7, "em": 2, "el": 1, com K = 2, retornamos "i" e "a" ordenados conforme a quantidade de ocorrências de cada termo.

Obs: Quando houver termos com quantidades iguais, priorizar o retorno de acordo com a ordem de ocorrência do termo na string.
*/

function contaOcorrenciasTermoUmDigito(texto, termo) {
    const tamanhoTexto = texto.length;
    let contador = 0;
    for (let i = 0; i < tamanhoTexto; i++) {
        if (texto[i] === termo) contador++;
    }
    return contador;
}

function contaOcorrenciasTermoMaisDigitos(texto, termo) {
    const tamanhoTexto = texto.length;
    const tamanhoTermo = termo.length;
    let indiceTermo = 0;
    let contador = 0;

    let fragmentoTexto = "";
    for (let i = 0; i < tamanhoTexto; i++) {
        if (texto[i] === termo[indiceTermo]) {
            fragmentoTexto = texto.slice(i, (i + tamanhoTermo));
            if (fragmentoTexto === termo) contador++;
        }
    }
    return contador;
}

function calculaTopOcorrenciasDeQueries(texto, lista, k) {
    const tamanhoLista = lista.length;
    let termo = "";

    let contadorOcorrencias = [];
    for (let x = 0; x < tamanhoLista; x++) {
        termo = lista[x];
        if (termo.length === 1) {
            contadorOcorrencias[x] = contaOcorrenciasTermoUmDigito(texto, termo);
        }
        else {
            contadorOcorrencias[x] = contaOcorrenciasTermoMaisDigitos(texto, termo);
        }
    }

    let resultado = [];
    let maiorOcorrencia;
    let indice;
    for (let q = 0; q < k; q++) {
        maiorOcorrencia = Math.max(...contadorOcorrencias);
        indice = contadorOcorrencias.indexOf(maiorOcorrencia);
        resultado.push(lista[indice]);
        lista.splice(indice, 1);
        contadorOcorrencias.splice(indice, 1);
    }

    return resultado;
}

/* TESTE

let assert = require("chai").assert;
describe('Calcula Top Ocorrencias De Queries', function() {
  it('Testa Lorem Ipsum', function() {
    assert.deepEqual(calculaTopOcorrenciasDeQueries("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",["a","em","i","el"],2), ["i","a"]);
  });
});
*/