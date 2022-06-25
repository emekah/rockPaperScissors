const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' ||userInput === 'scissors' || userInput === 'bomb') {
      return userInput;
    } else {
      console.log('Error detected!')
    }
  }
  
  const getComputerChoice = () => {
    var randomNumber = Math.floor(Math.random() * 3);
    switch(randomNumber) {
      case 0:
        return 'rock';
      case 1:
        return 'paper';
      case 2:
        return 'scissors';
      default:
        return 'Oops!'
    }
  }
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === 'bomb') {
      return('You won!');
    }
    if(userChoice === computerChoice) {
      return('It\'s a tie!')
    } else if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'The computer won!';
      } else {
        return 'You won!';
      } 
    } else if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return 'The computer won!';
      } else { 
        return 'You won!';
      }
    } else if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'The computer won!';
        } else {
        return 'You won!';
        }
    } else {return 'You won!'};
}

const playGame = () => {
  var userChoice = getUserChoice('scissors');
  console.log(userChoice);
  var computerChoice = getComputerChoice('paper');
  console.log(computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();