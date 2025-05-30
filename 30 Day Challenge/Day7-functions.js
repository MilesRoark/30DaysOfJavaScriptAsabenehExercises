// Day 7: FUNCTIONS

// Exercises: Level 1
// Declare a function fullName and it print out your full name.
// const fullName = () => {
//   return "MILES ROARK";
// };
// console.log(fullName());
// function fullName() {
//   return "MILES ROARK";
// }
// console.log(fullName());

// Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
// const fullName = (firstName, lastName) => {
//   return `My Name is ${firstName} ${lastName}`;
// };
// console.log(fullName("MILES", "ROARK"));
// function fullName(firstName, lastName) {
//   return `My Name is ${firstName} ${lastName}`;
// }
// console.log(fullName("MILES", "ROARK"));

// Declare a function addNumbers and it takes two two parameters and it returns sum.
// const addNumber = (a, b) => a + b;
// console.log(addNumber(100, 200));

// function addNumber(a, b) {
//   return a + b;
// }
// console.log(addNumber(12, 14));
// An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
// const areaOfRectangle = (length, width) => length * width;
// console.log(areaOfRectangle(6, 10), "meters");

// A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
// const perimeterOfRectangle = (length, width) => 2 * (length + width);
// console.log(perimeterOfRectangle(10, 20));

// A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
// const volumeOfRectPrism = (length, width, height) => length * width * height;
// console.log(volumeOfRectPrism(10, 10, 10));

// Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
// let pi = 3.14;
// const areaOfCircle = (pi, r) => {
//   return pi * r * r;
// };
// console.log(areaOfCircle(pi, 10));
// Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
// const pi = 3.14;
// const circumference = (pi, r) => 2 * pi * r;
// console.log(circumference(pi, 10).toFixed(2));
// Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
// const density = (mass, volume) => mass / volume;
// console.log(density(10, 20));

// Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
// const speedOfObject = (distance, time) => distance / time;
// console.log(speedOfObject(300, 20));

// Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
// const weightOfSubstance = (mass, gravity = 9.8) => mass * gravity;
// console.log(weightOfSubstance(250));

// Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.
// const convertCelsiusToFahrenheit = (oC) => (oC * 9) / 5 + 32;
// console.log(convertCelsiusToFahrenheit(100), "celsius");

// Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.

// const BMI = (weight, height) => {
//   let bmi = (788 * weight) / height / height;
//   console.log(bmi);
//   if (bmi < 18.5) {
//     return "You are underweight";
//   } else if (bmi >= 18.5 && bmi <= 24.9) {
//     return "You are fine";
//   } else if (bmi >= 25 && bmi <= 29.9) {
//     return "You are Overweight";
//   } else {
//     return "Lose weight, You are Obese";
//   }
// };
// console.log(BMI(120, 68));

// The same groups apply to both men and women.
// Underweight: BMI is less than 18.5
// Normal weight: BMI is 18.5 to 24.9
// Overweight: BMI is 25 to 29.9
// Obese: BMI is 30 or more
// const weightsCateory = {
//   obese: (bmi) => bmi > 30,
//   overweight: (bmi) => bmi > 25 && bmi <= 30,
//   normal: (bmi) => bmi > 18.5 && bmi <= 25,
//   underweight: (bmi) => bmi <= 18.5,
// };

// const calculateBmi = (height, weight) => {
//   const bmi = weight / (height / 100) ** 2;
//   for (const category in weightsCateory) {
//     if (weightsCateory[category](bmi)) {
//       return category;
//     }
//   }
// };

// console.log(calculateBmi(220, 72));
// Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
// const checkSeason = (temp) => {
//   if (temp > 80) {
//     return "It's Summer";
//   } else if (temp < 80 && temp > 50) {
//     return "It's Spring";
//   } else if (temp < 50 && temp > 30) {
//     return "It's autumn";
//   } else {
//     return "It's winter";
//   }
// };
// console.log(checkSeason(90));

// Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
// const findMax = (a, b, c) => {
//   if (a > b && a > c) {
//     return `${a} is the max`;
//   } else if (b > a && b > c) {
//     return `${b} is the max`;
//   } else {
//     return `${c} is the max`;
//   }
// };
// const findMax = (...args) => {
//   console.log(args); // using the rest operator in the params turn the params into an array: [ 10, 220, 30 ]

