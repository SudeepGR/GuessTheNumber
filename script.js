"use strict";

let secretnumber = Math.trunc(Math.random() * 30) + 1;
let score = 30;
let highscore = 0;

const displaymessage = function (message) {
  document.querySelector(".message").textContent = message;
};

const checkbutton = function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);
  if (!guess) {
    // document.querySelector(".message").textContent = "no number bozo";
    displaymessage("Number Bozoooooooo");
  } else if (guess === secretnumber) {
    document.querySelector(".number").textContent = secretnumber;
    // document.querySelector(".message").textContent = "Correct Number";
    displaymessage("Correct Number");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    if (score > highscore) {
      highscore = score;
    }
  } else if (guess !== secretnumber) {
    if (score > 0) {
      //   document.querySelector(".message").textContent =
      //     guess > secretnumber ? "Too High" : "Too Low";
      displaymessage(guess > secretnumber ? "Too High" : "Too Low");
      score = score - 1;
      document.querySelector(".score").textContent = score;
    } else {
      //   document.querySelector(".message").textContent = " YOU LOST";
      displaymessage("YOU LOST");
    }
  }
};

document.querySelector(".check").addEventListener("click", checkbutton);
document.querySelector(".again").addEventListener("click", function () {
  score = 30;
  secretnumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".score").textContent = score;
  //   document.querySelector(".message").textContent = "Start guessing...";
  displaymessage("🤔💭Start guessing...");
  document.querySelector(".highscore").textContent = highscore;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
});
document.addEventListener("keydown", function (x) {
  console.log(x.key);
  if (x.key === "Enter") {
    checkbutton();
  }
});
