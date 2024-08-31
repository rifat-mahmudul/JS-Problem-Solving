//Grade Calculator

let marks = parseFloat(prompt("Enter your marks : "));

if(marks < 0 || marks > 100){
    console.log(`Your marks is unvalid`);
}

else if(marks >= 80 && marks <= 100){
    console.log(`You get A+. Your marks is ${marks}`);
}

else if(marks >= 70 && marks <= 79){
    console.log(`You get A. Your marks is ${marks}`);
}

else if(marks >= 60 && marks <= 69){
    console.log(`You get A-. Your marks is ${marks}`);
}

else if(marks >= 50 && marks <= 59){
    console.log(`You get B. Your marks is ${marks}`);
}

else if(marks >= 40 && marks <= 49){
    console.log(`You get C. Your marks is ${marks}`);
}

else if(marks >= 33 && marks <= 39){
    console.log(`You get D. Your marks is ${marks}`);
}

else{
    console.log(`You are failure. Your marks is ${marks}`);
}