//   let biggest = 0;
//   for (const num of args) {
//     if (num > biggest) {
//       biggest = num;
//     }
//   }
//   return biggest;
// };

// console.log(findMax(0, -10, -2));
// console.log(findMax(0, 10, 5));
// 10
// console.log(findMax(0, -10, -2))
// 0
// Exercises: Level 2
// Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.
// const solveLinEquation = (a, b, c, x, y) => a * x + b * y + c;
// console.log(solveLinEquation(10, 2, 4, 3, 4));

// Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.

// console.log(solveQuadratic()) // {0}
// console.log(solveQuadratic(1, 4, 4)) // {-2}
// console.log(solveQuadratic(1, -1, -2)) // {2, -1}
// console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
// console.log(solveQuadratic(1, 0, -4)) //{2, -2}
// console.log(solveQuadratic(1, -1, 0)) //{1, 0}
// Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
// const printArray = (arr) => {
//   for (const item of arr) {
//     console.log(item);
//   }
// };

// const array = [10, 20, 30, 40];

// console.log(printArray(array));

// Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
// const today = new Date();
// const showDateTime = () => {
//   const month = today.getMonth() + 1;
//   const day = today.getDate();
//   const year = today.getFullYear();
//   const hour = today.getHours().toString().padStart(2, "0");
//   const minutes = today.getMinutes().toString().padStart(2, "0");
//   return `Today is ${month} / ${day} / ${year}. The time is ${hour}:${minutes}`;
// };
// console.log(showDateTime());
// showDateTime()
// 08/01/2020 04:08
// Declare a function name swapValues. This function swaps value of x to y.
// const swapValues = (x, y) => {
//   return [y, x].join(",");
// };

// console.log(swapValues(3, 4)); // x => 4, y=>3
// console.log(swapValues(4, 5)); // x = 5, y = 4
// Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).

// const reverseArray = (arr) => {
//   let newArray = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     newArray.push(arr[i]);
//   }
//   return newArray;
// };
// console.log(reverseArray([1, 2, 3, 4, 5]));
// //[5, 4, 3, 2, 1]
// console.log(reverseArray(["A", "B", "C"]));
// //['C', 'B', 'A']
// Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
// function capitalizeArray(arr) {
//   return arr.map((word) => word[0].toUpperCase() + word.slice(1));
//   //   let newItem = [];
//   //   for (const item of arr) {
//   //     newItem.push(item[0].toUpperCase() + item.slice(1, item.length));
//   //   }
//   //   return newItem;
// }
// let newArr = ["funny", "games"];
// console.log(capitalizeArray(newArr));

// Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
// const addItem = (item) => {
//   let newArr = [];
//   newArr.push(item);
//   return newArr;
// };

// console.log(addItem("pencil"));

// Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item
// let newArray = [0, 1, 2, 3, 4, 5];
// const removeItem = (index) => {
//   newArray.splice(index, 1);
//   return newArray;
// };
// console.log(removeItem(3));

// Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.
// const sumOfNumber = (start, end) => {
//   let sum = 0;
//   for (let i = start; i <= end; i++) {
//     sum += i;
//   }
//   return sum;
// };
// console.log(sumOfNumber(2, 7));

// Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.
// const sumOfOdds = (start, end) => {
//   let sum = 0;
//   for (let i = start; i <= end; i++) {
//     if (i % 2 !== 0) {
//       sum += i;
//     }
//   }
//   return sum;
// };
// console.log(sumOfOdds(2, 7));

// Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.
// const sumOfEvens = (start, end) => {
//   let sum = 0;
//   for (let i = start; i <= end; i++) {
//     if (i % 2 === 0) {
//       sum += i;
//     }
//   }
//   return sum;
// };
// console.log(sumOfEvens(2, 7));

// Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.
// const evensAndOdds = (number) => {
//   let evens = [];
//   let odds = [];

//   for (let i = 0; i <= number; i++) {
//     if (i % 2 === 0) {
//       evens.push(i);
//     } else {
//       odds.push(i);
//     }
//   }
//   console.log(odds);
//   return `The number of even numbers is ${evens.length}, and the number of odd numbers is ${odds.length}`;
// };
// console.log(evensAndOdds(10));

