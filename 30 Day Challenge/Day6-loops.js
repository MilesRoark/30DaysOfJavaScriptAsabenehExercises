// Exercises:Day 6 LOOPS

// Exercises: Level 1
// const countries = [
//   "Albania",
//   "Bolivia",
//   "Canada",
//   "Denmark",
//   "Ethiopia",
//   "Finland",
//   "Germany",
//   "Hungary",
//   "Ireland",
//   "Japan",
//   "Kenya",
// ];

// const webTechs = [
//   "HTML",
//   "CSS",
//   "JavaScript",
//   "React",
//   "Redux",
//   "Node",
//   "MongoDB",
// ];

// const mernStack = ["MongoDB", "Express", "React", "Node"];
// Iterate 0 to 10 using for loop, do the same using while and do while loop
// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

// let i = 0;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// do {
//   console.log(i);
//   i++;
// } while (i <= 10);

// Iterate 10 to 0 using for loop, do the same using while and do while loop
// for (let i = 10; i >= 0; i--) {
//   console.log(i);
// }

// let i = 10;
// while (i >= 0) {
//   console.log(i);
//   i--;
// }

// do {
//   console.log(i);
//   i--;
// } while (i >= 0);

// Iterate 0 to n using for loop
// for (let i = 20; i >= 0; i--) {
//   console.log(i);
// }

// Write a loop that makes the following pattern using console.log():

//     #
//     ##
//     ###
//     ####
//     #####
//     ######
//     #######

// for (let i = 1; i <= 19; i++) {
//   console.log("#".repeat(i));
// }
// Use loop to print the following pattern:

// 0 x 0 = 0
// 1 x 1 = 1
// 2 x 2 = 4
// 3 x 3 = 9
// 4 x 4 = 16
// 5 x 5 = 25
// 6 x 6 = 36
// 7 x 7 = 49
// 8 x 8 = 64
// 9 x 9 = 81
// 10 x 10 = 100
// let i = 0;
// while (i <= 10) {
//   console.log(i ** 2);
//   i++;
// }
// Using loop print the following pattern

//  i    i^2   i^3
//  0    0     0
//  1    1     1
//  2    4     8
//  3    9     27
//  4    16    64
//  5    25    125
//  6    36    216
//  7    49    343
//  8    64    512
//  9    81    729
//  10   100   1000
// for (let i = 0; i <= 10; i++) {
//   console.log(i ** 3);
// }
// Use for loop to iterate from 0 to 100 and print only even numbers
// for (let i = 0; i <= 100; i++) {
//   if (i % 2 === 0) {
//     console.log(parseInt(i));
//   }
// }

// Use for loop to iterate from 0 to 100 and print only odd numbers
// for (let i = 0; i <= 100; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }

// Use for loop to iterate from 0 to 100 and print only prime numbers
// for (let num = 2; num <= 100; num++) {
//   let isPrime = true;

//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) {
//       isPrime = false;
//       break;
//     }
//   }

//   if (isPrime) {
//     console.log(num);
//   }
// }
// for (let i = 2; i <= 100; i++) {
//   if (i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0 && i % 9 !== 0) {
//     console.log(i);
//   }
// }
// Use for loop to iterate from 0 to 100 and print the sum of all numbers.
// let sum = 0;
// for (let i = 0; i <= 100; i++) {
//   sum += i;
//   console.log(sum);
// }

// The sum of all numbers from 0 to 100 is 5050.
// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
// let evenSum = 0;
// let oddSum = 0;
// for (let i = 0; i <= 100; i++) {
//   if (i % 2 === 0) {
//     evenSum += i;
//   } else {
//     oddSum += i;
//   }
// }
// let newArr = [];
// newArr.push(evenSum);
// newArr.push(oddSum);
// console.log(newArr);

// The sum of all evens from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is 2500.
// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array

//   [2550, 2500]
// Develop a small script which generate array of 5 random numbers
// const numbersArr = Array.from({ length: 5 }, () =>
//   Math.ceil(Math.random() * 10)
// );
// let numbersArr = [];
// for (let i = 0; i < 5; i++) {
//   numbersArr.push(Math.floor(Math.random() * 100) );
// }
// console.log(numbersArr);

// Develop a small script which generate array of 5 random numbers and the numbers must be unique
// let numbersArr = [];
// for (let i = 0; i < 5; ) {
//   const randomNumber = Math.floor(Math.random() * 100);
//   if (!numbersArr.includes(randomNumber)) {
//     numbersArr.push(randomNumber);
//     i++;
//   }
// }
// console.log(numbersArr);

