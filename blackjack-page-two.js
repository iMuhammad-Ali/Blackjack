let cards = ["src/2.png", "src/3.png", "src/4.png", "src/5.png", "src/6.png", "src/7.png", "src/8.png", "src/9.png", "src/10.png", "src/11.png"];
let totalPlayerScore = 0;
let totalComputerScore = 0;
let wins = 0;
let losses = 0;
let draws = 0;

document.getElementById("pick-btn").onclick = function () {
    playerCard(cards);
}
document.getElementById("stand-btn").onclick = function () {
    stand();
}
document.getElementById("deal-btn").onclick = function () {
    deal();
}

// Player functions
function playerScore(playerScore) {
    totalPlayerScore += playerScore;
    if (totalPlayerScore <= 21) {
        document.getElementById("player-score").innerHTML = "Score= " + totalPlayerScore;
    } else {
        document.getElementById("player-score").innerHTML = "You Busted!";
        document.getElementById("pick-btn").onclick = null;
    }
}

function playerCard(cards) {
    let playerImg = document.createElement("img");
    let playerCard = Math.floor(Math.random() * 10);
    playerImg.src = cards[playerCard];
    playerImg.style.width = '100px';
    document.getElementById("player-cards").append(playerImg);
    playerScore(playerCard + 2);
} 

// Computer functions
function computerScore(computerScore) {
    totalComputerScore += computerScore;
    if (totalComputerScore <= 21) {
        document.getElementById("computer-score").innerHTML = "Score= " + totalComputerScore;
    } else {
        document.getElementById("computer-score").innerHTML = "Computer Busted!";
    }
}

function computerCard(cards) {
    let computerImg = document.createElement("img");
    let computerCard = Math.floor(Math.random() * 10);
    computerImg.src = cards[computerCard];
    computerImg.style.width = '100px';
    document.getElementById("computer-cards").append(computerImg);
    computerScore(computerCard + 2);
}

// stand function
function stand() {
    for (var i = 0; i < 3; i++) {
        computerCard(cards);
    }
    document.getElementById("pick-btn").onclick = false;
    document.getElementById("stand-btn").onclick = false;
    resultMessage(totalPlayerScore, totalComputerScore);

    if (document.getElementById("result").innerHTML === "YOU WIN!") {
        wins += 1;
        document.getElementById("wins").innerHTML = wins;
    } else if (document.getElementById("result").innerHTML === "YOU LOSE!") {
        losses += 1;
        document.getElementById("losses").innerHTML = losses;
    } else {
        draws += 1;
        document.getElementById("draws").innerHTML = draws;
    }
}

// deal function
function deal() {
    document.getElementById("player-cards").innerHTML = "";
    document.getElementById("player-score").innerHTML = "";
    document.getElementById("computer-cards").innerHTML = "";
    document.getElementById("computer-score").innerHTML = "";
    document.getElementById("result").innerHTML = "";
    document.getElementById("result").style.border = null;
    totalPlayerScore = 0;
    totalComputerScore = 0;
    document.getElementById("pick-btn").onclick = function () {
        playerCard(cards);
    }
    document.getElementById("stand-btn").onclick = function () {
        stand();
    }
}

var pS = totalPlayerScore;
var cS = totalComputerScore;

function resultMessage(pS, cS) {
    if ((pS === cS) || (pS > 21 && cS > 21)) {
        document.getElementById("result").innerHTML = "DRAW";
        document.getElementById("result").style.color = "yellow";
    } else if (((pS > cS) && (pS <= 21)) || ((pS < cS) && (cS > 21))) {
        document.getElementById("result").innerHTML = "YOU WIN!";
        document.getElementById("result").style.color = "blue";
    } else {
        document.getElementById("result").innerHTML = "YOU LOSE!";
        document.getElementById("result").style.color = "red";
    }
    document.getElementById("result").style.border = "4px solid yellow";

    return 0;
}
