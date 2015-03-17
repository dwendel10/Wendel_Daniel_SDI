/*
 Daniel Wendel
 Section 00
 3-17-2015
 Day 7 zombies
 */

//alert("Zombies!!!!!");



//Zombie attack!!!!!

// We have accedently created a zombie at full sail
//A zombie can bite 4 people a day and turn them to zombies the next day.
// The CDC wants to know how many zombies there will be in 8 days.


//Givens that we know

//How many zombies do we have
var numZombies = 1;

//How many bites per zombie per day

var numBites = 4;

//How many days that the CDC wants.

var days = 8;


//Create for loop to calculate zombie number
/*
for(var i = 1; i<= days; i++){

    // how many new zombies get made everyday
    var newZombies = numZombies * numBites;

    //Add the new zombies to our existing horde.

    numZombies+=newZombies;
    // Console.log results
    console.log("There are "+numZombies+" number of zombies on day #"+i+"!");

}*/

//How long will it take to get a million zombies.

var numDays = 1;

while(numZombies<= 1000000){
    // how many new zombies get made everyday
    var newZombies = numZombies * numBites;

    //Add the new zombies to our existing horde.

    numZombies+=newZombies;
    // Console.log results
    console.log("There are "+numZombies+" number of zombies on day "+numDays+"!");
    numDays++;

}
console.log("It will take "+(numDays-1)+" days to reach a million zombies. ");