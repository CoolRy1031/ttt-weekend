/*-------------------------------- Constants --------------------------------*/
const winningCombos = [0,1,2]; [3,4,5]; [6,7,8]; [0,3,6]; [1,7,3]; [2,5,8];[2,4,6]; [0,4,8] 



/*---------------------------- Variables (state) 
----------------------------*/
let board = [null, null, null, null, null, null, null, null, null]
let turn = 1
let winner = null



/*------------------------ Cached Element References ------------------------*/
const messageEl = document.querySelector('#message')
const squareEls = document.querySelectorAll('#sq0', '#sq1', '#sq2', '#sq3', '#sq4', '#sq5', '#sq6', '#sq7', '#sq8')





/*----------------------------- Event Listeners -----------------------------*/
board.addEventListener('click', handleClick)



/*-------------------------------- Functions --------------------------------*/
init ()

function init () {
}
// render ()


function render () {
  board.forEach(function(square, idx){
    if (square === -1) {
      squareEls[idx].textContent ='O'
    } else if (square === 1) {
      squareEls[idx].textContent = 'X'
    } else if (square === null) {
      squareEls[idx].textContent = null

  }
    if (winner === null){
      `It's the next players turn at any empty space at ${board}`
    } else if (winner === 'T'){
      `all the spaces on the ${board} have been played and it's a Tie`
    }
 })
}

function handleClick(evt){

}

