const userInput = document.getElementById("userInput");
const result = document.getElementById("result");

document.addEventListener("keydown", (e) => {
  if (e) {
    userInput.innerHTML = `You pressed <span class="word">${e.key}</span>`;
    result.innerHTML = `The code for this button is <span class="number">${
      e.key.length === 1 ? e.key.charCodeAt(0) : e.code
    }</span>`;
  }
});
