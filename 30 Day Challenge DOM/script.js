const paragraph = document.querySelector("p");
const paragraph1 = document.querySelector("#para1");
const paragraph2 = document.querySelector("#para2");
const paragraph3 = document.querySelector("#para3");
const paragraph4 = document.querySelector("#para4");

// for (let i = 0; i < allParagraph.length; i++) {
//   console.log(allParagraph[i]);
// }

// paragraph4.textContent = "edit 1";

// paragraph1.setAttribute("class", "text1");
// console.log(paragraph1);

// paragraph2.classList.add("text2");
// console.log(paragraph2);

// paragraph3.setAttribute("id", "parag3");
// console.log(paragraph3);
// paragraph3.classList.add("text3");

// paragraph4.setAttribute("class", "text4");
// console.log(paragraph4);

// paragraph1.style.background = "pink";
// paragraph1.style.padding = "3px";
// paragraph1.style.border = "4px solid black";
// paragraph1.style.fontSize = "2rem";
// paragraph1.style.boxShadow = "2px 4px 2px 2px black";

// paragraph2.style.background = "blue";
// paragraph2.style.padding = "3px";
// paragraph2.style.border = "4px solid black";
// paragraph2.style.fontSize = "2rem";
// paragraph2.style.marginBottom = "2px";
// paragraph2.style.boxShadow = "2px 4px 2px 2px black";

// paragraph3.style.background = "grey";
// paragraph3.style.padding = "3px";
// paragraph3.style.border = "4px solid black";
// paragraph3.style.fontSize = "2rem";
// paragraph3.style.marginBottom = "6px";
// paragraph3.style.boxShadow = "2px 4px 2px 2px black";

// paragraph4.style.background = "goldenrod";
// paragraph4.style.padding = "3px";
// paragraph4.style.border = "4px solid black";
// paragraph4.style.fontSize = "2rem";
// paragraph4.style.marginBottom = "2px";
// paragraph4.style.boxShadow = "2px 4px 2px 2px black";

// allParagraph.forEach((paragraph) => {
//   paragraph.style.background = "goldenrod";
//   paragraph.style.padding = "5px";
//   paragraph.style.border = "3px solid black";
//   paragraph.style.fontSize = "2rem";
//   paragraph.style.marginBottom = "2px";
//   paragraph.style.boxShadow = "2px 4px 2px 2px black";
// });

const styles = {
  background: "goldenrod",
  padding: "5px",
  border: "3px solid black",
  fontSize: "2rem",
  marginBottom: "2px",
  boxShadow: "2px 4px 2px 2px black",
};

const allParagraph = document.getElementsByTagName("p");

let element = "";
for (let i = 0; i < allParagraph.length; i++) {
  Object.assign(allParagraph[i].style, styles);

  if (i % 2 === 0) {
    allParagraph[i].style.background = "green";
  } else {
    allParagraph[i].style.background = "lightblue";
  }
}

paragraph1.textContent = "This is the first paragraph.";
paragraph2.textContent = "This is the second paragraph.";
paragraph3.textContent = "This is the third paragraph.";
paragraph4.textContent = "This is the fourth paragraph.";

paragraph1.setAttribute("id", "new1");
console.log(paragraph1);
paragraph1.classList.add("class1");

paragraph2.setAttribute("id", "new2");
console.log(paragraph2);
paragraph2.classList.add("class2");

paragraph3.setAttribute("id", "new3");
paragraph3.classList.add("class3");
console.log(paragraph3);

paragraph4.setAttribute("id", "new4");
paragraph4.classList.add("class4");
console.log(paragraph4);
