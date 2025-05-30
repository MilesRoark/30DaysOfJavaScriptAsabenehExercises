const userInput = document.getElementById("userInput");
const unit = document.getElementById("unit");
const selectPlanet = document.getElementById("selectPlanet");
const calculateBtn = document.getElementById("calculateBtn");
const container = document.getElementById("result");
const planet = document.getElementById("planet");
const infoSection = document.getElementById("infoSection");

const g = {
  mercury: 3.7,
  venus: 8.87,
  earth: 9.8,
  moon: 1.62,
  mars: 3.7,
  jupiter: 24.7,
  saturn: 10.5,
  uranus: 9.0,
  neptune: 11.7,
};

// function poundToKilo() {
//   const pToK = p * 0.453592;
// }
function poundToNewton(mass) {
  return mass * 4.44822;
}
// function kiloToPound() {
//   const kToP = k * 2.20462;
// }
function kiloToNewton(mass) {
  return mass * 9.8;
}
function newtonToPound(valueToConvert) {
  return valueToConvert / 4.44822;
}
function newtonToKilo(valueToConvert) {
  return valueToConvert / 9.8;
}

function allNewtons(mass, units, currentPlanet) {
  let newVal = 0;
  if (units === "pounds") {
    newVal = poundToNewton(mass);
    console.log(newVal);
  }
  if (units === "kilograms") {
    newVal = kiloToNewton(mass);
  }
  if (units === "newtons") {
    newVal = mass;
  }

  let valueToConvert = newVal * (g[currentPlanet] / 9.8);
  console.log(valueToConvert);
  let finalVal = 0;

  if (units === "pounds") {
    finalVal = newtonToPound(valueToConvert);
  }
  if (units === "kilograms") {
    finalVal = newtonToPound(valueToConvert);
  }
  if (units === "newtons") {
    finalVal = valueToConvert;
  }
  return finalVal;
}

//CHECKEM EDIT
// function allNewtons(mass, units, currentPlanet) {
//   let newVal = 0;
//   if (units === "pounds") {
//     newVal = poundToNewton(mass) * (g[currentPlanet] / 9.8);
//     return newtonToPound(newVal);
//   }
//   if (units === "kilograms") {
//     newVal = kiloToNewton(mass) * (g[currentPlanet] / 9.8);
//     return newtonToPound(newVal);
//   }
//   if (units === "newtons") {
//     return mass * (g[currentPlanet] / 9.8);
//   }
// }
calculateBtn.addEventListener("click", () => {
  if (userInput.value <= "0") {
    return (result.innerHTML = `
    <p class="error">"Please enter the weight of the object."</p>
    `);
  }
  if (unit.value === "Select Unit") {
    return (result.innerHTML = `
    <p class="error">"Please select the unit"</p>
    `);
  }
  if (selectPlanet.value === "Select Planet") {
    return (result.innerHTML = `
    <p class="error">"Please select a planet"</p>
    `);
  }

  showPlanet(selectPlanet.value);
});

function showPlanet(currentPlanet) {
  const resultFunc = allNewtons(
    userInput.value,
    unit.value,
    selectPlanet.value
  );
  result.innerHTML = `
       <div class="image" id="planet">
        <img src="Assets/${currentPlanet}.png" alt="target planet" />
      </div>
      <div class="info" id="infoSection">
        <p class="info-text">This object weighs:</p>
        <div class="weight" id="planetWeight">${resultFunc.toFixed(2)}${
    unit.value
  }</div>
        <p class="selection" id="selectionname">${currentPlanet}</p>
      </div>    
    `;
}
