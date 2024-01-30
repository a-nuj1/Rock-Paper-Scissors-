
const choices = ["rock", "paper", "scissors"];

const playerText = document.getElementById("playerText");
const computerText = document.getElementById("computerText");
const resultText = document.getElementById("resultText");


const playerScoreDisplay = document.getElementById("playerScoreDis");
const computerScoreDisplay = document.getElementById("computerScoreDis");


let playerScore = 0;
let computerScore = 0;



function playGame(playerChoice){
    const computerChoice = choices[Math.floor(Math.random()*3)];
    console.log(computerChoice);
    let result = "";
    if(playerChoice == computerChoice){
        result = "IT'S A TIE 🙂"
    }
    else{
        switch(playerChoice){
            case "rock":
                result = (computerChoice === "scissors")?"YOU WIN🎆": "YOU LOSE🥲";
                break;
            
            case "paper":
                result = (computerChoice === "rock")?"YOU WIN🎆": "YOU LOSE🥲";
                break;

            case "scissors":
                result = (computerChoice === "paper")?"YOU WIN🎆": "YOU LOSE🥲";
                break;
        }
    }

    playerText.textContent = `PLAYER: 
    ${playerChoice}`;
    computerText.textContent = `Computer: 
    ${computerChoice}`;

    resultText.textContent = result;
    resultText.classList.remove("greenText", "redText", "tie");
    switch(result){
        case "YOU WIN🎆":
            resultText.classList.add("greenText");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "YOU LOSE🥲":
            resultText.classList.add("redText");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
        case "IT'S A TIE 🙂":
            resultText.classList.add("tie");
            break;
    }
}