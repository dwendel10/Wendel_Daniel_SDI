/*
 Daniel Wendel
 Section 00
 3-17-2015
 Functions Worksheet
 */

//alert("Work Time");

//Finding the circumference of a circle

function calcCircumference(p,r){
    var circumference = 2 * p * r;
    console.log("The circumference of the circle is "+circumference);
}
var p = 3.14;
var r = prompt("Please enter the radius.");

calcCircumference(p,r);


//How many bee stings!?

function beeStings(w,k){
    //Amount of stings
    var s = 8.66;

    console.log("It will take "+k+" to kill this animal.");
}

//Amount of stings
var s = 8.66;

//Animals weight

var w = prompt("Please enter the animals weight.");
//how many to kill

var k = w * s ;

beeStings(w,k);
