/*
Daniel Wendel
Section 00
3-14-2015
Day 6 Validation
 */

//alert("Last one");



// Ask the user for a number
var num1 = prompt("Please enter a number:");
//Validate that the user typed in a number OR didn't leave it blank

//validate using a while loop
while(isNaN(num1) || num1==="" ){
    //re prompt the user

    if(num1===""){
        //the user left it blank
        num1 = prompt("Please do not leave blank. \n Please type in a number.");

    } else if (isNaN(num1)){
        num1 = prompt("Please only type in numbers.")

    }

}



// Ask the user a yes or no question

var userInput = prompt("Please enter yes or no:");
//convert to lower case
userInput = userInput.toLowerCase();

//Validate
while(userInput != "yes" && userInput != "no" && userInput != "nope" ){

    //Re-prompt
    userInput = prompt("Please only enter yes or no!\nPlease type in yes or no.");


}