// evensAndOdds(100);
// The number of odds are 50.
// The number of evens are 51.
// Write a function which takes any number of arguments and return the sum of the arguments
// function sumOfArgs(...args) {
//   console.log(args);
// let sum = 0;
// for(let num of args) {
//   sum += num;
// }
// return sum;
//   return args.reduce((a, b) => a + b, 0);
// }
// console.log(sumOfArgs(1, 2, 3));
// sum(1, 2, 3) // -> 6
// sum(1, 2, 3, 4) // -> 10
// Writ a function which generates a randomUserIp.
// example: 172.217.10.23(An IP address is written as four sets of numbers separated by periods, where each number can range from 0 to 255):
// const randomUserIp = () => {
//   const octet = () => Math.floor(Math.random() * 255);
//   const ipArr = Array.from({ length: 4 }, octet);
//   return ipArr.join(".");
// };
// console.log(randomUserIp());
// Write a function which generates a randomMacAddress
// Example: 62:5E:1A:12:34:56 (you can identify a random MAC address by checking the second character, which is either a 2, 6, A, or E. )
// const randomMacAddress = () => {
//   const useableChars = [
//     0,
//     1,
//     2,
//     3,
//     4,
//     5,
//     6,
//     7,
//     8,
//     9,
//     "a",
//     "b",
//     "c",
//     "d",
//     "e",
//     "f",
//     "A",
//     "B",
//     "C",
//     "D",
//     "E",
//     "F",
//   ];

//   let firstChar = "";
//   for (let i = 0; i < useableChars.length; i++) {
//     let randomIndex = Math.floor(Math.random() * useableChars.length);
//     firstChar = useableChars[randomIndex];
//   }

//   const secondIndexArr = [2, 6, "A", "E"];
//   let secondChar = "";
//   for (let i = 0; i < secondIndexArr.length; i++) {
//     let randomIndex2 = Math.floor(Math.random() * secondIndexArr.length);
//     secondChar = secondIndexArr[randomIndex2];
//   }
//   return (macAdd = [firstChar, secondChar].join(""));
// };
// let fullAdd = Array.from({ length: 6 }, randomMacAddress).join(":");
// console.log(fullAdd);

// const randomMacAddress = () => {
//   const hexChars = "0123456789ABCDEF"; // Valid hex characters
//   const secondCharOptions = ["2", "6", "A", "E"]; // Valid second-character options

//   const getRandomHexChar = () =>
//     hexChars[Math.floor(Math.random() * hexChars.length)];
//   const getRandomSecondChar = () =>
//     secondCharOptions[Math.floor(Math.random() * secondCharOptions.length)];

//   // Generate the MAC address
//   const macAddress = Array.from({ length: 6 }, (_, index) => {
//     const firstChar = index === 0 ? getRandomHexChar() : getRandomHexChar();
//     const secondChar = index === 0 ? getRandomSecondChar() : getRandomHexChar();
//     return `${firstChar}${secondChar}`;
//   });

//   return macAddress.join(":");
// };

// console.log(randomMacAddress());
// Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.
// const randomHexaNumberGenerator = () => {
//   let string = "123456789abcdef";
//   const hexVal = () => string[Math.floor(Math.random() * string.length)];

//   // Hex Value
//   let newVal = Array.from({ length: 6 }, hexVal).join("");
//   return `#${newVal}`;
// };
// console.log(randomHexaNumberGenerator());

// console.log(randomHexaNumberGenerator());
// '#ee33df'
// // Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.
// const userIdGenerator = () => {
//   let charRange =
//     "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
//   const values = () => charRange[Math.floor(Math.random() * charRange.length)];

//   // userId
//   let userId = Array.from({ length: 7 }, values).join("");
//   return userId;
// };
// console.log(userIdGenerator());

// console.log(userIdGenerator());
// 41XTDbE
// Exercises: Level 3
// Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.
// const userIdGeneratedByUser = () => {
//   let numberInput = 12;
//   let amountInput = 7;
//   let useableCharacters =
//     "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

//   // const userId = () => {
//   //   let newId = "";
//   //   for (let i = 0; i < numberInput; i++) {
//   //     newId +=
//   //       useableCharacters[Math.floor(Math.random() * useableCharacters.length)];
//   //   }
//   //   return newId;
//   // };
//   // return Array.from({ length: amountInput }, userId);

//   let userIds = [];

//   for (i = 0; i < amountInput; i++) {
//     let newId = "";
//     for (let j = 0; j < numberInput; j++) {
//       newId +=
//         useableCharacters[Math.floor(Math.random() * useableCharacters.length)];
//     }
//     userIds.push(newId);
//   }

