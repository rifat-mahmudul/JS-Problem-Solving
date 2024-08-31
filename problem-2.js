/**
Task-2
Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student.

Input:
The first line of the input is the marks of the five subjects mentioned above, respectively.

Output:
Print the result in 2 decimal places.

Sample Input:
75.25, 65, 80, 35.45, 99.50

Sample Output:
71.04
 */

let Mathematics, Biology, Chemistry, Physics, Bangla, totalMarks;

Mathematics = 90;
Biology = 70;
Chemistry = 80;
Physics = 84;
Bangla = 93;
totalMarks = Mathematics + Biology + Chemistry + Physics + Bangla;

console.log(`The avarage marks of student is ${totalMarks / 5}`);