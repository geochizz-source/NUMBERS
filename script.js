const min = 1;
const max = 100;
let secretNumber = Math.floor(Math.random() * (max - min + 1)) + min;

const guessInput = document.getElementById('guessInput');
const guessBtn = document.getElementById('guessBtn');
const message = document.getElementById('message');
const restartBtn = document.getElementById('restartBtn');

guessBtn.addEventListener('click', () => {
  const guess = Number(guessInput.value);
  if (!guess) {
    message.textContent = 'Please enter a number!';
    return;
  }

  if (guess === secretNumber) {
    message.textContent = `🎉 Correct! The number was ${secretNumber}.`;
    guessBtn.style.display = 'none';
    restartBtn.style.display = 'inline-block';
  } else if (guess < secretNumber) {
    message.textContent = '📈 Too low! Try again.';
  } else {
    message.textContent = '📉 Too high! Try again.';
  }

  guessInput.value = '';
});

restartBtn.addEventListener('click', () => {
  secretNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  message.textContent = '';
  guessBtn.style.display = 'inline-block';
  restartBtn.style.display = 'none';
});
