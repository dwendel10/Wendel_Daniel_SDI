/*
Daniel Wendel
Section 00
3-7-2015
Day 3 prompts
 */

//alert("Testing!!!");

//Ask the user for input
//Prompt("Text that the user will see")

var userInput =prompt("Enter year of birth:");
console.log(userInput);

// Calculate the area of a rectangle
//length * width

// Prompt the user for the width and height
// Explain to them what is going on.
var height = prompt("Lets calculate the area of a rectangle! \nPlease enter the height of the rectangle");
var width = prompt("Please enter the width of the rectangle");

//Calculate the area of the rectangle
var area = width * height;

//Tell the user the answer
console.log("The area of the rectangle with a height of "+height+" and a width of "+width+" is the following " + area+".");
//Another way to get the results.
var results = "The results of the area are " + area;
console.log(results);
