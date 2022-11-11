const valoresDolar = [6, 7, 8, 9];

const cotacao = 5.33;

const conversao = e => e * cotacao;
const formatacao = e => "R$" + e.toFixed(2).replace(".", ",");

//o map gera um novo array contendo a mesma quantidade de elementos do array original, mas cada elemento é transformado de acordo com a função
//é possível usar vários maps seguidos
const valoresReal = valoresDolar.map(conversao).map(formatacao);

console.log(valoresReal);