/*
Daniel Wendel
03-10-2015
Section 00
Conditionals Worksheet
 */

//alert("LAB TIME!!!!!!!!")

// last chance for gas

var gasMPG = prompt("Please enter your cars MPG. ");
var gasTank = prompt("Please enter your current gas tank percentage on a scale from 0 - 100 . ");
var gasCapacity = prompt("Please enter your cars gas tank capacity. ");
var distance = 200;

var actualGallons = gasCapacity * (gasTank / 100);

// MPG distance / gallons
var actualMPG = actualGallons * gasMPG;

// if actualMPG > gasMPG you can make it

if(actualMPG > actualDistance){
    console.log("You can make it! ");
} else {
    console.log("You cannot make it :( ");
}



// Celsius to Fahrenheit converter
// create a variable for fahrenheit and celsius

var degrees = prompt("Please enter your current temperature ");


