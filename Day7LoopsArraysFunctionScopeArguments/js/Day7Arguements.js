/*
Daniel Wendel
Section 00
3-17-2015
Day 7 Arguments
*/
//alert("Test");




// Arguments Goes into the functions - part of the function call
//Parameters - catch the argument and in the function definition

//Create a function that calculates the area of a rectangle

//Add in parameters

function calcArea(w, h){
    //var width = 10;
    //var height = 20;
    var area = w * h;
    console.log("The area is "+area);

}

//call function!

//Add arguments to the function call
calcArea(10,20);
calcArea(20,40);

//Prompt the user to enter width and height
var width = prompt("Enter a width");
//ENTER VALIDATION!
var height = prompt("Enter a height");

calcArea(width,height);

//dog years
function dogYears(humanAge){
    //dog years = human years * 7
    var dogAge = humanAge * 7
    console.log("Your age in dog years is "+dogAge);
}

dogYears(4);

//prompt user
var userInput = prompt("Please enter your human age");
dogYears(userInput);

