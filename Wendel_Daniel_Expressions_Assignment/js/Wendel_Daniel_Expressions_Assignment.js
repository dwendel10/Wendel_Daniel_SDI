/*
Daniel Wendel
3-7-2015
Section 00
Expressions Assignment
 */
//alert("Testing 1..2..3!!")

// Creating a calculator that will tell you how much you spend on video games yearly.

var storeVisitsPerMonth = prompt("Let's find out how much you spend on video games every year! \nPlease enter how many times you go to the video game store each month. ");
var gamesBoughtPerVisit = prompt ("Now lets find out how many games you buy each visit.\nPlease enter how many games you buy per visit ");
var costOfGames = prompt("Now lets enter the cost of the games.\n Please enter the average cost per game. ");
var monthsInYear = 12;

//Calculate how much this would cost per year.
var yearlyCost = storeVisitsPerMonth * costOfGames * gamesBoughtPerVisit * monthsInYear;
console.log ("This is the amount you spend per year on video games!! $" + yearlyCost);

// I typed 5 for storeVisitsPerMonth, 1 for gamesBoughtPerVisit, and 45 for costOfGames. The result was 2700 per year.
//Yearly Income

var incomeFromJobs = [10000,5000,13000];

// Add the income
var totalIncome = incomeFromJobs[0] + incomeFromJobs[1] + incomeFromJobs[2];
console.log(totalIncome);

//Now lets find out the average spent over the year.

totalIncome/=12;
console.log(totalIncome);