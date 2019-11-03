/*
Title: Word counter
	Direction:
	// write a function that takes one strings and 
	// return the number of word that contains in the strings
	Examples:
	wordCounter("The quick brown fox jump over the lazy dog") => return 9
*/

let str = "The quick brown fox jump the lazy dog";

function wordCounter(str) {
	let arr = str.split(" ");
	return arr.length;
}

console.log(wordCounter(str));