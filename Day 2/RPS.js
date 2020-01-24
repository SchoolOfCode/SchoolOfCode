// isPlaying = confirm("Do you want to play Rock, Paper, Scissors?")

// Ask 'Do you want to play?'. If 'yes' run RPS, if 'no' end game.
//var isPlaying = true
//while (isPlaying) {
//    playGame();
//    isPlaying = confirm("Do you want to play again?");
//

//when we run the function it should call the message which is done via document.getElementById

//

const gameHistory = [];

function gameResult(message) {
  const result = document.getElementById("result");
  result.innerText = message;
}
function cpuGameResult(message) {
  const cpuResult = document.getElementById("cpuResult");
  cpuResult.innerText = message;
}

function playGame(playerMove) {
  // Write the logic for RPS
  // var playerMove = prompt  ("Choose your move: rock, paper or scissors?")
  const cpuMove = generatecpuMove();

  function generatecpuMove() {
    const randomNumber = Math.random();
    if (randomNumber < 0.33) {
      return "rock";
    } else if (randomNumber > 0.33 && randomNumber < 0.66) {
      return "paper";
    } else if (randomNumber > 0.66) {
      return "scissors";
    }
  }

  if (playerMove === "rock") {
    if (cpuMove === "rock") {
      cpuGameResult("cpu chooses rock");
      gameResult("It's a draw!");
    } else if (cpuMove === "paper") {
      cpuGameResult("cpu chooses paper");
      gameResult("cpu wins!");
    } else if (cpuMove === "scissors") {
      cpuGameResult("cpu chooses scissors");
      gameResult("player wins!");
    }
  } else if (playerMove === "paper") {
    if (cpuMove === "rock") {
      cpuGameResult("cpu chooses rock");
      gameResult("Player wins!");
    } else if (cpuMove === "paper") {
      cpuGameResult("cpu chooses paper");
      gameResult(" It's a draw!");
    } else if (cpuMove === "scissors") {
      cpuGameResult("cpu chooses scissors");
      gameResult("Cpu wins!");
    }
  } else if (playerMove === "scissors") {
    if (cpuMove === "rock") {
      cpuGameResult("cpu chooses rock");
      gameResult("cpu wins!");
    } else if (cpuMove === "paper") {
      cpuGameResult("cpu chooses paper");
      gameResult("player wins!");
    } else if (cpuMove === "scissors") {
      cpuGameResult("cpu chooses scissors");
      gameResult("It's a draw!");
    }
  }
  addToHistory(playerMove, cpuMove);
}

// Create three buttons named rock, paper, scissors to show player move
// for rock button, we want to play the game with "rock"
// The player's move needs to be either rock, paper or scissors depending on which button they press.

const rockButton = document.getElementById("rock");
rockButton.addEventListener("click", playRock);

const paperButton = document.getElementById("paper");
paperButton.addEventListener("click", playPaper);

const scissorsButton = document.getElementById("scissors");
scissorsButton.addEventListener("click", playScissors);

function playRock() {
  playGame("rock");
}
function playPaper() {
  playGame("paper");
}
function playScissors() {
  playGame("scissors");
}

//Change to text in the result paragraph depending on the outcome of the game (win, loss, draw).

//A function that represents the result of the game.

//Create a player wins box and computer wins box
//Create a function that registers each game result and recognises difference between a player win and computer win
// Create a function which adds +1 (updates) the boxes when a win is registered

//homework
//take a username
//display that username at the top of the page
//display it by the scores

//Make a list that shows the computer and player moves
//Create an array that can keep track of the history games
//Make an object that contains the result of each game as it happens
//Make function that adds the literal result of each game to the history of games played
//Something that displays the history of the results in the web page

function addToHistory(playerMove, cpuMove) {
  const gameResult = {
    playerMove,
    cpuMove
  };
  gameHistory.push(gameResult);
  console.log(gameHistory);
}

const displayResults = document.getElementById("gameHistory");
displayResults.innerText = gameHistory;

//Here is where the username is set.
//Find the username from whatever is typed in the box
//change the entered name text to be whatever is typed in the box
//Name changes when button is clicked

function addUserName() {
  const username = document.getElementById("username").value;
  if (username) {
    console.log("Hello" + username);
  } else {
    console.log("user not found");
  }
  const enteredName = document.getElementById("enteredName");
  enteredName.innerText = username;
}

const enterUsernameBtn = document.getElementById("enterusername");
enterUsernameBtn.addEventListener("click", addUserName);
