const tracking = ["Lapis", "Papyrus", "Scalpellus"];

const rock = tracking[0];
const paper = tracking[1];
const scissors = tracking[2];

const computerChooses = () => {
  const randomizeGame = Math.floor(Math.random() * tracking.length);
  return tracking[randomizeGame];
};

const compareChoices = (playersTurn) => {
  const computersTurn = computerChooses();

  if (computersTurn === playersTurn) {
    return `Computer and Player both have ${computersTurn}! It's a tie!`;
  } else if (computersTurn === rock) {
    if (playersTurn === paper) {
      return `The player wins! The computer chose ${computersTurn} and the player chose ${playersTurn}.`;
    } else {
      return `The computer wins! The computer chose ${computersTurn} and the player chose ${playersTurn}.`;
    }
  } else if (computersTurn === paper) {
    if (playersTurn === scissors) {
      return `The player wins! The computer chose ${computersTurn} and the player chose ${playersTurn}.`;
    } else {
      return `The computer wins! The computer chose ${computersTurn} and the player chose ${playersTurn}.`;
    }
  } else if (computersTurn === scissors) {
    if (playersTurn === rock) {
      return `The player wins! The computer chose ${computersTurn} and the player chose ${playersTurn}.`;
    } else {
      return `The computer wins! The computer chose ${computersTurn} and the player chose ${playersTurn}.`;
    }
  }
};

// cleaner keeping outside so it doesnt run each time
const resultsNode = document.querySelector("#results");

const showResults = (playersTurn) => {
  resultsNode.innerText = compareChoices(playersTurn);
};

// I decided to make 3 event listeners instead of one function, because I thought it was easier to read.
const rockNode = document.querySelector("#rock");
rockNode.addEventListener("click", () => {
  showResults(rock);
});

const paperNode = document.querySelector("#paper");
paperNode.addEventListener("click", () => {
  showResults(paper);
});

const scissorsNode = document.querySelector("#scissors");
scissorsNode.addEventListener("click", () => {
  showResults(scissors);
});
