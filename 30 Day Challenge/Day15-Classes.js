// Exercises Level 1
// Create an Animal class. The class will have name, age, color, legs properties and create different methods
// class Animal {
//   constructor(name = "who's asking", color = "colorblind", legs = "4") {
//     (this.name = name), (this.color = color), (this.legs = legs);
//   }

//   describe() {
//     const pet = `Hello my name is ${this.name}. My fur is ${this.color} and i have ${this.legs} legs`;
//     return pet;
//   }
// }
// const friend = new Animal();
// const friend1 = new Animal("jax", "brown", "12");

// console.log(friend.describe());
// console.log(friend1.describe());
// Create a Dog and Cat child class from the Animal Class.
// class Dog extends Animal {
//   constructor(name, color, legs) {
//     super(name, color, legs);
//   }
//   newPet() {
//     const dog = `woof, woof. My name is ${this.name}. I am your second friend. my fur is ${this.color} and i have ${this.legs} legs. `;
//     return dog;
//   }
// }
// const friend2 = new Dog("Jane", "gray", "4");
// console.log(friend2.newPet());

// Exercises Level 2
// Override the method you create in Animal class
// class Cat extends Animal {
//   constructor(name, color, legs) {
//     super(name, color, legs);
//   }
//   describe() {
//     const cat = `mew, mew. My name is ${this.name}. I bet you can't guess what I am. My fur is ${this.color} and i have ${this.legs} legs`;
//     return cat;
//   }
// }
// const friend3 = new Cat("lady", "purple", "8");
// console.log(friend3.describe());

// Exercises Level 3
// Let's try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create a class called Statistics and create all the functions which do statistical calculations as method for the Statistics class. Check the output below.
// const ages = [
//   31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37,
//   31, 34, 24, 33, 29, 26,
// ];
// class Statistics {
//   constructor(arr) {
//     this.arr = arr;
//   }

//   count() {
//     return this.arr.length;
//   }
//   sum() {
//     return this.arr.reduce((acc, currVal) => acc + currVal, 0);
//   }

//   min() {
//     return Math.min(...this.arr);
//   }

//   max() {
//     return Math.max(...this.arr);
//   }

//   range() {
//     return this.max() - this.min();
//   }

//   mean() {
//     return this.sum() / this.count();
//   }

//   median() {
//     this.arr.sort((a, b) => a - b);
//     if (this.count() % 2 === 0) {
//       return this.arr.splice(Math.floor(this.count() / 2 - 1), 2);
//     } else {
//       return this.arr[Math.floor(this.count() / 2)];
//     }
//   }

//   mode() {
//     const occurence = this.arr.reduce((acc, currVal) => {
//       acc[currVal] = (acc[currVal] || 0) + 1;
//       return acc;
//     }, []);

//     const frequency = Object.entries(occurence)
//       .sort((a, b) => b[1] - a[1])
//       .slice(0, 1);

//     return `{Mode: ${frequency[0][0]}, Count: ${frequency[0][1]}}`;
//   }

//   var() {
//     let variance = this.arr.reduce(
//       (acc, currVal) => acc + Math.pow(currVal - this.mean(), 2),
//       0
//     );
//     return (variance / this.count()).toFixed(1);
//   }
//   std() {
//     return Math.sqrt(this.var(), 2).toFixed(1);
//   }
//   freqDist() {
//     const frequency = this.arr.reduce((acc, currVal) => {
//       acc[currVal] = (acc[currVal] || 0) + 1;
//       return acc;
//     }, []);
//     return Object.entries(frequency).sort((a, b) => b[0] - a[0]);
//   }
//   describe() {
//     return `Count:${this.count()}\nSum:${this.sum()}\nMin:${this.min()}\nMax:${this.max()}\nRange:${this.range()}\nMean:${this.mean()}\nMedian:${this.median()}\nMode:${this.mode()}\nVariance:${this.var()}\nStandard-Deviation:${this.std()}\nFrequency-Distribution:${JSON.stringify(
//       this.freqDist()
//     )}`;
//   }
// }

// const statistics = new Statistics(ages);

