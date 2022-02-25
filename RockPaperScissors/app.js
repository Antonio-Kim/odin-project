const computerPlay = () => {
  let computerOptions = ['Rock', 'Paper', 'Scissor'];
  let computerChoose = Math.floor(Math.random() * computerOptions.length);
  return computerOptions[computerChoose];
}

const playRound = (playerSelection, computerSelection) => {
  let result = "";
  switch (playerSelection) {
    case "Rock":
      if (computerSelection === "Paper") {
        console.log("You lose! Paper beats Rock")
        result = "computer";  
      } else if (computerSelection === "Scissor") {
        console.log("You win! Rock beats Scissor");
        result = "player";
      } else {
        console.log("It's a tie!");
        result = "tie";
      }
      break;
    
    case "Paper":
      if (computerSelection === "Rock") {
        console.log("You win! Paper wins Rock");
        result = "player";
      } else if (computerSelection === "Scissor") {
        console.log("You lose! Scissor wins Paper");
        result = "computer";
      } else {
        console.log("It's a tie!");
        result = "tie";
      }
      break;
    
    case "Scissor":
      if (computerSelection === "Paper") {
        console.log("You win! Scissor wins Paper");
        result = "player";
      } else if (computerSelection === "Rock") {
        console.log("You lose! Rock wins Scissor");
        result = "computer";
      } else {
        console.log("It's a tie!");
        result = "tie";
      }
      break;

    default:
      console.log("Unknown Input. Please try again.");
  }
  return result
}

const game = () => {
  let computerRecord = 0;
  let playerRecord = 0;
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Enter Rock, Paper, or Scissor: ");
    const computerSelection = computerPlay();
    let result = playRound(playerSelection, computerSelection);
    if (result === "player")
      playerRecord++;
    else if (result === "computer")
      computerRecord++;
  }
  if (playerRecord > computerRecord) 
    console.log("You win! congratulation!");
  else if (playerRecord < computerRecord)
    console.log("You lost. Try again.");
  else 
    console.log("You both tied!");
}

game();