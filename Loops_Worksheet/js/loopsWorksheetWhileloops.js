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
var userAge = currentYear - userBirthDay;


while(isNaN(userAge) || userAge ===""){
    if(userAge === ""){
        userAge = prompt("Please do not leave this blank and only use numbers.\nPlease enter the year you were born.")

    } else if(isNaN(userAge)){
        userAge = prompt("Please only use numbers!");
    }
}
console.log(userAge);
