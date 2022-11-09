function staircase(n) {
    let line = ["#"];

    for (let i = 0; i < (n - 1); i++) {
        line.unshift(" ");
    }

    console.log(line.join(""));

    for (let i = 0; i < (n - 1); i++) {
        line.push("#");
        line.shift();
        console.log(line.join(""));
    }

}

function main(){
    staircase(6);
}

main();