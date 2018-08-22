var secretNumber = 4

var stringGuess = prompt("Guess a number");
var guess = Number(stringGuess);
if (guess === secretNumber) {
    alert("You got it right");
}
else if (guess > secretNumber) {
    alert("Too high, guess again");
}
else {
    alert("Too low, guess again");
}