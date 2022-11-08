/* 1# - ExercÃ­cio
Crie uma variÃ¡vel nome e substitua o texto abaixo com o valor da variÃ¡vel, 
faÃ§a a substituiÃ§Ã£o com pelo menos duas formas, com o operador + ou com template string (``)

console.log("NOME nasceu em 2000");
console.log("Em 2019 NOME comeÃ§ou a programar");
console.log("Em 2020 NOME ingressou na faculdade");
console.log("Em 2022 como programador, NOME conquistou seu primeiro emprego");
*/

const aluno = {
    nome: "Gabriel",
    anoNascimento: 1997,
    anoInicioTI: 2022
}

console.log(`${aluno.nome} nasceu em ${aluno.anoNascimento}.`);
console.log("Em " + aluno.anoInicioTI + ", " + aluno.nome + " começou a programar.");