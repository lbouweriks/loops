let cijfer;
let randomNumber;
let name;
function start() {
  name = prompt("Welkom! Wat is je naam?");
  game(name);
}

function game(name) {
  alert("hallo " + name);
  cijfer = prompt("geef een nummer tussen 1-25");
  if (cijfer <= 25 && cijfer >= 1) {
    randomNumber = Math.floor(Math.random() * cijfer);
    guess();
  } else {
    cijfer = prompt(
      "dit is geen nummber tussen 1-25. geef een nummer tussen 1-25"
    );
  }
}

function guess() {
  let guessNumber = prompt("raad een nummer tussen 1 en " + cijfer);
  if (guessNumber != randomNumber) {
    alert("Dat is niet correct");
    guess();
  } else {
    end();
  }
}

function end() {
  alert("Gefeliciteerd je hebt gewonnen");
  alert("Dag " + name);
}

start();
