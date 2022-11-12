/*
A teacher asks the class to open their books to a page number. A student can either start turning pages from the front of the book or from the back of the book. They always turn pages one at a time. When they open the book, page 1 is always on the right side:

|   | 1 |

When they flip page 1, they see pages 2 and 3. Each page except the last page will always be printed on both sides. The last page may only be printed on the front, given the length of the book. If the book is n pages long, and a student wants to turn to page p, what is the minimum number of pages to turn? They can start at the beginning or the end of the book.

Given n and p, find and print the minimum number of pages that must be turned in order to arrive at page p.

Example
Input: 6 2
Output: 1
*/

n = 5;
p = 4;

// Criando o array livro, cujos elementos sao as paginas (O inicio em 0 nao eh obrigatorio, foi apenas uma maneira de representar a primeira pagina vazia)
const livro = [];
for (let i = 0; i <= n; i++) {
    livro.push(i);
}

// Um livro aberto tem a pagina da esquerda e a pagina da direita. Alem disso, o livro sempre termina na pagina da direita. Entao adicionamos um elemento chamado pagina vazia sempre que o livro tentar terminar numa pagina da esquerda (evitando que o livro tenha uma quantidade impar de paginas)
if ((livro.length % 2) !== 0) livro.push('pagina vazia');

// A questao permite que o leitor inicie as viradas de pagina no comeco ou no fim do livro. Por isso, foi criado o array livroInvertido, invertendo a ordem das paginas
const livroInvertido = livro.map(e => e).reverse();

// Atraves do index de cada array, descobre-se qual sera o caminho mais rapido para chegar na pagina
const paginaIndexLivro = livro.indexOf(p);
const paginaIndexLivroInvertido = livroInvertido.indexOf(p);
const menorIndex = (paginaIndexLivro < paginaIndexLivroInvertido) ? paginaIndexLivro : paginaIndexLivroInvertido;

// Como as paginas trabalham em duplas (pagina da esquerda e pagina da direita), a quantidade de duplas eh a quantidade de viradas. Ainda que o resultado seja um numero real, apenas sua parte inteira interessa, porque nao existe meia virada de pagina.
let contadorViradas = parseInt(menorIndex / 2);

console.log(contadorViradas);
