//Game status
const playerScoreElement = document.getElementById('playerScore');
const playerChoiceElemente = document.getElementById('playerChoice');
const computerScoreElement = document.getElementById('computerScore');
const computerChoiceElement = document.getElementById('computerChoice');
const resultText = document.getElementById('resultText')

//User game choice
const playerRock = document.getElementById('playerRock');
const playerPaper = document.getElementById('playerPaper');
const playerScissor = document.getElementById('playerScissor');
const playerLizard = document.getElementById('playerLizard');
const playerSpock = document.getElementById('playerSpock');

//Computer game choice
const computerRock = document.getElementById('computerRock');
const computerPaper = document.getElementById('computerPaper');
const computerScissor = document.getElementById('computerScissor');
const computerLizard = document.getElementById('computerLizard');
const computerSpock = document.getElementById('computerSpock');

const choices = {
  rock: { name: 'Rock', defeats: ['scissors', 'lizard'] },
  paper: { name: 'Paper', defeats: ['rock', 'spock'] },
  scissors: { name: 'Scissors', defeats: ['paper', 'lizard'] },
  lizard: { name: 'Lizard', defeats: ['paper', 'spock'] },
  spock: { name: 'Spock', defeats: ['scissors', 'rock'] },
};

let computerChoice = '';
let playerScoreNumber = 0;
let computerScoreNumber = 0;


// Computer choice his moves 
function computerRandomChoice() {
  const random = Math.random();
  if(random <= 0.2) {
    computerChoice = 'rock';
  } else if (random <= 0.4) {
    computerChoice = 'paper';
  } else if (random <= 0.6) {
    computerChoice = 'scissors';
  } else if (random <= 0.8) {
    computerChoice = 'lizard';
  } else {
    computerChoice = 'spock';
  }
}

//Add the class selected to the img of the computer's chioce in order to paint it black 
function displayComputerPick() {
  switch (computerChoice) {
    case 'rock':
      computerRock.classList.add('selected');
      computerChoiceElement.textContent = '--- Rock'
      break;
    case 'paper':
      computerPaper.classList.add('selected');
      computerChoiceElement.textContent = '--- Paper'
      break;
    case 'scissors':
      computerScissor.classList.add('selected');
      computerChoiceElement.textContent = '--- Scissors'
      break;
    case 'lizard':
      computerLizard.classList.add('selected');
      computerChoiceElement.textContent = '--- Lizzard'
      break;
    case 'spock':
      computerSpock.classList.add('selected');
      computerChoiceElement.textContent = '--- Spock'
      break;
    default:
      break;
  }
}

function displayUserPick(playerChoice) {
  switch (playerChoice) {
    case 'rock':
      playerRock.classList.add('selected');
      playerChoiceElemente.textContent = '--- Rock'
      break;
    case 'paper':
      playerPaper.classList.add('selected');
      playerChoiceElemente.textContent = '--- Paper'
      break;
    case 'scissors':
      playerScissor.classList.add('selected');
      playerChoiceElemente.textContent = '--- Scissors'
      break;
    case 'lizard':
      playerLizard.classList.add('selected');
      playerChoiceElemente.textContent = '--- Lizzard'
      break;
    case 'spock':
      playerSpock.classList.add('selected');
      playerChoiceElemente.textContent = '--- Spock'
      break;
    default:
      break;
  }
}

function checkWinner(playerChoice) {
  if(playerChoice === computerChoice) {
    resultText.textContent = 'Tie!!';
  } else {
    const choice = choices[playerChoice];
    if(choice.defeats.indexOf(computerChoice) < -1) {
      playerScoreNumber++;
      resultText.textContent = 'You Won!';
      playerScoreElement.textContent = playerScoreNumber;
    } else {
      computerScoreNumber++;
      resultText.textContent = 'You Lost!';
      computerScoreElement = computerScoreNumberM
    }
  }
}


