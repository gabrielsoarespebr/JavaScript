//QUESTÃO 1

console.log('QUESTÃO 1');
const dadosPessoas = [
    ['Flávia', 'Carlos', 'Luciana', 'João', 'Maria'],
    [1.70, 1.80, 1.64, 1.95, 1.52],
    [82, 90, 59, 95, 48]
]

//a) A média de altura
//Descobrindo a quantidade de pessoas
const qtdPessoas = dadosPessoas[0].length;

//Somando alturas das pessoas
let somaAlturas = 0;
for (let i = 0; i < qtdPessoas; i++) {
    somaAlturas += dadosPessoas[1][i];
}

//Dividindo a soma pela quantidade de pessoas
const mediaAltura = somaAlturas / qtdPessoas;

//Resultado
console.log('Media de altura do grupo: ' + mediaAltura.toFixed(2));


//b) A média de peso
//Somando pesos das pessoas
let somaPesos = 0;
for (let i = 0; i < qtdPessoas; i++) {
    somaPesos += dadosPessoas[2][i];
}

//Dividindo a soma pela quantidade de pessoas
const mediaPesos = somaPesos / qtdPessoas;

//Resultado
console.log('Media de peso do grupo: ' + mediaPesos);


//c) O nome e IMC de cada uma das pessoas
console.log();
console.log("NOME\tIMC");

//Calculando o IMC
const imc = [];

for (let i = 0; i < qtdPessoas; i++) {
    imc[i] = dadosPessoas[2][i] / (dadosPessoas[1][i] * dadosPessoas[1][i]);
}

//Juntando cada pessoa ao IMC correspondente

for (let i = 0; i < qtdPessoas; i++) {
    console.log(dadosPessoas[0][i] + "\t" + imc[i].toFixed(1));
}

console.log();

//d) O nome da pessoa mais alta e sua altura
let maiorAltura = 0;
let indexMaiorAltura = 0;

for (let i = 0; i < qtdPessoas; i++) {
    if (dadosPessoas[1][i] > maiorAltura) { //Armazenando o valor da maior altura, bem como seu index para usá-lo na impressão do nome da pessoa
        maiorAltura = dadosPessoas[1][i];
        indexMaiorAltura = i;
    }
}

console.log(`${dadosPessoas[0][indexMaiorAltura]} eh o/a mais alto(a), com ${maiorAltura}m.`);


//e) O nome da pessoa mais pesada e seu peso
let maiorPeso = 0;
let indexMaiorPeso = 0;

for (let i = 0; i < qtdPessoas; i++) {
    if (dadosPessoas[2][i] > maiorPeso) { //Armazenando o valor do maior peso, bem como seu index para usá-lo na impressão do nome da pessoa
        maiorPeso = dadosPessoas[2][i];
        indexMaiorPeso = i;
    }
}

console.log(`${dadosPessoas[0][indexMaiorPeso]} eh o/a mais pesado(a), com ${maiorPeso}kg.`);


//f) O nome da pessoa com o maior IMC e seu valor
let maiorIMC = 0;
let indexMaiorIMC = 0;

for (let i = 0; i < qtdPessoas; i++) {
    if (imc[i] > maiorIMC) { //Armazenando o valor do maior IMC, bem como seu index para usá-lo na impressão do nome da pessoa
        maiorIMC = imc[i];
        indexMaiorIMC = i;
    }
}

console.log(`${dadosPessoas[0][indexMaiorIMC]} eh o/a mais pesado(a), com ${maiorIMC.toFixed(1)}.`);


//QUESTÃO 2
console.log();
console.log('QUESTÃO 2');
const lado1 = 30;
const lado2 = 30;
const lado3 = 30;

//Assumindo um valor padrão para facilitar o código posteriormente
let tipo = 'escaleno';

//Estabelecendo comparações entre dois lados de cada vez, para receber valore booleanos true e false
const compara12 = lado1 === lado2;
const compara13 = lado1 === lado3;
const compara23 = lado2 === lado3;

//Se todos forem true, trata-se de triangulo equilatero
if (compara12 && compara13 && compara23) tipo = 'equilatero';
//Caso não seja equilatero, basta um true para ser isósceles
else if (compara12 || compara13 || compara23) tipo = 'isosceles';
//Caso não atenda nenhum dos critérios, trata-se do valor padrão: escaleno

console.log('Tipo de triangulo: ' + tipo);