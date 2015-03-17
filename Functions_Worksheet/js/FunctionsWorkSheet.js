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