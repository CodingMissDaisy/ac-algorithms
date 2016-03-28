/*
Given two numbers, a, b, as inputs, return true if a > b,
return false if a < b, return 0 otherwise.

Bonus 1: If a or b is undefined or not a number, then return -1.
Hint: Chekout typeof() operator at
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof

*/

/**
Examples:

var result = isBigger(3,4);
console.log(result) // false

var result = isBigger(13,4);
console.log(result) // true

var result = isBigger(4.00001,4);
console.log(result) // true

var result = isBigger(4,4);
console.log(result) // 0

var result = isBigger("potato",4);
console.log(result) // -1

var result = isBigger("4",4);
console.log(result) // -1

var result = isBigger(3);
console.log(result) // -1

var result = isBigger();
console.log(result) // -1

**/

<<<<<<< HEAD


function isBigger(a, b) {
	if (typeof a !== "number" || typeof b !== "number"){
		console.log(-1);
	} else if (a > b){
		console.log(true);
	} else if (a < b){
		console.log(false);
	} else {
		console.log(0);
	}
}
isBigger(2, "hi");
=======
function isBigger (a,b) {
	if (typeof a !== "number" || typeof b !=="number"){
		return -1;
	}
	else {
		if (a > b){
			return true;
		}
		else if (a < b) {
			return false;
		}	
		else {
			return 0;
		}
	}
}

isBigger(3,"hello");
>>>>>>> 9410a70a0a1cbbbd1bcda74091881ba2a97a51cb
