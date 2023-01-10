import { Movie } from "./Movie.js";


const registerButton = document.querySelector("#registerButton");

registerButton.addEventListener("click", function (e) {
    e.preventDefault();

    const title = document.querySelector("#title").value;
    const director = document.querySelector("#director").value;
    const genre = document.querySelector("#genre").value;
    const releaseYear = document.querySelector("#releaseYear").value;
    const rating = document.querySelector("#rating").value;

    const newMovie = new Movie(title, director, genre, releaseYear, rating);

    const overview = newMovie.getOverview();

    document.querySelector("div").textContent = overview;
})



