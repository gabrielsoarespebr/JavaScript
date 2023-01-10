import { Book } from './Book.js';

const books = [];

// Register book event listener
const registerButton = document.querySelector("#registerButton");

registerButton.addEventListener("click", function (e) {
    e.preventDefault();
    registerBook();
}
);

// Identifier
let countClicks = 0;

// Register book function
function registerBook() {
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const isbn = document.querySelector("#isbn").value;
    const numCopies = document.querySelector("#numCopies").value;

    const newBook = new Book(title, author, isbn, numCopies);

    books.push(newBook);

    const content = `<tr>
    <td id="title${countClicks}">${newBook.title}</td>
    <td id="author${countClicks}">${newBook.author}</td>
    <td id="isbn${countClicks}">${newBook.isbn}</td>
    <td id="numCopies${countClicks}">${newBook.numCopies}</td>

    <td class="tdCenter">
    <input id="sellInput${countClicks}" class="sellInput" type="number" min="0">
    </td>

    <td class="tdCenter">
    <input id="restockInput${countClicks}" class="restockInput" type="number" min="0">
    </td>

    </tr>`

    document.querySelector("table").innerHTML += content;

    document.querySelectorAll("td input").forEach(e => {
        e.style.cssText = "width: 30px";
    });

    document.querySelectorAll(".tdCenter").forEach(e => {
        e.style.cssText = "text-align: center";
    });

    countClicks++;
}

// Why this doesn't work after Register Button is pressed?
const sellButton = document.querySelector("#sellButton");

sellButton.addEventListener("click", function () {

    console.log("Test");

})
