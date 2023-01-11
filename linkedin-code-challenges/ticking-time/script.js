setInterval(clockTime, 1000);

function clockTime() {
    const date = new Date();

    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    const clock = document.querySelector("#clock");

    const content = `${hours}:${minutes}:${seconds}`;

    clock.innerHTML = content;
}