// Develop a small script which generate a six characters random id:
// let usableCharacters = "abcdevles1039483";
// let randomString = "";
// for (let i = 0; i < 6; i++) {
//   const randomIndex = Math.floor(Math.random() * usableCharacters.length);
//   randomString += usableCharacters[randomIndex];
// }
// console.log(randomString);
// 5j2khz
// Exercises: Level 2
// Develop a small script which generate any number of characters random id:
// let length = 12;
// let useableCharacters = "fe3jo1gl124gxkqci4utda1lmbelpkm03rba";
// let newString = "";
// for (let i = 0; i < length; i++) {
//   let randomIndex = Math.floor(Math.random() * useableCharacters.length);
//   newString += useableCharacters[randomIndex];
// }
// console.log(newString);

//   fe3jo1gl124g
//   xkqci4utda1lmbelpkm03rba
// Write a script which generates a random hexadecimal number.
// let characters = "abcdef123456789";
// let hexValue = "";
// for (let i = 0; i < 7; i++) {
//   let randomindex = Math.floor(Math.random() * characters.length);
//   hexValue += characters[randomindex];
// }
// console.log(`#${hexValue}`);

// '#ee33df'
// Write a script which generates a random rgb color number.
// let randomColor = [];

// for (let i = 0; i < 3; i++) {
//   let randomIndex = Math.floor(Math.random() * 300);
//   randomColor.push(randomIndex);
// }
// console.log(`rbg(${randomColor})`);
// rgb(240,180,80)
// Using the above countries array, create the following new array.

// const lengthArr = [];
// Using the above countries array, create an array for countries length'.
// for (let i = 0; i < countries.length; i++) {
//   let length = countries[i].length;
//   lengthArr.push(length);
// }

// console.log(lengthArr);
// for (const country of countries) {
//   const length = country.length;
//   lengthArr.push(length);
// }
// console.log(lengthArr);
// const lengthArr = countries.map((country) => {
//   return country.length;
// });
// console.log(lengthArr);

// [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]
// Use the countries array to create the following array of arrays:
// for (const country of countries) {
//   let length = country.length;
//   console.log([country, country.slice(0, 3), length]);
// }
// let newArr = countries.map((country) => {
//   let length = country.length;
//   return [`${country}, ${country.slice(0, 3)}, ${length}`];
// });
// console.log(newArr);

//   [
//   ['Albania', 'ALB', 7],
//   ['Bolivia', 'BOL', 7],
//   ['Canada', 'CAN', 6],
//   ['Denmark', 'DEN', 7],
//   ['Ethiopia', 'ETH', 8],
//   ['Finland', 'FIN', 7],
//   ['Germany', 'GER', 7],
//   ['Hungary', 'HUN', 7],
//   ['Ireland', 'IRE', 7],
//   ['Iceland', 'ICE', 7],
//   ['Japan', 'JAP', 5],
//   ['Kenya', 'KEN', 5]
// ]
// In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.
// let countriesWithLand = countries.filter((country) => country.includes("LAND"));
// if (countriesWithLand.length > 0) {
//   console.log(countriesWithLand);
// } else {
//   console.log("All these countries are without land.");
// }

// ['Finland','Ireland', 'Iceland']
// In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.

// let correct = [];
// for (const country of countries) {
//   if (country.endsWith("IA")) {
//     correct.push(country);
//   }
// }

// if (correct.length > 0) {
//   console.log(correct);
// } else {
//   console.log("These countries end without 'ia'");
// }

// let countryEndsWith = countries.filter((country) => country.includes("IA"));
// console.log(countryEndsWith);
// ['Albania', 'Bolivia','Ethiopia']
// Using the above countries array, find the country containing the biggest number of characters.
// let longestCharacters = countries.reduce((longest, country) =>
//   country.length > longest.length ? country : longest
// );
// console.log(longestCharacters);
// let longestCountry = "";
// for (const country of countries) {
//   if (country.length > longestCountry.length) {
//     longestCountry = country;
//   }
// }
// console.log(longestCountry);
// longest = "";
// countries.forEach((country) => {
//   if (country.length > longest.length) {
//     longest = country;
//   }
// });
// console.log(longest);

// Ethiopia
// Using the above countries array, find the country containing only 5 characters.

// ['Japan', 'Kenya']

// const webTechs = [
//   "HTML",
//   "CSS",
//   "JavaScript",
//   "React",
//   "Redux",
//   "Node",
//   "MongoDB",
// ];
// Find the longest word in the webTechs array
// let longestTech = "";
// for (const tech of webTechs) {
//   if (tech.length > longestTech.length) {
//     longestTech = tech;
//   }
// }
// console.log(longestTech);

