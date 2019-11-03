/*
Title: Sorting Array
::Direction::
// given an array
// write a function that takes the array
// return ascending (decending order) of the array
Examples:
asc([1, 4, 2, 3]) => [1, 2, 3, 4]
asc([100, 90, 20, 15, 43, 23]) => [15, 20, 23, 43, 90, 100]
//practice
desc([1, 4, 2, 3]) => [4, 3, 2, 1]
desc([100, 90, 20, 15, 43, 23]) => [100, 90, 43, 23, 20, 15]
*/

function asc(arr) {
    return arr.sort((n1, n2) => {
        return n1 - n2;
    })
}

console.log(asc([100, 90, 20, 15, 43, 23]));
