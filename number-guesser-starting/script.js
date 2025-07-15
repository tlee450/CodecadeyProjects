let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
    return Math.floor(Math.random() * 10); 
}

function compareGuesses(userGuess, computerGuess, targetNumber) {
    // Determines which player (human or computer) wins based on which guess is closest 
    // to the target. If both players are tied, the human user should win.
    // Return true if the human player wins, and false if the computer player wins.

    return Math.abs(userGuess - targetNumber) <= Math.abs(computerGuess - targetNumber);
}

function updateScore(winner) {
    // Has a single parameter. This parameter will be a string value representing the winner.
    // Increases the score variable (humanScore or computerScore) by 1 depending on the winner passed in to updateScore. 
    // The string passed in will be either 'human' or 'computer'.
    // Does not need to return any value.
    if (winner === 'human') {
        humanScore += 1;
    }
    else {
        computerScore += 1;
    }
}

function advanceRound() {
    currentRoundNumber += 1;
}

