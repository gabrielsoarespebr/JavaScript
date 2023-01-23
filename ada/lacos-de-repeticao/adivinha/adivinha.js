// Crie um jogo de adivinhacao
// O jogo devera gerar um numero aleatorio de 1 a 10 e salva-lo em uma variavel
// O jogo devera mostrar um prompt (caixa com um input para o usuario inserir um valor) e salvar o valor inserido pelo usuario
// A cada input do usuario, o jogo devera verificar se este acertou ou nao o valor inserido,  
// caso tenha acertado, devera mostrar um alerta pro usuario uma mensagem indicando que este acertou e o numero de tentativas
// efetuadas. Caso o usuario tenha errado, devera mostrar um alerta com a mensagem de erro e a quantidade de tentativas e logo em 
// seguida outro prompt para que o usuario insira outro palpite
// o jogo acaba se o usuario clicar no botao cancelar do prompt ou se o usuario acertar o numero gerado
const min = 1;
const max = 10;

let attempts = 0;

const correctNumber = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(correctNumber);

const guessButton = document.getElementById("guessButton");


guessButton.addEventListener("click", function (e) {
    e.preventDefault();

    attempts++;

    const guessNumber = Number(document.getElementById("guessNumber").value);
    const feedback = document.getElementById("feedback");

    if (guessNumber !== correctNumber) {
        feedback.innerHTML = `<div style="color:red">Você não acertou!</div> Quantidade de tentativas: ${attempts}`;
    }
    else {
        feedback.innerHTML = `<div style="color:green">Você acertou!</div> Quantidade de tentativas: ${attempts}`
    }


})