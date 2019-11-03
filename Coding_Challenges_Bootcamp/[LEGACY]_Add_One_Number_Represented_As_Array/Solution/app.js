/*
Title: Add one to number represented as array
::Direction::
// given an array
// write a function that takes the array
// add one to the number represented as an array
// return the brand new array
Examples::
adder([9, 9, 9]) => [1, 0, 0, 0]
adder([1, 2, 9]) => [1, 3, 0]
*/


function adder(arr) {
    let arrToString = arr.join("");
    let result = parseInt(arrToString) + 1;
    let finalResult = result.toString().split("");
    return finalResult.map((item) => {
        return parseInt(item);
    });
}

console.log(adder([1, 2, 9]));