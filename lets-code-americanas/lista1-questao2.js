/* 2# - ExercÃ­cio
  const numero = "32.45678"

  Referenciando a variÃ¡vel acima:
    - Retorne em uma nova variÃ¡vel o valor 32.45678 como um tipo de dado number (Utilize o typeof para verificar)
    - Retorne em uma nova variÃ¡vel o resultado 32 como um tipo de dado number (Utilize o typeof para verificar)
    - Retorne em uma nova variÃ¡vel o resultado 32.46 (Pegadinha!!)
*/
const numero = "32.45678";

const numeroNumber = Number(numero);
console.log("Valor: " + numeroNumber + ", Tipo: " + typeof numeroNumber);

const numeroInteiro = parseInt(numero);
console.log("Valor: " + numeroInteiro + ", Tipo: " + typeof numeroInteiro);

const numeroFloat = parseFloat(numero).toFixed(2);
console.log("Valor: " + numeroFloat + ", Tipo: " + typeof numeroFloat);