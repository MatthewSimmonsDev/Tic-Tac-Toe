const gameSpaces = document.querySelectorAll('.gamespace');
const results = document.querySelector('.results');
const resetBtn = document.querySelector('.reset-btn');
const gameBoard = ['','','','','','','','','']
const winningCombos = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,7],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
]


let round = 1;

const player = (piece) => {
  return {piece};
}

const playerOne = player('X');
const playerTwo = player('O');

function playerPiece(index, player){
  gameSpaces[index].textContent = player.piece;
  gameBoard[index] = player.piece;
  round++;
  // checkWin(playerOne);
  // checkWin(playerTwo);
}

//if gameboard content matches any of the winning combos  return victory
// compare indexes from winning combos with the game board array
function checkWin(player){
  winningCombos.forEach((item) => {
    if (gameBoard[item[0]] === player.piece && gameBoard[item[1]] === player.piece && gameBoard[item[2]] === player.piece ){
      results.textContent = `${player.piece} is the WINNER!`
    }
  })
  checkDraw();

}

function checkDraw(){
  if (round === 10){
    results.textContent = 'DRAW!'
  }
}

results.textContent = `${playerOne.piece} goes first`

for(let i = 0; i < gameSpaces.length; i++){
  gameSpaces[i].addEventListener('click', () => {
    if(round % 2 !== 0){
      playerPiece(i, playerOne);
      results.textContent = `${playerTwo.piece}'s turn`
      checkWin(playerOne);
      checkWin(playerTwo);
    } else {
      playerPiece(i, playerTwo);
      results.textContent = `${playerOne.piece}'s turn`
      checkWin(playerOne);
      checkWin(playerTwo);
    }
  })
}

resetBtn.addEventListener('click', () => {
  round = 1;
  for (let i = 0; i < gameBoard.length; i++){
    gameBoard[i] = '';
    gameSpaces[i].textContent = ''; 
    results.textContent = 'X goes first';
  }
})