// Exercises: Level 1
// Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’
// const userIncome = {
//   monthly: 4000,
//   bonus: 10000,
//   extra: 5500,
// };
// function totalIncome() {
//   const total =
//     userIncome.bonus + 12 * userIncome.monthly + 12 * userIncome.extra;
//   return total;
// }
// console.log(totalIncome());
// The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.
points = ["-1", "2", "-4", "-3", "-1", "0", "4", "8"];
// const furthest = (arr) => {
//   arr.sort((a, b) => a - b);
//   const numArr = arr.map((num) => Number(num));
// console.log(numArr);
//   // let sum = numArr.reduce((acc, currVal) => acc + currVal, 0);
//   // return sum;
//   let nums = arr.map((num) => +num);
//   nums.sort((a, b) => a - b);
//   return Math.max(...arr) - Math.min(...arr);

//   let distance = numArr.reduce
// };
// console.log(furthest(points));

// SOLUTION2(CHEKEM)
// const points = ["-1", "2", "-4", "-3", "-1", "0", "4", "8"];
// sortedPoints =  [-4, -3, -1, -1, 0, 2, 4, 8]
// distance = 12

// const getDistance = (points) => {
//   const parse = points.map((point) => +point);
//   const sortedPoints = parse.sort((a, b) => a - b);
//   const distance = Math.max(...sortedPoints) - Math.min(...sortedPoints);

//   //logs:
//   console.log(`points: [${points}] (strings)`);
//   console.log(`parsedPoints: [${parse}] (numbers)`);
//   console.log(`sortedPoints: [${sortedPoints}]`);
//   console.log(`distance: ${distance}`);

//   return distance;
// const points = ["-1", "2", "-4", "-3", "-1", "0", "4", "8"];
// sortedPoints =  [-4, -3, -1, -1, 0, 2, 4, 8]
// distance = 12

// const getDistance = (points) => {
//   const sortedPoints = points.map((point) => +point).sort((a, b) => b - a);
//   const distance = sortedPoints[0] - sortedPoints[sortedPoints.length - 1];

//   //logs:
//   console.log(`points: [${points}] (strings)`);
//   console.log(`sortedPoints: [${sortedPoints}] (numbers)`);
//   console.log(`distance: ${distance}`);

//   return distance;
// };

// console.log(getDistance(points)); //12

// console.log(getDistance(points)); //12
// sortedPoints =  [-4, -3, -1, -1, 0, 2, 4, 8]
// distance = 12
// Write a pattern which identify if a string is a valid JavaScript variable
// const first_name = "milesRoarK";

// const is_valid_variable = (string) => {
//   let firstNameRegex = /^[^0-9|if|function|const|let|][_$\w]/g;
//   let check = firstNameRegex.test(string);

//   return check;
// };

// console.log(is_valid_variable(first_name));

// SOLUTION2 (CHATGPT) used a two step approach as regex isn't suitable for checking for valid reserved words.

// const reservedWords = new Set([
//   "if",
//   "function",
//   "const",
//   "let",
//   "var",
//   "else",
//   "for",
//   "while", // etc.
// ]);

// const is_valid_variable = (string) => {
//   const identifierRegex = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/;

// First, check for valid identifier pattern.
//   if (!identifierRegex.test(string)) {
// return false;
//   }

// Then, ensure the string is not a reserved word.
//   if (reservedWords.has(string)) {
//     return false;
//   }

//   return true;
// };

// const first_name = "string";
// console.log(is_valid_variable(first_name)); // Expected: true

// console.log(is_valid_variable("first_name")); // True
// console.log(is_valid_variable("first-name")); //False
// console.log(is_valid_variable("1first_name")); // False
// console.log(is_valid_variable("firstname")); //True

// Exercises: Level 2
// Write a function called tenMostFrequentWords which gets the ten most frequent word from a string?

// const paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`;

// const tenMostFrequentWords = (str, occurence) => {
//   let word = /[^\W.][a-zA-Z]*/gi;
//   let wordRegex = str.match(word);

