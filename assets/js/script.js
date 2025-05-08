// DOM Elements
const choices = document.querySelectorAll(".choice");
const playerChoiceDisplay = document.getElementById("player-choice");
const computerChoiceDisplay = document.getElementById("computer-choice");
const resultDisplay = document.getElementById("game-result");

// Choices Array
const gameChoices = ["rock", "paper", "scissors"];

// Event Listener for Choices
choices.forEach(choice => {
  choice.addEventListener("click", () => {
    const playerChoice = choice.id.toLowerCase(); // Ensure lowercase
    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);

    console.log("Player Choice:", playerChoice); // Debug
    console.log("Computer Choice:", computerChoice); // Debug

    displayChoices(playerChoice, computerChoice);
    displayResult(result);
  });
});

// Function to Get Computer's Choice
function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * gameChoices.length);
  return gameChoices[randomIndex];
}

// Function to Determine Winner
function determineWinner(player, computer) {
  console.log(`Comparing: Player=${player} vs Computer=${computer}`); // Debug

  if (player === computer) {
    return "It's a draw!";
  }

  if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    return "You win!";
  } else {
    return "You lose!";
  }
}

// Function to Display Choices
function displayChoices(player, computer) {
  playerChoiceDisplay.textContent = `You chose: ${capitalize(player)}`;
  computerChoiceDisplay.textContent = `Computer chose: ${capitalize(computer)}`;
}

// Function to Display Result
function displayResult(result) {
  resultDisplay.textContent = result;
}

// Helper Function to Capitalize Text
function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}
