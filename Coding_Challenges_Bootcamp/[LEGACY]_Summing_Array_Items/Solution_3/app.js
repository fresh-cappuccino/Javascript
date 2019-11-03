/*
Coding Challenge: Summing Array Items
    //Direction
    Given an array
    Write a function name sumArrItems
    That takes an array and return the sum of the array items
    //Examples
    sumArrItems([1, 2, 3, 4]) => return 10
    sumArrItems([2, 4, 5, 6]) => return 17
*/

/*
Method 1
// create an array of integers
let integers = [1, 2, 3, 4];

function sumArrItems(arr) {
	// create a variable to hold the sum
	let sum = 0;

	// looping through the array increment the sum variable
	for(let i=0; i<arr.length; i++) {
		sum += arr[i];
	}

	return sum;
}

console.log(sumArrItems(integers));
*/

/*
Method 2
let integers = [1, 2, 3, 4];

function sumArrItems(arr) {
	let sum = 0;
	arr.forEach((integer) => {
		sum += integer;
	})
	return sum;
}

console.log(sumArrItems(integers));
*/


// Method 3
let integers = [5, 6];

function sumArrItems(arr) {
	return arr.reduce((sum, current) => {
		return sum + current;
	}, 0);
}

console.log(sumArrItems(integers));
