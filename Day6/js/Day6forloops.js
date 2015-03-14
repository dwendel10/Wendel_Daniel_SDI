/*
Daniel Wendel
Section 00
3-14-2015
Day 6 for loops
 */
//alert("C'mon son");


// Basic for loop:  for(initialization; condition; increment of change){}
//we use i A LOT in loops because it stands for iteration

for(var i = 0; i<20; i++){
    console.log("The value of i is "+i);

}


//Break in a loop

for(var j = 0; j<5; j++){
   //Conditional to test if we should break the loop
    //If the value of j is 3 then console.log out something different and stop the loop

    if(j === 3){
        console.log("J is 3");
        break;
    }

    console.log("The value of j is "+j);


}


// Specific cases for each value

for(var k = 0; k<3; k++){
    if(k === 0){
        console.log("The value is zero.");

    } else if (k===1){
        console.log("The value is one.");
    } else if (k===2){
        console.log("The value is two.");
    }


}





