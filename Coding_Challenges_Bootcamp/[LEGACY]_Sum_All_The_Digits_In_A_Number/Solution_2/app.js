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

/*
Method 1
function adder(num) {
    let sum = 0;
    let str = num.toString();
    // for(let i=0; i<str.length; i++) {
    //     sum += parseInt(str[i]);
    // }
    for(let el of str) {
        sum += parseInt(el)
    }
    return sum;
}

console.log(adder(1234));
*/

function adder(num) {
    let sum = 0;
    let arr = num.toString().split("");
    arr.forEach((item) => {
        sum += parseInt(item);
    })
    return sum;
}

console.log(adder(1234));
