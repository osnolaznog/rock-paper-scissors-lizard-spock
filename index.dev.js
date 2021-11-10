"use strict";

// *-*-* SCORES *-*-*
var userScore = 0;
var cpuScore = 0;
var modal = document.querySelector(".result-popup");
var closeModal = document.getElementsByClassName("close-icon")[0];
var userScoreDisplay = document.getElementById("user-score");
var cpuScoreDisplay = document.getElementById("cpu-score");
var help = document.querySelector(".help");
var modalInstructions = document.querySelector(".instructions-popup");
var closeInstructions = document.querySelector(".close-instructions");
var resultDisplay = document.getElementsByClassName("result-display")[0];
var restart = document.getElementById("restart-game");
var resultImage = document.getElementsByClassName("result-image")[0];
var resultUserChoiceImg = document.getElementsByClassName("user-choice-image")[0];
var resultUserChoice = document.getElementsByClassName("user-choice")[0];
var resultCpuChoiceImg = document.getElementsByClassName("cpu-choice-image")[0];
var resultCpuChoice = document.getElementsByClassName("cpu-choice")[0]; //Get user choice on click on buttons

var userOptions = document.querySelectorAll(".button");
closeModal.addEventListener("click", function () {
  modal.style.visibility = 'hidden';
});
document.addEventListener('keydown', function (event) {
  if (event.key === "Escape") {
    modal.style.visibility = 'hidden';
    modalInstructions.style.visibility = 'hidden';
  }
});
userOptions.forEach(function (userOption) {
  userOption.addEventListener("click", function () {
    var userChoice = this.id;
    var cpuOptions = ["rock", "paper", "scissors", "lizard", "spock"];

    var cpuChoice = function cpuChoice() {
      var randomChoice = Math.floor(Math.random() * 5);
      return cpuOptions[randomChoice];
    };

    var cpuRandomChoice = cpuChoice();
    var result = compareChoices(userChoice, cpuRandomChoice);

    if (result == "you win") {
      userScore++;
      userScoreDisplay.innerHTML = userScore;
      resultDisplay.innerHTML = "YOU WIN!";
      resultImage.src = "./assets/win.svg";
    } else if (result == "you lose") {
      cpuScore++;
      cpuScoreDisplay.innerHTML = cpuScore;
      resultDisplay.innerHTML = "YOU LOSE!";
      resultImage.src = "./assets/lose.svg";
    } else {
      resultDisplay.innerHTML = "IT'S A TIE!";
      resultImage.src = "./assets/tie.svg";
    }

    console.log("User: ".concat(userChoice, " // CPU: ").concat(cpuRandomChoice, " // Result: ").concat(result));
    resultUserChoiceImg.src = "./assets/".concat(userChoice, ".svg");
    resultUserChoice.innerHTML = userChoice;
    resultCpuChoiceImg.src = "./assets/".concat(cpuRandomChoice, ".svg");
    resultCpuChoice.innerHTML = cpuRandomChoice;
    modal.style.visibility = 'visible';
  });
});
restart.addEventListener("click", function () {
  var confirmRestart = confirm("Are you sure you want to restart the game?");

  if (confirmRestart == true) {
    userScore = 0;
    cpuScore = 0;
    userScoreDisplay.innerHTML = userScore;
    cpuScoreDisplay.innerHTML = cpuScore;
  } else {
    return false;
  }
});
help.addEventListener("click", function () {
  modalInstructions.style.visibility = 'visible';
});
closeInstructions.addEventListener("click", function () {
  modalInstructions.style.visibility = 'hidden';
});

function compareChoices(userChoice, cpuChoice) {
  if (userChoice == cpuChoice) {
    return "Empate";
  } else {
    if (userChoice == "rock") {
      if (cpuChoice == "paper" || cpuChoice == "spock") {
        return "you lose";
      }

      return "you win";
    } else if (userChoice == "scissors") {
      if (cpuChoice == "rock" || cpuChoice == "spock") {
        return "you lose";
      }

      return "you win";
    } else if (userChoice == "paper") {
      if (cpuChoice == "scissors" || cpuChoice == "lizard") {
        return "you lose";
      }

      return "you win";
    } else if (userChoice == "lizard") {
      if (cpuChoice == "scissors" || cpuChoice == "rock") {
        return "you lose";
      }

      return "you win";
    } else if (userChoice == "spock") {
      if (cpuChoice == "lizard" || cpuChoice == "paper") {
        return "you lose";
      }

      return "you win";
    }
  }
}