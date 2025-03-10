document.getElementById("Rock").onclick = function() { playGame("Rock"); };
document.getElementById("Paper").onclick = function() { playGame("Paper"); };
document.getElementById("Scissors").onclick = function() { playGame("Scissors"); };
document.getElementById("restart").onclick = function() { restartGame(); };

document.addEventListener("keydown", function(event) {
    if (event.key === "r") {
        playGame("Rock");
    } else if (event.key === "p") {
        playGame("Paper");
    } else if (event.key === "s") {
        playGame("Scissors");
    }
});

function playGame(userChoice) {
    const choices = ["Rock", "Paper", "Scissors"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    document.getElementById("Choice").src = computerChoice.toLowerCase() + ".png";
    document.getElementById("Choice").alt = computerChoice;

    let result = "";
    if (userChoice === computerChoice) {
        result = "It's a tie!";
    } else if (
        (userChoice === "Rock" && computerChoice === "Scissors") ||
        (userChoice === "Paper" && computerChoice === "Rock") ||
        (userChoice === "Scissors" && computerChoice === "Paper")
    ) {
        result = "You win!";
    } else {
        result = "You lose!";
    }

    document.getElementById("result").innerText = result;
    document.getElementById("userChoiceDisplay").innerText = `Your Choice: ${userChoice}`;

    // Update CSS property on event handler
    document.getElementById(userChoice).style.border = "5px solid green";
    setTimeout(() => {
        document.getElementById(userChoice).style.border = "none";
    }, 1000);
}

function restartGame() {
    document.getElementById("Choice").src = "";
    document.getElementById("Choice").alt = "Computer generated choice";
    document.getElementById("result").innerText = "";
    document.getElementById("userChoiceDisplay").innerText = "";
    document.getElementById("Rock").style.border = "none";
    document.getElementById("Paper").style.border = "none";
    document.getElementById("Scissors").style.border = "none";
}



