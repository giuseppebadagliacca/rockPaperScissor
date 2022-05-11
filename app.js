const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissor = document.getElementById('scissor')
const gameContainer = document.getElementById('game-container')
let playerScore =  Number(document.getElementById('player-score').innerHTML)
let compScore = Number(document.getElementById('comp-score').innerHTML)
const scoreBoard = document.getElementById('score-board')

gameContainer.addEventListener('click', runGame)

function runGame(e){
  let compChoice = Math.floor(Math.random()*3)
  const playerChoice = e.target.id

  if(compChoice === 0){
    compChoice = 'rock'
  }else if(compChoice === 1){
    compChoice = 'paper'
  }else if(compChoice === 2){
    compChoice = 'scissor'
  }

  if(playerChoice === compChoice){
    displayTie(`Both players picked ${playerChoice}...It'a tie :/`)
  }else if(playerChoice === 'rock' &&compChoice === 'paper'){
    const result = `${playerChoice} vs. ${compChoice}
    Paper beats Rock...Computer wins :(`
    addPointComp(result)
  }
  else if(playerChoice === 'rock' &&compChoice === 'scissor'){
    const result = `${playerChoice} vs. ${compChoice}

    Rock beats Scissor...Player wins :)`
    addPointPlayer(result)
  }else if(playerChoice === 'paper' &&compChoice === 'rock'){
    const result = `${playerChoice} vs. ${compChoice}

    Paper beats Rock...Player wins :)`
    addPointPlayer(result)
  } else if(playerChoice === 'paper' &&compChoice === 'scissor'){
    const result = `${playerChoice} vs. ${compChoice}

    Scissor beats Paper...Computer wins :(`
    addPointComp(result)
  } else if(playerChoice === 'scissor' &&compChoice === 'rock'){
    const result = `${playerChoice} vs. ${compChoice}

    Rock Beats Scissor...Computer wins :(`
    addPointComp(result)
  }else if(playerChoice === 'scissor' && compChoice === 'paper'){
    const result = `${playerChoice} vs. ${compChoice}
    Scissor beats Paper...Player wins :)`
    addPointPlayer(result)
  }
}

function displayTie(msg){
  const compDisp = document.createElement('div')
  compDisp.id = 'tie'
  compDisp.appendChild(document.createTextNode(msg))
  scoreBoard.appendChild(compDisp)
  setTimeout(clear('tie'), 3500)
}

function addPointComp(x){
 const newScore = compScore + 1
 document.getElementById('comp-score').innerHTML = `${newScore}`

 const compDisp = document.createElement('div')
 compDisp.id = 'lose'
 compDisp.appendChild(document.createTextNode(`${x}`))
 scoreBoard.appendChild(compDisp)
 setTimeout(clear('lose'), 3500)
 return compScore = newScore
}

function addPointPlayer(x){
  const newScore = playerScore + 1
  document.getElementById('player-score').innerHTML = `${newScore}`

const compDisp = document.createElement('div')
 compDisp.id = 'win'
 compDisp.appendChild(document.createTextNode(`${x}`))
 scoreBoard.appendChild(compDisp)
 setTimeout(clear('win'), 3500)
  return playerScore = newScore
}

function clear(status){
  // const element = document.querySelector(`#${status}`)
  // element.remove()
}

