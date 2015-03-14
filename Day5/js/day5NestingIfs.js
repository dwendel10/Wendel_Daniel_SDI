
 /*
Dan Williams
Section 00
3-12-15
Nesting If Statements
 */


//alert("Just testing!");

 // Some Decisions Affect other decisions

 //If it is warm then lets go the beach, if it is not then lets go to the movies.

 //Get temperature
 var temp = prompt("We are going to figure out what you should do today!\nWhat is the current temperature outside?");

 //Validate that the user typed in SOMETHING - did they leave it blank
 if(temp === ""){
     //This code will run if the user types in nothing
     //Reprompt the user
     temp = prompt("Please do not leave this blank, it is required!\nWhat is the current temperature outside?");
 }


 //Validate that the user typed in a number
 // isNaN() - is it not a number - returns a boolean
 // Literally say it outload.  Is "monkey" not a number?
 console.log(isNaN(7)); //Gives us false
 console.log(isNaN("monkey")); //Gives us true

 if(isNaN(temp)){
     //This code will run when temp is NOT a number
     // reprompt the user for the information
     //Give the user a 2nd chance!
     temp = prompt("Please only type in numbers!\nEnter the temperature outside:");
 }




 if(temp >=80){
     console.log("Let's go to the beach!");
     //Set the water temperature
     var waterTemp = prompt("What is the water temperature?");

     //Validate the water temp
     if(waterTemp === "" || isNaN(waterTemp)){
         //This code will run if the variable is blank or not a number
         //Re-prompt the user
         waterTemp = prompt("Please do not leave blank and only use numbers.\nWhat is the water temp?");

     }

     if(waterTemp > 75){
         console.log("Let's go swimming!");

         var knowSwim = prompt("Do you know how to swim?");

         // Convert the text string to lower case
         // toLowerCase - dot syntax  - use a period
         knowSwim = knowSwim.toLowerCase();
         console.log(knowSwim);
         //Validate the knowSwim variable
         if(knowSwim.toLowerCase() !="yes" && knowSwim.toLowerCase() !="Yes" && knowSwim!="no" && knowSwim!="No"){

             //Re-prompt the user
             knowSwim = prompt("Only type in yes or no.\nCan you swim?");
             knowSwim = knowSwim.toLowerCase();
         }


         if(knowSwim =="yes" || knowSwim=="Yes"){
             console.log("No floaties needed");
         } else{
             console.log("Get a floatie.");
         }

     } else {
         console.log("Let's get a tan!");
     }

 } else {
     console.log("Let's go to the movies!");


     //Do we have any kids in the group
    var kids = prompt("Are you bringing kids?");
     //Validate
     //Convert to lowercase
     kids = kids.toLowerCase();

     if(kids != "yes" && kids != "no"){
        //Reprompt
         kids = prompt("Please enter ONLY yes or no!\nAre you bringing kids");
         //Permantly convert to lower case
         kids = kids.toLowerCase();

     }


     //Test if we have kids
     if(kids === "no"){
         console.log("Let's see 50 Shades of Gray!");
     } else{
         console.log("Let's go see Sponge Bob!");
     }



 }

 /*
 //If the water temp is above 75, lets go swimming, if not lets get a tan.

 if(waterTemp > 75){
     console.log("Let's go swimming!");

 } else {
     console.log("Let's get a tan!");
 }

 */