const heading = document.querySelector("h1");
const headingSpan = document.querySelector("span");
const title = document.querySelector("p");
const year = document.querySelector("p span");
const listCont = document.querySelector("ul");
const listItems = document.querySelectorAll("li");
const finished = document.getElementsByClassName("fin");
const ongoing = document.getElementsByClassName("ong");
const completed = document.getElementsByClassName("com");

const style = {
  bodyStyles: {
    background: "purple",
    fontFamily: "Reenie Beanie",
  },
  headingStyles: {
    marginTop: "20px",
    fontSize: "2rem",
    lineHeight: ".8",
    display: "flex",
    flexFlow: "column nowrap",
    justifyContent: "center",
    alignItems: "center",
    gap: "1rem",
  },
  titleStyles: {
    fontSize: "3rem",
    margin: " 5px 150px",
    display: "flex",
    flexFlow: "column wrap",
    alignItems: "center",
  },
  yearStyles: {
    border: "3px solid black",
    width: "400px",
    boxShadow: "5px 3px 3px 3px",
    textAlign: "center",
  },
  listContStyles: {
    margin: "50px 0  0 230px",
    listStyle: "none",
    fontSize: "1rem",
    display: "flex",
    flexFlow: "column nowrap",
    gap: "5px",
  },
  listItemsStyles: {
    border: "2px solid black",
    width: "70%",
    height: "50px",
    textAlign: "center",
    lineHeight: "50px",
    fontSize: "2.5rem",
  },
  headingSpanStyle: {
    fontSize: "7rem",
  },
};

const addStyles = (ObjStyle, styles) => {
  return Object.assign(ObjStyle, styles);
};

addStyles(document.body.style, style.bodyStyles);
addStyles(heading.style, style.headingStyles);
addStyles(title.style, style.titleStyles);
addStyles(year.style, style.yearStyles);
addStyles(listCont.style, style.listContStyles);
addStyles(headingSpan.style, style.headingSpanStyles);

for (let i = 0; i < listItems.length; i++) {
  Object.assign(listItems[i].style, style.listItemsStyles);

  if (listItems[i].classList.contains("fin")) {
    listItems[i].style.background = " green";
  }

  if (listItems[i].classList.contains("ong")) {
    listItems[i].style.background = " yellow";
  }

  if (listItems[i].classList.contains("com")) {
    listItems[i].style.background = " red";
  }
}

function currentDate() {
  const now = new Date();

  const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  };

  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(now);

  return formattedDate;
}

setInterval(() => {
  year.textContent = currentDate();
  year.style.background = randomBgColor();
  headingSpan.style.color = randomBgColor();
}, 1000);

function randomBgColor() {
  const letters = "ABCDEFabcdef0123456789";
  let hexVal = "#";

  for (let i = 0; i < 6; i++) {
    hexVal += letters[Math.floor(Math.random() * letters.length)];
  }
  console.log(hexVal);
  return hexVal;
}
