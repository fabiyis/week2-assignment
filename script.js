// pseudocode

/* declare variables:
 birthYear, currentYear, age; */ 

 /* input birth year and current year:
 input="enter your birth year: ", birthYear;
 input="enter your current year: ", currentYear; */

 /* calculate age:
 age=currentYear - birthYear; */

/* output of the age:
output="your age is: ", age; */

/* declare arrays of numbers:
[1,2,3,4,5,6,7,8,9,10];

loop through the array and output even numbers:
FOR EACH number IN array
    IF number MOD 2 = 0 THEN
        OUTPUT number
    END IF...
END FOR EACH
*/ 

// javascript

const prompt = require('prompt-sync')();

// Input birth year and current year
let birthYear = parseInt(prompt("Enter your birth year: "));
let currentYear = parseInt(prompt("Enter the current year: "));

// Calculate age
let age = currentYear - birthYear;

// Output age
console.log("Your age is:", age);

// Array of numbers
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Loop through array and output even numbers
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        console.log(numbers[i]);
    }
}
