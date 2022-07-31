
//computerChoice randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.
function getComputerChoice() {
    //    math.random(1,3)
    let numb = Math.floor(Math.random() * (4 - 1) + 1);
    console.log(numb) 

    return numb === 1 ? "rock" 
    : numb === 2 ? "paper"
    :"scissor";
    // return prompt("computer");

}
// play return a winner of the round
function playRound(playerSelection, computerSelection) {
    /**/ 
    //player wins
    if ((playerSelection === "paper" & computerSelection === "rock")) {
        return "playerSelection";
    }else if (playerSelection === "rock" & computerSelection === "scissor") {
        return "playerSelection";
    }else if (playerSelection === "scissor" & computerSelection === "paper") {
        return "playerSelection";
    }
    // computer wins
    if ((playerSelection === "rock" & computerSelection === "paper")) {
        return "computerSelection";
    }else if (playerSelection === "scissor" & computerSelection === "rock") {
        return "computerSelection";
    }else if (playerSelection === "paper" & computerSelection === "scissor") {
        return "computerSelection";
    }
    // tie
    if ((playerSelection ===  computerSelection)) {
        return "tie";
    }
}

// get player choice
let playerSelection = prompt("enter player choice").toLowerCase();
console.log("playerSelection: ", playerSelection)
// get computer choice
const computerSelection = getComputerChoice();
console.log("computerSelection", computerSelection);
// console.log(playRound(playerSelection, computerSelection));

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let result ;
   
    for (let i = 0; i < 5; i++) {
        result = playRound(playerSelection, computerSelection);
        if (result === "computerSelection") {
            computerScore++;
        }else if (result === "playerSelection") {
            playerScore++;
        }
    }
    // Winner after 5 rounds
    let winner = playerScore > computerScore ? "player Wins"
        : playerScore === computerScore ? " its a tie" : "computer Wins";

    console.log(winner);

}

game()
// get only allowed choice
// const playerSelection = "";
// function playerChoice() {
    
//     while (true) {
//         if (playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissor") {
//             return playerSelection;
            
//             break;
//         }else {
//         console.log("playerSelection =", playerSelection, typeof playerSelection);
            
//         }

//     }


// } 