//   return userIds;
// };
// console.log(userIdGeneratedByUser());

// userIdGeneratedByUser()
// 'kcsy2
// SMFYb
// bWmeq
// ZXOYh
// 2Rgxf
// '
// userIdGeneratedByUser()
// '1GCSgPLMaBAVQZ26
// YD7eFwNQKNs7qXaT
// ycArC5yrRupyG00S
// UbGxOFI7UXSWAyKN
// dIV0SSUTgAdKwStr
// '
// Write a function name rgbColorGenerator and it generates rgb colors.
// const rgbColorGenerator = () => {
//   let values = () => Math.floor(Math.random() * 255);
//   let rgbColor = Array.from({ length: 3 }, values).join(",");
//   return `rgb(${rgbColor})`;
// };
// console.log(rgbColorGenerator());

// rgbColorGenerator()
// rgb(125,244,255)
// Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.

// My solution
// const arrayOfHexaColors = (...args) => {
//   const possibleChars = "abcdef0123456789";
//   let hexVal = () =>
//     possibleChars[Math.floor(Math.random() * possibleChars.length)];
//   let wholeVal = () => Array.from({ length: 6 }, hexVal).join("");

//   return Array.from({ length: args }, wholeVal);
// };
// console.log(arrayOfHexaColors(10));

// Gpt corrected solution
// const arrayOfHexaColors = (count) => {
//   const possibleChars = "abcdef0123456789";
//   const generateHexColor = () =>
//     "#" + Array.from({ length: 6 }, () =>
//       possibleChars[Math.floor(Math.random() * possibleChars.length)]
//     ).join("");

//   return Array.from({ length: count }, generateHexColor);
// };

// console.log(arrayOfHexaColors(10));

// Write a function arrayOfRgbColors which return any number of RGB colors in an array.
// My Solution
// const arrayOfRgbColors = (count) => {
//   let rgbValue = () => Math.floor(Math.random() * 255);
//   let rgbArray = () => Array.from({ length: 3 }, rgbValue).join(",");

//   let fullArray = [];

//   let colorArray = Array.from({ length: count }, rgbArray);
//   for (let i = 0; i < colorArray.length; i++) {
//     fullArray.push(`rgb(${colorArray[i]})`);
//   }

//   return fullArray.join(", ");
// };
// console.log(arrayOfRgbColors(3));

// Gpt's Solution

// const arrayOfRgbColors = (count) => {
//   const randomValue = () => Math.floor(Math.random() * 256);
//   const generateRgbColor = () =>
//     `rgb(${Array.from({ length: 3 }, randomValue).join(", ")})`;

//   return Array.from({ length: count }, generateRgbColor);
// };

// console.log(arrayOfRgbColors(3));

// Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.
// My solution:
// const convertHexaToRgb = () => {
//   let hexChars = "0123456789abcdefABCDEF";
//   let hexVal = () => hexChars[Math.floor(Math.random() * hexChars.length)];
//   let hexa = `#${Array.from({ length: 6 }, hexVal).join("")}`;

//   let redVal = parseInt(hexa.slice(1, 3), 16);
//   let greenVal = parseInt(hexa.slice(3, 5), 16);
//   let blueVal = parseInt(hexa.slice(5, 7), 16);

//   return `rgb(${redVal}, ${greenVal}, ${blueVal})`;
// };
// console.log(convertHexaToRgb());

// ChatGpt's Solution
// const convertHexaToRgb = (hex) => {
//   // Generate a random hex if no input is provided
//   if (!hex) {
//     const hexChars = "0123456789abcdef";
//     hex = `#${Array.from(
//       { length: 6 },
//       () => hexChars[Math.floor(Math.random() * hexChars.length)]
//     ).join("")}`;
//   }

//   // Validate hex format
//   if (!/^#?[0-9a-fA-F]{6}$/.test(hex)) {
//     throw new Error("Invalid hexadecimal color format.");
//   }

//   // Remove '#' if present
//   hex = hex.replace(/^#/, "");

//   // Parse RGB values
//   const redVal = parseInt(hex.slice(0, 2), 16);
//   const greenVal = parseInt(hex.slice(2, 4), 16);
//   const blueVal = parseInt(hex.slice(4, 6), 16);

//   return `rgb(${redVal}, ${greenVal}, ${blueVal})`;
// };

