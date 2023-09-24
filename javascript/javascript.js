//Prompt to ask for player input. Allows only valid answers
// function playerInput(){
//     let playerSelect = prompt(`Choose - rock, paper or scissors`).toLowerCase();
//     if(playerSelect === `rock` || playerSelect === `paper` || playerSelect === `scissors` || playerSelect !== undefined){
//         return playerSelect;
//     }
//     else{
//         alert(`Wrong input, try again`);
//         playerInput();
//     }
//     }

function displaySelection(selection){
    const playerSelectBox = document.querySelector(`#playerSelectBox`);
    playerSelectBox.innerHTML = selection;
}















//Computer choose what to play
function computerInput(){
    let random = Math.random();
    if(random <=0.3333){
        return `paper`;
    }
    else if(random >=0.6666){
        return `rock`;
    }
    else{
        return `scissors`;
    }
}
//Definig variables for game outcomes and scores
let playerScore = 0;
let computerScore = 0;
let drawCount = 0
let draw = `It's a draw!`
let playerWin = `Player won this round!`
let computerWin = `Computer won the round!`

//Plays a round of RPC
function game(playerPlay, computerPlay){
    playerPlay = playerInput();
    console.log(`Player chose ` + playerPlay);
    computerPlay = computerInput();
    console.log(`Computer chose ` + computerPlay);
  
  if(playerPlay === computerPlay){
    return draw;
  }
  else if (playerPlay === `rock` && computerPlay === `scissors`){
    return playerWin;
  }
  else if (playerPlay === `paper` && computerPlay === `rock`){
    return playerWin;
}
else if (playerPlay === `scissors` && computerPlay === `paper`){
    return playerWin;
}
else{
    return computerWin;
}}

//Plays 5 rounds. Displays score counter, announces round winner.
//After 5 rounds displays winner of the game. End
// for(let i = 1; i < 6; i++){
//     console.log(`Round ` + i)
//     let round = game();
//     if(round === draw){
//         console.log(draw),
//         drawCount++
//     }
//     else if (round === playerWin) {
//         console.log(playerWin),
//         playerScore++
//     }
//     else{
//         console.log(computerWin),
//         computerScore++
//     }
//     console.log(`Draws: ` + drawCount, `Player: ` + playerScore, `Computer: ${computerScore}`);
// }
// if(i = 6 && playerScore > computerScore){
//     console.log(`Player won the game, congratulations!`);
// }
// else if (i = 6 && playerScore < computerScore){
//     console.log(`Computer won the game, you suck!`)
// }
// else{
//     console.log(`The game is a draw`)
