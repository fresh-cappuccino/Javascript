/*
Coding Challenge: Summing Array Elements
::Directions::
// write a function that takes an array
// return sum of all the elements
:Examples:
sumArrEl([1, 2, 3, 4]) => return 10
sumArrEl([2, 4, 5, 6]) => return 17
*/

function sumArrEl(arr) {
    return arr.reduce((sum, curr) => {
        return sum + curr;
    }, 0);
}

console.log(sumArrEl([2, 4, 5, 6]));