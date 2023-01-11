// 2 - Imagine que estejamos criando uma tela para cadastro de usuários para um sistema. Imagine que nesse sistema, podemos fazer o cadastro de usuários em lote, ou seja, a partir de uma tela, podemos cadastrar diversos usuários. Crie um algoritmo com uma funcao que, adicione um novo usuario a uma lista de usuarios e faca a insercao de 5 novos usuarios. Cada usuário deve ter as seguintes informacoes: (nome, sobrenome, email, idade, é administrador?)

const listaUsuarios = [];

function cadastraUsuario(nome, sobrenome, email, idade, ehAdministrador) {
    const usuario = {
        nome: nome,
        sobrenome: sobrenome,
        email: email,
        idade: idade,
        ehAdministrador: ehAdministrador
    }

    listaUsuarios.push(usuario);
}

cadastraUsuario("Mateus", "Cardoso", "mc2007@gmail.com", 27, false);
cadastraUsuario("Breno", "Gomes", "breno_gomes@gmail.com", 23, false);
cadastraUsuario("Aline", "Batista", "alineb@gmail.com", 22, false);
cadastraUsuario("Gustavo", "Miranda", "gustavomir.diretoria@gmail.com", 40, true);

console.log(listaUsuarios);