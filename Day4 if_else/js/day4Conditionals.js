/*
Daniel Wendel
Section 00
03/10/2015
Day 4 Conditionals
 */

//alert("What it do tho");

//Basic conditionals
/*
if (conditions to test){
    console.log(); code to run if the condition is true
 }
 */

// Create a boolean variable

var oldEnough = false;

//if the kid is old enough he can ride the ride
if(oldEnough){
    //code to run if the kid is old enough
    console.log("The kid is old enough to ride the coaster. ");
} else {
    //Code to run if the kid is not old enough
    console.log("Sorry sucka your to young ");
}



// Relational Operators

// If the kid is over 48 inches tall, then he can ride the coaster
var kidHeight = 47;

// Create a variable for the minimum height requirements
var minHeight = 48;

//Create a variable for sneaker lifts
var sneakerLifts = 2

// Test the kids height
if(kidHeight > minHeight){
    console.log("kid is tall enough to ride the coaster! ");
// else if means always do this test
} else if(kidHeight + sneakerLifts > minHeight){
    console.log("If you use enough napkins, you can ride the ride! ");
}else{
    console.log("You are not tall enough kid ");
}

