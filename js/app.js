/*-------------------------------- Constants --------------------------------*/
const winningCombos =  [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,7,3], [2,5,8],[2,4,6], [0,4,8]] 



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
      messageEl.textContent = `Player ${turn} turn`
    } else if (winner === 'T'){
      `all the spaces on the ${board} have been played and it's a Tie`
    }
 })
}

function handleClick(evt){
  const sqIdx = parseInt(evt.target.id.slice(2))
  console.log(sqIdx)
  if (board[sqIdx] !== null){
    return `Square has been taken`
  } else if (winner !== null){
    return `Game is over`
  }
  board[sqIdx] = turn
  turn = turn * (-1)
  getWinner()
  render ()
}

function getWinner() {
  for (let i = 0; i < winningCombos.length; i++){
    let sum = board[winningCombos[i][0]] + board[winningCombos[i][1]] + board[winningCombos[i][2]] 
      if (sum === 3){
        
        return 1
      } else if (sum === -3){
        return -1
    } else if (board.includes(null) === false){
      return 'T'
    }else {
      return null
      
    }
  } 
} 

