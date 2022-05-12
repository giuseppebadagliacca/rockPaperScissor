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
    displayTie(`Both players picked ${playerChoice} ...It'a tie :/`)
  }else if(playerChoice === 'rock' && compChoice === 'paper'){
    displayChoiceRed(playerChoice)
    displayChoiceGreen(compChoice)
    addPointComp(`Paper beats Rock...Computer wins :(`)
  }
  else if(playerChoice === 'rock' && compChoice === 'scissor'){
    displayChoiceRed(compChoice)
    displayChoiceGreen(playerChoice)
    addPointPlayer(`Rock beats Scissor...Player wins!`)
  }else if(playerChoice === 'paper' && compChoice === 'rock'){
    displayChoiceRed(compChoice)
    displayChoiceGreen(playerChoice)
    addPointPlayer(`Paper beats Rock...Player wins!`)
  } else if(playerChoice === 'paper' && compChoice === 'scissor'){
    displayChoiceRed(playerChoice)
    displayChoiceGreen(compChoice)
    addPointComp(`Scissor beats Paper...Computer wins :(`)
  } else if(playerChoice === 'scissor' && compChoice === 'rock'){
    displayChoiceRed(playerChoice)
    displayChoiceGreen(compChoice)
    addPointComp(`Rock Beats Scissor...Computer wins :(`)
  }else if(playerChoice === 'scissor' && compChoice === 'paper'){
    displayChoiceRed(compChoice)
    displayChoiceGreen(playerChoice)
    addPointPlayer(`Scissor beats Paper...Player wins!`)
  }
}

function displayTie(msg){
  gameContainer.removeEventListener('click', runGame)
  const compDisp = document.createElement('div')
  compDisp.id = 'tie'
  compDisp.appendChild(document.createTextNode(msg))
  scoreBoard.appendChild(compDisp)
  clearStatus('tie')
}

function addPointComp(msg){
 gameContainer.removeEventListener('click', runGame)
 const newScore = compScore + 1
 document.getElementById('comp-score').innerHTML = `${newScore}`
 const compDisp = document.createElement('div')
 compDisp.id = 'lose'
 compDisp.appendChild(document.createTextNode(`${msg}`))
 scoreBoard.appendChild(compDisp)
 clearStatus('lose')
 return compScore = newScore
}

function addPointPlayer(msg){
  gameContainer.removeEventListener('click', runGame)
  const newScore = playerScore + 1
  document.getElementById('player-score').innerHTML = `${newScore}`
  const compDisp = document.createElement('div')
 compDisp.id = 'win'
 compDisp.appendChild(document.createTextNode(`${msg}`))
 scoreBoard.appendChild(compDisp)
 clearStatus('win')
 return playerScore = newScore
}

function clearStatus(status){
  const element = document.querySelector(`#${status}`)
  setTimeout((status)=>{
    element.remove()
    gameContainer.addEventListener('click', runGame)
  }, 4000)
}

function displayChoiceRed(choice){
newChoice = document.querySelector(`img#${choice}`)
newChoice.id = 'redBorder'
clearImgBorder(choice, newChoice)
}

function displayChoiceGreen(choice){
  newChoice = document.querySelector(`img#${choice}`)
  newChoice.id = 'greenBorder'
  clearImgBorder(choice, newChoice)
}

function clearImgBorder(choice, newChoice){
  setTimeout(()=>newChoice.id = `${choice}`, 4000)
}
