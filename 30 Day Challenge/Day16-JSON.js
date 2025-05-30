// Exercises Level 1
// Change skills array to JSON using JSON.stringify()
// const skills = ["HTML", "CSS", "JS", "React", "Node", "Python"];
// console.log(JSON.stringify(skills));
// console.log(skills);
// Stringify the age variable
// let age = 250;
// console.log(JSON.stringify(age));
// Stringify the isMarried variable
// let isMarried = true;
// console.log(JSON.stringify(isMarried));
// Stringify the student object
const student = {
  firstName: "Asabeneh",
  lastName: "Yetayehe",
  age: 250,
  isMarried: true,
  skills: ["HTML", "CSS", "JS", "React", "Node", "Python"],
};
// console.log(JSON.stringify(student));
// console.log(student);
// Exercises Level 2
// Stringify the students object with only firstName, lastName and skills properties
// console.log(JSON.stringify(student, ["firstName", "lastName", "skills"]));
// Exercises Level 3
// Parse the txt JSON to object.
const txt = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
`;
// console.log(JSON.parse(txt));
// Find the user who has many skills from the variable stored in txt.
function mostSkilledUser() {
  const parsedTxt = JSON.parse(txt);
  //   console.log(parsedTxt);
  return (mostSkilledUser = Object.entries(parsedTxt).reduce(
    (mostSkilled, [username, user]) => {
      return user.skills.length > mostSkilled.skills.length
        ? { username, skills: user.skills }
        : mostSkilled;
    },
    { username: "", skills: [] }
  ));
}
console.log(mostSkilledUser());

// LOCAL STORAGE EXAMPLE(CHECKEM)
// const test = [1, 2, 3];
// const stringifyedArray = JSON.stringify(test);
// localStorage.setItem("test", stringifyedArray);
//then you open your html with live server, in the dev tools you go to Storage tab => localStorage => test

//then to retrieve the data
// const retrievedArray = JSON.parse(localStorage.getItem("test"));
// console.log(retrievedArray); // only available in the browser console casue in the vscode console we use nodejs and nodejs doesn't have access to browser functionalities.

// localStorage.removeItem("test");
