/**
 Daniel Wendel
 3/24/15
 Section 00
 Day 8 Random
 */

//alert("yo");



//Create a function that will give us a random integer between two values


//create variables for min and max

var min = prompt("Lets find a random number between two values. \nPlease enter your min value. ");

//Validate min value

while(isNaN(min) || min === "" ){

    // Re-Prompt

    min = prompt("Please do not leave blank and only use numbers.\n What is the min value? ");
}

var max = prompt("Please enter a max value:");

while(isNaN(max) || max === "" || parseInt(max) <= parseInt(min)) {

    max = prompt("Please do not leave blank and only use numbers. \nWhat is the max value? ");


    if(isNaN(max)){
        max = prompt("Please only use numbers. \nWhat is the max value? ");


    } else if(max ===""){
        max = prompt("Please do not leave blank. \nWhat is the max value? ");


    } else if(max<=min){
        max = prompt("Please enter a higher value than your min number of " +min+ "\n What is the max value");
    }
}




//Function call
var ranNum = getRandom(min,max);
console.log("Your random number between " +min+" and " +max+ " is "+ranNum);


//create function

function getRandom(min,max){

    //generate a random integer
    var randomNumber = Math.round(Math.random()*(max-min)+parseInt(min));
    //Return allows you to use in your main code
    return randomNumber;
}


//15 random numbers - console.log them out

for(var i =0 ; i<15; i++ ){
    //This will give the same number 15 times

    //console.log(ranNum);

    console.log(getRandom(min,max));
}
