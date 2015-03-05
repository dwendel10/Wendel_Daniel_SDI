/*
Daniel Wendel
03/05/2015
Section 00
Day 2 intro
 */

//alert("Testing to see if connected");

/*
Example of a multiline comment
anything inside of here will not be seen by the computer
 */

// Single line comment uses double slashes. ONLY this line will be ignored.

// alert boxes- pop up box that will alert the user with information. The spelling of alert needs to be lower case.
alert("Text that the user will see.");

// files with . in front of them are hidden files
// green means new in git. red is change. white no change.

//Console.log - shows information to the programmer
// great for checking values and debugging
//Also shows all errors
console.log("This is the console");

// declare a variable
// use the key work of var <== needs to be lower case
var whatever1;

//define the variable
//sets the value of the existing variable
whatever1 = 42;

//console.log the variable
console.log("The variable whatever1 is");
console.log(whatever1);

//Declare and define a variable at the same time.
var a = 2;
console.log(a);

a+3;
a = a+3;
console.log(a);

// declare new variable
var b;
//define this variable using an existing variable
b = a+3;
console.log(a);
console.log(b);

// simple math
// find our ages

//Declare and define the year we were born
var yearBorn = 1992;


//2015 - year we are born

var ourAge = 2015-yearBorn
console.log(ourAge);

//Talk about math
// +, -, *, /

//Find the area of a triangle
// base* height/2

var base = 8;
var height = 5;

var areaTriangle= base * height/ 2;
console.log(areaTriangle);

// Modulo = %
// Gives the remainder

//sparky uses modulo

var decimal = 32/10;
console.log(decimal);

var remainder =32%10;
console.log(remainder);

//Find out if even or odd
//Modulo %2 1=odd  0=even
var evenOrOdd = 67%2;
console.log(evenOrOdd);

//Assignment operators
/*
= Assigns the value to the variable
++ adds 1 to the current value of the variable
-- subtracts one from the current value of the variable
+= # adds the number to the current value of the variable
-= subtracts the number from the current value of the variable
/= divides the current value by the #
*= # multiply the current value by the number
 */
var assign = 0;

//++ is the same as assign = assign+1;
assign++;
console.log(assign);

//-- is the same as assign = assign-1;
assign--;
console.log(assign);

//+= # same as assign = assign + #;

assign +=5; // assign = assign +5;
console.log(assign);

//-= # same as assign = assign -#;

assign -=2;
console.log(assign);

// / equals is the same as assign = assign /#;

assign /=3;
console.log(assign);

// *= same as assign = assign *#;

assign *= 7;
console.log(assign);

// strings - any text that we use;
// quotes are needed to distinguish between variables and plan text;

var kermit = "light green";
var frogName = "kermit";
console.log(frogName);

// To double quote or not to double quote;
// Can use an escape character \ backslash in front of the ';
var phrase = 'I don\'t know';
console.log(phrase);

// Escape character can also do multiple lines \n - new line character;

var pharse2 = "I don't know. \nYou never do!";
console.log(pharse2);

//Boolean - kind of like a light switch
// Either true or false
// NOT a text string!!! and must be lower case.

var yes = true;

var no = false;

//Order of operations;
//PEMDAS;
//Parenthesis, Exponents, Multiplication, Division, Add, Subtraction;

// Find the average quiz grade
var quiz1 = 87;
var quiz2= 100;
var quiz3 = 90;

//Average - add them and divide by number of quizes;
// using parenthesis will make what ever inside be used first;

var average = (quiz1 + quiz2 + quiz3) /3;

console.log(average);


//Concatenation - combining text strings
//use the + plus sign - add and concatenation

var firstName = "Kermit";
var lastName = "The Frog";
var fullName = firstName +" "+ lastName
console.log(fullName);

var d = "6";
var e = "7";
// If you want the text string to be a number you have to cast it.;
//Number();
//NaN is short for not a number;
var combined = d+e;
console.log(combined);

//var pi = 3.14 use this for homework;
// To round a number we use the .toFix(#) method

var num= 5.678912345;

//Round to 2 decimal places
var n = num.toFixed(2);
console.log(n);
