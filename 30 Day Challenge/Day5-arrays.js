// Day 5: ARRAYS

// Exercise: Level 1

// Declare an empty array;
// const emptyArr = [];
// console.log(emptyArr);
// Declare an array with more than 5 number of elements
// const newArr = [1, 2, 3, 4, 5, 6];
// console.log(newArr);
// Find the length of your array
// console.log(newArr.length);
// Get the first item, the middle item and the last item of the array
// console.log(newArr[0]);
// console.log(newArr[3]);
// console.log(newArr[newArr.length - 1]);
// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
// const mixedDataTypes = [
//   [1, 2, 3],
//   { house: "home" },
//   { end: "beginning" },
//   [4, 5, 6],
//   { out: "in" },
//   { west: "east" },
// ];
// console.log(mixedDataTypes.length);
// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon

// Print the array using console.log()
// console.log(itCompanies);
// Print the number of companies in the array
// console.log(itCompanies.length);
// Print the first company, middle and last company
// console.log(itCompanies[0]);
// console.log(itCompanies[3]);
// console.log(itCompanies[itCompanies.length - 1]);
// Print out each company
// itCompanies.forEach((company) => console.log(company.toUpperCase()));
// for (let company of itCompanies) {
// console.log(company.toUpperCase());
// }
// Change each company name to uppercase one by one and print them out
// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
// console.log(itCompanies.toString());
// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
// function doesItExist(company)
// function doesItExist(company) {
//   if (itCompanies.includes(company)) {
//     return console.log(`Yes ${company} is in the array`);
//   } else {
//     return console.log(`No, ${company} is not in the array`);
//   }
// }
// console.log(doesItExist("Domino's"));
// Filter out companies which have more than one 'o' without the filter method
// let filteredCompanies = [];
// for (let company of itCompanies) {
//   if (!company.includes("c")) {
//     filteredCompanies.push(company);
//   }
// }
// console.log(filteredCompanies);
// for (let company of itCompanies) {
//   if (company.indexOf("o") !== company.lastIndexOf("o")) {
//     filteredCompanies.push(company);
//   }
// }
// console.log(filteredCompanies);
// let newArr = itCompanies.filter((company) => {
//   return company.indexOf("0") === company.lastIndexOf("o");
// });
// console.log(newArr);
// let newArr = itCompanies
//   .map((company) => {
//     return company.indexOf("o") === company.lastIndexOf("o") && company;
//   })
//   .filter(Boolean);
// console.log(newArr);
// Sort the array using sort() method
// console.log(itCompanies.sort());

// Reverse the array using reverse() method
// console.log(itCompanies.reverse());
// Slice out the first 3 companies from the array
// console.log(itCompanies.slice(2));
// Slice out the last 3 companies from the array
// console.log(itCompanies.slice(-3));
// const itCompanies = [
//   "Facebook",
//   "Google",
//   "Microsoft",
//   "Apple",
//   "IBM",
//   "Oracle",
//   "Amazon",
// ];
//

// Slice out the middle IT company or companies from the array
// let middleIndex = itCompanies.length / 2;
// let firstArr = itCompanies.slice(itCompanies[0], middleIndex);
// let secondArr = itCompanies.slice(middleIndex + 1, itCompanies.length);
// let finalArr = firstArr.concat(secondArr);
// console.log(finalArr);
// Remove the first IT company from the array
// itCompanies.splice(itCompanies[0], 1);
// console.log(itCompanies);
// Remove the middle IT company or companies from the array
// let middleIndex = itCompanies.length / 2;
// itCompanies.splice(middleIndex, 1);
// console.log(itCompanies);
// Remove the last IT company from the array
// itCompanies.splice(itCompanies.length - 1);
// console.log(itCompanies);
// Remove all IT companies
// itCompanies.splice(itCompanies);
// console.log(itCompanies);

// Exercise: Level 2
// Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file
// const techs = require("./web_techs.js");
// const countryNames = require("./countries.js");
// console.log(techs);
// console.log(countryNames)
// First remove all the punctuations and change the string to array and count the number of words in the array

