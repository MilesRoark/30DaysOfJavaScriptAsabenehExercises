const userInput = document.getElementById("userInput");
const generateBtn = document.getElementById("inputBtn");
const result = document.getElementById("display");

generateBtn.addEventListener("click", () => {
  result.innerHTML = "";
  const count = userInput.value;

  if (count < 0 || count > 250) {
    alert("No dice.");
    return;
  }

  for (let i = 0; i < count; i++) {
    const div = document.createElement("div");
    div.innerHTML = `
        <p class="nums">${i}</p>
        `;

    if (isEven(i)) {
      div.style.backgroundColor = "red";
    } else {
      div.style.backgroundColor = "purple";
    }

    if (isPrime(i)) {
      div.style.backgroundColor = "lightblue";
    }

    result.appendChild(div);
  }
});

function isEven(index) {
  return index % 2 === 0;
}

function isPrime(index) {
  if (index <= 3) {
    return true;
  }

  if (index % 2 === 0 || index % 3 === 0) {
    return false;
  }

  for (let i = 5; i * i <= index; i += 6) {
    if (index % i === 0 || index % (i + 2) === 0) {
      return false;
    }
  }

  return true; // No divisors found, it's prime
}

userInput.addEventListener("change", () => {
  result.innerHTML = "";
  const count = userInput.value;

  if (count < 0 || count > 250) {
    alert("No dice.");
    return;
  }

  for (let i = 0; i < count; i++) {
    const div = document.createElement("div");
    div.innerHTML = `
          <p class="nums">${i}</p>
          `;

    if (isEven(i)) {
      div.style.backgroundColor = "red";
    } else {
      div.style.backgroundColor = "purple";
    }

    if (isPrime(i)) {
      div.style.backgroundColor = "lightblue";
    }

    result.appendChild(div);
  }
});
