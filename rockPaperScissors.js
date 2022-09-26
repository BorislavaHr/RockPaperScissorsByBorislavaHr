function rockPaperScissors(playerTurn) {

  const rock = "Rock";
  const paper = "Paper";
  const scissors = "Scissors";

  let isInvalidArg = false; // invalid argument


  // player logic
  if (playerTurn == "r" || playerTurn == "rock") {
    playerTurn = rock;
  } else if (playerTurn == "p" || playerTurn == "paper") {
    playerTurn = paper;
  } else if (playerTurn == "s" || playerTurn == "scissors") {
    playerTurn = scissors;
  } else {
    isInvalidArg = true; //check invalid argument
    console.log("Invalid input. Try again...");
  }

  if (isInvalidArg != true) {  //<-- check invalid argument
    console.log(`You choose ${playerTurn}`);
  }


  // computer logic
  let computerRandomNum = Math.floor(Math.random() * 3) + 1;

  switch (computerRandomNum) {
    case 1:
      computerRandomNum = rock;
      break;
    case 2:
      computerRandomNum = paper;
      break;
    case 3:
      computerRandomNum = scissors;
      break;
  }

  if (isInvalidArg != true) {  //<-- check invalid argument
    console.log(`The computer chooses ${computerRandomNum}`);
  }


  // win or lose logic
  if (isInvalidArg != true) {  // <-- check invalid argument
    if (
      (computerRandomNum === rock && playerTurn === scissors) ||
      (computerRandomNum === scissors && playerTurn === paper) ||
      (computerRandomNum === paper && playerTurn === rock)
    ) {
      console.log(`You lose!`);
    } else if (
      (playerTurn === rock && computerRandomNum === scissors) ||
      (playerTurn === scissors && computerRandomNum === paper) ||
      (playerTurn === paper && computerRandomNum === rock)
    ) {
      console.log(`You win!`);
    } else {
      console.log("This game was a draw!");
    }
  }
}

rockPaperScissors(4);
