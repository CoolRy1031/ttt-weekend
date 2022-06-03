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
const resetBtn = document.querySelector('.resetBtn')









/*----------------------------- Event Listeners -----------------------------*/
squareEls.forEach(function(square){
  square.addEventListener('click', handleClick)
  
})
resetBtn.addEventListener('click', init )

/*-------------------------------- Functions --------------------------------*/
init ()

function init () {
  board = [null, null, null, null, null, null, null, null, null]
  turn = 1
  winner = null
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
      messageEl.textContent = `Player ${turn === 1 ? "X" : "O"}'s turn `
    } else if (winner === 'T'){
      messageEl.textContent = "It's a Tie"
    }
  })
}

function handleClick(evt){
  const sqIdx = parseInt(evt.target.id.substring(2))
  if (board[sqIdx] !== null){
    return 
  } if (winner !== null){
    return 
  }
  board[sqIdx] = turn
  turn = turn * (-1)
  getWinner ()
  render ()
}

function getWinner() {
  let sum
  for (let i = 0; i < winningCombos.length; i++){
    sum = board[winningCombos[i][0]] + board[winningCombos[i][1]] + board[winningCombos[i][2]] 
    console.log(sum)
    if (sum === 3){
      winner = 1
      return
    } else if (sum === -3){
      winner = -1
      return
    } else if (board.includes(null) === false){
    winner =  'T'
    return
    }else {
    winner = null
    }
    
    
  } 
} 

