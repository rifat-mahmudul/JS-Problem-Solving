/**
    Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd
 */


function odd_even(value){
    if(value % 2 != 0){
        return 'Odd';
    }

    else{
        return 'Even'
    }
}

console.log(odd_even());