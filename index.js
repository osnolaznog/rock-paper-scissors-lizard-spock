// *-*-* SCORES *-*-*
let userScore = 0;
let cpuScore = 0;

const modal = document.querySelector(".result-popup");
const closeModal = document.getElementsByClassName("close-icon")[0];
const userScoreDisplay = document.getElementById("user-score");
const cpuScoreDisplay = document.getElementById("cpu-score");
const help = document.querySelector(".help")
const modalInstructions = document.querySelector(".instructions-popup")
const closeInstructions = document.querySelector(".close-instructions")

let resultDisplay = document.getElementsByClassName("result-display")[0];

const restart = document.getElementById("restart-game");
const resultImage = document.getElementsByClassName("result-image")[0];
const resultUserChoiceImg = document.getElementsByClassName("user-choice-image")[0];
const resultUserChoice = document.getElementsByClassName("user-choice")[0];
const resultCpuChoiceImg = document.getElementsByClassName("cpu-choice-image")[0];
const resultCpuChoice = document.getElementsByClassName("cpu-choice")[0];

//Get user choice on click on buttons
const userOptions = document.querySelectorAll(".button");

closeModal.addEventListener("click", function () {
    modal.style.visibility = 'hidden';
})

document.addEventListener('keydown', function(event){
	if(event.key === "Escape"){
		modal.style.visibility = 'hidden';
        modalInstructions.style.visibility = 'hidden';
	}
});

userOptions.forEach((userOption) => {
    userOption.addEventListener("click", function () {
        const userChoice = this.id;

        const cpuOptions = ["rock", "paper", "scissors", "lizard", "spock"];
        const cpuChoice = () => {
            const randomChoice = Math.floor(Math.random() * 5);
            return cpuOptions[randomChoice];
        }
        let cpuRandomChoice = cpuChoice();
        
        const result = compareChoices(userChoice, cpuRandomChoice);
        if (result == "you win") {
            userScore++
            userScoreDisplay.innerHTML = userScore
            resultDisplay.innerHTML = "YOU WIN!"
            resultImage.src="./assets/win.svg"
            
        } else if (result == "you lose") {
            cpuScore++
            cpuScoreDisplay.innerHTML = cpuScore
            resultDisplay.innerHTML = "YOU LOSE!"
            resultImage.src="./assets/lose.svg"
        } else {
            resultDisplay.innerHTML = "IT'S A TIE!"
            resultImage.src="./assets/tie.svg"
        }
        console.log(`User: ${userChoice} // CPU: ${cpuRandomChoice} // Result: ${result}`);
        
        resultUserChoiceImg.src = `./assets/${userChoice}.svg`;
        resultUserChoice.innerHTML = userChoice;
        resultCpuChoiceImg.src = `./assets/${cpuRandomChoice}.svg`;
        resultCpuChoice.innerHTML = cpuRandomChoice;
        modal.style.visibility = 'visible';

    });
});

restart.addEventListener("click", function (){
    let confirmRestart = confirm("Are you sure you want to restart the game?");
    
    if (confirmRestart == true) {
        userScore = 0;
        cpuScore = 0;
        userScoreDisplay.innerHTML = userScore;
        cpuScoreDisplay.innerHTML = cpuScore;
    } else {
        return false;
    }
    
});

help.addEventListener("click", function(){
    modalInstructions.style.visibility= 'visible';
})

closeInstructions.addEventListener("click", function () {
    modalInstructions.style.visibility = 'hidden';
})

function compareChoices(userChoice, cpuChoice){

    if (userChoice == cpuChoice) {
        return "Empate";
    } else {
        if(userChoice == "rock"){
            if((cpuChoice == "paper") || (cpuChoice == "spock")) {
                return "you lose";
            } return "you win";
        } else if(userChoice == "scissors"){
            if((cpuChoice == "rock") || (cpuChoice == "spock")) {
                return "you lose";
            } return "you win";
        } else if(userChoice == "paper"){ 
            if((cpuChoice == "scissors") || (cpuChoice == "lizard")) {
                return "you lose";
            } return "you win";
        } else if(userChoice == "lizard"){ 
            if((cpuChoice == "scissors") || (cpuChoice == "rock")) {
                return "you lose";
            } return "you win";
        } else if(userChoice == "spock"){ 
            if((cpuChoice == "lizard") || (cpuChoice == "paper")) {
                return "you lose";
            } return "you win";
        }
    }
}