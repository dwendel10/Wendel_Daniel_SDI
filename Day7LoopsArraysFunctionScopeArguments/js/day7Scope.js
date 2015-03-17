/*
Daniel Wendel
Section 00
3-17-2015
Day 7 scope
*/

//alert("whatttt");


//variable scope
//we will have variables inside and outside of a function

//Try not to use the same variable names, BUT in big files this is impossible.

//Create a variable for width in our MAIN CODE
//scoped outside of the function

var width = 5;

//Create a function that calculates the perimeter of a rectangle


//What happens in a function stays in a function
function calcPeri(){

    //create a variable called width inside of the function
    //Scoped to teh function calcPeri
    var width = 10;

    // Create a variable for height and perimeter

    var height = 20;
    var perimeter = width * 2 + height * 2;


    console.log("Inside of the function the perimeter is " +perimeter);

    // Variables created inside of a function cannot be accessed outside of the function.
    //Variables outside of the function can be accessed, but usually will not be.


}

console.log("Before the function call, width = "+width);

// FUnction call the calcPeri
calcPeri();
console.log("After the function call width = "+width);
