// Day3:BOOLEANS,OPERATORS, DATE

// Exercises: Level 1
// Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
// let firstName = "Miles";
// let lastName = "Roark";
// let country = "Romania";
// let city = "Algiers";
// let age = 332;
// let isMarried = "Maybe";
// let year = 1993;

// console.log(typeof firstName);
// console.log(typeof lastName);
// console.log(typeof country);
// console.log(typeof city);
// console.log(typeof age);
// console.log(typeof isMarried);
// console.log(typeof year);

// // Check if type of '10' is equal to 10
// console.log(typeof 10 === "10");

// // Check if parseInt('9.8') is equal to 10
// console.log(parseInt(9.8) === 10);

// // Boolean value is either true or false.
// console.log(3 > 2);

// // Write three JavaScript statement which provide truthy value.
// console.log(10 > 4);
// console.log(2 < 4);
// console.log(1 > 0);
// // Write three JavaScript statement which provide falsy value.
// console.log(3 > 8);
// console.log(-3 > 8);
// console.log(7 > 8);
// // Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

// // 4 > 3  //true
// console.log(4 > 3);
// // 4 >= 3 //true
// console.log(4 >= 3);
// // 4 < 3 //false
// console.log(4 < 3);
// // 4 <= 3 //false
// console.log(4 <= 3);
// // 4 == 4 //true
// console.log(4 == 4);
// // 4 === 4 //true
// console.log(4 === 4);
// // 4 != 4 //false
// console.log(4 != 4);
// // 4 !== 4 //false
// console.log(4 !== 4);
// // 4 != '4' //true
// console.log(4 != "4");
// // 4 == '4' //true
// console.log(4 == "4");
// // 4 === '4' //false
// console.log(4 === "4");
// // Find the length of python and jargon and make a falsy comparison statement.
// let a = "Python";
// let b = "jargon";
// console.log(a.length);
// console.log(b.length);
// console.log(a.length !== b.length);
// // Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

// // 4 > 3 && 10 < 12 //true
// console.log(4 > 3 && 10 < 12);
// // 4 > 3 && 10 > 12 //false
// console.log(4 > 3 && 10 > 12);
// // 4 > 3 || 10 < 12 //true
// console.log(4 > 3 || 10 < 12);
// // 4 > 3 || 10 > 12 //true
// console.log(4 > 3 || 10 > 12);
// // !(4 > 3) //false
// console.log(!(4 > 3));
// // !(4 < 3) //true
// console.log(!(4 < 3));
// // !(false) //true
// console.log(!false);
// // !(4 > 3 && 10 < 12) //false
// console.log(!(4 > 3 && 10 < 12));
// // !(4 > 3 && 10 > 12) //true
// console.log(!(4 > 3 && 10 > 12));
// // !(4 === '4') true
// console.log(!(4 === "4"));
// // There is no 'on' in both dragon and python false
// let str = "dragon";
// let str2 = "python";
// console.log(str.search("on"));
// console.log(str.search("on"));
// // Use the Date object to do the following activities

// // What is the year today?
// let today = new Date();
// console.log(today);
// let thisYear = today.getFullYear();
// console.log(thisYear);
// // What is the month today as a number?
// let month = today.getMonth() + 1;
// console.log(month);
// // What is the date today?
// let day = today.getDate();
// console.log(day) + 1;
// // What is the day today as a number?
// let dayName = today.getDay();
// console.log(dayName);
// // What is the hours now?
// let hours = today.getHours();
// console.log(hours);
// // What is the minutes now?
// let minutes = today.getMinutes();
// console.log(minutes);
// // Find out the numbers of seconds elapsed from January 1, 1970 to now.
// let seconds = today.getSeconds();
// console.log(seconds);
// let milliseconds = today.getMilliseconds();
// console.log(milliseconds);
// let milliseconds2 = today.getTime();
// console.log(milliseconds2);

// console.log("b" + "a" + +"a" + "a");
// console.log(typeof NaN);
// console.log(![] + [] + [].length);

// Exercises: Level 2
// Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
// let height = prompt("Enter height");
// let base = prompt("Enter Base");

// Enter base: 20
// Enter height: 10
// The area of the triangle is 100
// Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
// let sidea = prompt("sidea:, ");
// let sideb = prompt("sidea:, ");
// let sidec = prompt("sidea:, ");

// Enter side a: 5
// Enter side b: 4
// Enter side c: 3
// The perimeter of the triangle is 12
// Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
// let length = prompt("length");
// let width = prompt("width");

// Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
// let radius = prompt("radius");

// Calculate the slope, x-intercept and y-intercept of y = 2x -2
// let x1 = prompt("x-intercept, ");
// let x2 = prompt("X2-intercept, ");
// let y1 = prompt("Y-intercept, ");
// let y2 = prompt("Y2-intercept, ");

// Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)

// Compare the slope of above two questions.

// Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.

// Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
// let hours = prompt("#hours");
// let rate = prompt("payrate");

// Enter hours: 40
// Enter rate per hour: 28
// Your weekly earning is 1120
// If the length of your name is greater than 7 say, your name is long else say your name is short.
// let firstName = prompt("First Name:");
// let lastName = prompt("lastName");
// if (firstName.length > lastName.length) {
//   alert("Your name is long");
// } else {
//   alert("noice");
// }

// Compare your first name length and your family name length and you should get this output.

// let firstName = 'Asabeneh'
// let lastName = 'Yetayeh'
// Your first name, Asabeneh is longer than your family name, Yetayeh
// Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
// let myAge = 400;
// let yourAge = 320;
// let result1 = parseInt(myAge) - parseInt(yourAge);
// let result = alert(`I am ${result1} older than you.`);
// let myAge = 250
// let yourAge = 25
// I am 225 years older than you.
// Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
// let userAge = prompt("Birth Year");
// let userAgeValue = 2025 - userAge;
// let actual = 18 - userAgeValue;
// if (2025 - parseInt(userAge) >= 18) {
//   alert("You're old enough, you may take the wheel.");
// } else {
//   alert(
//     `You are ${userAgeValue}, You will be allowed to drive in ${actual} year(s). `
//   );
// }

// Enter birth year: 1995
// You are 25. You are old enough to drive

// Enter birth year: 2005
// You are 15. You will be allowed to drive after 3 years.
// Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
// let Years = prompt("Enter years");
// let YearsAlive = 2025 - parseInt(Years);
// let yearsAliveInSeconds = parseInt(YearsAlive) * 31536000;
// alert(`You have been alive for ${yearsAliveInSeconds} seconds. Congrats`);

// Enter number of years you live: 100
// You lived 3153600000 seconds.
// Create a human readable time format using the Date time object

// let today = new Date();
// let year = today.getFullYear();
// let month = today.getMonth() + 1;
// let day = today.getDay();
// let hours = today.getHours();
// let minutes = today.getMinutes();

// console.log(`${year}--${month}--${day}  ${hours}:${minutes}`);
// console.log(`${day}-${month}-${year}  ${hours}:${minutes}`);
// console.log(`${year}/${month}/${day}  ${hours}:${minutes}`);

// YYYY-MM-DD HH:mm
// DD-MM-YYYY HH:mm
// DD/MM/YYYY HH:mm

// Exercises: Level 3
// Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
// YYY-MM-DD HH:mm eg. 20120-01-02 07:05

// console.log(
//   new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString()
// );

// let today = new Date().toLocaleTimeString();
// console.log(today);
