/***
Subtask-1:
Display sum of all the odd numbers from 91 to 129.
 */
/***

Subtask-2:
Display sum of all the even numbers from 51 to 85.
 */

let sum = 0
for(let i = 91; i <= 129; i += 2){
    sum = sum + i;
}

console.log("sum1 = " + sum);

let sum2 = 0;
for(let i = 51; i <= 85; i++){

    if(i % 2 === 0){
        sum2 += i;
    }

}

console.log("sum2 = " + sum2);