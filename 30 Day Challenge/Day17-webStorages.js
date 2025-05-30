// Exercises: Level 1
// Store you first name, last name, age, country, city in your browser localStorage.
// const info = {
//   "first name": "Miles",
//   "last name": "Roark",
//   age: 2503,
//   country: "malaysia",
//   city: "Kuala Lampur",
// };

// const storeInfo = JSON.stringify(info);
// localStorage.setItem("myInfo", storeInfo);
// console.log(localStorage.getItem("myInfo"));
// Exercises: Level 2
// Create a student object. The student object will have first name, last name, age, skills, country, enrolled keys and values for the keys. Store the student object in your browser localStorage.
// const student = {
//   "first name": "Miles",
//   "last name": "Roark",
//   age: 85,
//   skills: ["eating", "sleeping", "reading"],
//   country: "Canada",
//   enrolled: true,
// };
// const studentInfo = JSON.stringify(student);
// localStorage.setItem("studentInfo", studentInfo);
// console.log(localStorage.getItem("studentInfo"));
// Exercises: Level 3
// Create an object called personAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.

const personalAccount = {
  firstname: "Miles",
  lastname: "Roark",
  incomes: {
    "Beat Sales": 2000000,
    Streaming: 700000,
    mixing: 10000000,
  },
  expenses: {
    studio: 45000,
    team: 36000,
    transportation: 40000,
  },

  totalIncome() {
    return Object.values(this.incomes).reduce(
      (acc, currVal) => acc + currVal,
      0
    );
  },

  totalExpenses() {
    return Object.values(this.expenses).reduce(
      (acc, currVal) => acc + currVal,
      0
    );
  },

  addIncome(key, value) {
    this.incomes[key] = (this.incomes[key] || 0) + value;
  },

  addExpense(key, value) {
    this.expenses[key] = (this.expenses[key] || 0) + value;
  },

  accountBalance() {
    let balance = this.totalIncome() - this.totalExpenses();
    return `Hello ${this.firstname.toUpperCase()} Your current balance is $${balance.toLocaleString()}`;
  },
};

personalAccount.addIncome("merch", 4000);
personalAccount.addExpense("shipping", 2000);

console.log(personalAccount.totalIncome().toLocaleString());
console.log(personalAccount.totalExpenses().toLocaleString());
console.log(personalAccount.accountBalance());

localStorage.clear();