// // Example Usage:
// console.log(convertHexaToRgb()); // Generates a random hex and converts it to RGB
// console.log(convertHexaToRgb("#ff5733")); // Converts "#ff5733" to "rgb(255, 87, 51)"

// Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.
// MY SOLUTION:
// const convertRgbToHexa = () => {
//   let rgbVal = () => Math.floor(Math.random() * 256);
//   let rgbArr = Array.from({ length: 3 }, rgbVal);

//   let redValue = rgbArr[0].toString(16);
//   let greenValue = rgbArr[1].toString(16);
//   let blueValue = rgbArr[2].toString(16);

//   return `#${redValue.padStart(2, "0")}${greenValue.padStart(
//     2,
//     "0"
//   )}${blueValue.padStart(2, "0")}`;
// };
// console.log(convertRgbToHexa());

// // DeepSeek Solution;
// const generateHexColor = (red, green, blue) => {
//   // If RGB values are provided, use them; otherwise, generate random values
//   const rgbArr = [red, green, blue].map((value) =>
//     value !== undefined ? value : Math.floor(Math.random() * 256)
//   );

//   // Convert each RGB value to a 2-digit hex string, padding with leading zeros if necessary
//   const hexColor = rgbArr
//     .map((value) => value.toString(16).padStart(2, "0")) // Ensure 2 digits
//     .join(""); // Combine into a single string

//   return `#${hexColor}`;
// };

// // Example usage:
// console.log(generateHexColor()); // Random hex color
// console.log(generateHexColor(255, 0, 0)); // Red: #ff0000
// console.log(generateHexColor(0, 255, 0)); // Green: #00ff00
// console.log(generateHexColor(0, 0, 255)); // Blue: #0000ff
// Write a function generateColors which can generate any number of hexa or rgb colors.

// WITH PARAMETERS (DEEPSEEK):

// const generateHexColor = (red, green, blue) => {
//   const validateRgbValue = (value) => {
//     if (value !== undefined && (typeof value !== 'number' || value < 0 || value > 255)) {
//       throw new Error('RGB values must be integers between 0 and 255.');
//     }
//     return value !== undefined ? value : Math.floor(Math.random() * 256);
//   };

//   const rgbArr = [red, green, blue].map(validateRgbValue);

//   const hexColor = rgbArr
//     .map(value => value.toString(16).padStart(2, '0'))
//     .join('');

//   return `#${hexColor}`;
// };

// // Example usage with validation:
// console.log(generateHexColor(255, 0, 0)); // #ff0000
// console.log(generateHexColor(300, 0, 0)); // Throws an error: "RGB values must be integers between 0 and 255."

// console.log(generateColors('hexa', 3)) // ['#a3e12f', '#03ed55', '#eb3d2b']
// console.log(generateColors('hexa', 1)) // '#b334ef'
// console.log(generateColors('rgb', 3)) // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
// console.log(generateColors('rgb', 1)) // 'rgb(33,79, 176)'
// Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array
// // MY SOLUTION
// const shuffleArray = (arr) => {
//   let randomIndex = () => arr[Math.floor(Math.random() * arr.length)];
// };
// console.log(shuffleArray([1, 2, 3, 4, 5]));

// CHEKEM'S SOLUTION 1
// const fn = (arr) => {
//   let shuffledArr = [];
//   const originalArrSize = arr.length;

//   const generateRandomElement = () => {
//     const randomId = Math.floor(Math.random() * originalArrSize);
//     const randomEl = arr[randomId];
//     return randomEl;
//   };

//   for (let i = 0; i < originalArrSize; i++) {
//     const element = generateRandomElement();
//     if (!shuffledArr.includes(element)) {
//       shuffledArr.push(element);
//     } else {
//       i--;
//     }
//   }

//   return shuffledArr;
// };

// console.log(fn([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// Deepseek powered solution(Checkem)
// const shuffleArray = (arr) => {
//   const shuffledArr = [...arr]; // Clone to avoid mutating the original
//   for (let i = shuffledArr.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1)); // Random index ≤ i
//     [shuffledArr[i], shuffledArr[j]] = [shuffledArr[j], shuffledArr[i]]; // Swap
//   }
//   return shuffledArr;
// };
// console.log(shuffleArray([1, 2, 4, 35, 32, 12]));

// Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number
// solution(*credit checkem)
// const factorial = (num) => {
//   const result = 3;
//   const arrOfNums = [];

