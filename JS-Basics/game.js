const actualNumber = Math.floor(Math.random() * 100);
let userGuess = prompt("Can you guess the number?");
let userAttempts = 1;
while (userGuess != actualNumber) {
    if (userGuess < actualNumber) {
        userGuess = prompt('More');
        userAttempts ++;
    } else if (userGuess > actualNumber) {
        userGuess = prompt('Less')
        userAttempts ++;
    }
}
if (userAttempts == 1) {
    alert('nice');
} else {
    alert('cool');
}

let attempts = 5; 
if (userGuess < actualNumber) {
    attempts = attempts-1;
} else if (userGuess > actualNumber) {
    attempts = attempts-1;
}

if (attempts < 1) {
    alert('Game Over');
    document.location.reload();
}