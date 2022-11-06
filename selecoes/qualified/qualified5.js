/* Qualified - QUESTÃO 5 (Passou em 5 dos 6 testes - Reprovou no último teste por retornar [17,33,50] quando deveria retornar [33,33,33])

Uma famosa empresa de streams de jogos quer fornecer para seus streamers um mecanismo para que eles possam realizar sorteios nas suas lives de formas a dar mais chances para seus fãs mais fiéis. Você foi contratado com a missão de ajudar a automatizar esse sorteio, sendo que ele deve seguir as seguintes regras:

A chance de uma pessoa ser sorteada é diretamente proporcional às horas de conteúdo que ela assistiu naquele canal. Assim sendo, uma pessoa que ficou 20 horas acompanhando esse streamer tem o dobro de chances de ser sorteado do que uma pessoa que o assistiu durante 10 horas, se ambas não forem assinantes pagos. O número de horas é recebido em minutos e é sempre arredondado para cima, ou seja:

181 minutos = 4 horas
239 min = 4h
180 min = 3h
Se você possui uma assinatura paga da plataforma, suas chances são dobradas. Assim, no caso acima, se a pessoa que assistiu 10 horas for assinante premium e a que assistiu 20 horas não, ambos terão a mesa chance no sorteio

Assuma que você vai receber os dados de horas assistidas e de assinaturas em dois vetores, no modelo mostrado abaixo:

assinante = [True, False, False, False, True, False, True, True, False, False, False]
minutos_assistidos = [6144, 2742, 330, 30, 1500, 4032, 24036, 3288, 2076, 24540, 4716]
Considere que as mesmas posições do vetor representam a mesma pessoa. Ex:

A pessoa número 1 é assinante e viu 103 horas de conteúdo
A pessoa número 4 não é assinante e viu meia hora de conteúdo
Escreva um código que retorne um vetor com o percentual de chances de cada uma das pessoas ser sorteada. Retorne os valores arredondados para o inteiro mais próximo.

Exemplo:
assinante = [True, False]
horas_assistidas = [ 60, 120]

Output:
[50, 50]
*/

function minutoHora(minuto) {
    let hora = 0;
    if (minuto <= 60 || (minuto % 60) === 0) hora = minuto / 60;
    else hora = parseInt(minuto / 60) + 1;
    return hora;
}

function horaAssinanteComum(minuto) {
    const hora = minutoHora(minuto);
    return hora;
}

function horaAssinantePremium(minuto) {
    const hora = minutoHora(minuto);
    return hora * 2;
}

function calculaPorcentagemSorteio(assinante, minutosAssistidos) {
    const qtdAssinantes = assinante.length;
    let horasFicticias = [];

    for (let i = 0; i < qtdAssinantes; i++) {
        horasFicticias[i] = (assinante[i] === true) ? horaAssinantePremium(minutosAssistidos[i]) : horaAssinanteComum(minutosAssistidos[i]);
    }

    let equivaleCemPorcento = 0;
    for (const elemento of horasFicticias) {
        equivaleCemPorcento += elemento;
    }

    let chance = [];
    for (i = 0; i < qtdAssinantes; i++) {
        chance[i] = Math.round((horasFicticias[i]) / equivaleCemPorcento * 100);
    }

    return chance;
}

/* TESTE

let assert = require("chai").assert;
describe('Calcula Porcentagem Sorteio', function() {
  it('Teste Assinante E Nao Assinante', function() {
    assert.deepEqual(calculaPorcentagemSorteio([true,false],[60,120]), [50,50]);
  });
});
*/