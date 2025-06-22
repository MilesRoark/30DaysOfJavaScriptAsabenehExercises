const htext = document.getElementById("htext");

const languages = ["HTML", "C.S.S.", "JAVASCRIPT", "REACT"];
let languagesIndex = 0;
function cycleLanguages() {
  languagesIndex = (languagesIndex + 1) % languages.length;
  htext.innerText = languages[languagesIndex];
}

setInterval(cycleLanguages, 3000);
