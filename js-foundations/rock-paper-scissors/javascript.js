function playGame() {

    function getComputerChoice() {
        let randInt = Math.floor(Math.random() * 3); // 0/1/2

        if (randInt === 0) {
            return "Rock";
        } else if (randInt === 1) {
            return "Paper";
        } else {
            return "Scissors";
        }
    }

    function getHumanChoice() {
        let choice = prompt(
            'What is your choice? (Print "Rock" or "Paper" or "Scissors").'
        );

        return capitalizeWord(choice);
    }

    function capitalizeWord(word) {
        return word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase();
    }

    let compScore = 0;
    let humanScore = 0;

    let compTotalScore = 0;
    let humanTotalScore = 0;

    let compChoice;
    let humanChoice;

    function playRound(compChoice, humanChoice) {
        compScore = 0;
        humanScore = 0;

        compChoice = getComputerChoice();
        humanChoice = getHumanChoice();

        if (compChoice === "Rock") {
            if (humanChoice === "Paper") {
                humanScore += 2;
            } else if (humanChoice === "Scissors") {
                compScore += 2;
            } else {
                compScore += 1;
                humanScore += 1;
            }
        } else if (compChoice === "Paper") {
            if (humanChoice === "Rock") {
                compScore += 2;
            } else if (humanChoice === "Scissors") {
                humanScore += 2;
            } else {
                compScore += 1;
                humanScore += 1;
            }
        } else {
            if (humanChoice === "Rock") {
                humanScore += 2;
            } else if (humanChoice === "Paper") {
                compScore += 2;
            } else {
                compScore += 1;
                humanScore += 1;
            }
        }

        if (compScore > humanScore) {
            console.log('You lose! ' + compChoice + ' beats ' + humanChoice + '.');
        } else if (compScore < humanScore) {
            console.log('You win! ' + humanChoice + ' beats ' + compChoice + '.');
        } else {
            console.log('Draw! ' + compChoice + ' VS ' + humanChoice + '.');
        }

        compTotalScore += compScore;
        humanTotalScore += humanScore;
    }

    // play 5 rounds
    playRound(compChoice, humanChoice);
    playRound(compChoice, humanChoice);
    playRound(compChoice, humanChoice);
    playRound(compChoice, humanChoice);
    playRound(compChoice, humanChoice);

    if (compTotalScore > humanTotalScore) {
        console.log('Game result: You lose! Computer score: ' + compTotalScore + '. Your score: ' + humanTotalScore + '.');
    } else if (compTotalScore < humanTotalScore) {
        console.log('Game result: You win! Computer score: ' + compTotalScore + '. Your score: ' + humanTotalScore + '.');
    } else {
        console.log('Game result: Draw! Computer score: ' + compTotalScore + '. Your score: ' + humanTotalScore + '.');
    }
}

playGame();