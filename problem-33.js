/**
You are given an array of numbers. Count how many times the a number is repeated in the array.

sample-input: numbers = [5,6,11,12,98, 5]
find: 5
output: 2
*/

function repeatedNumber(numbers){
    let count = {};

    for(num of numbers){
        if(count[num]){
            count[num]++;
        }

        else{
            count[num] = 1;
        }
    }

    return count;
    
}


console.log(repeatedNumber());