/*
Title: Heighest/Lowest sum of two array items
::Direction::
// given an array of numbers
// write a function that takes the array
// return heighest/lowest sum of two items of the array
Examples:
// Heighest
heighest_sum([4, 3, 9, 8, 2, 1]) => return 17
heighest_sum([100, 400, 140, 345, 145]) => return 745
// Lowest
lowest_sum([4, 3, 9, 8, 2, 1]) => return 3
lowest_sum([100, 400, 140, 345, 145]) => return 240
*/

function heighest_sum(arr) {
    let asc_arr = arr.sort((a, b) => {
        return b - a;
    });
    return asc_arr[0] + asc_arr[1];
}

console.log(heighest_sum([100, 400, 140, 345, 145]));