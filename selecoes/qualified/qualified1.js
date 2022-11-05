/* Qualified - QUESTÃO 1

Você e seu time estão desenvolvendo um sistema de indicações de postos de gasolina que ficam próximos da localização atual do veículo. No modo de direção “viagem”, a funcionalidade a ser desenvolvida é de indicar ao condutor o posto mais distante possível dentro do limite atual de combustível. E caso não exista posto de gasolina, retornar -1

A pessoa responsável por fazer a especificação do sistema informou que você terá as seguintes informações: consumo médio de combustível, quantidade de combustível restante no veículo e um array contendo distâncias dos postos de gasolinas.

Exemplo:
Combustivel (em litros): 2
Consumo médio (km/l): 8
Postos de Gasolina (km): [2, 15, 22, 10.2]
*/

function ultimaParada(combustivel, consumo, postosDeGasolina) {
    var limite = combustivel * consumo;
    var ultimaparada = 0;
    var tamanho = postosDeGasolina.length;
    if (limite < postosDeGasolina[0]) return -1;
    else {
        if (limite > postosDeGasolina[tamanho]) return -1;
        else {
            var i = 0;
            while (ultimaparada < limite) {
                i++;
                ultimaparada = postosDeGasolina[i];
            }
            i--;
            return postosDeGasolina[i];
        }
    }
}

/* TESTE

let assert = require("chai").assert;
describe('Ultima Parada', function() {
  it('Calcula O Ultimo Posto De Combustivel Na Autonomia', function() {
    assert.equal(ultimaParada(2,8,[2,15,22,11]), 15);
  });
});
*/