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
	let result = 0;
	arr.forEach((el) => {
		result += el;
	});
	return result;
}

console.log(sumArrEl([2, 4, 5, 6]));
