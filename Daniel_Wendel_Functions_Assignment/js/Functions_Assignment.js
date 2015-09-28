/*
 Daniel Wendel
 3/24/15
 Section 00
 Functions Assignment
 */

//alert("Testing");

//Create a calculator for a auto loan

//Basic function
function autoMonthlyCost(totalCost,loanTerm){
    //Variable for loans monthly cost
    var loanMonthlyCost = Math.round(totalCost / loanTerm);
    return loanMonthlyCost;
}

//Anon function
var carLoanInterest = function(interestRate, loanMonthlyCost){
    //Variable for interest rate
    var interest = Math.round(interestRate * loanMonthlyCost);
    return interest;
};

// Prompt user for Total cost of loan

var totalCost = prompt("We are going to find out how much your monthly payments will be for your car. \n Please enter the  full amount of your loan.");

// validation

while(isNaN(totalCost) || totalCost ==="") {
    //re-prompt user

    totalCost = prompt("Please do not leave blank and only use numbers. \n What is the total cost of your loan? ");

}
//Prompt user for the loan term

var loanTerm = prompt("Please enter the term of the loan in months.");

//Validation
while(isNaN(loanTerm) || loanTerm ==="" ) {
//re-prompt user

    loanTerm = prompt("Please do not leave blank and only use numbers. \n What is the term of the loan?");

}
    //Prompt for interest rate

var interestRate = prompt("Please enter the interest rate for your loan.");

//Validation
while(isNaN(interestRate) || interestRate ===""){
    // re-prompt user

    interestRate = prompt("Please do not leave blank and only use numbers. \n What is the interest rate?");

}

//Total cost of the users monthly for the car
var monthlyCost = autoMonthlyCost(totalCost,loanTerm);
console.log("This is the total cost of your car monthly with out interest " +monthlyCost+".");


//Interest rate for the users loan
var loanMonthlyCost = totalCost / loanTerm;
var interest = carLoanInterest(interestRate, loanMonthlyCost);
console.log("This is the amount of interest payed in a year on your loan. " +interest+".");

//Amount of interest payed per month
var monthlyInterest = Math.round(interest / loanTerm);
console.log("This is the monthly amount of interest payed "+monthlyInterest+".");


//Total monthly cost with interest
var totalMonthlyCost = Math.round(monthlyInterest + monthlyCost);
console.log("The total monthly cost of your car with interest is " +totalMonthlyCost+".");

/*
I input 15000 for the total cost of the car, 48 for the amount of months, and 3.0 as the interest rate and this is what the console gave me:
This is the total cost of your car monthly with out interest 313.
This is the amount of interest payed in a year on your loan. 938.
This is the monthly amount of interest payed 20.
The total monthly cost of your car with interest is 333.
 */