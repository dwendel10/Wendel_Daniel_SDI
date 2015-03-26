/*
 Daniel Wendel
 Section 00
 3-17-2015
 Functions Worksheet
 */

//alert("Work Time");

//Finding the circumference of a circle

function calcCircumference(p,r){
    var circumference = 2 * p * r;
    console.log("The circumference of the circle is "+circumference);
}


// PI
var p = 3.14;

// /radius
var r = prompt("Please enter the radius.");

while(isNaN(r) || r === ""){

    if(isNaN(r)){
        r = prompt ("Please only enter numbers.")
    } else if(r ==="")
        r = prompt ("Please do not leave blank.");
}

calcCircumference(p,r);


//How many bee stings!?

function beeStings(w,k){
    //Amount of stings
    var s = 8.66;

    console.log("It will take "+k+" stings to kill this animal.");
}



//Amount of stings
    var s = 8.66;

//Animals weight

    var w = prompt("We will find out how many bee stings it takes to kill an animal by the weight of the animal.\nPlease enter the animals weight.");
//how many to kill


while(isNaN(w) || w === "")
if(isNaN(w)) {
    w = prompt("Please only enter numbers.");

} else if (w ==="")
    w = prompt("Please do not leave blank");

    //k is the amount it will take to kill the animal
    var k = w * s;

    beeStings(w, k);


