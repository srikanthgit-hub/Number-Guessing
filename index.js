let randomNumber = Math.floor(Math.random() * 100) + 1; 
let attempts = 0;

while (true) {
    let guess = parseInt(prompt("Guess a number between 1 and 100:"));

    if (isNaN(guess)) {
        alert("Please enter a valid number.");
        continue;
    }

    attempts++;

    if (guess === randomNumber) {
        alert("Congratulations! You guessed the number " + randomNumber + " in " + attempts + " attempts.");
        break;
    } else if (guess < randomNumber) {
        alert("Too low. Try again.");
    } else {
        alert("Too high. Try again.");
    }
}