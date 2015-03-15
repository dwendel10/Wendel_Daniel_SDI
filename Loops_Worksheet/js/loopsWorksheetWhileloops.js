/*
Daniel Wendel
Section 00
3-14-2015
Loops Work Sheet
 */

//alert("Am i working? ");

// Create a while loop
// Create calculator to find out age of the user.


var userBirthDay = prompt("Please enter the year you were born:");
var currentYear = 2015;
var userAge = 0;

while(isNaN(userBirthDay) || (userBirthDay ==="")){
    if(userBirthDay === ""){
        userBirthDay = prompt("Please do not leave blank and only use numbers.\nPlease enter the year you were born.");

    } else if(isNaN(userBirthDay)){
        userBirthDay = prompt("Please only use numbers!");
    }
}

userAge = currentYear - userBirthDay;

console.log("This is your current age " +userAge+".");
