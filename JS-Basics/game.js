const actualNumber = Math.floor(Math.random() * 100);
let userAttempts = 1;
let userGuess = prompt("Can you guess the number?");
while (userGuess != actualNumber) {
    alert ("Guess number: " + userAttempts);
    if (userGuess < actualNumber) {
        userGuess = prompt('More');
        userAttempts += 1;
    } else if (userGuess > actualNumber) {
        userGuess = prompt('Less')
        userAttempts += 1;
    } else if (userAttempts==actualNumber) {
        alert ("you won")
    } else {
        alert ("you lost")
    }


    userAttempts ++;
    if (userAttempts > 5) {
        alert ("you lost")
    }
}

function calcAge(age) {
	let ageInDays = (age*365)>=0 && typeof(age*365) == 'number' ? (age*365) : []
	return ageInDays
}

function squared(a) {
	return a * a
}