//Computer chooses
function computerPlay(){
    let random = Math.random();
    if(random <= 0.33333){
        return `rock`;
    }
    else if (random >= 0.66666)
        return `paper`;
    else {
        return `scissors` 
    }
}


//Playing one round
function playRound (playerChoice, computerChoice){
    if(playerChoice === computerChoice){
        return draw;
    }
    else if (playerChoice === `rock` && computerChoice === `scissors`){
        return playerWinRound;
    }
    else if (playerChoice === `paper` && computerChoice === `rock`){
        return playerWinRound;
    }
    else if (playerChoice === `scissors` && computerChoice === `paper`){
        return playerWinRound;
    }
    else{
        return computerWinRound
    }

}

let draw = `It's a draw!`;
let playerWinRound = `Player won the round!`;
let computerWinRound = `Computer won the round!`;
let playerWin = `Player won the game!`;
let computerWin = `Computer won the game!`;

for (let i = 1; i < 1000; i++){
    let playerChoice = prompt(`Choose - rock, paper or scissors`);
    console.log(`Player chose ` + playerChoice);

    const computerSelection = computerPlay();
    console.log(`Computer chose ` + computerSelection);

    let roundResult = playRound(playerChoice, computerSelection);
    console.log(roundResult);
    gameScore(roundResult);
    console.log(`Your score is ` + pla)
}

