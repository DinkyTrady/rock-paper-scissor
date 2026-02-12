let humanScore = 0
let computerScore = 0
let humanChoice;
let computerChoice;

const buttons = document.querySelectorAll('.choice')
const buttonReset = document.getElementById('resetButton')

const textInfo = document.getElementById('textInfo')
const humanScoreInfo = document.getElementById('humanScore')
const computerScoreInfo = document.getElementById('computerScore')

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


/**
  * @param {string} who
  */
const upScore = (who) => {
  if (who === 'human') {
    // @ts-ignore
    humanScoreInfo.innerText = ++humanScore;
    // @ts-ignore
    textInfo.innerText = 'You WIN!'
  } else {
    // @ts-ignore
    computerScoreInfo.innerText = ++computerScore;
    // @ts-ignore
    textInfo.innerText = 'Computer WIN!'
  }
}


buttons.forEach(button => {
  button.addEventListener('click', () => {
    // @ts-ignore
    humanChoice = button.dataset.choice;
    computerChoice = getComputerChoice();

    if (computerChoice === humanChoice) {
      // @ts-ignore
      textInfo.innerText = 'You and Computer are Draw!'
    } else if (computerChoice === 'rock' && humanChoice === 'scissor') {
      upScore('comp')
    } else if (computerChoice === 'paper' && humanChoice === 'rock') {
      upScore('comp')
    } else if (computerChoice === 'scissor' && humanChoice === 'paper') {
      upScore('comp')
    } else if (humanChoice === 'rock' && computerChoice === 'scissor') {
      upScore('human')
    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
      upScore('human')
    } else if (humanChoice === 'scissor' && computerChoice === 'paper') {
      upScore('human')
    }
  })
})

buttonReset?.addEventListener('click', () => {
  humanScore = 0
  computerScore = 0

  // @ts-ignore
  humanScoreInfo.innerText = humanScore
  // @ts-ignore
  computerScoreInfo.innerText = computerScore
})
