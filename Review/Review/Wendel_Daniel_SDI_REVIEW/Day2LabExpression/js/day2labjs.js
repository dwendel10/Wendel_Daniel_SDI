/*
 Daniel Wendel
 03/05/2015
 Section 00
 Instructional Assignment: Expressions
 */


//alert("This is a test!");




//calculate how much pizza each person attending the party will get.

var slicesPerPizza = prompt("Hello, today we are going to find out how much pizza everyone at the party will get. \nPlease enter the amount of slices per pizza.");

//validate
while(isNaN(slicesPerPizza) || slicesPerPizza ===""){
    slicesPerPizza = prompt("Please do not leave blank and only use numbers.\n Enter the amount of slices per pizza.");
}

var peopleAtParty = prompt("Please enter the amount of people at the party.");
//validate
while(isNaN(peopleAtParty) || peopleAtParty === ""){
    peopleAtParty = prompt("Please do not leave blank and only use numbers.\n Enter how many people are at the party.");

}

var pizzasOrdered = prompt("Please enter the amount of pizza's you ordered.");
//validate
while(isNaN(pizzasOrdered) || pizzasOrdered ===""){
    pizzasOrdered = prompt("Please do not leave blank and only use numbers.\n Enter how many people are at the party.");
}


//next line is finding out how much pizza there is in total.

var amountOfPizza = slicesPerPizza * pizzasOrdered;
console.log("The total amount of pizza is " + amountOfPizza);


//dividing the amount of pizza by how many people are at the party.

var pizzaPerPerson = amountOfPizza / peopleAtParty;
console.log("The amount of pizza per person is " + Math.round(pizzaPerPerson));


//Pizza for sparky

var pizzaForSparky = amountOfPizza%peopleAtParty;
console.log("Sparky will get this much pizza " + pizzaForSparky);



//Average shopping bill. Calculate the average amount spent on groceries.
var week1 = parseInt(prompt("Hello, we are going to find out your average amount spent on groceries every 5 weeks. Please enter week 1 expense"));
while(isNaN(week1) || week1 ==="") {
    week1 = parseInt(prompt("Please do not leave blank and only use numbers. Enter week 1 expense."));
}

var week2 = parseInt(prompt ("Please enter week 2 expense"));
while(week2 === "" || isNaN(week2)){
    week2 = parseInt(prompt("Please do not leave blank and only use numbers. Enter week 2 expense."));
}

var week3 = parseInt(prompt ("Please enter week 3 expense"));
while(week3 === "" || isNaN(week3)){
    week3 = parseInt(prompt("Please do not leave blank and only use numbers. Enter week 3 expense."));
}

var week4 = parseInt(prompt ("Please enter week 4 expense"));
while(week4 === "" || isNaN(week4)){
    week4 = parseInt(prompt("Please do not leave blank and only use numbers. Enter week 4 expense."));
}

var week5 = parseInt(prompt ("Please enter week 5 expense"));
while(week5 === "" || isNaN(week5)) {
    week5 = parseInt(prompt("Please do not leave blank and only use numbers. Enter week 5 expense."));
}
var total = week1 + week2 + week3 + week4 + week5;
var average = total /5;

console.log("You have spent a total of " +total+ " on groceries over the last 5 weeks.Your weekly cost is " + average);


// Calculating discounted price for items.



var originalPrice = prompt("Please enter the price of the item.");

//validate
while(isNaN(originalPrice)|| originalPrice ===""){

   originalPrice = prompt("Please do not leave blank and only use numbers.\n Enter the price of the item.");
}

var discountPercent = prompt("Please enter the discount.");

//validate
while(discountPercent ==="" || isNaN(discountPercent)){
    discountPercent = prompt("Please do not leave blank and only use numbers.\n Enter the discount.");

}

var salesTax = prompt("Please enter the sales tax");

//validate
while(salesTax === "" || isNaN(salesTax)){
    salesTax = prompt("Please do not leave blank and only use numbers.\n Enter the sales tax.");

}


var discountDecimal = discountPercent/100;

var item = "shoe";

var salesTaxDecimal = salesTax/100;

var discountWithOutTax = originalPrice * discountDecimal;

var priceWithoutTax = originalPrice - discountWithOutTax;

console.log("Your shoes were originally $"+originalPrice+", but after a "+discountPercent+"% discount without tax it is now $" + priceWithoutTax);

var howMuchTax = originalPrice * salesTaxDecimal;

var priceWithTax = priceWithoutTax + howMuchTax;

console.log("Your shoes were originally $"+originalPrice+", but after a "+discountPercent+"% discount with tax it is now $" + priceWithTax);
