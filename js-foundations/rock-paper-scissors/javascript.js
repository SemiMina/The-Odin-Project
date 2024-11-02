/********************** Variables *********************/
const btn_rock = document.getElementById("Rock");
const btn_paper = document.getElementById("Paper");
const btn_scissors = document.getElementById("Scissors");

const btn_finish = document.getElementById("finish");
const btn_clear = document.getElementById("clear");

let compScore = 0;
let humanScore = 0;

let compTotalScore = 0;
let humanTotalScore = 0;

/******************** Events *********************/
btn_rock.addEventListener("click", () => {
    playRound("Rock");
});

btn_paper.addEventListener("click", () => {
    playRound("Paper");
});

btn_scissors.addEventListener("click", () => {
    playRound("Scissors");
});

btn_finish.addEventListener("click", () => {
    if (compTotalScore + humanTotalScore === 0) {
        logResult("Choose your weapon!");
    } else {
        getGameResult();
        clearGameResult();
    }
});

btn_clear.addEventListener("click", () => {
    clearLog();
    clearGameResult();
});

/******************** Results *********************/
function getGameResult() {
    if (compTotalScore > humanTotalScore) {
        logResult('Game result: You lose!\nComputer score: ' + compTotalScore + '.\nYour score: ' + humanTotalScore + '.');
    } else if (compTotalScore < humanTotalScore) {
        logResult('Game result: You win!\nComputer score: ' + compTotalScore + '.\nYour score: ' + humanTotalScore + '.');
    } else {
        logResult('Game result: Draw!\nComputer score: ' + compTotalScore + '.\nYour score: ' + humanTotalScore + '.');
    }
}

function clearGameResult() {
    compTotalScore = 0;
    humanTotalScore = 0;
}

/******************** Logs *********************/
function logResult(logText) {
    const res = document.querySelector(".result");
    const p = document.createElement("p");
    p.textContent += logText;
    res.appendChild(p);
}

function clearLog() {
    const res = document.querySelector(".result");
    while (res.hasChildNodes()) {
        res.removeChild(res.firstChild);
    }
}

/******************** Rounds *********************/
function playRound(humanChoice) {

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

    compScore = 0;
    humanScore = 0;

    let compChoice = getComputerChoice();

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
        logResult('You lose!\n' + compChoice + ' beats ' + humanChoice + '.');
    } else if (compScore < humanScore) {
        logResult('You win!\n' + humanChoice + ' beats ' + compChoice + '.');
    } else {
        logResult('Draw!\n' + compChoice + ' VS ' + humanChoice + '.');
    }

    compTotalScore += compScore;
    humanTotalScore += humanScore;
}



