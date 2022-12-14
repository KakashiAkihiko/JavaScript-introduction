console.log("Hello, World!")

//Variable declaration
let user = 'KayabaAkihiko';

//Multiple variable declarations in one statement.
let userAdvanced = 'Kayabaakihiko'
, age = 28
, message = 'Goodbye cruel cruel world';
// ^-- the above declaration is comma first style. Not sure if I like it or want to burn it.

//Alert will display a variable.
alert(message);

// ##### mini task ####### //
let admin;
let name;
name = 'John'; //is the assignment trolling? It tells me name is deprecated
//Supposedly local declaration is fine but global is NOT
admin = name;
alert(admin);

let ourPlanet = "earth";
let currentUser = "John";

/*
//In this example a is incremented and then stored.
//b is stored then incremented. Thus a=2, b=2, c=2 but d = 1!
let a = 1, b = 1;
let c = ++a;
let d = b++;

//A is set to multiplied by 2. So a = 4 and x = 5.
let a =2;
let x = 1 + (a *= 2);
*/

/*
//Evaluations
"" + 1 + 0 //String first so 10 concatenated
"" - 1 + 0 //String first but subtraction so -1 since no concatenation
true + false // will evaluate true so 1
6 / "3" // will be 2 as it converts
"2" * "3"// will convert so 6
4 +5 + "px"// = 9px as concatenation happens after the addition
"$" + 4 + 5// $45 as string first so concatenation
"4" - 2 // it will convert as no concatenation with subtraction so 2
"4px" - 2// NaN makes no sense
"-9   " +5// will be "-9  5" concatenation
"-9   " -5// -14 as subtraction so it will convert
null + 1// equal 1
undefined + 1// NaN as undefined
" \t \n" -2 // will be -2 apparently as carriage return and new line are whatever

*/
/*
The addition with a string "" + 1 converts 1 to a string: "" + 1 = "1", and then we have "1" + 0, the same rule is applied.
The subtraction - (like most math operations) only works with numbers, it converts an empty string "" to 0.
The addition with a string appends the number 5 to the string.
The subtraction always converts to numbers, so it makes " -9 " a number -9 (ignoring spaces around it).
null becomes 0 after the numeric conversion.
undefined becomes NaN after the numeric conversion.
Space characters are trimmed off string start and end when a string is converted to a number. Here the whole string consists of space characters, such as \t, \n and a ???regular??? space between them. So, similarly to an empty string, it becomes 0.
*/


/*
########## ASSIGNMENT ##########
*/
//1 Add 2 numbers together! (just type console.log(23 + 97) into your html file)
console.log(23+97);
//2 Add a sequence of 6 different numbers together.
console.log(1+2+3+4+5+6);
//3 Print the solution to the following equation: (4 + 6 + 9) / 77
// Answer should be approximately 0.24675
console.log((4+6+9)/77);
//4 
/*
Let???s use variables!
Type this statement at the top of the script tag: let a = 10
In the console console.log(a) should print 10
Try the following in the console: 9 * a
and this: let b = 7 * a (returns undefined *) and then console.log(b)
*/
let aa = 10;
console.log(aa);
console.log(9*aa);
console.log(bb = 7 * aa);
console.log(bb);

//5
/*
You should be getting the hang of this by now??? try this sequence:
Declare a constant variable max with the value 57
Set another variable actual to max - 13
Set another variable percentage to actual / max
If you type percentage in the console and press enter you should see a value like 0.7719
*/
const max = 57;
let actual = max - 13;
let percentage = actual / max;
console.log(percentage);