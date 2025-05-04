
function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let result;
  
  if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      result = 'Tie.';
    } else if (computerMove === 'paper') {
      result = 'You lose.';
    } else if (computerMove === 'scissors') {
      result = 'You win.';
    }
  } else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      result = 'You win.';
    } else if (computerMove === 'paper') {
      result = 'Tie.';
    } else if (computerMove === 'scissors') {
      result = 'You lose.';
    }
  } else if (playerMove === 'scissors') {
    if (computerMove === 'rock') {
      result = 'You lose.';
    } else if (computerMove === 'paper') {
      result = 'You win.';
    } else if (computerMove === 'scissors') {
      result = 'Tie';
    }
  }

  if (result === 'You win.') {
    score.wins++;
  } else if (result === 'You lose.') {
    score.losses++;
  } else if (result === 'Tie.') {
    score.ties++;
  }

  document.querySelector('.score-wins')
    .innerHTML = score.wins;
  
  document.querySelector('.score-ties')
    .innerHTML = score.ties;

  document.querySelector('.score-losses')
    .innerHTML = score.losses;

  document.querySelector('.js-player-move')
  .innerHTML = `${(playerMove).toUpperCase()}`;

  document.querySelector('.js-computer-move')
  .innerHTML = `${(computerMove).toUpperCase()}`;
}

function pickComputerMove() {
  let computerMove;
  const randomNumber = Math.random();

  if (randomNumber > 0 && randomNumber <= 1 / 3) {
    computerMove = 'rock';
  } else if (randomNumber > 1 / 3 && randomNumber <= 2 / 3) {
    computerMove = 'paper';
  } else if (randomNumber > 2 / 3 && randomNumber <= 1){
    computerMove = 'scissors';
  }
  return computerMove;
}

let score = {
  wins: 0,
  losses: 0,
  ties: 0,
};