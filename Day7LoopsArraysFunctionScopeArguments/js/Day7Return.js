/*
 Daniel Wendel
 Section 00
 3-17-2015
 Day 7 Return
 */
//alert("return");

//Return a value from our function to our main code

//Create a function to calculate the area of a rectangle

function calcArea(w,h){
    //Calculate area
    var area = w*h
console.log("Inside the function the area is "+area);
    //return the area to the main code.
    return area;
}

var rectArea = calcArea(10,20);
//Create a variable to catch the return value



//Console log the area
//console.log(area); doesnt work

console.log(rectArea);


//Create a function to calc the area of a circle
function circleArea(r){
    //calc area PI * r*r
    var area = Math.PI *r * r;
    //Return the value
    return area;

}

//Function call this circleArea
//create a variable to catch returned area
var circArea= circleArea(6);
//console.log results
console.log("This is the area of the circle "+circArea);

//What is twice the circle area of a 6" circle

var resultsTwice = circArea * 2;
console.log("Twice the area is "+resultsTwice);