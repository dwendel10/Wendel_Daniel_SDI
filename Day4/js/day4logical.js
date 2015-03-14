/*
Daniel Wendel
Section 00
3-10-2015
Day 4 Logical
 */

//alert("yo");



//basic conditional, if we have enough money to buy a car

// create a few variables
var budget = 25000;
var carPrice = 23000;
var payCheck = 1600;

if(budget>= carPrice){
    console.log("You can afford your car ");
} else {
    console.log("You broke! Take the bus! ");
}

// We can buy the car if the budget is greater than or equal to the car price OR our paycheck is more than 1500.


if(budget>= carPrice ||payCheck > 1500 ){
    console.log("You can buy the car! ");

} else{
    console.log("You need to leave. ");
}

/*
Truth table for || "Or"
t || t = t
t || f = t
f || t = t
f || f = f
 */
/*
 truth table for && "And"
 t && t = t
 t && f = f
 f && t= f
 f && f = f
 */

// You can buy the car if the budget is greater than or equal to the car price AND your paycheck is over 1500

if(budget>= carPrice && payCheck > 1500){
    console.log("You can buy this car ");

} else {
    console.log("Pick a cheaper car or get a better job ");
}


