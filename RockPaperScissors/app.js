const computerPlay = () => {
  let computerOptions = ['Rock', 'Paper', 'Scissor'];
  let computerChoose = Math.floor(Math.random() * computerOptions.length);
  return computerOptions[computerChoose];
}

const playRound = (playerSelection, computerSelection) => {
  let result = "";
  switch (playerSelection) {
    case "Rock":
      if (computerSelection === "Paper") 
        result = "You lose! Paper beats Rock";      
      else if (computerSelection === "Scissor")
        result = "You win! Rock beats Scissor";
      else
        result = "It's a tie!";
      break;
    
    case "Paper":
      if (computerSelection === "Rock")
        result = "You win! Paper wins Rock";
      else if (computerSelection === "Scissor")
        result = "You lose! Scissor wins Paper";
      else
        result = "It's a tie!";
      break;
    
    case "Scissor":
      if (computerSelection === "Paper")
        result = "You win! Scissor wins Paper";
      else if (computerSelection === "Rock")
        result = "You lose! Rock wins Scissor";
      else
        result = "It's a tie!";
      break;

    default:
      result = "Unknown Input. Please try again.";
  }
  return result
}

const game = () => {
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Enter Rock, Paper, or Scissor: ");
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
  }
}

game();