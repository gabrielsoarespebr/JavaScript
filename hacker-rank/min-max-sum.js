/* Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

Example
array = [1,3,5,7,9]
The minimum sum is 1+3+5+7=16 and the maximum sum is 3+5+7+9=24.

The function prints:
16 24
*/

const array = [9, 7, 8, 4, 2, 1, 3, 5, 0, 6];

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

//Soma todos os elementos do array
let sum = 0;
array.forEach(e => {
    sum += e;
})

const minSum = sum - array[arraySize - 1];
const maxSum = sum - array[0];

console.log(minSum + " " + maxSum);