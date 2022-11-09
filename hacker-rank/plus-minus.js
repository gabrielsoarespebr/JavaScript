/* Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with 6 places after the decimal.

Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to 10^-4 are acceptable.

Example
array = [1,1,0,-1,-1]
There are n=5 elements, two positive, two negative and one zero. Their ratios are 2/5, 2/5 and 1/5. Results are printed as:

0.400000
0.400000
0.200000

*/

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(array) {
    const arraySize = array.length;
    let countPositive = 0;
    let countNegative = 0;
    let countZero = 0;

    for (let i = 0; i < arraySize; i++) {
        if (array[i] === 0) countZero++;
        else {
            if (array[i] > 0) countPositive++;
            else countNegative++;
        }
    }

    console.log(parseFloat(countPositive / arraySize).toFixed(6));
    console.log(parseFloat(countNegative / arraySize).toFixed(6));
    console.log(parseFloat(countZero / arraySize).toFixed(6));
}

function main() {
    plusMinus([-4, 3, -9, 0, 4, 1]);
}

main();