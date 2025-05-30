// DAY 8 OBJECTS
// const person = {
//   firstName: "Asabeneh",
//   age: 250,
//   country: "Finland",
//   city: "Helsinki",
//   skills: ["HTML", "CSS", "JS"],
//   title: "teacher",
//   address: {
//     street: "Heitamienkatu 16",
//     pobox: 2002,
//     city: "Helsinki",
//   },
//   getPersonInfo: function () {
//     return `I am ${this.firstName} and I live in ${this.city}, ${this.country}. I am ${this.age}.`;
//   },
// };
// const copyPerson = Object.assign({}, person);
// const keys = Object.keys(copyPerson);
// const values = Object.values(copyPerson);
// const entries = Object.entries(copyPerson);
// console.log(copyPerson.hasOwnProperty("name"));
// console.log(copyPerson.hasOwnProperty("score"));

// EXERCISES
// Exercises: Level 1
// Create an empty object called dog
// const dog = {};
// Print the the dog object on the console
// console.log(dog);
// Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
// const dog = {
//   name: "jane",
//   legs: 4,
//   color: "brown",
//   age: 3,
//   bark: function () {
//     return `${this.name} says woof woof`;
//   },
// };
// const barkProperty = dog.bark();
// Get name, legs, color, age and bark value from the dog object
// console.log(dog.name);
// console.log(dog.legs);
// console.log(dog.color);
// console.log(dog.age);
// console.log(barkProperty);

// Set new properties the dog object: breed, getDogInfo
// dog.breed = "collie";
// dog.getDogInfo = function dogInfo() {
//   return `${this.name} is a ${this.breed} of a mighty ${this.age}years.`;
// };
// const info = dog.getDogInfo();
// console.log(dog);

// EXERCISES: LEVEL 2
// const users = {
//   Alex: {
//     email: "alex@alex.com",
//     skills: ["HTML", "CSS", "JavaScript"],
//     age: 20,
//     isLoggedIn: false,
//     points: 30,
//   },
//   Asab: {
//     email: "asab@asab.com",
//     skills: [
//       "HTML",
//       "CSS",
//       "JavaScript",
//       "Redux",
//       "MongoDB",
//       "Express",
//       "React",
//       "Node",
//     ],
//     age: 25,
//     isLoggedIn: false,
//     points: 50,
//   },
//   Brook: {
//     email: "daniel@daniel.com",
//     skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
//     age: 30,
//     isLoggedIn: true,
//     points: 50,
//   },
//   Daniel: {
//     email: "daniel@alex.com",
//     skills: ["HTML", "CSS", "JavaScript", "Python"],
//     age: 20,
//     isLoggedIn: false,
//     points: 40,
//   },
//   John: {
//     email: "john@john.com",
//     skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
//     age: 20,
//     isLoggedIn: true,
//     points: 50,
//   },
//   Thomas: {
//     email: "thomas@thomas.com",
//     skills: ["HTML", "CSS", "JavaScript", "React"],
//     age: 20,
//     isLoggedIn: false,
//     points: 40,
//   },
//   Paul: {
//     email: "paul@paul.com",
//     skills: [
//       "HTML",
//       "CSS",
//       "JavaScript",
//       "MongoDB",
//       "Express",
//       "React",
//       "Node",
//     ],
//     age: 20,
//     isLoggedIn: false,
//     points: 40,
//   },
// };
// Find the person who has many skills in the users object.
// const hasMostSkills = () => {
//   let mostSkilledUser = [];
//   let numberOfSkills = 0;
//   for (const user in users) {
//     let userSkillCount = users[user].skills.length;
//     if (userSkillCount > numberOfSkills) {
//       numberOfSkills = userSkillCount;
//       mostSkilledUser = `The most skilled user is ${user} with ${userSkillCount}`;
//     }
//   }
//   return mostSkilledUser;
// };

// console.log(hasMostSkills());

// SOLUTION 2: DEEPSEEK
// let personWithMostSkills = null;
// let maxSkills = 0;

