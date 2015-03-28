/*
Daniel Wendel
Final Exam
Section 00
3/28/2015
 */

//alert("Just making sure");

var costOfItem = prompt("Hello, today we will find out the cost of your item. \nPlease enter the cost of the item.");
while(costOfItem ==="" || isNaN(costOfItem)){
    //re-prompt
    costOfItem = prompt("Please do not leave blank and only use numbers.\n Please enter the cost of the item.");
}
var discountAmount = prompt("Please enter the discount on the item using numbers from 0 through 100.");
while(discountAmount === "" || isNaN(discountAmount) || discountAmount > 100){
    //re-prompt
    discountAmount = prompt("Please do not leave blank, only use numbers and make sure the numbers are from 0 through 100.\n Please enter the discount.");
}

function discountcost(costOfItem,discountAmount){
    discount = costOfItem * (discountAmount / 100);
    discountedPrice = costOfItem - discountAmount;
    console.log("The final cost of and item that cost $100 with a discount of 25% is "+discountedPrice+".");

}
discountcost(costOfItem,discountAmount);

/*
For the first test I input the cost of the item to be $100 and with a discount of 25% and got the total of $75.
The second test I input the cost of the item to be $200 and with a discount of 25% and got the total of $175.
 */
