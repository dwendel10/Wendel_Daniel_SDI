/*
Daniel Wendel
Section 00
3-14-2015
Day 6 Math
 */
//alert("Check this out");

//Math.round() - Basic rounding .5+ goes up and .499 and lower goes down

var num1 = 9.544;
console.log(num1);
console.log(Math.round(num1));




// Math.floor() - Always rounds down "Floors it"
var num2 = 6.1;
console.log(num2);
console.log(Math.floor(num2));


//Math.ceil - Always rounds up if there is a decimal "Ceiling is up!"

var num3 = 4.8
console.log(num3);
console.log(Math.ceil(num3));

//Math.random() - Returns a number between 0 and almost 1 (
var num4 = Math.random();
console.log(num4);


//Random number between 0-10
var num5 = Math.random() * 10;
console.log(num5);



//Random integer between 0-100
var num6 =Math.round(Math.random() * 100);
console.log(num6);

//Random number between two numbers that does not start at 0

//Math.random() * (max-min) + min

//A random number between 50 - 80
var num7 = Math.round(Math.random() * (80-50) + 50);
console.log(num7);


//Math Object Constant
// Area of a circle = Radius * Radius * Pi
//Math.PI - this gives you the true value of PI

var radius = 7;
var areaCircle = radius * radius * Math.PI;

// .toFixed(#) choose how may decimal places you want.


console.log(areaCircle.toFixed(2));








