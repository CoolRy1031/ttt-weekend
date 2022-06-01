/*-------------------------------- Constants --------------------------------*/
const winningCombos = [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,7,3], [2,5,8],[2,4,6], [0,4,8] 



/*---------------------------- Variables (state) 
----------------------------*/
let board = [null, null, null, null, null, null, null, null, null]
let turn = 1
let winner = null




/*------------------------ Cached Element References ------------------------*/
const messageEl = document.querySelector('#message')
const squareEls = document.querySelectorAll('.square')








/*----------------------------- Event Listeners -----------------------------*/
squareEls.forEach(function(square){
  square.addEventListener('click', handleClick)
})

/*-------------------------------- Functions --------------------------------*/
init ()

function init () {
  board = [null, null, null, null, null, null, null, null, null]
  let turn = 1
  let winner = null
  render ()
}


function render () {
  board.forEach(function(square, idx){
    if (square === 1) {
      squareEls[idx].textContent ='X'
    } else if (square === -1) {
      squareEls[idx].textContent = 'O'
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
  const sqIdx = parseInt(evt.target.id.slice(2))
  if (winner !== null){
    return `Game is over`
  } else if (board === sqIdx){
    return `square has been taken`
  }

}

