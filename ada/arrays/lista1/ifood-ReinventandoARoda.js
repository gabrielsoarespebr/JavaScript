// Imagine que voce trabalhe em uma empresa de food delivery e esteja atuando na tela de concatenar a operacao. Esta tela e acessada pelo usuario quando ele tem algum problema com o pedido. Quando o usuario acessa essa tela, nos enviamos pro nosso backend alguns informacoes sobre o usuario e pedido.

// 1 - Caso o valor total do pedido seja maior que 150 reais, devemos  adicionar uma nova tag no array de tags. A tag que deve ser adicionada e a seguinte: 'order-bigger-than-150', caso contrario, devera ser adicionado a tag 'order-less-or-equal-than-150'

// Insercao e remocao em listas 

// Array de tags 
const tags = ['order'];
const itemsValue = [10, 56.8, 32.2, 12];

// Documentando: Funcao para somar os precos
const sum = (arrayPrices) => {
  let sum = 0;
  for (let i = 0; i < arrayPrices.length; i++) {
    sum += arrayPrices[i];
  }
  return sum;
}

let total = sum(itemsValue);

console.log("Total do pedido: R$", total);

// Documentando: Funcao para informar se e maior ou menor/igual a 150
const isExpensive = (total) => {
  let tag;
  if (total > 150) tag = "order-bigger-than-150";
  else tag = "order-less-or-equal-than-150";
  return tag;
}

let newTag = isExpensive(total);

tags[tags.length] = newTag;

console.log("Tags:", tags);

// 2 - Considere as informacoes do exercicio anterior para a execucao desse segundo exercicio. Imagine que o usuario tenha adicionado mais um pedido no valor de 40 reais a sacola. Adicione o valor do item e faca a mesma operacao que foi feita no exercicio anterior

itemsValue[itemsValue.length] = 40;

total = sum(itemsValue);

console.log("\nTotal do pedido (atualizado): R$", total);

// Documentando: Sobrescrevendo tag
tags[1] = isExpensive(total);

console.log("Tags (atualizado):", tags);