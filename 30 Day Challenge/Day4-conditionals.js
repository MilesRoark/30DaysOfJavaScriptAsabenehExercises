// DAY 4:CONDITIONALS

// Exercises: Level 1
// Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
// let userAge = parseInt(prompt("Enter your Age:"));
// let waitTime = 18 - parseInt(userAge);

// if (userAge >= 18) {
//   console.log("You are old enough to drive");
// } else {
//   console.log(`You need to wait ${waitTime} years more years`);
// }

// Enter your age: 30
// You are old enough to drive.

// Enter your age:15
// You are left with 3 years to drive.
// Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
// let myAge = 45;
// let yourAge = prompt("Enter your Age");
// let ageDifference = myAge - parseInt(yourAge);

// if (myAge > yourAge) {
//   console.log(`I am ${ageDifference} older than you.`);
// } else if (myAge === parseInt(yourAge)) {
//   console.log(`Oh wow we're the same age. Yayyy.`);
// } else {
//   console.log(`You're ${Math.abs(ageDifference)} years older than me.`);
// }

// Enter your age: 30
// You are 5 years older than me.
// If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
// let a = 4;
// let b = 3;
// if (a > b) {
//   console.log("a is greater than b");
// } else {
//   console.log("a is less than b");
// }

// console.log(a > b ? "a is greater than b" : "a is less than b");
// using if else
// ternary operator.
//   let a = 4
//   let b = 3
//   4 is greater than 3
// Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
// let num = 9;
// if (num % 2 === 0) {
//   console.log("The number is even");
// } else {
//   console.log("the number is odd");
// }

// Enter a number: 2
// 2 is an even number

// Enter a number: 9
// 9 is is an odd number.

// Exercises: Level 2
// Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F
// let grade = 100;
// if (grade <= 100 && grade >= 80) {
//   console.log("congrats you got a solid A");
// } else if (grade >= 70 && grade <= 89) {
//   console.log("congrats you got a B");
// } else if (grade >= 60 && grade <= 69) {
//   console.log("You'r cutting it close there you got a C");
// } else if (grade >= 50 && grade <= 59) {
//   console.log("You barely made it. You got a D");
// } else {
//   console.log("Awww, sorry you have to take the course over, You got an F");
// }
// Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// Septembe r, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer

// let month = "September";
// switch (month) {
//   case "January":
//   case "February":
//   case "December":
//     console.log("It's winter. ");
//     break;
//   case "March":
//   case "April":
//   case "May":
//     console.log("It's Spring");
//     break;
//   case "June":
//   case "July":
//   case "August":
//     console.log("Summertime when the living is easy");
//     break;
//   case "September":
//   case "October":
//   case "November":
//     console.log("It's Autumn");
//     break;
//   default:
//     console.log("What a wonderful time of year");
//     break;
// }

// Check if a day is weekend day or a working day. Your script will take day as an input.
//     What is the day  today? Saturday
//     Saturday is a weekend.

//     What is the day today? saturDaY
//     Saturday is a weekend.

//     What is the day today? Friday
//     Friday is a working day.

//     What is the day today? FrIDAy
//     Friday is a working day.

// let day = "Wednesday";
// switch (day) {
//   case "Monday":
//   case "Teusday":
//   case "Wednesday":
//   case "Thursday":
//   case "Friday":
//     console.log("That is a working day");
//     break;
//   case "Saturnday":
//   case "Sunday":
//     console.log("The weekend. A time of great reflection and lazing about.");
//     break;
//   default:
//     console.log("You must not know what day it is. seek help.");
//     break;
// }
// Exercises: Level 3
// Write a program which tells the number of days in a month.
//   Enter a month: January
//   January has 31 days.

//   Enter a month: JANUARY
//   January has 31 day

//   Enter a month: February
//   February has 28 days.

//   Enter a month: FEbruary
//   February has 28 days.

// let month;
// switch (month) {
//   case "January":
//   case "March":
//   case "May":
//   case "July":
//   case "August":
//   case "October":
//   case "December":
//     console.log(`${month} has 31 days.`);
//     break;
//   case "february":
//     console.log(`${month} has only 28 days`);
//     break;
//   case "April":
//   case "June":
//   case "September":
//   case "November":
//     console.log(`${month} has only 30 days.`);
//     break;
//   default:
//     console.log("Let me guess, You want to know how many days this month has?");
//     break;
// }
// Write a program which tells the number of days in a month, now consider leap year.
// let month = "February";
// switch (month) {
//   case "January":
//   case "March":
//   case "May":
//   case "July":
//   case "August":
//   case "October":
//   case "December":
//     console.log(`${month} has 31 days.`);
//     break;
//   case "February":
//     console.log(
//       `${month} has only 28 days, Except in a leap year when it has 29.`
//     );
//     break;
//   case "April":
//   case "June":
//   case "September":
//   case "November":
//     console.log(`${month} has only 30 days.`);
//     break;
//   default:
//     console.log("Let me guess, You want to know how many days this month has?");
//     break;
// }
