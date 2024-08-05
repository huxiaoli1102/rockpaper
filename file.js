
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



function getHumanChoice() {
    let myChoice = prompt("What is your choice?");
    myChoice = myChoice.toUpperCase();
    return myChoice
}




function playRound(humanChoice, computerChoice) {

    if (humanChoice === computerChoice ) {
        console.log("You are even!");
    } else if (humanChoice === "ROCK" && computerChoice == "PAPER") {
        console.log("You lose. Paper beats Rock!")
        return "computer"
    } else if (humanChoice === "ROCK" && computerChoice == "SCISSOR") {
        console.log("You win. Rock beats Scissor!")
        return "human"
    } else if (humanChoice === "SCISSOR" && computerChoice == "PAPER") {
        console.log("You win. Scissor beats Paper!")
        return "human"
    } else if (humanChoice === "SCISSOR" && computerChoice == "ROCK") {
        console.log("You lose. Rock beats Scissor!")
        return "computer"
    } else if (humanChoice === "PAPER" && computerChoice == "SCISSOR") {
        console.log("You lose. Scissor beats Paper!")
        return "computer"
    } else if (humanChoice === "PAPER" && computerChoice == "ROCK") {
        console.log("You win. Paper beats Rock!")
        return "human"
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 3; i++){
        hChoice = getHumanChoice();
        cChoice = getComputerChoice();
        console.log(hChoice);
        console.log(cChoice);
        let winner = playRound(hChoice, cChoice);
        if (winner === 'computer') {
            computerScore += 1;
        } else if (winner === 'human'){
            humanScore +=1;
        } 
            
        }
    
    return [humanScore, computerScore]

    }
    

const [humanFinalScore, computerFinalScore] = playGame();
console.log(humanFinalScore);
console.log(computerFinalScore);