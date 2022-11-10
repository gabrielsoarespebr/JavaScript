const array = [9,7,8,4,2,1,3,5,0,6];

const arraySize = array.length;

//Ordena array em ordem crescente
for (let x = arraySize - 1; x > 0; x--) {
    for (let i = 0; i < arraySize - 1; i++) {
        if (array[i] > array[i + 1]) {
            const greaterThan = array[i];
            array[i] = array[i + 1];
            array[i + 1] = greaterThan;
        }
    }
}

console.log(array);