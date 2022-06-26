'use strict'

const message = document.querySelector('.message')
const number = document.querySelector('.number')
const inputNumber = document.querySelector('.guess')
const checkBtn = document.querySelector('.check')
const score = document.querySelector('.score')
const body = document.querySelector('body')
const againBtn = document.querySelector('.again')
const highscoreText = document.querySelector('.highscore')

let secretNumber = Math.floor(Math.random() * 20) + 1
let score1 = 20
let highscore = 0

const displayMessage = (m) => {
  message.innerHTML = m
}

checkBtn.addEventListener('click', () => {
  const guess = +inputNumber.value

  if (!guess) {
    displayMessage('🚫 No Number')
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number! ')
    number.style.width = '30rem'
    body.style.backgroundColor = '#60b347'
    number.innerHTML = secretNumber

    if (score1 > highscore) {
      highscore = score1
      highscoreText.innerHTML = highscore
    }
  } else if (guess !== secretNumber) {
    if (score1 > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!')
      score1--
      score.innerHTML = score1
    } else {
      displayMessage('💸 You lost the game')
      score.innerHTML = 0
    }
  }
})

againBtn.addEventListener('click', () => {
  score1 = 20
  score.innerHTML = score1
  secretNumber = Math.floor(Math.random() * 20) + 1
  displayMessage('Start guessing...')
  body.style.backgroundColor = '#222'
  number.innerHTML = '?'
  number.style.width = '15rem'
  inputNumber.value = ''
})
