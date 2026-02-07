let humanScore = 0
let computerScore = 0

const getComputerChoice = () => {
  const randomNumber = Math.random();

  if (randomNumber <= 0.3) {
    return 'rock'
  } else if ( randomNumber <= 0.6) {
    return 'paper'
  } else {
    return 'scissor'
  }
}

const getHumanChoice = () => {
  return prompt('Give your choice')
}

const playGame = () => {
  const humanChoiceFix = getHumanChoice()?.toLowerCase()
  const computerChoice = getComputerChoice()

  if (humanChoiceFix === computerChoice) {
    console.log('You and Computer are Draw!')
  } else if (humanChoiceFix === 'rock' && computerChoice === 'scissor') {
    humanScore++;
    console.log('You Win! Rock beats Scissor')
  } else if (humanChoiceFix === 'scissor' && computerChoice === 'paper') {
    humanScore++;
    console.log('You Win! Scissor beats paper')
  } else if (humanChoiceFix === 'paper' && computerChoice === 'rock') {
    humanScore++;
    console.log('You Win! Paper beats Rock')
  } else if (computerChoice === 'rock' && humanChoiceFix === 'scissor') {
    console.log('You lose! Paper beats Rock')
    computerScore++;
  } else if (computerChoice === 'scissor' && humanChoiceFix === 'paper')  {
    console.log('You lose! Scissor beats Paper')
    computerScore++;
  } else if (computerChoice === 'paper' && humanChoiceFix === 'rock') {
    console.log('You lose! Paper beats Rock')
    computerScore++;
  }
}

for (let i = 0; i !==5 ; i++) {
  playGame()
}

console.log(`Your Score: ${humanScore}\nComputer Score: ${computerScore}`)