// Loop through the users object
// for (const user in users) {
//   const skillsCount = users[user].skills.length;
//   if (skillsCount > maxSkills) {
//     maxSkills = skillsCount;
//     personWithMostSkills = user;
//   }
// }

// console.log(
//   `The person with the most skills is: ${personWithMostSkills} with ${maxSkills} skills.`
// );

// SOLUTION 3 (DEEPSEEK) This takes into account a situation where several users have the same number of skills.
// let personsWithMostSkills = [];
// let maxSkills = 0;

// for (const user in users) {
//   const skillsCount = users[user].skills.length;
//   if (skillsCount > maxSkills) {
//     maxSkills = skillsCount;
//     personsWithMostSkills = [user]; // Reset the array with the new leader
//   } else if (skillsCount === maxSkills) {
//     personsWithMostSkills.push(user); // Add to the array in case of a tie
//   }
// }

// console.log(
//   `The person(s) with the most skills: ${personsWithMostSkills.join(
//     ", "
//   )} with ${maxSkills} skills.`
// );

// Count logged in users, count users having greater than equal to 50 points from the following object.
// const loggedOn = () => {
//   const log = [];
//   const scores = [];
//   let highScorers = [];
//   for (let user in users) {
//     const online = users[user].isLoggedIn;
//     if (online) {
//       log.push(user);
//     }
//     const userScore = users[user].points;
//     if (userScore >= 50) {
//       scores.push(users[user].points);
//       highScorers.push(user);
//     }
//   }
//   return `There are currently ${log.length} people online. They are ${log.join(
//     " & "
//   )}. There are currently ${
//     highScorers.length
//   } people with 50 points or greater and they are ${highScorers} with ${scores} respectively.`;
// };
// console.log(loggedOn());

// SOLUTION 2 (DEEPSEEK) uses the filter method instead of pushing into an Array.
// Function to count logged-in users
// const loggedOn = () => {
//   const loggedInUsers = Object.keys(users).filter(
//     (user) => users[user].isLoggedIn
//   );
//   return `There are currently ${
//     loggedInUsers.length
//   } people online. They are ${loggedInUsers.join(" & ")}.`;
// };

// console.log(loggedOn());

// // Function to count users with 50 or more points
// const highPointUsers = () => {
//   const highPoints = Object.keys(users).filter(
//     (user) => users[user].points >= 50
//   );
//   return `There are ${
//     highPoints.length
//   } users with 50 or more points. They are ${highPoints.join(" & ")}.`;
// };

// console.log(highPointUsers());

//
// // Find people who are MERN stack developer from the users object
// const isMern = (users) => {
//   const mernStackSkills = ["MongoDB", "Express", "React", "Node"];
//   const stackers = [];

//   for (const user in users) {
//     if (mernStackSkills.every((skill) => users[user].skills.includes(skill))) {
//       stackers.push(user);
//     }
//   }
//   return `There are ${
//     stackers.length
//   } users who are MERN status, they are ${stackers.join(" & ")}`;
// };
// console.log(isMern(users));
// SOLUTION2 (ChatGpt) The includes method was the wrong way to go. also needed to use a param
// const isMern = (users) => {
//   const mernStackSkills = ["MongoDB", "Express", "React", "Node"];

//   // Filter users who have all MERN skills
//   const stackers = Object.entries(users)
//     .filter(([_, user]) =>
//       mernStackSkills.every((skill) => user.skills.includes(skill))
//     )
//     .map(([name]) => name);

//   return `There are ${
//     stackers.length
//   } users who are MERN stack devs. They are ${stackers.join(" & ")}.`;
// };
// console.log(isMern(users));
// SOLUTION 3(CHECKEM) learned a way to get the includes method to check more than one value
// const isMern = (users) => {
// option 1: ugly but easier to understand solution imo (after waking up lul)
// const mernUsers = [];
// const mernUsersKeys = Object.keys(users);

// mernUsersKeys.forEach((user) => {
//   const currentUserSKills = users[user].skills;

//   const mernUSer = currentUserSKills.includes(
//     "MongoDB" && "Express" && "React" && "Node"
//   );

//   if (mernUSer) mernUsers.push(user);
// });

