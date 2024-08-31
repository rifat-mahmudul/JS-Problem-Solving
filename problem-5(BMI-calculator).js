/*** 

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/

let weight, height, BMI;

weight = parseFloat(prompt("Enter your wieight : "));

height = parseFloat(prompt("Enter Your height : "));

BMI = parseFloat(weight / height ** 2).toFixed(2);

if(BMI < 18.5){
    console.log(`You are underweight. Your BMI is ${BMI}`);
}

else if(BMI >= 18.5 && BMI <= 24.9){
    console.log(`You are normal. Your BMI is ${BMI}`);
}

else if(BMI >= 25 && BMI <= 29.9){
    console.log(`You are overweight. Your BMI is ${BMI}`);
}

else{
    console.log(`you are obese. Your BMI is ${BMI}`);
}