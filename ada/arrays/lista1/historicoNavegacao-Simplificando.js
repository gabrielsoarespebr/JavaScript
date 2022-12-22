// 3 - O seu gestor trouxe uma nova demanda cuja a necessidade e de rastrear as paginas acessadas pelo usuario e guardar em uma lista. Como voce faria pra ir guardando pagina a pagina na lista a medida que o usuario for acessando?

const listPage = [];

// - Usuario acessou a 'pagina-inicial'
// adicione a lista 
listPage.push('pagina-inicial');
// - Usuario acessou a 'pagina-de-produtos'
// adicione a lista 
listPage.push('pagina-de-produtos');
// - Usuario acessou a 'pagina-de-checkout'
// adicione a lista 
listPage.push('pagina-de-checkout');
// - Usuario acessou a 'pagina-inicial'
// adicione a lista 
listPage.push('pagina-inicial');

console.log(listPage);

// Documentando: Copia do array pra usar na questao 5
const listPageCopy = [...listPage];

// 4 - Considere array da questao 3. Como voce faria para ir removendo item a item da lista na ordem do ultimo ate o primeiro inserido?

while ((listPage.length) > 0) {
  listPage.pop();
  console.log(listPage);
}

// 5 - Considere array da questao 3. Como voce faria para ir removendo item a item da lista na ordem do primeiro ate o ultimo inserido?

console.log(listPageCopy);

while ((listPageCopy.length) > 0) {
  listPageCopy.shift();
  console.log(listPageCopy);
}