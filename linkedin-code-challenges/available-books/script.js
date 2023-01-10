import { Book } from './Book.js';

const books = [];

// Register book event listener
const registerButton = document.querySelector("#registerButton");

registerButton.addEventListener("click",function(e){
    e.preventDefault();
    registerBook();
}
);

let contaClicks = 0;

function registerBook() {
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const isbn = document.querySelector("#isbn").value;
    const numCopies = document.querySelector("#numCopies").value;

    const newBook = new Book(title, author, isbn, numCopies);

    books.push(newBook);

    const content = `<tr>
    <td id="title${contaClicks}">${newBook.title}</td>
    <td id="author${contaClicks}">${newBook.author}</td>
    <td id="isbn${contaClicks}">${newBook.isbn}</td>
    <td id="numCopies${contaClicks}">${newBook.numCopies}</td>

    <td class="tdCenter"><input class="buttonChangeNumCopies" type="number"><button onclick="${sell(contaClicks)}" id="sellButton${contaClicks}">Sell</button></td>

    <td class="tdCenter"><input class="buttonChangeNumCopies" type="number"><button id="restockButton${contaClicks}">Restock</button></td>
    </tr>`

    document.querySelector("table").innerHTML += content;

    document.querySelectorAll(".buttonChangeNumCopies").forEach(e => {
        e.style.cssText = "width: 30px";
    });

    document.querySelectorAll(".tdCenter").forEach(e => {
        e.style.cssText = "text-align: center";
    });

    contaClicks++;
}


function sell(number) {
    console.log("funcao sell", books[number].numCopies);
}