// return `${mernUsers.join(" and ")} are MERN users.`;

//option 2
//   const mernStack = ["MongoDB", "Express", "React", "Node"];

//   const mernUsers = Object.keys(users).filter((user) =>
//     mernStack.every((tech) => users[user].skills.includes(tech))
//   );

//   return `${mernUsers.join(" and ")} are MERN users.`;
// };

// console.log(isMern(users));
// Set your name in the users object without modifying the original users object
// users.Miles = {
//   email: "miles@lovemeloveme.com",
//   skills: ["superChef", "Deli King", "Savior of Chix"],
// };
// console.log(users);

// Get all keys or properties of users object
// console.log(Object.keys(users));

// Get all the values of users object
// console.log(Object.values(users));
// const countries = [
//   {
//     name: "Afghanistan",
//     capital: "Kabul",
//     languages: ["Pashto", "Uzbek", "Turkmen"],
//     population: 27657145,
//     flag: "https://restcountries.eu/data/afg.svg",
//     currency: "Afghan afghani",
//   },
//   {
//     name: "Åland Islands",
//     capital: "Mariehamn",
//     languages: ["Swedish"],
//     population: 28875,
//     flag: "https://restcountries.eu/data/ala.svg",
//     currency: "Euro",
//   },
//   {
//     name: "Albania",
//     capital: "Tirana",
//     languages: ["Albanian"],
//     population: 2886026,
//     flag: "https://restcountries.eu/data/alb.svg",
//     currency: "Albanian lek",
//   },
//   {
//     name: "Algeria",
//     capital: "Algiers",
//     languages: ["Arabic"],
//     population: 40400000,
//     flag: "https://restcountries.eu/data/dza.svg",
//     currency: "Algerian dinar",
//   },
// ];

// Use the countries object to print a country name, capital, populations and languages.
// const isCountry = () => {
//   let countryName = "";
//   let countryCapital = "";
//   let countryPopulation = "";
//   let countryLanguage = "";
//   for (const country in countries) {
//     countryName = countries[country].name;
//     countryCapital = countries[country].capital;
//     countryPopulation = countries[country].population;
//     countryLanguage = countries[country].languages;
//   }
//   return `The country of ${countryName} has a population of ${countryPopulation}. It's capital is ${countryCapital} and the native speak ${countryLanguage}`;
// };
// console.log(isCountry());
// SOLUTION 2 (ChatGPT) for...in for objects, for...of for arrays.
// const isCountry = () => {
//   let countryInfo = [];

//   for (const index in countries) {
//     let country = countries[index]; // Access the country object
//     countryInfo.push(
//       `The country of ${country.name} has a population of ${
//         country.population
//       }. Its capital is ${
//         country.capital
//       }, and the native languages are ${country.languages.join(", ")}.`
//     );
//   }

//   return countryInfo.join("\n");
// };

// console.log(isCountry());
// USING A FOR...OF LOOP
// const isCountry = () => {
//   let countryInfo = [];

//   for (const country of countries) {
//     countryInfo.push(
//       `The country of ${country.name} has a population of ${
//         country.population
//       }. Its capital is ${
//         country.capital
//       }, and the native languages are ${country.languages.join(", ")}.`
//     );
//   }

//   return countryInfo.join("\n");
// };
// console.log(isCountry());
// USING A USER INPUT
// const isCountry = (countryName) => {
//   for (const country of countries) {
//     if (country.name.toLowerCase() === countryName.toLowerCase()) {
//       return `The country of ${country.name} has a population of ${
//         country.population
//       }. Its capital is ${
//         country.capital
//       }, and the native languages are ${country.languages.join(", ")}.`;
//     }
//   }
//   return `Sorry, ${countryName} is not in the list.`;
// };

// console.log(isCountry("Albania")); // Example usage
// console.log(isCountry("Japan")); // Not in the list

