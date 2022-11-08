/* 1# - ExercÃ­cio
  const array = [
    [1, 5, 7, 9],
    [2, 6, 8, 10]
  ]

- Calcule a mÃ©dia dos nÃºmeros do array da primeira posiÃ§Ã£o (Ãndice 0)
- Calcule a mÃ©dia dos nÃºmeros do array da segunda posiÃ§Ã£o (Ãndice 1)
- Some todos os nÃºmeros dos arrays dos Ã­ndices 1 e 2 e tambÃ©m forneÃ§a a mÃ©dia do array em relaÃ§Ã£o a quantidade 
de todos os nÃºmeros do array
- Multiplique os valores de cada index e coloque-os em variÃ¡veis representando cada index,
  exemplo const index0, const index1 e etc...
*/

const array = [
    [1, 5, 7, 9],
    [2, 6, 8, 10]
]

function media(lista) {
    let quantidade = lista.length;
    let soma = 0;
    lista.forEach(elemento => {
        soma += elemento;
    });
    return soma / quantidade;
}

console.log(media(array[0]));
console.log(media(array[1]));

const unindoArrays = [];

array.forEach(linhaMatriz => {
    linhaMatriz.forEach(elemento => {
        unindoArrays.push(elemento);
    })
});

console.log(media(unindoArrays));

const correspondentesMultiplicados = [];

if (array[0].length === array[1].length) {
    for (let i = 0; i < (array[0].length); i++) {
        correspondentesMultiplicados.push(array[0][i]*array[1][i]);
    }
}

console.log(correspondentesMultiplicados);