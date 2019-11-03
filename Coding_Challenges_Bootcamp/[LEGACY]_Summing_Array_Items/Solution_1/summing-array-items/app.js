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

