const buttons = document.querySelectorAll("button");

buttons.forEach(e => {
    e.addEventListener("click", function () {
        document.body.style.backgroundColor = e.id;
    })
})