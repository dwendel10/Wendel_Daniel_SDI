/*
 Daniel Wendel
 03/05/2015
 Section 00
 Instructional Assignment: Expressions
 */


//alert("This is a test!");




//calculate how much pizza each person attending the party will get.

var slicesPerPizza = 8;
var peopleAtParty = 15;
var pizzasOrdered = 7;

// total amount of pizza - 56;


//next line is finding out how much pizza there is in total.;

var amountOfPizza = slicesPerPizza * pizzasOrdered;
console.log("The total amount of pizza is " + amountOfPizza);

//3.73 pieces per person

//dividing the amount of pizza by how many people are at the party.;

var pizzaPerPerson = amountOfPizza / peopleAtParty;
console.log("The amount of pizza per person is " + pizzaPerPerson);


//Pizza for sparky;

var pizzaForSparky = amountOfPizza%peopleAtParty;
console.log("Sparky will get this much pizza " + pizzaForSparky);



//Average shopping bill. Calculate the average amount spent on groceries.;


var week1 = 50.00;
var week2 = 75.00;
var week3 = 60.00;
var week4 = 65.00;
var week5 = 90.00;

var total = (week1 + week2 + week3 + week4 + week5);
var average = total /5;

console.log("You have spent a total of " +total+ " on groceries over the last 5 weeks.Your weekly cost is " + average);




// Calculating discounted price for items.;

var originalPrice = 200;
var discountPercent = 25;
var discountDecimal = discountPercent/100;
var item = "shoe";
var salesTax = 6.5;
var salesTaxDecimal = salesTax/100

var discountWithOutTax = originalPrice * discountDecimal;
var priceWithoutTax = originalPrice - discountWithOutTax;
console.log("Your shoes were originally $"+originalPrice+", but after a "+discountPercent+"% discount without tax it is now $" + priceWithoutTax);

var howMuchTax = originalPrice * salesTaxDecimal;
var priceWithTax = priceWithoutTax + howMuchTax;
console.log("Your shoes were originally $"+originalPrice+", but after a "+discountPercent+"% discount with tax it is now $" + priceWithTax);