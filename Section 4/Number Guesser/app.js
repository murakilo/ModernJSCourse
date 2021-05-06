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
let min = 1, max = 10, guessesLeft = 3;
let winningNum = getRandomNum(min, max);


// ui elements
const game = document.querySelector('#game');
const minNum = document.querySelector('.minNum');
const maxNum = document.querySelector('.maxNum');
const guessBtn = document.querySelector('#guessBtn');
const guessInput = document.querySelector('#guessInput');
const message = document.querySelector('.message');

// set number boundaries
minNum.textContent = min;
maxNum.textContent = max;

// play again event listener
game.addEventListener('mousedown', function(e) {
  if (e.target.className.includes('playAgain')) {
    window.location.reload();
  }
})

// listen for guess input
guessBtn.addEventListener('click', function() {  
  let guess = parseInt(guessInput.value);

  // validate input
  // check not blank, or < min and > max
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`invalid input. please enter a number between ${min} and ${max}.`, 'red');
  }
  // win case
  else if (guess === winningNum) {
    gameOver(true, `${guess} is correct!`);
  } 
  else { // lose case
    guessesLeft -= 1;
    if (guessesLeft === 0) {      
      gameOver(false, `you lost. the correct answer was ${winningNum}.<br>that's numberwang!`);
    }
    else {
      guessInput.value = '';
      setMessage(`${guess} is incorrect. please try again. you have ${guessesLeft} ${guessesLeft > 1 ? 'guesses' : 'guess'} left.`);
    }
  }
});

function gameOver(win, msg) {
  let color = win ? 'green' : 'red';
  guessInput.style.borderColor = color;
  guessBtn.style.color = color;
  setMessage(msg, color);

  // play again?
  guessBtn.className += ' playAgain';
  guessBtn.value = 'PLAY AGAIN'
}

function getRandomNum(min, max) {
  var winNum = Math.random() * (max-min + 1) + min;
  return Math.floor(winNum);
}

function setMessage(msg, color) {
  message.innerHTML = msg;
  message.style.color = color;
}