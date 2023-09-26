        // adding buttons

//player buttons

let player;
let computer;

const buttonRock = document.querySelector(`#rock`);
buttonRock.addEventListener(`click`, rockFunction );

const buttonPaper = document.querySelector(`#paper`);
buttonPaper.addEventListener(`click`, paperFunction);

const buttonScissors = document.querySelector(`#scissors`);
buttonScissors.addEventListener(`click`, scissorsFunction)

//computer buttons

const buttonGenerate = document.querySelector(`#generate`);
buttonGenerate.addEventListener(`click`, generateFunction);

//play button

const buttonPlay = document.querySelector(`#play`);
buttonPlay.addEventListener(`click`, playGame);

// reset button

const resetButton = document.querySelector(`#reset`);
resetButton.addEventListener(`click`, resetGame) 


        //functions to display selections

//player selection

function rockFunction(){
    document.getElementById(`playerSelectBox`).innerHTML = `rock`;
    player = `rock`;
};
function paperFunction(){
    document.getElementById(`playerSelectBox`).innerHTML = `paper`;
    player = `paper`;
};
function scissorsFunction (){
    document.getElementById(`playerSelectBox`).innerHTML = `scissors`;
    player = `scissors`;
};

//computer selection

function generateFunction(){
    document.getElementById(`computerSelectBox`).innerHTML = `???`;
    let random = Math.random();
    if(random <=0.3333){
        computer = `paper`;
    }
    else if(random >=0.6666){
        computer = `rock`;
    }
    else{
        computer = `scissors`;
    }
    console.log(computer);
};
            //game function

let gameCount = document.getElementById(`gameCount`).innerHTML += 0;
let playerScore = document.getElementById(`playerScore`);
let computerScore = document.getElementById(`computerScore`);
let drawGames = document.getElementById(`drawGames`);


let draw = `Its a draw!`;
let playerWin = `Player wins this round!`;
let compWin = `Computer wins this round!`;
let gameReset = ``;

function playGame (){
    buttonPlay.disabled = true;
    buttonGenerate.disabled = true;
    buttonPaper.disabled = true;
    buttonRock.disabled = true;
    buttonScissors.disabled = true;
    document.getElementById(`computerSelectBox`).innerHTML = computer;
    document.getElementById(`gameResult`).innerHTML
    if(player === computer){
        document.getElementById(`gameResult`).innerHTML = draw;
        console.log(draw);
        drawGames.innerHTML += 1;
        return draw;
    }
    else if ((player === `rock` && computer === `scissors`)||
            (player === `paper` && computer === `rock`)||
            (player === `scissors` && computer === `paper`)){
        console.log(playerWin);
        document.getElementById(`gameResult`).innerHTML = playerWin;
        playerScore.innerHTML +=1;
        return playerWin;
    }
    else {
        console.log(compWin)
        document.getElementById(`gameResult`).innerHTML = compWin;
        computerScore.innerHTML += 1;
        return compWin;
    }
};

// displying score


function resetGame(){
    buttonPlay.disabled = false;
    buttonGenerate.disabled = false;
    buttonPaper.disabled = false;
    buttonRock.disabled = false;
    buttonScissors.disabled = false;
    document.getElementById(`gameResult`).innerHTML = gameReset;
    document.getElementById(`computerSelectBox`).innerHTML = gameReset;
    document.getElementById(`playerSelectBox`).innerHTML = gameReset;
    
};








































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
