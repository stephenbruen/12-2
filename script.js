// function 
/*

var john = {
    name: 'John',
    yearOfBirth: 1990,
    jobs: 'teacher'
};

var Person = function(name, yearOfBirth, jobs) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.jobs = jobs;
}

Person.prototype.calculateAge = function() {
    console.log(2016 - this.yearOfBirth);
}


var john = new Person('John', 1990, 'teacher');

john.calculate();

var jane = new Person('Jane', 1995, 'teacher');
var mark = new Person('Mark', 1985, 'baller');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();
*/
// creating obejects object.create
/*
var personProto = {
    calculateAge: function() {
        console.log(2016 - this.yearOfbirth);
    }
};

var john = object.create(personProto);
john.name = 'John';
john.yearOfbirth = 1990;
john.job = 'teacher';

var jane = object.create(personProto, {
    name: {value: 'Jane'},
    yearOfbirth: {value: 1969},
    job: {value: 'dewsigner'}
});
*/

// primitives vs objects















