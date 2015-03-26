/*
Daniel Wendel
Section 00
3-26-2015
Day 9 Pizza
 */

//alert("test");

//Figure out how much pizza cost per slice and cost per sq inch

//Prompt user for radius of pizza

var pizzaRadius = prompt("Welcome lets calculate the cost of your pizza. \nWhat is the radius of your pizza?");

// validate
while(isNaN(pizzaRadius) || pizzaRadius === ""){
    //Re-Prompt
    pizzaRadius = prompt("Please do not leave blank and only use numbers.\n What is the radius of your pizza");

}

//prompt the user for the cost of the whole pizza

do {

    var pizzaCost = prompt("How much does your pizza cost in total? \n Reminder please do not leave blank and only use numbers.");


} while(isNaN(pizzaCost) || pizzaCost === "");


// prompt user for how many slices are in their pizza

do{
    var pizzaSlices = prompt("How many slices are in your pizza? \n Reminder only use numbers and do not leave blank.");

} while(isNaN(pizzaSlices) || pizzaSlices === "");



//Function call to lordFunction

var results = lordFunction(pizzaRadius, pizzaCost, pizzaSlices);

//Console.log
console.log("Your pizza costs $"+results[0]+" per square inch or $"+results[1]+" per slice.");




//Create a function that will run all of the other functions.
function lordFunction(radius,cost,slices){
    //function will call the other 3 functions and return the values

    //call the area function and capture the answer

    var area = pizzaArea(radius);

    //Call the function for sq inch cost

    var sqInchCost = pizzaSqInchCost(area,cost);

    //call the function for slices

    var sliceCost = pricePerSlice(slices,cost);

    //Return the answers to main code

    return [sqInchCost,sliceCost];
}





// Function that calculates the area of the pizza

function pizzaArea(r){
    // area = r * r * PI
    var area  = r * r * Math.PI;
    return area;
}

// Function that calculates the price per sq inch of pizza

function pizzaSqInchCost(area, price){
    //Price / area
    var costPerSqInch = area / price;

    //We should round this number to the nearest cent by using the .toFixed command
    costPerSqInch = costPerSqInch.toFixed(2);
    return costPerSqInch;
}


//Function that calculates the price per slice

function pricePerSlice(slices, price){
    var costPerSlice = price / slices;
    //round to 2 decimals
    costPerSlice = costPerSlice.toFixed(2);
    return costPerSlice;
}
