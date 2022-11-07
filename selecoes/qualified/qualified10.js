/* Qualified - QUESTÃO 10

Sua equipe está trabalhando em um app de streaming de músicas e uma das funcionalidades é criar um embaralhador de músicas. Uma pesquisa feita pela equipe de UX (experiência do usuário) mostrou que essa é uma das funcionalidades mais importantes para os usuários e por isso foi priorizada a criação de um experimento para testar a melhor solução.

A ideia é criar vários embaralhadores diferentes e realizar um teste com partes dos usuários (chamado de teste A/B), onde cada grupo de usuários selecionado recebe uma versão e através de pesquisas e métricas de utilização saberemos qual terá a maior aceitação.

Sua tarefa será desenvolver um desses embaralhadores. Você deve criar uma função que receberá uma lista de pesos que representa as músicas mais ouvidas pelo usuário. Sua função deve retornar uma lista organizada intercalando as músicas mais ouvidas com as músicas menos ouvidas. Por exemplo:

Na situação onde a lista de pesos é: [2, 10, 5, 3] sua função deverá retornar [10, 2, 5, 3]
*/

function sortfunction(a, b) {
    return (a - b);
}

function decrescente(listaCrescente) {
    const tamanho = listaCrescente.length;
    let listaDecrescente = [];
    for (let i = (tamanho - 1); i >= 0; i--) {
        listaDecrescente.push(listaCrescente[i]);
    }
    return listaDecrescente;
}

function shuffleMusicas(musicasTocadas) {
    let lista = musicasTocadas;
    const tamanhoLista = lista.length;
    let listaCrescente = lista.sort(sortfunction);

    let listaDecrescente = decrescente(listaCrescente);

    let embaralhador = [];
    let x = 0;
    let y = 0;

    for (let i = 0; i < tamanhoLista; i++) {
        if ((i % 2) === 0) {
            embaralhador.push(listaDecrescente[x]);
            x++;
        }
        else {
            embaralhador.push(listaCrescente[y]);
            y++;
        }
    }

    return embaralhador;
}

/* TESTE

let assert = require("chai").assert;
describe('Shuffle Musicas', function() {
  it('Teste [2, 10, 5, 3]', function() {
    assert.deepEqual(shuffleMusicas([2,10,5,3]), [10,2,5,3]);
  });
});
*/