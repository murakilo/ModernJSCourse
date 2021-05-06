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
let guessesLeft = 3,
  min = getRandomNum(1, 95),
  max = getRandomNum(min + 5, 100),
  winningNum = getRandomNum(min, max),
  wins = 0, losses = 0;

// ui elements
const game = document.querySelector('#game');
const minNum = document.querySelector('.minNum');
const maxNum = document.querySelector('.maxNum');
const guessBtn = document.querySelector('#guessBtn');
const guessInput = document.querySelector('#guessInput');
const message = document.querySelector('.message');
const winSpan = document.querySelector('.winCount');
const lossSpan = document.querySelector('.loseCount');
const scoreCont = document.querySelector('.score');

// set number boundaries
minNum.textContent = min;
maxNum.textContent = max;

// set score
if (!localStorage.getItem('numberWangWins')) {
  localStorage.setItem('numberWangWins', 0);
  localStorage.setItem('numberWangLosses', 0);
}
else {
  wins = parseInt(localStorage.getItem('numberWangWins'));
  winSpan.textContent = wins;
  losses = parseInt(localStorage.getItem('numberWangLosses'));
  lossSpan.textContent = losses;
}

console.log(localStorage.getItem('numberWangWins'));
console.log(localStorage.getItem('numberWangLosses'));

// play again event listener
game.addEventListener('mousedown', function(e) {
  if (e.target.className.includes('playAgain')) {
    window.location.reload();
  }
})

// reset game event listener
scoreCont.addEventListener('click', function() {
  localStorage.setItem('numberWangWins', 0);
  localStorage.setItem('numberWangLosses', 0);
  wins = 0;
  losses = 0;
  winSpan.textContent = 0;
  lossSpan.textContent = 0;
});

// listen for guess input
guessBtn.addEventListener('click', function() {  
  let guess = parseInt(guessInput.value);

  // validate input
  // check not blank, or < min and > max
  if (isNaN(guess) || guess < min || guess > max) {
    guessInput.value = '';
    setMessage(`invalid input. please enter a number between ${min} and ${max}.`, 'red');
  }
  // win case
  else if (guess === winningNum) {
    wins = addWin(wins);
    gameOver(true, `${guess} is correct!`);
  } 
  else { // lose case
    guessesLeft -= 1;
    if (guessesLeft === 0) {
      losses = addLoss(losses);
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

function addWin(winNum) {
  winNum += 1;
  localStorage.setItem('numberWangWins', winNum);
  winSpan.textContent = winNum;
  return winNum;
}

function addLoss(lossNum) {
  console.log(lossNum);
  lossNum += 1;
  localStorage.setItem('numberWangLosses', lossNum);
  lossSpan.textContent = lossNum;
  return lossNum;
}