// let word = str.replace(/[.]/g, "");
// let wordArr = word.split(" ");

// let wordCount = wordRegex.reduce((acc, curr) => {
//   curr = curr.toLowerCase();
//   acc[curr] = (acc[curr] || 0) + 1;
//   return acc;
// }, []);

// return Object.entries(wordCount)
//   .sort((a, b) => b[1] - a[1])
//   .map(([key, value]) => ({ name: key, count: value }))
//   .slice(0, occurence);

//   let countArr = Object.entries(wordCount);

//   return countArr.sort((a, b) => a[1] - b[1]);
// };

// console.log(tenMostFrequentWords(paragraph, 10));
//     console.log(tenMostFrequentWords(paragraph))
//     [
//     {word:'love', count:6},
//     {word:'you', count:5},
//     {word:'can', count:3},
//     {word:'what', count:2},
//     {word:'teaching', count:2},
//     {word:'not', count:2},
//     {word:'else', count:2},
//     {word:'do', count:2},
//     {word:'I', count:2},
//     {word:'which', count:1},
//     {word:'to', count:1},
//     {word:'the', count:1},
//     {word:'something', count:1},
//     {word:'if', count:1},
//     {word:'give', count:1},
//     {word:'develop',count:1},
//     {word:'capabilities',count:1},
//     {word:'application', count:1},
//     {word:'an',count:1},
//     {word:'all',count:1},
//     {word:'Python',count:1},
//     {word:'If',count:1}]
// console.log(tenMostFrequentWords(paragraph, 10))
// [{word:'love', count:6},
// {word:'you', count:5},
// {word:'can', count:3},
// {word:'what', count:2},
// {word:'teaching', count:2},
// {word:'not', count:2},
// {word:'else', count:2},
// {word:'do', count:2},
// {word:'I', count:2},
// {word:'which', count:1}
// ]
// Exercises: Level 3
// Write a function which cleans text. Clean the following text. After cleaning, count three most frequent words in the string.
// const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &&mo@re rewarding than educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@b. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;

// const textCleaner = (str, count) => {
//   const cleanedText = str.replace(/[%@#;*&$!]/gi, "").split(" ");

//   const frequency = cleanedText.reduce((acc, currVal) => {
//     currVal.toLowerCase();
//     acc[currVal] = (acc[currVal] || 0) + 1;
//     return acc;
//   }, []);

//   return Object.entries(frequency)
//     .sort((a, b) => b[1] - a[1])
//     .map(([key, value]) => ({ name: key, frequency: value }))
//     .slice(0, count);
// };

// console.log(textCleaner(sentence, 3));
//   console.log(cleanText(sentence))
//  I am a teacher and I love teaching There is nothing as more rewarding as educating and empowering people I found teaching more interesting than any other jobs Does this motivate you to be a teacher
//  ```
// 2. Write a function which find the most frequent words. After cleaning, count three most frequent words in the string.

// ```js
//  console.log(mostFrequentWords(cleanedText))
//  [{word:'I', count:3}, {word:'teaching', count:2}, {word:'teacher', count:2}]

// CHECKEM'S SOLUTION  Combines level 2 and 3
// const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;

// const getMostFrequentWord = (sentence, nbOfElements = 3) => {
//   const clean = sentence.replace(/[%$@&#;!?.,]/gi, "");
//   const obj = {};
//   for (const word of clean.split(" ")) {
//     if (obj[word]) {
//       obj[word] += 1;
//     } else {
//       obj[word] = 1;
//     }
//   }
//   const sorted = Object.entries(obj).sort((a, b) => b[1] - a[1]);
//   const rebuildObj = sorted.map((el) => ({ word: el[0], count: el[1] }));
//   const sliced = rebuildObj.slice(0, nbOfElements);
//   return sliced;
// };

// console.log(getMostFrequentWord(sentence, 5));

console.log("30 Days of JavaScript");

console.log("%d %s of JavaScript", 30, "Days");
