/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/


let ticketPrice, age, childrenAge, studentAge;

ticketPrice = 800;

studentAge = 25;

age = parseInt(prompt("Enter Your Age : "));

if(age < 10){
    console.log(`For children ticket free.`)
}

else if(age >= 10 && age <= 25){
    console.log(`For students ${ticketPrice*0.5}`)
}

else if(age >= 60){
    console.log(`For senior cintizens ${ticketPrice*0.15}`)
}

else{
    console.log(`Regular ticket price ${ticketPrice}`)
}