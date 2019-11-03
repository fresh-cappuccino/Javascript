/*
Title: Falsy Bouncer
::Direction::
    // given an array
    // write a function that takes the array
    // remove all the falsy element
Examples:
bouncer([1, 2, 3, '', 0, false, null, undefined]) => [1, 2, 3]
*/

function bouncer(arr) {
    let result = [];
    for(let item of arr) {
        if(item) {
            result.push(item);
        }
    }
    return result;
}

console.log(bouncer([1, 2, 3, '', 0, false, null, undefined]));