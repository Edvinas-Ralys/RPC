//Computer picks
function computerPick(){
    let random = Math.random();
    if(random <= 0.3333){
        return `rock`;
    }
    else if (random >= 0.6666){
        return `paper`;
    }
    else{
        return `scissors`;
    }
}

//Prompts for wins/draws
let draw = `Draw`;
let playerWonRound = `Player won the round`;
let computerWonRound = `Computer won the round`;


//Playing a round. Displays win/loss. Currently incorrect
function playRound (){
    if(playerPick === computerPick){
        return draw;
    }
    else if (playerPick === `rock` && computerPick === `scissors`){
        return playerWonRound;
    }
    else if (playerPick === `scissors` && computerPick === `paper`){
        return playerWonRound;
    }
    else if (playerPick === `paper` && computerPick === `rock`){
        return playerWonRound;
    }
    else{
        return computerWonRound;
    }
}
for (let i = 0; i<1; i++){

}
  

function gameScore(){
    let result = playRound();

    if(result === playerWonRound){
        playerScore++;
    }
    else if (result === draw){
        draws++
    }
    else {
        computerScore++;
    }
}