// Use the webTechs array to create the following array of arrays:
// let newArr = [];
// for (const tech of webTechs) {
//   let techInfo = [tech, tech.length];
//   newArr.push(techInfo);
// }
// console.log(newArr);
// [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]
// An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack
// const mernStack = ["MongoDB", "Express", "React", "Node"];
// for (const stack of mernStack) {
//   console.log(stack[0]);
// }

// Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.
// const webTechs = [
//   "HTML",
//   "CSS",
//   "JS",
//   "React",
//   "Redux",
//   "Node",
//   "Express",
//   "MongoDB",
// ];
// for (let i = 0; i < webTechs.length; i++) {
//   console.log(webTechs[i]);
// }
// for (const tech of webTechs) {
//   console.log(tech);
// }
// This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
// const fruits = ["banana", "orange", "mango", "lemon"];
// const copy = [...fruits];

// for (const _ of copy) {
//   let lastElement = fruits.pop();
//   console.log(lastElement);
// }

// for (let i = fruits.length - 1; i >= 0; i--) {
//   console.log(fruits[i]);
// }

// Print all the elements of array as shown below.

// const fullStack = [
//   ["HTML", "CSS", "JS", "React"],
//   ["Node", "Express", "MongoDB"],
// ];
// console.log(fullStack.flat(2));

// for (const stack of fullStack) {
//   for (const element of stack) {
//     console.log(element);
//   }
// }
//   HTML
//   CSS
//   JS
//   REACT
//   NODE
//   EXPRESS
//   MONGODB
// Exercises: Level 3

