"use strict";

// console.log(document.querySelector('.message').textContent);
// console.log(document.querySelector('.message').textContent= 'correct answer!');

// document.querySelector('.number').textContent=12;
// document.querySelector('.score').textContent=10;

// console.log(document.querySelector('.guess').value=34);

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  if (!guess) {
    document.querySelector(".message").textContent = "No Number";
  } else if (guess === secretNumber) {
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector(".message").textContent = "Correct Number 🎉";
    document.querySelector("body").style.backgroundColor = "green";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess > secretNumber) {
    document.querySelector(".message").textContent = "Guess Lower Number";
    score--;
    document.querySelector(".score").textContent = score;
  } else {
    document.querySelector(".message").textContent = "Guess Higher Number";
    score--;
    document.querySelector(".score").textContent = score;
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  document.querySelector(".message").textContent = "Start Guessing";
});
