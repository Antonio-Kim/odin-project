const computerPlay = () => {
  let computerOptions = ['Rock', 'Paper', 'Scissor'];
  let computerChoose = Math.floor(Math.random() * computerOptions.length);
  return computerOptions[computerChoose];
}

console.log(computerPlay());