// SOLUTION 3 (CHECKEM) USING THE FIND METHOD
// const targetCountry = (target) => {
//   countries.find((country) => country.name === target);
//   return `${targetCountry.name}`;
// };
// console.log(targetCountry("Albania"));
// Exercises: Level 3
// Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.
// const personAccount = {
//   firstName: "Miles",
//   lastName: "Roark",
//   balance: 0,
//   incomes: [
//     // { description: "Book sales", amount: 25 },
//     // { description: "Album sales", amount: 450 },
//     // { description: "streams", amount: 40 },
//   ],
//   expenses: [
//     // { description: "images", amount: 10 },
//     // { description: "transportation", amount: 25 },
//     // { description: "beverages", amount: 10 },
//   ],
//   totalIncome() {
//     let total = 0;
//     if (this.incomes.length === 0) {
//       return 0;
//     } else {
//       for (const value of this.incomes) {
//         total += value.amount;
//       }
//     }
//     return total;
//   },
//   totalExpense() {
//     let expenseTotal = 0;
//     if (this.expenses.length === 0) {
//       return 0;
//     } else {
//       for (const expense of this.expenses) {
//         expenseTotal += expense.amount;
//       }
//     }
//     return expenseTotal;
//   },
//   totalBalance() {
//     return (this.balance += this.totalIncome() - this.totalExpense());
//   },
//   acctInfo() {
//     return `${this.firstName} ${
//       this.lastName
//     } has $${this.totalBalance()} in the account`;
//   },
//   addIncome(description, amount) {
//     let newObject = { description, amount };
//     this.incomes.push(newObject);
//   },
//   addExpense(description, amount) {
//     let expObject = { description, amount };
//     this.expenses.push(expObject);
//   },
// };
// personAccount.addIncome("royalty payment", "230");
// personAccount.addExpense("promotions", 50);
// console.log(personAccount.acctInfo());
// console.log(personAccount.totalBalance());

// SOLUTION2 (ChatGpt) Used the reduce method for summing the totals. removed the balance variable and tweaked the naming schema.
// const personAccount = {
//   firstName: "Miles",
//   lastName: "Roark",
//   incomes: [
//     { description: "Book sales", amount: 25 },
//     { description: "Album sales", amount: 450 },
//     { description: "Streams", amount: 40 },
//   ],
//   expenses: [
//     { description: "Images", amount: 10 },
//     { description: "Transportation", amount: 25 },
//     { description: "Beverages", amount: 10 },
//   ],

//   getTotalIncome() {
//     return this.incomes.reduce((sum, { amount }) => sum + amount, 0);
//   },

//   getTotalExpenses() {
//     return this.expenses.reduce((sum, { amount }) => sum + amount, 0);
//   },

//   getBalance() {
//     return this.getTotalIncome() - this.getTotalExpenses();
//   },

//   getAccountSummary() {
//     return `${this.firstName} ${
//       this.lastName
//     } has $${this.getBalance()} in the account.`;
//   },

//   addIncome(description, amount) {
//     this.incomes.push({ description, amount });
//   },

//   addExpense(description, amount) {
//     this.expenses.push({ description, amount });
//   },
// };
// console.log(personAccount.getAccountSummary());

// **** Questions:2, 3 and 4 are based on the following two arrays:users and products ()

// Imagine you are getting the above users collection from a MongoDB database.
// const users = [
//   {
//     _id: "ab12ex",
//     username: "Alex",
//     email: "alex@alex.com",
//     password: "123123",
//     createdAt: "08/01/2020 9:00 AM",
//     isLoggedIn: false,
//   },
//   {
//     _id: "fg12cy",
//     username: "Asab",
//     email: "asab@asab.com",
//     password: "123456",
//     createdAt: "08/01/2020 9:30 AM",
//     isLoggedIn: true,
//   },
//   {
//     _id: "zwf8md",
//     username: "Brook",
//     email: "brook@brook.com",
//     password: "123111",
//     createdAt: "08/01/2020 9:45 AM",
//     isLoggedIn: true,
//   },
//   {
//     _id: "eefamr",
//     username: "Martha",
//     email: "martha@martha.com",
//     password: "123222",
//     createdAt: "08/01/2020 9:50 AM",
//     isLoggedIn: false,
//   },
//   {
//     _id: "ghderc",
//     username: "Thomas",
//     email: "thomas@thomas.com",
//     password: "123333",
//     createdAt: "08/01/2020 10:00 AM",
//     isLoggedIn: false,
//   },
// ];
// MY SOLUTION
// users.signUp = function signUp(
//   _id,
//   username,
//   email,
//   password,
//   createdAt,
//   isLoggedIn
// ) {
//   newUser = { _id, username, email, password, createdAt, isLoggedIn };
//   return users.push(newUser);
// };

