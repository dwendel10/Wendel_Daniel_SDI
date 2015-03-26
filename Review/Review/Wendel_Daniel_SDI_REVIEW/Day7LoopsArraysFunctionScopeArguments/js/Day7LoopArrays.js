/*
 Daniel Wendel
 Section 00
 3-17-2015
 Day 7 Loop Arrays
 */


//alert("Arrays tho");


//Tell each member of the scooby gang that they solved a mystery.

//Create array of gang members

var names = ["Scooby-Doo", "Shaggy", "Velma", "Daphne", "Fred"];

//add scrapy to the gang
//use the push command
names.push("Scrappy");


//Create for loop to cycle through the array

for(var i = 0;i<names.length; i++){

    //console log each person
    console.log("You solved the case "+names[i]);
}


// Keep track of our bills and get the total and average.

var bills = [50, 10, 5, 20, 10, 60, 70];

//Create variables for total

var total = 0;
var average = 0;

//Create a variable to track the item total

var numItems = 0;

for(var j = 0; j < bills.length; j++){


   // Only add them if they are = or over 15.
    if(bills[j] >= 15){
        //Add each bill to the total
        total+= bills[j];
        numItems++
    }



}


console.log("The total is "+total);

//calculate the average

average = total/numItems;

console.log("The average is "+average );

