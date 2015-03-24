/**
 Daniel Wendel
 3/24/15
 Section 00
 Day 8 procedures
 */

//alert("YO");

//this is a basic function

function calcAreaF(w,h){
    var area = w * h
    return area;
}


//Function call
var area = calcAreaF(6,8);
console.log("the area is:"+area);


//This is a procedure

//List of steps to do

function calcAreaP(w,h){
    var area = w * h;

    //We do not return this value
    console.log("Inside the procedure the area is "+area);
}


//Function call for the procedure?
//Just the function name does not need variable
calcAreaP(12,16);