//   while (num >= 1) {
//     arrOfNums.push(num);
//     num--;
//   }
//   return arrOfNums.reduce((a, b) => a * b);
// };

// solution 2(*checkem)
// const fn = (num) => {
//   if (num === 1 || num === 0) return 1;

//   const arrOfNums = [];
//   let sum = 1;

//   while (num >= 1) {
//     arrOfNums.push(num);
//     num--;
//   }

//   for (let i = 0; i < arrOfNums.length; i++) {
//     sum *= arrOfNums[i];
//   }

//   return sum;
// };
// console.log(fn(5));

// // Call your function isEmpty, it takes a parameter and it checks if it is empty or not
// const isEmpty = (arr) => {
//   if (arr.length === 0) {
//     return "empty";
//   } else {
//     return arr;
//   }
// };
// console.log(isEmpty([1, 2, 3]));

// solution 2(deepseek) accounts for different types of data
// function isEmpty(value) {
//   // Handle null and undefined
//   if (value == null) return true;

//   // Handle arrays
//   if (Array.isArray(value)) return value.length === 0;

//   // Handle strings
//   if (typeof value === "string") return value.trim().length === 0;

//   // Handle plain objects
//   if (value.constructor === Object) return Object.keys(value).length === 0;

//   // Handle other data types
//   return false;
// }
// console.log(isEmpty("tonsils"));

// solution3(checkem) compact version
// const isEmpty = (input) => {
//   return (
//     (typeof input === "string" && input.trim().length === 0) ||
//     input.length === 0 ||
//     Object.keys(input).length === 0
//   );
// };
// console.log(isEmpty("tonsils"));
// Call your function sum, it takes any number of arguments and it returns the sum.
// const sum = (...value) => {
//   // let add = 0;
//   // for (let i = 0; i < value.length; i++) {
//   //   add += value[i];
//   // }
//   // return add;
//   return value.reduce((a, b) => a + b, 0);
// };
// console.log(sum(1, 3, 4, 5, 6, 2, 4));

// Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.
// const sumOfArrayItems = (...arr) => {
//   if (arr === "" && arr === typeof Boolean) {
//     return "Please enter a number";
//   } else {
//     return arr.reduce((a, b) => a + b, 0);
//   }
// };
// console.log(sumOfArrayItems(1, 2, 3, 4, 5, 4, 2));

// SOLUTION2 (DEEPSEEK) checks for all possible situations.
// const sumOfArrayItems = (arr) => {
//   // 1. Check if input is actually an array
//   if (!Array.isArray(arr)) {
//     return "Error: Input must be an array";
//   }

//   // 2. Verify all elements are numbers
//   const nonNumbers = arr.filter((item) => typeof item !== "number");
//   if (nonNumbers.length > 0) {
//     return `Error: Array contains non-number elements at positions: ${nonNumbers.join(
//       ", "
//     )}`;
//   }

//   // 3. Handle empty array case
//   if (arr.length === 0) {
//     return "Warning: Empty array provided";
//   }

//   // 4. Calculate sum safely
//   return arr.reduce((acc, curr) => acc + curr, 0);
// };
// console.log(sumOfArrayItems([1, 2, 4, 5, 2, 6, 8]));

// const isArr = (arr) => {
//   if (Array.isArray(arr)) {
//     return true;
//   } else {
//     return "I don't know what that's supposed to be but it's not an array.";
//   }
// };
// console.log(isArr());

// // Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.
// const average = (value) => {
//   if (!Array.isArray(value)) {
//     return "Please enter an array";
//   }

//   value.every((el) => typeof el === "number");

//   let sumOfValues = value.reduce((a, b) => a + b, 0);
//   console.log(sumOfValues);
//   return (valuesAverage = sumOfValues / value.length);
// };
// console.log(average([1, 2, 3, "thursday", 5]));

// SOLUTION2 (DEEPSEEK) Once type checking was advised, and an empty case also see to come up a lot. Need to work on that.
// const average = (arr) => {
//   // 1. Validate input is an array
//   if (!Array.isArray(arr)) {
//     return "Error: Input must be an array";
//   }

//   // 2. Handle empty array case
//   if (arr.length === 0) {
//     return "Error: Cannot calculate average of empty array";
//   }

//   // 3. Check all elements are numbers
//   const nonNumbers = arr
//     .map((item, index) => (typeof item !== "number" ? index : -1))
//     .filter((index) => index !== -1);

