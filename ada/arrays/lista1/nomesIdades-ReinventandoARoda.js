// 6 - Considere os arrays de nomes e idades e faca a ordenacao em ordem alfabetica no array de nomes e no array de idades em ordem do maior para o menor

const names = ['Daiane', 'Fabricio', 'Ana', 'Walter']
const ages = [23, 18, 34, 20]

// Documentando: Ordenacao alfabetica dos nomes (incompleta, só considera a primeira letra de cada nome)

// Documentando: Transformando cada nome em um array cujas letras estao representadas em decimal ASC II
const wordToAsc = (word) => {
  const ascArray = [];

  for(let i=0;i<word.length;i++){
    ascArray[i] = word.charCodeAt(i);
  }

  return ascArray;
}

// Documentando: Criando uma matriz (array de arrays) com as arrays dos nomes em ASC II
const createAscMatrix = (names) => {
  const ascMatrix = [];

  for(let i=0;i<names.length;i++){
    ascMatrix[ascMatrix.length] = wordToAsc(names[i]);
  }

  return ascMatrix;
}

// Documentando: Ordenacao crescente dos valores correspondentes a primeira letra dos nomes em Bubble Sort
const sortAlphabetic = (names, matrix) => {
  for(let i=0; i < matrix.length; i++){
    for(let j=i; j< matrix.length; j++){
      if (matrix[i][0] > matrix[j][0]){
        let tempAsc = matrix[i][0];
        let tempName = names[i];

        matrix[i][0] = matrix[j][0];
        names[i] = names[j];

        matrix[j][0] = tempAsc;
        names[j] = tempName;
      }
    }
  }
  return names;
}

const namesAlphabeticSort = sortAlphabetic(names,(createAscMatrix(names)));

console.log(namesAlphabeticSort);

// Documentando: Ordenacao decrescente das idades em Bubble Sort
for (let i=0;i<ages.length;i++){
  for(let j=i;j<ages.length;j++){
    if (ages[i] < ages[j]){
      let temp = ages[i];
      ages[i] = ages[j];
      ages[j] = temp;
    }
  }
}

console.log(ages);

// 7 - Crie um novo array que seja a juncao dos array de nomes e idades onde primeiro devera vir o nome e logo em seguida a idade ex: ['Daiane', 23, 'Fabricio', 18 ...]

const namesAndAges = [];

let z = 0;
while (namesAndAges.length < (names.length * 2)){
  namesAndAges[namesAndAges.length] = namesAlphabeticSort[z];
  namesAndAges[namesAndAges.length] = ages[z];
  z++;
}

console.log(namesAndAges);

// 8 - Considerando o array do exercicio 7, crie um novo array somente com os nomes e outro somente com as idades

// 9 - Considerando os arrays criados no exercicio 8, busque o nome Fabricio e a idade 34 e salve-os em novas variaveis 
 
// 10 - Considerando o array de idades calculado no exercicio 7, faca o somatorio total das idades contidas nesse array e salve em uma nova variavel 

// 11 - Considerando o array de idades calculado no exercicio 7, dobre o valor de cada item do array e salve em um novo array chamado idades duplicadas  

// 12 - Crie uma funcao que impeca que um nome duplicado seja adicionado ao array de nomes