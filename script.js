'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

//A function to implement DRY
function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔ No Number!';
    displayMessage('⛔ No Number!');
  }

  //When player wins
  else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct Number!';
    displayMessage('🎉 Correct Number!');

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  //When guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      //   document.querySelector('.message').textContent =
      //     guess > secretNumber
      //       ? '🥵 Too high, guess again!'
      //       : '🥶 Too low, guess again!';
      displayMessage(
        guess > secretNumber
          ? '🥵 Too high, guess again!'
          : '🥶 Too low, guess again!'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //   document.querySelector('.message').textContent = '😶‍🌫️ You lost the game!';
      displayMessage('😶‍🌫️ You lost the game!');

      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = 'red';
    }
  }
  //How the code looked like before refactoring
  //When guess is to high
  //   else if (guess > secretNumber) {
  // if (score > 1) {
  //     document.querySelector('.message').textContent =
  //       '🥵 Too high, guess again!' ;
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '😶‍🌫️ You lost the game!';

  //     document.querySelector('.score').textContent = 0;
  //     document.querySelector('body').style.backgroundColor = 'red';
  //   }
  //   }

  //   //When guess is to low
  //   else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent =
  //         '🥶 Too low, guess again!';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = '😶‍🌫️ You lost the game!';
  //       document.querySelector('.score').textContent = 0;
  //       document.querySelector('body').style.backgroundColor = 'red';
  //     }
  //   }
});
///////////////////////////////////////////
/*Coding Challenge #1

Implement a game reste functionallity, so tgat tge player can make a new guess! Here is how:
1.Select the element with the 'again' class and attach a click event handler.
2. In the handler function, restore initial values of the score and secretNumber variables.
3.Restore the initial conditions of the message, numberm score and guess input field.
4. Also restore the original background color (#222)
and number width (15rem)
*/
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.number').textContent = '?';
  //document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;

  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
});
