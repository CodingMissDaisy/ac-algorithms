//Code Breaking Extravaganza!

//Return an English translated sentence of the passed binary string.

//The binary string will be space separated.

//Here are some helpful links:

// String.prototype.charCodeAt() 
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt

//String.fromCharCode()
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode


//Input = A string of binary code
//Outpt = string of words

function binaryCode(str) {
//put string into an array and split @ the spaces
  var unicode = str.split(" ");
  var translate = [];

  for (var i = 0; i < unicode.length; i++){
//translate unicode of 8 numbers each, into letters
  	   translate.push(String.fromCharCode(parseInt(unicode[i], 2)));
  }
//join letters together
		translate= translate.join("");
		console.log(translate);
}


binaryCode("01000011 01101111 01100100 01101001 01101110 01100111 00100000 01101001 01110011 00100000 01110100 01101000 01100101 00100000 01100010 01100101 01110011 01110100 00101110");


//Other Test Cases, what are these saying?

binaryCode("01001100 01100101 01110100 01110011 00100000 01000100 01100001 01101110 01100011 01100101 00100000 01101101 01101111 01110010 01100101");

binaryCode("01001000 01101111 01110111 00100000 01101101 01110101 01100011 01101000 00100000 01110111 01101111 01101111 01100100 00100000 01100011 01101111 01110101 01101100 01100100 00100000 01100001 00100000 01110111 01101111 01101111 01100100 01100011 01101000 01110101 01100011 01101011 00100000 01100011 01101000 01110101 01100011 01101011 00100000 01101001 01100110 00100000 01100001 00100000 01110111 01101111 01101111 01100100 00100000 01100011 01101000 01110101 01100011 01101011 00100000 01100011 01101111 01110101 01101100 01100100 00100000 01100011 01101000 01110101 01100011 01101011 00100000 01110111 01101111 01101111 01100100 00111111");
