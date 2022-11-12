const candidatos = [
    { nome: "Ana", nota: 9.63, PcD: false },
    { nome: "Beatriz", nota: 6.9, PcD: false },
    { nome: "Carlos", nota: 5, PcD: false },
    { nome: "Denise", nota: 5.25, PcD: true },
    { nome: "Elias", nota: 5.37, PcD: false },
    { nome: "Felipe", nota: 5.39, PcD: false },
    { nome: "Gustavo", nota: 7.5, PcD: false },
    { nome: "Heitor", nota: 5.5, PcD: true },
    { nome: "Indielle", nota: 6.58, PcD: false },
    { nome: "Joao", nota: 7.4, PcD: false }
];

const pessoaComDeficiencia = e => e.PcD === true;

const apenasNome = e => e.nome;

console.log(candidatos.filter(pessoaComDeficiencia).map(apenasNome));