// SOLUTION2 (CHATGPT) used the some method to find out if the user already exists
// users.signUp = function signUp(
//   _id,
//   username,
//   email,
//   password,
//   createdAt,
//   isLoggedIn
// ) {
// Check if a user with the same username or email already exists
//   const userExists = users.some(
//     (user) => user.username === username || user.email === email
//   );

//   if (userExists) {
//     return "User already has an account.";
//   } else {
//     const newUser = { _id, username, email, password, createdAt, isLoggedIn };
//     users.push(newUser);
//     return "User successfully signed up.";
//   }
// };

// let newestUser = users.signUp(
//   "ghderc",
//   "Miles",
//   "loveme@loveme.com",
//   "y0u@lr@dy",
//   "02/10/2025",
//   true
// );

// function signIn(username, password) {
//   for (const user of users) {
//     if (username === user.username && password === user.password) {
//       if (!user.isLoggedIn) {
//         user.isLoggedIn = true;
//         return `${username} is now logged into the system.`;
//       } else if (user.isLoggedIn) {
//         return `${username} is already logged in.`;
//       }
//     }
//   }
//   return "Please check your credentials.";
// }

// SOLUTION 2 (DEEPSEEK) I used the strict equality operator instead of setting values to
// function signIn(username, password) {
//   const user = users.find(
//     (u) => u.username === username && u.password === password
//   );
//   if (user) {
//     if (!user.isLoggedIn) {
//       user.isLoggedIn = true;
//       return `${username} is now logged into the system.`;
//     } else {
//       return `${username} is already logged in.`;
//     }
//   }
//   return "Please check your credentials.";
// }
// console.log(signIn("Miles", "y0u@lr@dy"));
// console.log(users);

// SOLUTION3(CHECKEM);
// const signIn = (email, password) => {
//   const isUserAlreadyRegistered = users.find((user) => user.email === email);

//   if (isUserAlreadyRegistered) {
//     console.log("mail already in use");
//     return;
//   }

//   const newUser = {
//     _id: Date.now().toString(),
//     email,
//     password: password,
//     createdAt: Date.now(),
//     isLoggedIn: false,
//   };

//   users.push(newUser);
// };

// const signUp = (email, password) => {
//   const userExist = users.find((user) => user.email === email);

//   if (!userExist) {
//     console.log("User does not exist");
//     return;
//   }

//   if (userExist.password !== password) {
//     console.log("Incorrect password");
//     return;
//   }

//   if (userExist.isLoggedIn) {
//     console.log("User already logged in");
//     return;
//   }

//   userExist.isLoggedIn = true;
// };

// const logOut = (email) => {
//   const userExist = users.find((user) => user.email === email);

//   if (!userExist) {
//     console.log("User does not exist");
//     return;
//   }

//   userExist.isLoggedIn = false;
// };

// signIn("random@random.com", "abcdefg"); // new user gets pushed in the array
// signIn("random@random.com", "abcdefg"); // mail already in use

// signUp("thomas@thomas.com", "123333"); // Thomas is logged in true now

// logOut("thomas@thomas.com"); // Thomas is logged in false now

// console.log(users);

//  a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.
// b. Create a function called signIn which allows user to sign in to the application
const products = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rating: 5 },
      { userId: "zwf8md", rating: 4.5 },
    ],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 400,
    ratings: [],
    likes: ["fg12cy"],
  },
];

// The products array has three elements and each of them has six properties.
// a. Create a function called rateProduct which rates the product
// function rateProduct(item, userId, rating) {
//   const stockedItem = products.find((product) => product.name === item);

//   if (!stockedItem) {
//     return "We dont have that in stock.";
//   }