// let text =
// "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
// const cleanedTextRegex = /[.,""]/gi;
// const cleanedText = text.replace(/[.,""]/gi, "").split(" ");
// console.log(cleanedText);
// const text2 = cleanedText.split(" ");
// const words = text2.length;
// console.log(text2);
// console.log(words);
// console.log(text.split(/[\s.?,]+/).filter(Boolean));
// console.log(words)
// console.log(words.length)
// ["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]

// 13
// In the following shopping cart add, remove, edit items

// const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
// const add = shoppingCart.push("pencils");
// console.log(shoppingCart);
// const remove = shoppingCart.splice(1, 3);
// console.log(remove);
// shoppingCart.unshift("Meat");
// shoppingCart.push("sugar");
// const isAllergic = true;

// if (isAllergic) {
//   const indexOfProduct = shoppingCart.indexOf("Honey");
//   shoppingCart.splice(indexOfProduct, 1);
// }
// console.log(shoppingCart);

// const arr = ["meat", "milk", "bread", "honey", "cheese"];

// const isAllergic = true; //replace true by false to see the problematic product removed from the array

// if (isAllergic) {
//   const problematicProductId = arr.indexOf("honey");
//   arr.splice(problematicProductId, 1);
// }

// console.log(arr);
// console.log(shoppingCart);
// add 'Meat' in the beginning of your shopping cart if it has not been already added
// add Sugar at the end of you shopping cart if it has not been already added
// remove 'Honey' if you are allergic to honey
// modify Tea to 'Green Tea'
// const oldTea = shoppingCart.indexOf("Tea");
// shoppingCart.splice(oldTea, 1, "Green Tea");
// console.log(shoppingCart);

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

// In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
// console.log(countries.indexOf("Ethiopia"));
// console.log(countries[4]);
// console.log(
//   countries.includes("Ethiopia")
//     ? countries[countries.indexOf("Ethiopia")].toUpperCase()
//     : countries.push("Ethiopia")
// );

// In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
// console.log(
//   webTechs.includes("Sass") ? "Sass is a CSS preprocess" : webTechs.push("Sass")
// );
// console.log(webTechs);
// console.log(webTechs.indexOf("Sass"));
// webTechs.push("Sass");
// console.log(webTechs);
// Concatenate the following two variables and store it in a fullStack variable.

// const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
// const backEnd = ["Node", "Express", "MongoDB"];
// const fullStack = frontEnd.concat(backEnd);
// console.log(fullStack);
// ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]

// 1.Slice the first ten countries from the countries array

// let newArr = countries.slice(0, 10);
// console.log(newArr);
// console.log(countries.length);
// let copy = [...countries];
// console.log(copy);
// copy[0] = 123;
// console.log(copy);
// console.log(countries);

// console.log(countries);

// Exercise: Level 3
// The following is an array of 10 students ages:

// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
// Sort the array and find the min and max age
// ages.sort();
// console.log(ages);
// let minAge = Math.min(...ages);
// console.log(minAge);
// let maxAge = Math.max(...ages);
// console.log(maxAge);
// Find the median age(one middle item or two middle items divided by two)
// let median = ages.length / 2;
// console.log(median);
// if (median !== 0) {
//   console.log(ages.slice(median, median + 2));
// } else {
//   console.log(ages);
// }
// Find the average age(all items divided by number of items)
// let sum = 0;

// for (let age of ages) {
//   sum += age;
// }

// let average = sum / ages.length;
// console.log(average);
// Find the range of the ages(max minus min)
// let minAge = Math.min(...ages);
// let maxAge = Math.max(...ages);
// let range = maxAge - minAge;
// console.log(range);

// Compare the value of (min - average) and (max - average), use abs() method
// console.log(Math.abs(minAge - average).toFixed(2));
// console.log(Math.abs(maxAge - average).toFixed(2));
// Find the middle country(ies) in the countries array
// let middleCountry = Math.floor(countries.length / 2);
// console.log(middleCountry);
// if (countries.length % 2 === 0) {
//   console.log(
//     "Countries: ",
//     countries[middleCountry - 1],
//     countries[middleCountry]
//   );
// } else {
//   console.log("Country:", countries[middleCountry]);
// }
// console.log(countries[96]);
// console.log(countries.length);
// Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
// let median = Math.ceil(countries.length / 2);
// let firstHalf = countries.slice(0, median);
// let secondHalf = countries.slice(median, countries.length);
// console.log(firstHalf.length);
// console.log(secondHalf.length);