//   if (nonNumbers.length > 0) {
//     return `Error: Non-number elements at positions ${nonNumbers.join(", ")}`;
//   }

//   // 4. Calculate average
//   const sum = arr.reduce((acc, curr) => acc + curr, 0);
//   return sum / arr.length;
// };
// console.log(average([1, 32, 392, 32]));

// Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.
// const modifyArray = (arr) => {
//   if (!Array.isArray(arr)) {
//     return "Men, where's my array";
//   }

//   if (arr.length < 5) {
//     return "item not found";
//   }

//   arr[4] = arr[4] + "time";
//   return arr;
// };
// console.log(modifyArray(["yellow", 1, 2, 23, 32, 23, 13]));

// SOLUTION2 (DEEPSEEK) still thinking about the previous exercise I included a lot of unnecessary steps.
// const modifyArray = (arr) => {
//   // 1. Validate input is an array
//   if (!Array.isArray(arr)) {
//     return "Men, where's my array";
//   }

//   // 2. Check array length
//   if (arr.length < 5) {
//     return "item not found"; // Matching exact requirement
//   }

//   // 3. Create a shallow copy
//   const modified = [...arr];

//   // 4. Modify FIFTH element (index 4)
//   modified[4] = modified[4] * 10; // Example modification
//   // Alternative: modified[4] = "new value"

//   return modified;
// };
// console.log(modifyArray([1, 2, 4, 5, 2, 5, 2]));

// console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']);
// ['Avocado', 'Tomato', 'Potato','Mango', 'LEMON', 'Carrot']
// console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon','Microsoft',  'IBM']);
// ['Google', 'Facebook','Apple', 'Amazon','MICROSOFT',  'IBM']
// console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon']);
//   'Not Found'
// Write a function called isPrime, which checks if a number is prime number.
// const isPrime = (n) => {
//   if (n === 0) {
//     return "Not a valid prime number";
//   } else if(n){

//   }
// };
// console.log(isPrime(3));

// SOLUTION2(DEEPSEEK) had trouble with figuring out a way to check if a number is a prime number.
// function isPrime(num) {
//   // 1. Validate input type
//   if (typeof num !== "number" || !Number.isInteger(num)) {
//     return "Error: Input must be an integer";
//   }

//   // 2. Handle edge cases
//   if (num <= 1) return false; // 0, 1, negatives
//   if (num === 2) return true; // Only even prime

//   // 3. Eliminate even numbers
//   if (num % 2 === 0) return false;

//   // 4. Check divisors up to square root (optimized)
//   const limit = Math.sqrt(num);
//   for (let i = 3; i <= limit; i += 2) {
//     if (num % i === 0) return false;
//   }

//   return true;
// }
// console.log(isPrime(3));
// Write a functions which checks if all items are unique in the array.
// const uniqueItems = (arr) => {
//   if (!Array.isArray(arr)) {
//     return "I can't do nothing with this";
//   }
//   if (arr.length === 0) {
//     return "Why is so empty in here";
//   }
//   let extraArr = [];
//   let setOf = new Set();
//   for (const item of arr) {
//     let included = setOf.has(item);
//     let added = setOf.add(item);
//     console.log(included);
//   }
// };

// // SOLUTION2(DEEPSEEK) I didn't return the expected result of true of false.
// const uniqueItems = (arr) => {
//   if (!Array.isArray(arr)) {
//     return "I can't do nothing with this";
//   }
//   if (arr.length === 0) {
//     return "Why is so empty in here";
//   }

//   const seen = new Set();

//   for (const item of arr) {
//     if (seen.has(item)) {
//       return false; // Found duplicate immediately exit
//     }
//     seen.add(item);
//   }

//   return true; // No duplicates found
// };
// console.log(uniqueItems([1, 2, 4, 5, 2, 2, 2, 2, 2, 2, 3, 4]));
// Write a function which checks if all the items of the array are the same data type.
// const typecheck = (arr) => {
//   if (!Array.isArray(arr)) {
//     return "I can't do nothing with this";
//   }
//   if (arr.length === 0) {
//     return "Why is so empty in here";
//   }
//   let firstType = arr[0];

//   for (const item of arr) {
//     if (typeof item !== typeof firstType) {
//       return `item at index ${arr.indexOf(item)} is an ugly duckling`;
//     }
//   }
//   return "all good";
// };

