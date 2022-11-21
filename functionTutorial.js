//Followng ToP I will attempt to make some neat functions

console.log("Functions in JS Tutorial");

//Adding 7 to argument
function add7(num){
    return(num+7);
}

//multiplication of two numbers
function multiply(num1, num2){
    return( num1*num2 );
}

//String as parameter and returns the string with first letter capitalized
// string.charAt(0) function that returns char at index X
// string.toUpperCase() returns upper case of string
// string.slice(start, end) slices string from index start to index end

// Essentially we grab the char at 0 and make it upper case and contanate it with the input sliced from char 1
function capitalize(stringInput){
    return(stringInput.charAt(0).toUpperCase() + stringInput.slice(1))
}

//Function called lastLetter return string and returns only the last letter of the string
function lastLetter(stringInput2){
    return(stringInput2.slice(-1));
}

console.log(add7(10));
console.log(multiply(  100, 100));
console.log(capitalize("capital"));
console.log(capitalize("CAPITAL"));
console.log(lastLetter("abcd"));