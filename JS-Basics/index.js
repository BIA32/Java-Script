//this is my first java script code
console.log("Hello World");
console.log(name);

/*
Cannot be a reserved keyword
Should be meaningful
Cannot start with a number (1name)
Cannot contain a space or hyphon (-)
Are case-sensitive
*/

let lastName = "Aziz";

let interestRate = 0.3;
interestRate = 1;
console.log(interestRate);

let isApproved = false;
let firstName = undefined;
let selectedColor = null;
//Bracket Notation
let person= {
    name: 'Imran',
    age: 15,
};
console.log(person);

person,name = 'Imran2';
person['name'] = 'Imran3';

let selection = 'name';
console.log(person.name);

let selectedColors = ['red', 'blue'];
selectedColors[2] = 1;
console.log(selectedColors.length)

function bestProgrammer(name) {
    console.log(name + ' is the best programmer')
};
bestProgrammer('Imran')

function square(number) {
    return number = number;
}

console.log(square(2));

function triangle(base, height) {
    return((base*height)/2);
}

console.log(triangle(2));

for (let i = 0; i < 5; i++) {
    console.log("I am the best programmer in the world, and nobody can compare to me");
}

for(let i = 0; i <= 100; i++) {
    console.log(i);
}

function power(base, exponent) {
    let result = 1
    for(let i = 0; i < exponent; i++){
        result=result*base
    }
    return result
}

console.log(power(2, 4));

function addNumbers(num1, num2) {
    let  total = 0
    for (let i=num1; i <=num2; i++) {
        total += i
    }
    return(total)
}

console.log(addNumbers(4, 8));

console.log(addNumbers(5, 6));

let counter=1;
while (counter<101) {
    console.log(counter)
    counter++
}

for (let i=1; i<101 ; i++) {
    console.log(i)
}

let password = 'Imran';
let passwordEntry = prompt('Enter your password');
while (passwordEntry !== password) {
    passwordEntry = prompt('Enter your password');
}
let username = prompt('Enter your name?');
alert('Welcome ' + username + ' To Your Website');

let hour = 10;

if (hour >= 6 && hour < 12) {
    console.log('Good Morning!')
}
else if (hour >= 12 && hour < 17) {
    console.log('Good Afternoon!') 
}
else if (hour >= 17 && hour < 20) 
    console.log('Good Evening!')
else
    console.log('Good Night!')

let userAge = prompt('What is your age?');
if (userAge <= 5) {
    alert('too young')
} else if (userAge <= 10) {
    alert('Tu eres growing up')
} else if (userAge <= 18) {
    alert('you are un teenager')
} else if (userAge <= 50) {
    alert('you are a grown adult') 
} else if (userAge <= 60) {
    alert('You are becoming elderly bruv')
} else if (userAge <= 80) {
    alert('Tu eres too old')
} else {
    alert('way too old')
}