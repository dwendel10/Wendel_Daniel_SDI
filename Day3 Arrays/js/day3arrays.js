/*
Daniel Wendel
03/07/2015
section 00
Day 3 Arrays
 */

//alert("Testing to make sure this works sucka");

// Create a basic array
var avengersNames = ["Thor","Hulk","IronMan","CaptainAmerica" ];

//Print put whole array

console.log(avengersNames);

//Print out one specific item in array.
console.log(avengersNames[2]);

//Swap items in our array

avengersNames[1] = "Black widow";
console.log(avengersNames);


//Use a variable for the index number
var num = 3;
console.log(avengersNames[num]);

//Find the length of an array
//length property = How many items are in the array.
//dot syntax - fancy for use a period(.)
console.log(avengersNames.length);

//Add an item to our array

avengersNames[4] = "Hawkeye";

avengersNames[avengersNames.length] = "Wolverine";
console.log(avengersNames);

//Picking oranges
var orangesPicked = [13,350,1000, 600];

//How many oranges did we pick in total
var totalOranges = orangesPicked[1] + orangesPicked[2] + orangesPicked[0] +orangesPicked[3];
console.log(totalOranges);

console.log("The total number of oranges picked is " + totalOranges);

var averageOranges = totalOranges/orangesPicked.length;
console.log("the average number of oranges picked per day is " +averageOranges+".");

// Create an array of fruit
var fruitBowl = ["apple", "mango", "bananas", "grapes"];

console.log(fruitBowl);

// push - add item in to the next open spot
// dot syntax - use a period
fruitBowl.push("strawberry");
console.log(fruitBowl);
fruitBowl.push("pineapple");
console.log(fruitBowl);

//pop () - removes the last item from the array
// also returns that item.
var caughtItem = fruitBowl.pop();
console.log(fruitBowl);
console.log(caughtItem);