// Copy countries array(Avoid mutation)
// const countriesCopy = [...countries];
// console.log(countriesCopy);
// const sortedCoutries = countriesCopy.sort();
// console.log(sortedCoutries);
// Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries
// const webTechs = [
//   "HTML",
//   "CSS",
//   "JS",
//   "React",
//   "Redux",
//   "Node",
//   "Express",
//   "MongoDB",
// ];
// const mernStack = ["MongoDB", "Express", "React", "Node"];
// // Sort the webTechs array and mernStack array
// // const sorted1 = webTechs.sort();
// // console.log(sorted1);
// // Extract all the countries contain the word 'land' from the countries array and print it as array
// // const countries = [
// //   "ALBANIA",
// //   "BOLIVIA",
// //   "CANADA",
// //   "DENMARK",
// //   "ETHIOPIA",
// //   "FINLAND",
// //   "GERMANY",
// //   "HUNGARY",
// //   "IRELAND",
// //   "JAPAN",
// //   "KENYA",
// // ];
// const countries = [
//   "Afghanistan",
//   "Albania",
//   "Algeria",
//   "Andorra",
//   "Angola",
//   "Antigua and Barbuda",
//   "Argentina",
//   "Armenia",
//   "Australia",
//   "Austria",
//   "Azerbaijan",
//   "Bahamas",
//   "Bahrain",
//   "Bangladesh",
//   "Barbados",
//   "Belarus",
//   "Belgium",
//   "Belize",
//   "Benin",
//   "Bhutan",
//   "Bolivia",
//   "Bosnia and Herzegovina",
//   "Botswana",
//   "Brazil",
//   "Brunei",
//   "Bulgaria",
//   "Burkina Faso",
//   "Burundi",
//   "Cambodia",
//   "Cameroon",
//   "Canada",
//   "Cape Verde",
//   "Central African Republic",
//   "Chad",
//   "Chile",
//   "China",
//   "Colombi",
//   "Comoros",
//   "Congo (Brazzaville)",
//   "Congo",
//   "Costa Rica",
//   "Cote d'Ivoire",
//   "Croatia",
//   "Cuba",
//   "Cyprus",
//   "Czech Republic",
//   "Denmark",
//   "Djibouti",
//   "Dominica",
//   "Dominican Republic",
//   "East Timor (Timor Timur)",
//   "Ecuador",
//   "Egypt",
//   "El Salvador",
//   "Equatorial Guinea",
//   "Eritrea",
//   "Estonia",
//   "Ethiopia",
//   "Fiji",
//   "Finland",
//   "France",
//   "Gabon",
//   "Gambia, The",
//   "Georgia",
//   "Germany",
//   "Ghana",
//   "Greece",
//   "Grenada",
//   "Guatemala",
//   "Guinea",
//   "Guinea-Bissau",
//   "Guyana",
//   "Haiti",
//   "Honduras",
//   "Hungary",
//   "Iceland",
//   "India",
//   "Indonesia",
//   "Iran",
//   "Iraq",
//   "Ireland",
//   "Israel",
//   "Italy",
//   "Jamaica",
//   "Japan",
//   "Jordan",
//   "Kazakhstan",
//   "Kenya",
//   "Kiribati",
//   "Korea, North",
//   "Korea, South",
//   "Kuwait",
//   "Kyrgyzstan",
//   "Laos",
//   "Latvia",
//   "Lebanon",
//   "Lesotho",
//   "Liberia",
//   "Libya",
//   "Liechtenstein",
//   "Lithuania",
//   "Luxembourg",
//   "Macedonia",
//   "Madagascar",
//   "Malawi",
//   "Malaysia",
//   "Maldives",
//   "Mali",
//   "Malta",
//   "Marshall Islands",
//   "Mauritania",
//   "Mauritius",
//   "Mexico",
//   "Micronesia",
//   "Moldova",
//   "Monaco",
//   "Mongolia",
//   "Morocco",
//   "Mozambique",
//   "Myanmar",
//   "Namibia",
//   "Nauru",
//   "Nepal",
//   "Netherlands",
//   "New Zealand",
//   "Nicaragua",
//   "Niger",
//   "Nigeria",
//   "Norway",
//   "Oman",
//   "Pakistan",
//   "Palau",
//   "Panama",
//   "Papua New Guinea",
//   "Paraguay",
//   "Peru",
//   "Philippines",
//   "Poland",
//   "Portugal",
//   "Qatar",
//   "Romania",
//   "Russia",
//   "Rwanda",
//   "Saint Kitts and Nevis",
//   "Saint Lucia",
//   "Saint Vincent",
//   "Samoa",
//   "San Marino",
//   "Sao Tome and Principe",
//   "Saudi Arabia",
//   "Senegal",
//   "Serbia and Montenegro",
//   "Seychelles",
//   "Sierra Leone",
//   "Singapore",
//   "Slovakia",
//   "Slovenia",
//   "Solomon Islands",
//   "Somalia",
//   "South Africa",
//   "Spain",
//   "Sri Lanka",
//   "Sudan",
//   "Suriname",
//   "Swaziland",
//   "Sweden",
//   "Switzerland",
//   "Syria",
//   "Taiwan",
//   "Tajikistan",
//   "Tanzania",
//   "Thailand",
//   "Togo",
//   "Tonga",
//   "Trinidad and Tobago",
//   "Tunisia",
//   "Turkey",
//   "Turkmenistan",
//   "Tuvalu",
//   "Uganda",
//   "Ukraine",
//   "United Arab Emirates",
//   "United Kingdom",
//   "United States",
//   "Uruguay",
//   "Uzbekistan",
//   "Vanuatu",
//   "Vatican City",
//   "Venezuela",
//   "Vietnam",
//   "Yemen",
//   "Zambia",
//   "Zimbabwe",
// ];
// let endsWith = countries.filter((country) => country.includes("LAND"));
// console.log(endsWith);
// for (const country of countries) {
//   if (country.endsWith("land")) {
//     console.log(country);
//   }
// }
// Find the country containing the hightest number of characters in the countries array
// let longest = "";
// for (const country of countries) {
//   if (country.length > longest.length) {
//     longest = country;
//   }
// }
// console.log(longest);

// Extract all the countries contain the word 'land' from the countries array and print it as array
// Extract all the countries containing only four characters from the countries array and print it as array
// let charArr = [];
// for (const country of countries) {
//   if (country.length === 4) {
//     charArr.push(country);
//   }
// }
// console.log(charArr);
// let charArr = countries.filter((country) => country.length === 4);
// console.log(charArr);

// Extract all the countries containing two or more words from the countries array and print it as array
// let filtered = countries.filter((country) => {
//   let countryArr = country.split(" ");
//   console.log(countryArr[2]);

//   // console.log(countryArr);
//   if (countryArr.length >= 2) {
//     return country;
//   }
// });
// console.log(filtered);
// for (const country of countries) {
//   if (country.length > 14) {
//     console.log(country);
//   }
// }
// Reverse the countries array and capitalize each country and stored it as an array
// let newArr = [];
// for (let i = countries.length - 1; i >= 0; i--) {
//   let index = countries[i].toUpperCase();
//   newArr.push(index);
// }
// console.log(newArr);

// let reversed = countries.reverse().map((country) => country.toUpperCase());
// console.log(reversed);
