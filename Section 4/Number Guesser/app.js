/*
 ¬_¬
 ~ GAME FUNCTION ~ 
 - player must guess a number between a min and a max
 - player gets a certain amount of guesses
 - notify player of guesses remaining
 - notify player of correct answer at loss
 - let player choose to play again
*/

// game values
let min = -7, max = 999, winningNum = 2, guessesLeft = 3;

// ui elements
const game = document.querySelector('#game');
const minNum = document.querySelector('.min-num');
const maxNum = document.querySelector('.max-num');
const guessBtn = document.querySelector('#guess-btn');
const guessInput = document.querySelector('#guess-input');
const message = document.querySelector('.message');

// set number boundaries
minNum.textContent = min;
maxNum.textContent = max;

// listen for guess input
guessBtn.addEventListener('click', function() {  
  let guess = parseInt(guessInput.value);
  console.log(guess);

  // validate input
  // check not blank, or < min and > max
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`invalid input. please enter a number between ${min} and ${max}.`, 'red');
  }

  // win case
  else if (guess === winningNum) {
    guessInput.style.borderColor = 'green';
    guessBtn.disabled = true;
    guessBtn.style.borderColor = 'green';
    guessBtn.value = 'YOU WIN';

    setMessage(`${guess} is correct!`, 'green');
  } 
  else if (guessesLeft > 1) { // lose case
    guessesLeft -= 1;
    setMessage(`${guess} is incorrect. please try again. you have ${guessesLeft} ${guessesLeft > 1 ? 'guesses' : 'guess'} left.`);
  }
  else {
    setMessage(`you lost. that's numberwang`, 'red');
  }
})

function setMessage(msg, color) {
  message.textContent = msg;
  message.style.color = color;
  console.log(message);
}