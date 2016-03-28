/*
Given a number of minutes as an integer, return an object with two properties,
"hour" and "minute", which is equivalent to the input minutes.
Hint: Check out Math.floor function at
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
Hint: Check out remainder operator at
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder

Bonus 1: Add "day" property

Bonus 2: return -1 if the input is not a number or if 
it is a negative number
*/

/**
Examples:

var result = getReadableTime(102);
console.log(result) // Object {minute: 42, hour: 1}

var result = getReadableTime(12);
console.log(result) // Object {minute: 12, hour: 0}

var result = getReadableTime(1002);
console.log(result) // Object {minute: 42, hour: 16}

var result = getReadableTime(10002);
console.log(result) // Object {minute: 42, hour: 22, day: 6}

var result = getReadableTime("10002");
console.log(result) // -1

var result = getReadableTime();
console.log(result) // -1

var result = getReadableTime(-12);
console.log(result) // -1

**/

<<<<<<< HEAD
<<<<<<< HEAD
function getReadableTime(minutes){
	var time = {
		day :0,
		minute : 0,
		day: 0
	};
	var totalHour = Math.floor(minutes / 60);
	var addMinute = minutes - (totalHours * 60);
	var addDay = Math.floor(totalHours / 24);
	var remainingTime = totalHours - (addDay * 24);
	time.hour = remainingTime;
	time.minute = addMinute;
	console.log(time);
};
getReadableTime(200);


=======
 


function getReadableTime(minutes) {
	var object = {};
	var totalHour = Math.floor(minutes/60);
	var dayforObject = Math.floor(totalHour/24);
	var remainingHour =totalHour - (dayforObject*24);
	var minutesforObject= minutes % 60;
	object.hour = remainingHour;
	object.minutes = minutesforObject;
	object.day = dayforObject;
	console.log(object);
}

getReadableTime(120);
>>>>>>> 9410a70a0a1cbbbd1bcda74091881ba2a97a51cb
=======


function getReadableTime(minutes) {
	//Your code here
	
}
>>>>>>> 877fe89d7b0d4fda1b1394bd7bb273f97c522a99
