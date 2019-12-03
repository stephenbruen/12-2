// Section 2 Javascript Language Basics (The Complete JavaScript Course 2020: Build Real Projects!)

var markMass = 78; // kg
var markHeight = 1.69; // meters

var johnMass = 92;
var johnHeight = 1.95;

var bmiMark = markMass / (markHeight * markHeight);
var bmiJohn = johnMass / (johnHeight * johnHeight);

var markVsJohn = bmiMark > bmiJohn;
console.log('Is mark\'s Bmi higher than John\'s + markVsJohn);

// if else statements

var firstName = 'John';
var civilStatus = 'Single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}

var isMarried = false;

// boolean logic
var firstName = 'John';
var age = 16;

if (age < 13) {
    console.log(firstName + ' is a boy.');
} else if ( >= 13 && age < 20) {
    console.log(firstName + 'is a teenager.');
} else {
    console.log(firstName + 'is a MAN!');
}

// AND && => true if all are true
// OR || => true if one is true
// NOT ! => inverts true/false value

// The ternary operator and Switch Statements
var firstName = 'John';
var age = 16;

age>= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + 'drinks juice');
var drink = age >= 18 ? 'beer' : 'juice';

var job = 'teacher';
switch(job) {
    case 'teacher':
    console.log(firstName + ' teaches kids how to code.');
    break;
    case 'driver':
    console.log(firstName + 'drives people around');
    break;
    default:
        console.log(firstName + 'does something i guess');
}
// code challenge 2

var scoreJohn = (89 + 120 + 103) / 3;
var scoreMike = (116 + 94 +123) / 3;

if (scoreJohn > scoreMike) {
    console.log('john\'s team wins with ' + scoreJohn + 'points');
} else if (scoreMike > scoreJohn) {
    console.log('Mike\'s team wins with' + scoreJohn + 'points' );
} else {
    console.log('draw');
}

// functions

function calculateAge(birthYear) {
    return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageStephen = calculateAge(1995);
var ageChelsea = calculateAge(1997);
console.log(ageJohn);

function yearsUntilRetirment(year, firstName);
{
    var age = calculateAge(year);
    var reitrement = 65 - age;
    console.log( firstName + ' retires in ' + reitrement + ' years.');
} else {
    console.log(firstName + 'is already done working!');
}

yearsUntilRetirment(1990, John);

// arrays

var names = ['John', 'Mark', 'Jake']
var years = new Array(1990, 1992, 1994);
// zero basecd 0,1,2,3 instead of 1,2,3
console.log(names[0]);
console.log(names.length);

names[1] = 'Ben';

names[5] = 'Mary';

var john = ['John', 'Smith', 1990, 'teacher', false];

john.push('blue');

// coding challenge 3

 function tipCalculator(bill) {
     var percentage;
     if (bill < 50) {
         percentage =.2;
     } else if (bill >= 50 && bill < 200) {
         percentage = .15;
     } else {
         percentage =.1;
     }
     return percentage * bill;
 }

var bill = [124, 48, 268];
var tips = [tipCalculator(bills[0]),
            tipCalculator(bill[1]),
            tipCalculator(bill[3]);
var finalValues = [bills[0] + tips[0],
                bills [1] + tips[1]
                bills[2] + tips [3]];

// objects and properties
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family [ "jane", 'mark', 'tim'],
    job: 'teacher',
    isMarried: false
};
console.log(john.firstName);
