//   const alreadyRated = stockedItem.ratings.map((rating) => rating.userId);

//   if (alreadyRated.includes(userId)) {
//     return "You can only rate an item once.";
//   }

//   const newRating = {
//     userId,
//     rating,
//   };

//   stockedItem.ratings.push(newRating);
// }
// rateProduct("TV", "john", 3);
// rateProduct("Laptop", "janice", "5");
// rateProduct("Laptop", "ckesl", "4");

// console.log(products);
// SOLUTION 2 (CHECKEM)
// const rateProduct = (productName, userId, rate) => {
//   const productExist = products.find(
//     (p) => p.name.trim().toLowerCase() === productName.trim().toLowerCase()
//   );

//   if (!productExist) {
//     console.log(`The product "${productName} doesn't exist.`);
//     return;
//   }

//   const usersThatAlreadyRatedThatProduct = productExist.ratings.map(
//     (el) => el.userId
//   );

//   if (usersThatAlreadyRatedThatProduct.includes(userId)) {
//     console.log("You already rated that product");
//     return;
//   }

//   const newRate = {
//     userId,
//     rate,
//   };

//   productExist.ratings.push(newRate);
// };

// rateProduct("TV", "abcdef", 4);
// rateProduct("mobile phone", "Joey", "3");
// console.dir(products, { depth: null });
// b. Create a function called averageRating which calculate the average rating of a product
// function getAverageRating(item) {
//   let stockedItem = products.find((product) => product.name === item);

//   if (!stockedItem) {
//     return "We don't have that item in stock";
//   }
//   console.log(stockedItem.ratings);
//   let itemRatings = stockedItem.ratings.map((item) => item.rating);

//   if (itemRatings.length === 0) {
//     return `${item} has no ratings yet.`;
//   }

//   let sum = 0;
//   for (const item of itemRatings) {
//     sum += parseFloat(item);
//   }
//   let average = (sum / itemRatings.length).toFixed(1);
//   return `The average rating of ${item} is ${average}`;
// }

// SOLUTION2 (ChatGpt) used the reduced method to add the values and moved parsing to the product
// function getAverageRating(itemName) {
//   const stockedItem = products.find(
//     (product) => product.name.toLowerCase() === itemName.toLowerCase()
//   );

//   if (!stockedItem) {
//     return `We don't have that item in stock`;
//   }

//   const { ratings } = stockedItem;

//   if (ratings.length === 0) {
//     return `${itemName} has no ratings yet.`;
//   }

//   const average = (
//     ratings.reduce((sum, { rating }) => sum + rating, 0) / ratings.length
//   ).toFixed(1);

//   return `The average rating of ${itemName} is ${average}`;

// }

// SOLUTION3(ONELINER CHECKEM)
// const getAverageRating = (item) => {
// const getItem = products.find((el) => el.name === item);

// if (!getItem) return `item: ${item} not found`;

//reduce is going to return the sum of all rates, then i divide by the array size. We can completely avoid the unecessary condition that checks the array size cause if the array is empty reduce is going to return something like undefined so the "|| 0" is going to be returned instead of the average.
// return (
//   getItem.ratings.reduce((a, { rating }) => a + +rating, 0) /
//     getItem.ratings.length || 0
// );
// };

// rateProduct("Laptop", "monica", "3.5");
// rateProduct("TV", "fg12cy", 5);
// console.log(getAverageRating("Laptop"));
// console.dir(products, { depth: null });
// Create a function called likeProduct. This function will help to like the product if it is not liked and remove like if it was liked+
// function likeProduct(item, userId) {
//   let stockedItem = products.find((product) => product.name === item);
//   if (stockedItem.likes.includes(userId.toLowerCase())) {
//     stockedItem.likes.splice(
//       stockedItem.likes.indexOf(userId.toLowerCase()),
//       1
//     );
//   } else {
//     stockedItem.likes.push(userId.toLowerCase());
//   }
//   return stockedItem.likes;
// }
// console.log(likeProduct("Laptop", "checkem"));
// console.log(likeProduct("Laptop", "Miles"));
// console.log(likeProduct("Laptop", "miles"));
