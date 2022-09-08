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

console.log(triangle);