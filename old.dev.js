"use strict";

var userScore = 0;
var cpuScore = 0;
var choices = ["rock", "paper", "scissors", "lizard", "spock"];
var userScore_span = document.getElementById("user-score");
var cpuScore_span = document.getElementById("cpu-score");
var resultDisplay = document.querySelector(".result-display");
var resultUserChoice = document.querySelector(".user-choice");
var resultComputerChoice = document.querySelector(".cpu-choice"); // returns a random number between min and max values passed as arguments 

var computerChoice = function computerChoice() {
  var randomNumber = Math.floor(Math.random() * 5);
  return choices[randomNumber];
};

function reply_click(clicked_id) {
  var cpuChoice = computerChoice();
  resultUserChoice.innerHTML = "Has elegido " + clicked_id;
  resultComputerChoice.innerHTML = "CPU ha elegido " + cpuChoice;

  switch (clicked_id == cpuChoice) {
    case clicked_id == "rock" && cpuChoice == "spock" || clicked_id == "rock" && cpuChoice == "paper" || clicked_id == "scissors" && cpuChoice == "spock" || clicked_id == "scissors" && cpuChoice == "rock" || clicked_id == "spock" && cpuChoice == "paper" || clicked_id == "spock" && cpuChoice == "lizard" || clicked_id == "lizard" && cpuChoice == "scissors" || clicked_id == "lizard" && cpuChoice == "rock" || clicked_id == "paper" && cpuChoice == "scissors" || clicked_id == "paper" && cpuChoice == "lizard":
      resultDisplay.innerHTML = "You win!";
      break;

    case clicked_id == "rock" && cpuChoice == "scissors" || clicked_id == "rock" && cpuChoice == "lizard" || clicked_id == "scissors" && cpuChoice == "paper" || clicked_id == "scissors" && cpuChoice == "lizard" || clicked_id == "spock" && cpuChoice == "scissors" || clicked_id == "spock" && cpuChoice == "rock" || clicked_id == "lizard" && cpuChoice == "paper" || clicked_id == "lizard" && cpuChoice == "spock" || clicked_id == "paper" && cpuChoice == "rock" || clicked_id == "paper" && cpuChoice == "spock":
      resultDisplay.innerHTML = "You lose!";
      break;

    default:
      resultDisplay.innerHTML = "It's a tie!";
  }

  console.log("User: ".concat(clicked_id));
  console.log("CPU: ".concat(cpuChoice));
}