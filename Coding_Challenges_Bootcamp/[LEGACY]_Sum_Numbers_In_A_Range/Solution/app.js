/*
Title: Sum numbers in a range
    Direction:
    // write a function that takes range of a number "9-11"
    // return the sum of number in between of the range
    Examples:
    sumInRange("1-4") => return 10 
    sumInRange("10-20") => return 165
*/

function sumInRange(range) {
    let sum = 0;
    let arr = range.split("-");
    for(let i=arr[0]; i<=arr[1]; i++) {
        sum += parseInt(i);
    }
    return sum;
}

console.log(sumInRange("1-4"));