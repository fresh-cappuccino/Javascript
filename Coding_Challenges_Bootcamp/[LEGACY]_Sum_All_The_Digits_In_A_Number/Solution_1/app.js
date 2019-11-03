/*
Title: Sum all digits in a number
    Direction:
    // you are given a number
    // write a function takes the number
    // and return the sum of the all digits of the number
    Examples:
    adder(123) => return 6
    adder(1234) => return 10
    adder(8345) => return 20
*/

function adder(num) {
    let sum = 0;
    let arr = num.toString().split("");
    // for(let i=0; i<arr.length; i++) {
    //     sum += parseInt(arr[i]);
    // }
    for(let el of arr) {
        sum += parseInt(el)
    }
    return sum;
}

console.log(adder(1234));