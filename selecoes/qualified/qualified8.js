/* Qualified - QUESTÃO 8

Um grande amigo seu mora numa cidade pequena, onde existem apenas duas empresas de táxi - a Empresa 1 e a Empresa 2. Ambas mudam suas taxas a cada dia e calculam o valor de suas corridas da seguinte forma: uma taxa fixa mais um valor por quilômetro rodado.
Seu amigo é fisioterapeuta e pega táxis diariamente para visitar seus clientes ao redor da cidade. Você decidiu escrever um código para ajudá-lo a decidir qual empresa escolher para cada uma das corridas, baseado no preço.

Sua função receberá 4 valores: TF1 (a taxa fixa da empresa 1), VQR1 (o valor por quilômetro rodado da empresa 1), TF2 (a taxa fixa da empresa 2), VQR2 (o valor por quilômetro rodado da empresa 2), todos em formato string. Seu retorno deve ser uma string em uma das seguintes formas:

“Tanto faz” - para o caso de o valor das duas empresas para qualquer corrida ser igual
“Empresa 1” - se o valor da Empresa 1 for sempre menor que o da Empresa 2
“Empresa 2” - para o caso contrário do citado acima
“Empresa Xpto quando a distância < N, Tanto faz quando a distância = N, Empresa Ypto quando a distância > N” para o caso de a escolha depender da distância a ser percorrida (onde Xpto e Ypto representa 1 ou 2 e N representa a distância).
Exemplo:
TF1 = 2,50
VQR1 = 1,00
TF2 = 5,00
VQR2 = 0,75
Output:
“Empresa 1 quando a distância < 10.0, Tanto faz quando a distância = 10.0, Empresa 2 quando a distância > 10.0”
*/

function escolheTaxi(fixo1, variavel1, fixo2, variavel2) {
    fixo1 = Number(fixo1.replace(",", "."));
    variavel1 = Number(variavel1.replace(",", "."));
    fixo2 = Number(fixo2.replace(",", "."));
    variavel2 = Number(variavel2.replace(",", "."));

    let taxiEscolhido = "";
    if (variavel1 === variavel2 && fixo1 === fixo2) {
        taxiEscolhido = "Tanto faz";
    }
    else {
        const eixoDistanciaDaIntersecao = (fixo2 - fixo1) / (variavel1 - variavel2);
        if (eixoDistanciaDaIntersecao <= 0) {
            taxiEscolhido = (variavel1 < variavel2) ? "Empresa 1" : "Empresa 2";
        }
        else {
            const empresaTrajetoInicial = (fixo1 < fixo2) ? "1" : "2";
            const empresaTrajetoFinal = (empresaTrajetoInicial === "1") ? "2" : "1";
            taxiEscolhido = `Empresa ${empresaTrajetoInicial} quando a distância < ${eixoDistanciaDaIntersecao.toFixed(2)}, Tanto faz quando a distância = ${eixoDistanciaDaIntersecao.toFixed(2)}, Empresa ${empresaTrajetoFinal} quando a distância > ${eixoDistanciaDaIntersecao.toFixed(2)}`;
        }
    }

    return taxiEscolhido;
}

/* TESTE

let assert = require("chai").assert;
describe('Escolhe Taxi', function() {
  it('Teste', function() {
    assert.equal(escolheTaxi("2.5","1.0","5.0","0.75"), "Empresa 1 quando a distância < 10.0, Tanto faz quando a distância = 10.0, Empresa 2 quando a distância > 10.0");
  });
});
*/