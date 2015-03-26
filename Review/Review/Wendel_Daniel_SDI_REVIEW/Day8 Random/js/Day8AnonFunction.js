/**
 Daniel Wendel
 3/24/15
 Section 00
 Day 8 Anonymous Functions
 */
//alert("yo");





//Basic function
/*
function functionName(){


}
 */

//Anon function
/*
var functionName = function(){


}
 */

// The anon functions are extremely popular in JS and jQuery

//Highly used in Object Oriented Programming

//Quick and easy

// You can use either a basic or a anon function - FOR NOW


//Function calls above the definitions
var basicArea2 = triangleArea(2,9);
console.log("The area from then basic function before the definition is "+basicArea2);

/*

THIS DOES NOT WORK!!!!!!!!!!!!!!!!! DO NOT PUT IT ABOVE THE DEFINITION!!!!!

 */

// /Anon function call

//var anonArea2 = triangleAreaAnon(3,4);

//console.log("The area from the anon function before the definition is "+anonArea2);


//Build a basic function for area of a triangle

function triangleArea(b,h){
    // calc area
    var area = .5 * b * h;
    return area;
}

//Anon Function
var triangleAreaAnon = function(b,h){
    var area = .5 * b * h;

  return area;
};


//Function call to Basic function
var basicArea = triangleArea(5,6);
console.log("The area of from the basic function is "+basicArea);

//function call to the anon function
var anonArea = triangleAreaAnon(4,5);
console.log("The area from the anon function is "+anonArea);
