/*
Daniel Wendel
section 00
3-10-2015
Day 4 Ternary
 */

//alert("Testing 1 2 3")

// if your gpa is over 2.0 then you can graduate

// Create a variable for gpa
var gpa = 3.5

//Basic conditional
if(gpa > 2.0){
    console.log("You can graduate! ");

} else {
    console.log("Sorry bro, better luck next year ")
}


// (condition to test) ? code to run if true : code to run if false;

//Create a basic ternary function for our gpa

(gpa > 2.0) ? console.log("You can graduate! ") : console.log("sorry bro, better luck next year ");

// If a child is under 10 then they must read Green Eggs and Ham otherwise, they can read the time machine

//Create a variable for child age and for the book they have to read

var age = 16;

var book;


//Use a ternary to define the book

book = (age <10) ? "Green Eggs and Ham" : "The Time Machine";
console.log("The kid should read "+book+"." );

// Value of book if basic conditional

var bookBasic;

if(age<10){
    bookBasic = "Green Eggs and Ham"
} else {
    bookBasic = "The Time Machine"
}
console.log()bookBasic;

