
function getComputerChoice() {
    const number = Math.random();
    if (number < 0.333) {
        return "ROCK";
    } else if (number > 0.666) {
        return "PAPER";
    } else {
        return "SCISSOR";
    }
}



// function getHumanChoice() {
//     let myChoice = prompt("What is your choice?");
//     // myChoice = myChoice.toUpperCase();
//     return myChoice
// }

let humanScore = 0;
let computerScore = 0;


function playRound(humanChoice, computerChoice) {
    const div = document.createElement("div");
    container.appendChild(div)
    if (humanChoice === computerChoice ) {
        div.textContent = "You are even!";
    } else if (humanChoice === "ROCK" && computerChoice == "PAPER") {
        div.textContent = "You lose. Paper beats Rock!";
        computerScore += 1;
    } else if (humanChoice === "ROCK" && computerChoice == "SCISSOR") {
        div.textContent = "You win. Rock beats Scissor!";
        humanScore += 1;
    } else if (humanChoice === "SCISSOR" && computerChoice == "PAPER") {
        div.textContent = "You win. Scissor beats Paper!";
        humanScore += 1;
    } else if (humanChoice === "SCISSOR" && computerChoice == "ROCK") {
        div.textContent = "You lose. Rock beats Scissor!";
        computerScore += 1;
    } else if (humanChoice === "PAPER" && computerChoice == "SCISSOR") {
        div.textContent = "You lose. Scissor beats Paper!";
        computerScore += 1;
    } else if (humanChoice === "PAPER" && computerChoice == "ROCK") {
        div.textContent = "You win. Paper beats Rock!";
        humanScore += 1;
    }

    if (humanScore == 5) {
        alert("Game is over! You win!");
    } else if (computerScore == 5) {
        alert("Game is over! You lose!");
    }
        
}

// function playGame() {
//     let humanScore = 0;
//     let computerScore = 0;

//     if (result === 'computer') {
//         computerScore += 1;
//     } else if (result === 'human'){
//         humanScore +=1;
//     } 
        
//     }
    
    // return [humanScore, computerScore]


const container = document.querySelector("body");
const btnRock = document.createElement("button");
btnRock.textContent = "ROCK";
const btnPaper = document.createElement("button");
btnPaper.textContent = "PAPER";
const btnScissor = document.createElement("button");
btnScissor.textContent = "SCISSOR";

container.appendChild(btnRock);
container.appendChild(btnPaper);
container.appendChild(btnScissor);


btnRock.addEventListener("click", () => {playRound("ROCK", getComputerChoice())});
btnPaper.addEventListener("click", () => {playRound("PAPER", getComputerChoice())});
btnScissor.addEventListener("click", () => {playRound("SCISSOR", getComputerChoice())});

