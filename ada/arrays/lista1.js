/*
 * Imagine que voce trabalhe em uma empresa de food delivery e esteja atuando na tela de concatar a operacao.
 * Esta tela e acessada pelo usuario quando ele tem algum problema com o pedido. Quando o usuario acessa essa 
 * tela, nos enviamos pro nosso backend alguns informacoes sobre o usuario e pedido. 
 */

 // 1 - Caso o valor total do pedido seja maior que 150 reais, devemos  adicionar uma nova tag no array de tags. A 
 // tag que deve ser adicionada e a seguinte: 'order-bigger-than-150', caso contrario, devera ser adicionado a tag 
 // 'order-less-or-equal-than-150'

 // Insercao e remocao em listas 

 //array de tags 
 const tags = ['order'];
 const itemsValue = [10, 56.8, 32.2, 12];


 // 2 - Considere as informacoes do exercicio anterior para a execucao desse segundo exercicio. Imagine que o usuario
 // tenha adicionado mais um pedido no valor de 40 reais a sacola. Adicione o valor do item e faca a mesma operacao que 
 // foi feita no exercicio anterior 


 // 3 - O seu gestor trouxe uma nova demanda cuja a necessidade e de rastrear as paginas acessadas pelo usuario e guardar em 
 // uma lista. Como voce faria pra ir guardando pagina a pagina na lista a medida que o usuario for acessando?

 const listPage = [];

 // - Usuario acessou a 'pagina-inicial'
  // adicione a lista 
 // - Usuario acessou a 'pagina-de-produtos'
  // adicione a lista 
 // - Usuario acessou a 'pagina-de-checkout'
   // adicione a lista 
 // - Usuario acessou a 'pagina-inicial'
   // adicione a lista 

 // 4 - Considere array da questao 4. Como voce faria para ir removendo item a item da lista na ordem do ultimo ate o 
 // primeiro inserido?

 // 5 - Considere array da questao 4. Como voce faria para ir removendo item a item da lista na ordem do primeiro ate o 
 // ultimo inserido?

 // 6 - Considere os arrays de nomes e idades e faca a ordenacao em order alfabetica no array de nomes e no array de idades 
 // em ordem do maior para o menor 
 
 const names = ['Daiane', 'Fabricio', 'Ana', 'Walter']
 const ages = [23, 18, 34, 20]
 //

 // 7 - Crie um novo array que seja a juncao dos array de nomes e idades onde primeiro devera vir o nome e logo em seguida a idade
 // ex: ['Daiane', 23, 'Fabricio', 18 ...]

 // 
 // 8 - Considerando o array do exercicio 7, crie um novo array somente com os nomes e outro somente com as idades 

 // 9 - Considerando os arrays criados no exercicio 8, busque o nome Fabricio e a idade 34 e salve-os em novas variaveis 
 
 // 10 - Considerando o array de idades calculado no exercicio 7, faca o somatorio total das idades contidas nesse array e salve em 
 // uma nova variavel 

 // 11 - Considerando o array de idades calculado no exercicio 7, dobre o valor de cada item do array e salve em um novo array chamado
 // idades duplicadas  

 // 12 - Crie uma funcao que impeca que um nome duplicado seja adicionado ao array de nomes