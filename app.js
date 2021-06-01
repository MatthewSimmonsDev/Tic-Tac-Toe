const gameSpaces = document.querySelectorAll('.gamespace');
let turnOrder = 1;
//gameboard
const gameBoard = (() => {
  const gameBoardArr = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
  ];
  return gameBoardArr;
})();

//Players Factory Function
const player = (turnOrder, piece) => {
  return {turnOrder, piece};
};

const playerOne = player(1, 'X');
const playerTwo = player(2, 'O');

//add pieces to board
function placePiece(e){
  if (turnOrder === playerOne.turnOrder){
    turnOrder++;
    e.target.textContent = playerOne.piece;
  }
  else if (turnOrder === playerTwo.turnOrder){
    turnOrder--;
    e.target.textContent = playerTwo.piece;
  }
}

gameSpaces.forEach(element => {
  element.addEventListener('click', placePiece)
});
