/* 2# - ExercÃ­cio
  Vamos construir com if um sistema de sinal de transito
  - Crie uma variÃ¡vel chamada cor que receba uma das cores a seguir: "vermelho", "amarelo", "verde"
  - GostarÃ­amos que:
    - Caso a variÃ¡vel cor for vermelha imprima na tela "PARE"
    - Caso a variÃ¡vel cor for amarela imprima na tela "CUIDADO"
    - Caso a variÃ¡vel cor for verde imprima na tela "PROSSIGA"
    - Caso a variÃ¡vel cor receba alguma cor invÃ¡lida, imprima "COR INVÃ€LIDA"
*/

const prompt = require("prompt-sync")();

console.log("SEMAFORO");
const color = prompt("Selecione a cor: ").toLowerCase();

if(color === "vermelho") console.log("PARE");
else{
    if(color === "amarelo") console.log("CUIDADO");
    else{
        if(color === "verde") console.log("PROSSIGA");
        else console.log("COR INVALIDA");
    }
}