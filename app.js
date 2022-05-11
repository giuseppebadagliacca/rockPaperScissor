// const rock = document.getElementById('rock')
// const paper = document.getElementById('paper')
// const scissor = document.getElementById('scissor')
// const gameContainer = document.getElementById('game-container')
// let playerScore =  Number(document.getElementById('player-score').innerHTML)
// let compScore = Number(document.getElementById('comp-score').innerHTML)
// const scoreBoard = document.getElementById('score-board')

// gameContainer.addEventListener('click', runGame)

// function runGame(e){
//   let compChoice = Math.floor(Math.random()*3)
//   const playerChoice = e.target.id

//   if(compChoice === 0){
//     compChoice = 'rock'
//   }else if(compChoice === 1){
//     compChoice = 'paper'
//   }else if(compChoice === 2){
//     compChoice = 'scissor'
//   }

//   if(playerChoice === compChoice){
//     const compDisp = document.createElement('div')
//  compDisp.className = 'page-container'
//  compDisp.id = 'delete'
//  compDisp.appendChild(document.createTextNode(`Both players picked ${playerChoice}...It'a tie :/`))
//  scoreBoard.appendChild(compDisp)
//  setTimeout(clear, 3500)

//   }else if(playerChoice === 'rock' &&compChoice === 'paper'){
//     const result = `${playerChoice} vs. ${compChoice}
//     Paper beats Rock...Computer wins :(`
//     addPointComp(result)
//   }
//   else if(playerChoice === 'rock' &&compChoice === 'scissor'){
//     const result = `${playerChoice} vs. ${compChoice}

//     Rock beats Scissor...Player wins :)`
//     addPointPlayer(result)
//   }else if(playerChoice === 'paper' &&compChoice === 'rock'){
//     const result = `${playerChoice} vs. ${compChoice}

//     Paper beats Rock...Player wins :)`
//     addPointPlayer(result)
//   } else if(playerChoice === 'paper' &&compChoice === 'scissor'){
//     const result = `${playerChoice} vs. ${compChoice}

//     Scissor beats Paper...Computer wins :(`
//     addPointComp(result)
//   } else if(playerChoice === 'scissor' &&compChoice === 'rock'){
//     const result = `${playerChoice} vs. ${compChoice}

//     Rock Beats Scissor...Computer wins :(`
//     addPointComp(result)
//   }else if(playerChoice === 'scissor' && compChoice === 'paper'){
//     const result = `${playerChoice} vs. ${compChoice}
//     Scissor beats Paper...Player wins :)`
//     addPointPlayer(result)
//   }
// }


// function addPointComp(x){
//  const newScore = compScore + 1
//  document.getElementById('comp-score').innerHTML = `${newScore}`

//  const compDisp = document.createElement('div')
//  compDisp.className = 'page-container'
//  compDisp.id = 'delete'
//  compDisp.appendChild(document.createTextNode(`${x}`))
//  scoreBoard.appendChild(compDisp)
//  setTimeout(clear, 3500)
//  return compScore = newScore
// }

// function addPointPlayer(x){
//   const newScore = playerScore + 1
//   document.getElementById('player-score').innerHTML = `${newScore}`

// const compDisp = document.createElement('div')
//  compDisp.className = 'page-container'
//  compDisp.id = 'delete'
//  compDisp.appendChild(document.createTextNode(`${x}`))
//  scoreBoard.appendChild(compDisp)
//  setTimeout(clear, 3500)
//   return playerScore = newScore
// }

// function clear(){
//   document.getElementById('delete').remove()
// }


const myArr = [1,3,45,654,23,14,64,10,78,99,100,34,35,36,37,38]

 myFunc = x => x.sort((x,y)=>x-y)






console.log(myFunc(myArr))