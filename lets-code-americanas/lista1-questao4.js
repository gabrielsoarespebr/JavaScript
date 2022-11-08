/* 4# ExercÃ­cio
  const meses = ["Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov"]

  Dado o array acima:
   - Insira na Ãºltima posiÃ§Ã£o do novo array a string "Dez"
   - Insira na primeira posiÃ§Ã£o do novo array a string "Jan"
   - Retorne em uma variÃ¡vel o tamanho do array acima.
*/

const meses = ["Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov"];

meses.push("Dez");
meses.unshift("Jan");
console.log(meses);

const qtdMeses = meses.length;
console.log(qtdMeses);