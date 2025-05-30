const container = document.getElementById("container");

const addStyle = (element, styles) => {
  Object.assign(element, styles);
};

const style = {
  divStyle: {
    className: "nums",
    fontSize: "2rem",
    color: "aliceblue",
    fontWeight: "bold",
    width: "50px",
    height: "50px",
    border: "2px solid black",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  containerStyle: {
    margin: "150px auto",
    width: "40vw",
    display: "flex",
    flexFlow: "row wrap",
    gap: "5px",
  },
};

addStyle(container.style, style.containerStyle);

for (let i = 0; i < 102; i++) {
  const div = document.createElement("div");

  addStyle(div.style, style.divStyle);
  div.textContent = i;

  container.appendChild(div);
  console.log(div);

  if (isEven(i)) {
    div.style.background = "green";
  } else {
    div.style.background = "goldenrod";
  }

  if (isPrime(i)) {
    div.style.background = "red";
  }
}

function isEven(index) {
  return index % 2 === 0;
}

function isPrime(index) {
  if (index <= 3) {
    return true; // 2 and 3 are prime
  }

  if (index % 2 === 0 || index % 3 === 0) {
    return false; // Divisible by 2 or 3
  }

  for (let i = 5; i * i <= index; i += 6) {
    if (index % i === 0 || index % (i + 2) === 0) {
      return false; // Divisible by i or i + 2
    }
  }

  return true; // No divisors found, it's prime
}
