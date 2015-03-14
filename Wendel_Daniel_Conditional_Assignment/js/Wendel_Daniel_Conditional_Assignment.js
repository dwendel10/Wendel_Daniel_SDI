/*
Daniel Wendel
Section 00
3-14-2015
Conditional Assignment
 */
//Creating a calculator to find the area of a Parallelogram
//create variables for the area, base and height of parallelogram

var areaOfParallelogram = 0;

var baseOfParallelogram = prompt("Please enter the base of the parallelogram. ");

var heightOfParallelogram = prompt("Please enter the height of the parallelogram. ");

//Find the area of Parallelogram

areaOfParallelogram = baseOfParallelogram * heightOfParallelogram;

console.log("The base of the parallelogram was: " + baseOfParallelogram + "\nThe height of the parallelogram was:"+heightOfParallelogram+ "\nThe area of the parallelogram is:"+areaOfParallelogram);

//conditional for empty prompt

if(baseOfParallelogram == "" ){
    console.log("Please do not leave blank and only enter numbers.\n Please enter the base of the Parallelogram.");
} else {
    console.log("Please try again.");
}

if(heightOfParallelogram == ""){
    console.log("Please do not leave blank and only enter numbers. \n Please enter the height of the Parallelogram.");
} else{
    console.log("Please try again.");
}

//if else statement

if(areaOfParallelogram > 5){
    console.log("Then the parallelogram is greater than 5.")

} else if (heightOfParallelogram < 10){
    console.log("It will be a short parallelogram.");

} else{
    console.log("This is false!");

}

//Use of logical statement
if(baseOfParallelogram > heightOfParallelogram || heightOfParallelogram < baseOfParallelogram){
    console.log("This is a fat Parallelogram.")

} else if(heightOfParallelogram > baseOfParallelogram && areaOfParallelogram >= 20){
    console.log("This is a skinny tall Parallelogram.")

} else{
    console.log("This parallelogram is going to be shaped weird.");
}

