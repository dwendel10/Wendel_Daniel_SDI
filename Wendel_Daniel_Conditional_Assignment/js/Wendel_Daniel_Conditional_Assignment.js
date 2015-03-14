/**
 * Created by danielwendel on 3/14/15.
 */
var areaOfParallelogram = 0;
var baseOfParallelogram = prompt("Please enter the base of the parallelogram. ");
var heightOfParallelogram = prompt("Please enter the height of the parallelogram. ");

areaOfParallelogram = baseOfParallelogram * heightOfParallelogram;
console.log("The base of the parallelogram was: " + baseOfParallelogram + "\nThe height of the parallelogram was:"+heightOfParallelogram+ "\nThe area of the parallelogram is:"+areaOfParallelogram);

if(areaOfParallelogram > 5){
    console.log("Then the parallelogram is greater than 5.")

} else if (heightOfParallelogram < 10){
    console.log("It will be short.");

} else{
    console.log("This is false!");

}

if(baseOfParallelogram > heightOfParallelogram || heightOfParallelogram < baseOfParallelogram){
    console.log("This is a fat Parallelogram.")
} else if(heightOfParallelogram > baseOfParallelogram && areaOfParallelogram >= 20){
    console.log("This is a skinny tall Parallelogram.")
} else{
    console.log("This parallelogram is going to be shaped weird.");
}

