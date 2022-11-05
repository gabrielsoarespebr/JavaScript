/* Qualified - QUESTÃO 2

Você está trabalhando para uma empresa que fornece materiais escolares e precisa da sua ajuda para entrar no mundo digital. Como primeira atividade, você identificou que não existe uma funcionalidade que é muito importante para a empresa ter mais controle sobre os valores dos produtos vendidos. Esta funcionalidade consiste em descobrir o maior e o menor valor dos produtos vendidos em um período de tempo, para cada vendedor.

Os valores das vendas que devem ser consideradas podem variar entre 20 e 500 reais e estão agrupados por vendedores. Além disso, deve-se ignorar as devoluções, que estão indicadas com o valor 0.

A sua função/método deverá receber uma lista vendas agrupadas por vendedores, (e.g. [[200, 100], [300]]) e retornar um array onde a primeira posição contém o menor valor e a segunda posição o maior valor (e.g. [100, 300]).

Mas preste atenção! Algum vendedor pode não ter realizado vendas no período.
*/

function retornaMenorEMaiorValorDeVendas(tickets) {
    const qtdVendedores = tickets.length;
    let vendasGeral = [];
    let menorMaior = [];
    for (let x = 0; x < qtdVendedores; x++) {
        let qtdVendasPorVendedor = tickets[x].length;
        if (qtdVendasPorVendedor === undefined) {
            if (tickets[x] !== 0 && tickets[x] >= 20 && tickets[x] <= 500) vendasGeral.push(tickets[x]);
        }
        else {
            for (let y = 0; y < qtdVendasPorVendedor; y++) {
                if (tickets[x][y] !== 0 && tickets[x][y] >= 20 && tickets[x][y] <= 500) vendasGeral.push(tickets[x][y]);
            }
        }
    }
    menorMaior.push(Math.min(...vendasGeral));
    menorMaior.push(Math.max(...vendasGeral));
    return menorMaior;
}

/* TESTE

let assert = require("chai").assert;
describe('Retorna Menor E Maior Valor De Vendas', function() {
  it('Retorna O Menor E Maior Valor De Vendas', function() {
    assert.deepEqual(retornaMenorEMaiorValorDeVendas([[200,100],[300]]), [100,300]);
  });
});
*/