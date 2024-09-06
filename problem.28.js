/**
 * Write a function called make_avg() which will take an array of integers and the size of that     array and return the average of those values.

 */

function make_avg(array, number){
    let sum = 0;
    for(const arrays of array){
        sum = sum + arrays;
    }

    const avg = sum / number;

    return avg;
}

numbers = [8,8,5,2,9];
length = numbers.length;


console.log(make_avg(numbers, length));