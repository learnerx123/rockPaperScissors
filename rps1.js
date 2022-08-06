
//computerChoice randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.
function getComputerChoice() {
    //    math.random(1,3)
    let numb = Math.floor(Math.random() * (4 - 1) + 1);
    // returns number choice
    // console.log(`computerChoice:${numb}`)

    return numb === 1 ? "rock"
        : numb === 2 ? "paper"
            : "scissor";
    // return prompt("computer");

}
// play return a winner of the round
function playRound(playerSelection, computerSelection) {
    /**/
    //player wins 
    if ((playerSelection === "paper" & computerSelection === "rock")) {
        return  "You win Paper beats Rock"// //"playerSelection"; //
    } else if (playerSelection === "rock" & computerSelection === "scissor") {
        return  "You win rock beats scissor"// //"playerSelection"; //
    } else if (playerSelection === "scissor" & computerSelection === "paper") {
        return  "You win scissor beats paper"// //"playerSelection"; //
    }
    // computer wins "You Lose! Paper beats Rock"
    if ((playerSelection === "rock" & computerSelection === "paper")) {
        return "You Lose! Paper beats Rock";// return //"computerSelection";//
    } else if (playerSelection === "scissor" & computerSelection === "rock") {
        return  "You Lose! rock beats scissor"// //"computerSelection"; //
    } else if (playerSelection === "paper" & computerSelection === "scissor") {
        return  "You Lose! scissor beats paper"// //"computerSelection"; //
    }
    // tie
    if ((playerSelection === computerSelection)) {
        return "tie";
    }
}
function askChoice() {

}
// get player choice
// let playerSelection = prompt("enter player choice").toLowerCase();





// console.log(playRound(playerSelection, computerSelection));

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let result;

    for (let i = 1; i < 6; i++) {
        console.log("round: ", i)
        do {
            var playerSelection = prompt("playerChoice");

            // check for null and empty string
            if (playerSelection === null) {
                console.log("game cancelled");
                return "null not allowed"
            }else if (playerSelection === "") {
                console.log("empty selection not allowed \n game ended");
                return "empty string";
            }
            // notAllowed(playerSelection) will ask again for right input

        } while (notAllowed(playerSelection))
        console.log("playerSelection: ", playerSelection)

        let computerSelection = getComputerChoice();
        console.log("computerSelection", computerSelection);

        // plays a round Lose!
        let result = playRound(playerSelection, computerSelection);
        console.log("result", result);

        let resultStoreLose = result.slice(result.indexOf("Lose!"), (result.indexOf("Lose!")+5));
        let resultStoreWin = result.slice(result.indexOf("win"), (result.indexOf("win")+3));

        // console.log("resultStoreLose", resultStoreLose);
        // console.log("resultStoreWin", resultStoreWin);
        if (resultStoreLose === "Lose!") {
            computerScore++;
            
        } else if (resultStoreWin === "win") {
            playerScore++;
        }

    }


    // score board
    console.log(
        `computerScore: ${computerScore} 
        playerScore: ${playerScore}`
    )

    // Winner after 5 rounds
    let winner = playerScore > computerScore ? "player Wins"
        : playerScore === computerScore ? " its a tie" : "computer Wins";

    console.log(winner);

}

function notAllowed(playerSelection) {
    switch (playerSelection) {
        case "rock":
            return false
            break;
        case "paper":
            return false
            break;
        case "scissor":
            return false
            break;
        case null:
            alert(`null`);                
            return false;
            break;
        case "":
            return false;
            break;
        default:
            return true;
    }
}

//lets start the game
game()