// SOLUTION2(DEEPSEEK) recommended creating a variable to check the item at the first index and the compare it to the other values in the array to see if they match.
// const typecheck = (arr) => {
//   if (!Array.isArray(arr)) {
//     return "I can't do nothing with this";
//   }
//   if (arr.length === 0) {
//     return "Why is so empty in here";
//   }

//   // Get the type of the first element
//   const getType = (item) => {
//     if (item === null) return "null";
//     if (Array.isArray(item)) return "array";
//     return typeof item;
//   };

//   const firstType = getType(arr[0]);

//   // Check if all elements have the same type as the first element
//   for (let i = 1; i < arr.length; i++) {
//     if (getType(arr[i]) !== firstType) {
//       return false; // Return false if any element has a different type
//     }
//   }

//   return true; // Return true if all elements have the same type
// };
// console.log(typecheck([1, 3, "yes", 4, 5]));
// JavaScript variable name does not support special characters or symbols except $ or _. Write a function isValidVariable which check if a variable is valid or invalid variable.
// const isValidVariable = (str) => {
//   if (typeof str !== "string" || str.length === 0) {
//     return "I don't know what to do with this";
//   }

//   if (/^\d/gi.test(str)) {
//     return "Can't start with a number.";
//   }

//   let unallowed = /[^a-zA-Z0-9$_]/g;

//   if (unallowed.test(str)) {
//     return "Something's off, check your variable.";
//   }
//   return `${str} is the way to go`;
// };

// SOLUTION2(DEEPSEEK) My regex was flawed which caused the if statement to work improperly. the first condition was truthy and therefore prevented the rest of the code from being executed
// const isValidVariable = (str) => {
//   // Check if the input is a non-empty string
//   if (typeof str !== "string" || str.length === 0) {
//     return `${str} is invalid. Please provide a non-empty string.`;
//   }

//   // Check if the first character is a number
//   if (/^\d/.test(str)) {
//     return `${str} is invalid. Variable names cannot start with a number.`;
//   }

//   // Check for invalid characters (anything that's not a letter, number, $, or _)
//   const invalidChars = /[^a-zA-Z0-9$_]/g;
//   if (invalidChars.test(str)) {
//     return `${str} is invalid. Variable names can only contain letters, numbers, $, and _.`;
//   }

//   // If all checks pass, the variable name is valid
//   return `${str} is the right way to go.`;
// };
// console.log(isValidVariable("gtAttitude"));
// Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.
// const randomNumberGen = () => {
//   let randomValue = Math.floor(Math.random() * 10) + 1;
//   let randomNumbers = 0;
//   let arr = [];
//   for (let i = 0; i < 7; i++) {
//     randomNumbers += randomValue;
//     arr.push(randomNumbers);
//   }
//   return `[(${arr})]`;
// };
// console.log(randomNumberGen());

/* SOLUTION2(DEEPSEEK) My original solution didn't actually generate random number, but a sequence of numbers based on the first number, It could also generate an array of 0 if the first number was a 0. The first solution is now a generate random multiples function, the second solution actually generates a random number. */
// const generateMultiples = () => {
//   const randomValue = Math.floor(Math.random() * 10) + 1; // Ensure randomValue is at least 1
//   const multiples = [];
//   for (let i = 1; i <= 7; i++) {
//     multiples.push(randomValue * i);
//   }
//   return multiples;
// };

// console.log(generateMultiples());

// SOLUTION3(DEEPSEEK);
// const generateRandomNumbers = () => {
//   const randomNumbers = [];
//   for (let i = 0; i < 7; i++) {
//     randomNumbers.push(Math.floor(Math.random() * 10));
//   }
//   return randomNumbers;
// };

// console.log(generateRandomNumbers());

// sevenRandomNumbers()
// [(1, 4, 5, 7, 9, 8, 0)]
// Write a function called reverseCountries, it takes countries array and first it copy the array and returns the reverse of the original array
// const reverseCountries = (arr) => {
//   let arr2 = [...arr];
//   return arr2.reverse();
// };
// console.log(
//   reverseCountries([
//     "Iceland",
//     "India",
//     "Indonesia",
//     "Iran",
//     "Iraq",
//     "Ireland",
//     "Israel",
//     "Italy",
//     "Jamaica",
//     "Japan",
//     "Jordan",
//     "Kazakhstan",
//     "Kenya",
//     "Kiribati",
//   ])
// );
