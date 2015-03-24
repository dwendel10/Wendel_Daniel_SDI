/**
 Daniel Wendel
 3/24/15
 Section 00
 Day 8 Multiples
 */
//alert("Yo");



//create multiple functions using information from the user

//Calculate the perimeter and area of a rectangle

function periRect(w,h){
    //perimeter = 2 * w + 2 * h
    var p = 2 * w + 2 * h;
    return p;

}
//Create an anon function for the area

var areaRect = function(w,h){
    var area = w * h;
    return area;

};

//Prompt user for width and height
var width =prompt("Lets figure out the perimeter and area of a rectangle.\nPlease enter a width.");

//validation
while(width === "" || isNaN(width)){
    //re-prompt user
    width = prompt("Please do not leave blank and only use numbers.\n What is your width");

}
//ParseInt
width = parseInt(width);

//Prompt user for the height
var height = prompt("What is the height of the rectangle:");

//validation
while(height === "" || isNaN(height)){
    //Re-Prompt
    height = prompt("Please do not leave blank and only use numbers. \n What is the height");

}
//ParseInt
height = parseInt(height);

//function calls

var resultsPeri = periRect(width,height);
var resultArea = areaRect(width,height);

//combined console.log
console.log("The perimeter of your rectangle is "+resultsPeri+ " and the area is "+resultArea+".");


//Create a combined function

function combinedRect(w,h){
    //First calculate the perimeter
    var p = 2 * w + 2 * h;

    //calc area
    var a = w * h;

    return [p,a];

}

//function call the combined array

var combinedResults = combinedRect(width,height);

console.log(combinedResults);
console.log("The perimeter of your rectangle is "+combinedResults[0]+ " and the area is "+combinedResults[1]+".");