// console.log("Count:", statistics.count()); // 25
// console.log("Sum: ", statistics.sum()); // 744
// console.log("Min: ", statistics.min()); // 24
// console.log("Max: ", statistics.max()); // 38
// console.log("Range: ", statistics.range()); // 14
// console.log("Mean: ", statistics.mean()); // 30
// console.log("Median: ", statistics.median()); // 29
// console.log("Mode: ", statistics.mode()); // {'mode': 26, 'count': 5}
// console.log("Variance: ", statistics.var()); // 17.5
// console.log("Standard Deviation: ", statistics.std()); // 4.2
// console.log("Frequency Distribution: ", statistics.freqDist()); // [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
// // you output should look like this
// console.log(statistics.describe());
// Count: 25
// Sum:  744
// Min:  24
// Max:  38
// Range:  14
// Mean:  30
// Median:  29
// Mode:  (26, 5)
// Variance:  17.5
// Standard Deviation:  4.2
// Frequency Distribution: [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
// Create a class called PersonalAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.

// class PersonalAccount {
//   constructor(firstName, lastName, incomes, expenses) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.incomes = incomes;
//     this.expenses = expenses;
//   }

//   totalIncome() {
//     return Object.values(this.incomes).reduce(
//       (acc, currVal) => acc + currVal,
//       0
//     );
//   }
//   totalExpenses() {
//     let total = Object.values(this.expenses).reduce(
//       (acc, currVal) => acc + currVal,
//       0
//     );
//     return total;
//   }
//   accountInfo() {
//     let balance = this.totalIncome() - this.totalExpenses();
//     return ` You ${this.firstName} ${this.lastName} have an account balance of ${balance}`;
//   }
//   addIncome(des, val) {
//     return (this.incomes[des] = val);
//   }

//   addExpense(des, val) {
//     return (this.expenses[des] = val);
//   }
// }

// const miles = new PersonalAccount(
//   "Miles",
//   "Roark",
//   { production: 50, beatstore: 60, samplepacks: 230 },
//   { pencils: 10, strings: 15, snacks: 7 }
// );

// miles.addIncome("cd", 24);
// miles.addExpense("chewing gum", 5.32);
// miles.addIncome("pens", 10);

// console.log(miles);
// console.log(`Your income is: ${miles.totalIncome()} dollars`);
// console.log(`You have spent ${miles.totalExpenses()} dollars`);
// console.log(`Heres your info ${miles.accountInfo()} dollars`);

// Solution 2(CHATGPT)

class PersonalAccount {
  constructor(firstName, lastName, incomes = {}, expenses = {}) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.incomes = incomes;
    this.expenses = expenses;
  }

  totalIncome() {
    return Object.values(this.incomes).reduce(
      (acc, currVal) => acc + currVal,
      0
    );
  }

  totalExpenses() {
    return Object.values(this.expenses).reduce(
      (acc, currVal) => acc + currVal,
      0
    );
  }

  accountInfo() {
    let balance = this.totalIncome() - this.totalExpenses();
    return `${this.firstName} ${this.lastName} has an account balance of ${balance} dollars.`;
  }

  addIncome(des, val) {
    this.incomes[des] = (this.incomes[des] || 0) + val;
    // this.incomes = {...this.incomes, {des,val}}
    // val += this.incomes[des] || 0;
  }

  addExpense(des, val) {
    this.expenses[des] = (this.expenses[des] || 0) + val;
  }
}

// Example Usage
const miles = new PersonalAccount(
  "Miles",
  "Roark",
  { production: 50, beatstore: 60, samplepacks: 230 },
  { pencils: 10, strings: 15, snacks: 7 }
);

miles.addIncome("cd", 24);
miles.addExpense("chewing gum", 5.32);

console.log(miles);
console.log(`Your total income is: ${miles.totalIncome()} dollars.`);
console.log(`Your total expenses are: ${miles.totalExpenses()} dollars.`);
console.log(miles.accountInfo());

// CHECKEM Median method solution
// const ages = [22, 45, 60, 28, 32, 44, 45, 0];

// class Statistics {
//   constructor(ages) {
//     this.ages = ages;
//   }

//   count() {
//     return this.ages.length;
//   }

//   median() {
//     const sorted = this.ages.sort((a, b) => a - b);
//     let median;
//     sorted.length % 2 === 0
//       ? (median = sorted.splice(this.count() / 2 - 1, 2))
//       : (median = sorted[Math.floor(this.count() / 2)]);
//     return median;
//   }
// }

// const statistics = new Statistics(ages);
// console.log("median:", statistics.median());
