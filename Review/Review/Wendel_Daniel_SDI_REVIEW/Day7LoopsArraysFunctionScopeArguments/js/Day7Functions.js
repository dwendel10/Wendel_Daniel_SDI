/*
 Daniel Wendel
 Section 00
 3-17-2015
 Day 7 Functions
 */

//alert("test");

//Function call printHello before it is defined in our code
printHello();


//Basic structure of a function
// function functionName(){Code to run}

//Create a function that will console log out hello

function printHello(){
    console.log("Hello!");
}

//Create a function that prints out more text.
function printMore(){
    console.log("prints more text");
}

function funny(){
    console.log("That's funny");
}
//Function call the print hello function
//Go button is functionName ();

printHello();
printHello();
printMore();
funny();


//Create a function that calculates the area of a rectangle

function calcArea(){
    //create variables for width height and area
    var width = prompt("Enter the width");
    var height = prompt("Enter the height");
    var area = width * height;
    //Print out the area
    console.log("This area is " +area);
}
calcArea();