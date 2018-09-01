var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var resetButton = document.querySelector("#reset");
var numInput = document.querySelector("input");
var winningScoreDisplay = document.querySelector("p span");

var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;


var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");

p1Button.addEventListener("click", function() {
    if (!gameOver) {
        p1Score++;
        p1Display.textContent = p1Score;
        if (p1Score === winningScore) {
                gameOver = p1Score === winningScore;
                p1Display.classList.add("winner");
        }
    }
});
p2Button.addEventListener("click", function() {
    if (!gameOver) {
        p2Score++;
        p2Display.textContent = p2Score;
        if (p2Score === winningScore) {
            gameOver = p2Score === winningScore;
            p2Display.classList.add("winner");
        }
    }
});

resetButton.addEventListener("click", function () {
    reset();
});

numInput.addEventListener("change", function () {
    winningScore = Number(numInput.value);
    winningScoreDisplay.textContent = Number(numInput.value);
    reset();
});

function reset() {
    gameOver = false;
    p1Score = 0;
    p1Display.textContent = p1Score;
    p1Display.classList.remove("winner");
    p2Score = 0;
    p2Display.textContent = p2Score;
    p2Display.classList.remove("winner");
}