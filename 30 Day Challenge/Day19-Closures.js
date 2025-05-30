// Exercises: Level 1
// Create a closure which has one inner function
// function greet(name) {
//   return function () {
//     console.log(`Hi ${name}`);
//   };
// }

// const newGreeting = greet("miles");
// newGreeting();
// Exercises: Level 2
// Create a closure which has three inner functions
// function greet(name, age, days) {
//   return {
//     hello: () => `Hi ${name}`,
//     howOld: () => `You are pretty smart for a(n) ${age} year old.`,
//     howManyDays: () => `it is ${days} days till your birthday.`,
//   };
// }

// const stuff = greet("miles", 80, 12);
// console.log(stuff.hello());
// console.log(stuff.howOld());
// console.log(stuff.howManyDays());
// Exercises: Level 3
// Create a personAccount out function. It has firstname, lastname, incomes, expenses inner variables. It has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance inner functions. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.

function personalAccount(firstName, lastName) {
  const incomes = [];
  const expenses = [];

  const addIncome = (description, amount) => {
    return incomes.push({ description, amount });
  };
  const addExpense = (description, amount) => {
    return expenses.push({ description, amount });
  };
  const totalIncome = () => {
    return incomes.reduce((acc, currVal) => acc + currVal.amount, 0);
  };
  const totalExpense = () => {
    return expenses.reduce((acc, currVal) => acc + currVal.amount, 0);
  };
  const accBalance = () => {
    return totalIncome() - totalExpense();
  };
  const accInfo = () => {
    return `Hi ${firstName}${lastName} your total income is ${totalIncome().toLocaleString()},you have spent ${totalExpense().toLocaleString()}, and you have a balance of ${accBalance().toLocaleString()}`;
  };

  return { addIncome, addExpense, accInfo };
}

const milesAccount = personalAccount("Miles", "Roark");
milesAccount.addIncome("construction", 4000);
milesAccount.addIncome("painting", 2500);
milesAccount.addIncome("racing", 1500);
milesAccount.addExpense("supplies", 600);
milesAccount.addExpense("food", 280);
const info = milesAccount.accInfo();
console.log(info);
// console.log(personalAccount().addIncome("racing", 5000));
// CHECKEM CLOSURE EXAMPLE
// const recursiveFunction = (n) => {
//   console.log(n);
//   if (n === 0) {
//     return;
//   }
//   recursiveFunction(n - 1);
// };
// recursiveFunction(10);

// CLOSURE EXAMPLES
// function greet() {
//   const name = "John";

//   return function () {
//     console.log(`Hi ${name}`);
//   };
// }

// const greeting = greet("Miles");

// greeting();

// function setCount() {
//   let number = 0;

//   return function () {
//     console.log(++number);
//   };
// }

// const counter = setCount();
// counter();
// counter();
// counter();

// BECAUSE THE VAR IN THE FOR LOOP IS HOISTED WE GET A DIFFERENT OUTPUT THAN EXPECTED...
// function addNumbers() {
//   var numbers = [];

//   //    var = 1;
//   for (var i = 1; i <= 3; i++) {
//     numbers.push(function () {
//       return i;
//     });
//   }

//   return numbers;
// }

// const getNumbers = addNumbers();

// console.log(getNumbers[0]());
// console.log(getNumbers[1]());
// console.log(getNumbers[2]());

// const personalAccount = (firstName, lastName) => {
//   const incomes = [];
//   const expenses = [];
//   let balance = 0;

//   const addIncome = (amount) => {
//     incomes.push(amount);
//   };

//   const totalIncome = () => {
//     return incomes.reduce((a, b) => a + b, 0);
//   };

//   const addExpense = (productName, price) => {
//     expenses.push({ productName, price });
//   };

//   const totalExpense = () => {
//     return expenses.reduce((a, b) => a + b.price, 0);
//   };

//   const getBalance = () => {
//     balance = totalIncome() - totalExpense();
//     return balance;
//   };

//   const accountInfo = () => {
//     return `Account: ${firstName} ${lastName}, Balance: ${getBalance().toFixed(
//       2
//     )}$`;
//   };

//   return {
//     addIncome,
//     addExpense,
//     accountInfo,
//   };
// };

// const bobAccount = personalAccount("bob", "sponge");
// bobAccount.addIncome(1200.0);
// bobAccount.addIncome(57.65);
// bobAccount.addExpense("TV", 400.0);
// bobAccount.addExpense("car", 40.0);
// const bobInfos = bobAccount.accountInfo();
// console.log(bobInfos);

// const janeAccount = personalAccount("jane", "doe");
// janeAccount.addIncome(800.0);
// janeAccount.addIncome(4.65);
// janeAccount.addExpense("Bike", 80.0);
// const janeInfos = janeAccount.accountInfo();
// console.log(janeInfos);

// let num = [];
// for (let i = 1; i <= 5; i++) {
//   let randomnum = Math.floor(Math.random() * 100);
//   num.push(randomnum);
// }

// console.log(num.toString());

// const word = "chicken";

// const newArray = Array.from(word, (letter) => letter + "o");
// console.log(newArray);

// const set = new Set();

// for (let i = 0; i < 5; i++) {
//   set.add(Math.floor(Math.random() * 100));
// }

// console.log(set);

const string = "abcdefghijklmnopqrstuvwxyz";
let stringsArr = "";

for (let i = 0; i < 6; i++) {
  const randomIndex = Math.floor(Math.random() * 10);
  stringsArr += string[randomIndex];
}

console.log(stringsArr);
