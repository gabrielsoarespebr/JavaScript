/*

An avid hiker keeps meticulous records of their hikes. During the last hike that took exactly steps steps, for every step it was noted if it was an uphill, U, or a downhill,  Dstep. Hikes always start and end at sea level, and each step up or down represents a 1 unit change in altitude. We define the following terms:

A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level.
A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.
Given the sequence of up and down steps during a hike, find and print the number of valleys walked through.

Input:
8
UDDDUDUU

Output: 1


Explanation:
If we represent _ as sea level, a step up as /, and a step down as \, the hike can be drawn as:
_/\      _
   \    /
    \/\/
The hiker enters and leaves one valley.

*/

const qtdPassos = 8;
let sequenciaPassos = 'UDDDUDUU';

// Transformando a string sequenciaPassos em um array de mesmo nome
sequenciaPassos = sequenciaPassos.split('');

// Considerando o nivel do mar sendo 0, o array eixoY informa a posicao apos cada movimento
let nivel = 0;
const eixoY = sequenciaPassos.map(e => {
    nivel = (e === 'U') ? ++nivel : --nivel;
    return nivel;
});

// Para saber a quantidade de vales, basta decobrir quantas vezes o alpinista saiu do vale. Dessa forma, basta contar quantas vezes ele passou de uma posicao negativa para a posicao 0
let saiuDoVale = 0;
for (let i = 0; i < eixoY.length; i++) {
    if (eixoY[i] === 0) {
        if (eixoY[i-1] < 0) saiuDoVale++;
    }
}

console.log(eixoY);
console.log(saiuDoVale);