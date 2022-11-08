/* 3# - ExercÃ­cio
  const numeros = [1, 2, 3, 1, 2, 4, 5, 5, 4, 10, 12, 10, 1, 13, 12, 14]

  Dado o array acima:
  - Retorne a posiÃ§Ã£o do primeiro nÃºmero 2
  - Crie uma varÃ¡vel que verifique se existe o nÃºmero 14. Retorne true ou false
  - Insira o numero 34 na ultima posiÃ§Ã£o do array.
  - Insira o nÃºmero 90 na primeira posiÃ§Ã£o do array.
  - Retorne em uma variÃ¡vel o tamanho do array acima.
*/

const numeros = [1, 2, 3, 1, 2, 4, 5, 5, 4, 10, 12, 10, 1, 13, 12, 14];

console.log(numeros.indexOf(2));

const existe14 = numeros.includes(14);
console.log(existe14);

numeros.push(34);
console.log(numeros);

numeros.unshift(90);
console.log(numeros);

console.log(numeros.length);