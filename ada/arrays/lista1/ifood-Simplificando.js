// Imagine que voce trabalhe em uma empresa de food delivery e esteja atuando na tela de concatenar a operacao. Esta tela e acessada pelo usuario quando ele tem algum problema com o pedido. Quando o usuario acessa essa tela, nos enviamos pro nosso backend alguns informacoes sobre o usuario e pedido.

// 1 - Caso o valor total do pedido seja maior que 150 reais, devemos  adicionar uma nova tag no array de tags. A tag que deve ser adicionada e a seguinte: 'order-bigger-than-150', caso contrario, devera ser adicionado a tag 'order-less-or-equal-than-150'

// Insercao e remocao em listas 

// Array de tags 
const tags = ['order'];
const itemsValue = [10, 56.8, 32.2, 12];

// Documentando: Reduce para somar os precos
let total = itemsValue.reduce((total, price) => total += price, 0);

console.log("Total do pedido: R$", total);

// Documentando: Funcao para informar se e maior ou menor/igual a 150, com uso de operador ternario (Condicao ? Verdadeiro : Falso)
const isExpensive = (total) => {
  let tag = (total > 150) ? "order-bigger-than-150" : "order-less-or-equal-than-150";
  return tag;
}

// Documentando: Adicionando a nova tag no array tags
tags.push(isExpensive(total));

console.log("Tags:", tags);

// 2 - Considere as informacoes do exercicio anterior para a execucao desse segundo exercicio. Imagine que o usuario tenha adicionado mais um pedido no valor de 40 reais a sacola. Adicione o valor do item e faca a mesma operacao que foi feita no exercicio anterior

total += 40;

console.log("\nTotal do pedido (atualizado): R$", total);

// Documentando: Removendo a tag desatualizada
tags.pop();

// Documentando: Adicionando a tag atualizada
tags.push(isExpensive(total));

console.log("Tags (atualizado):", tags);