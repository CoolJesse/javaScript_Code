/***************************** Function Constructor ********************************/
/**
let jesse = {
	name: 'Jesse',
	birthYear: 1982.
	job: 'bum'
};
**/

/**
let Person = function(name, birthYear, job){
	this.name = name;
	this.birthYear = birthYear;
	this.job = job;

	
	//this.calculateAge = function(){
		//let age = new Date().getFullYear() - this.birthYear;
		//console.log(this.name + " is " + age + " years old");
	//}
	
}

Person.prototype.calculateAge = function(){
	let age = new Date().getFullYear() - this.birthYear;
	console.log(this.name + " is " + age + " years old");
};

Person.prototype.lastName = 'Smith';

let jesse = new Person('Jesse', 1982, 'bum');
let jane = new Person('Jane', 1990, 'stunt double');
let mark = new Person('Mark', 1969, 'Ammunition Dealer'); 

jesse.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(jesse.name + " " + jesse.lastName);
console.log(jane.name + " " + jane.lastName);
console.log(mark.name + " " + mark.lastName);
**/

/******************************* Object.create *********************************/
/*
let personProto = {
	calculateAge: function(){
		let age = new Date().getFullYear() - this.birthYear;
		console.log(age);
	}
};

let jesse = Object.create(personProto);
jesse.name = 'Jesse';
jesse.birthYear = 1982;
jesse.job = 'bum';

let jane = Object.create(personProto,
	{
		name: { value: 'Jane'},
		birthYear: { value: 1990},
		job: { value: 'MMA Fighter'}
	});
*/
/************************** Primitives vs objects *******************************/
// Primatives //
/*
let a = 23;
let b = a;
a = 46;

console.log(a);
console.log(b);

// objects //
let obj1 = {
	name: 'Jesse',
	age: 38
};

let obj2 = obj1;
obj1.age = 69;

console.log(obj1.age);
console.log(obj2.age);

// Functions //
let age = 20;
let obj = {
	name: 'Guy',
	city: 'Seattle'
};

function change(x, y){
	x = 100;
	y.city = 'Reno';
}

change(age, obj);

console.log(age);
console.log(obj.city);
*/
/*************************** Passing Functions as Arguments **********************/
/*
let years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn){
	let arrRes = [];
	for(let i=0; i < arr.length; i++){
		arrRes.push(fn(arr[i]));
	}
	return arrRes;
}

function calculateAge(birthYear){
	return new Date().getFullYear() - birthYear;
}

function isFullAge(age){
	return age >= 18;
}

function maxHeartRate(age){

	if(age >= 18 && age <= 81)
		return Math.round(206.9 - (0.67 * age));

	else
		return -1;
}
let ages = arrayCalc(years, calculateAge);
let isAdult = arrayCalc(ages, isFullAge);
let rates = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(isAdult);
console.log(rates);
*/
/*************************** Fuctions Returning Functions **************************/
/*
function interviewQuestion(job){
	if(job === 'designer'){
		return function(name){
			console.log(name + ', can you please shut up!');
		}
	}
	else if(job === 'teacher'){
		return function(name){
			console.log(name + ' what the hell is your problem?');
		}
	}
	else{
		return function(name){
			console.log(name + ' what do you want?');
		}
	}
}

let designerQuestion = interviewQuestion('designer');
designerQuestion('Jesse');

let teacherQuestion = interviewQuestion('teacher');
teacherQuestion('Timmy');

let otherQuestion = interviewQuestion('Bigfoot Huner');
otherQuestion('Dick');

designerQuestion('Billy');
teacherQuestion('Sara');
otherQuestion('Dudly');

interviewQuestion('designer')('Jesse');
interviewQuestion('teacher')('Mortomer');
interviewQuestion('Doctor')('Heywood');
interviewQuestion('plumber')('Mike Hawk');
interviewQuestion('boxer')('Tony Bologna');
interviewQuestion('designer')('Patty Herst');

*/
/****************** Immediately Invoked Function Expressions **************************/
/*
function game(){
	let score = Math.random() * 10;
	console.log(score >= 5);
}
game();

///////////////////// IIFy //////////////////
(function (){
	let score = Math.random() * 10;
	console.log(score >= 5);
})();

(function (goodluck){
	let score = Math.random() * 10;
	console.log(score >= 5 - goodluck);
})(5);
*/
/*********************************** Closures *****************************************/
/*
function retirement(retirementAge){
	
	let a = ' years left until retirement.';

	return function(yearOfBirth){
		let age = new Date().getFullYear() - yearOfBirth;
		console.log(retirementAge - age + a);
	}
}

let retirementUS = retirement(66);
let retirementGermany = retirement(65);
let retirementIceland = retirement(67);

retirementUS(1982);
retirementGermany(1982);
retirementIceland(1982);

//retirement(65)(1982);

function interviewQuestion(job){

	let sentence;

	switch(job){
		case 'designer':
			sentence = ' can you explain what UX is?';
			break;

		case 'teacher':
			sentence = ' what subject do you teach?';
			break;

		default:
			sentence = ' tell me more about your job.'
	}

	return function(name){
		console.log(name + sentence);
	}
}

interviewQuestion('teacher')('Wolfman');
interviewQuestion('Doctor')('Dracula');
interviewQuestion('Archealogist')('The Mummy');
interviewQuestion('designer')('human centipede');
interviewQuestion('teacher')('Mrs Tingle');
*/
/*************************** Bind, call, and apply ************************************/

let jesse = {
	name: 'Jesse',
	age: 38,
	job: 'bum',
	presentation: function(style, timeOfDay){

		if(style === 'formal'){
			console.log('Good ' + timeOfDay + ', ladies and gentlemen! I\'m ' 
			+ this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
		}
		else if(style === 'friendly'){
			console.log('Hey, what\'s up? I\'m ' 
			+ this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.'
			+ ' Have a nice ' + timeOfDay + '.');
		}
		else{
			console.log('Hello, I\'m ' 
			+ this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.'
			+ ' Have a nice ' + timeOfDay + '.');	
		}
	}
};

let dracula = {
	name: 'Vladamir',
	age: 250,
	job: 'bloodsucker'
};

jesse.presentation('formal', 'morning');

// call method //
jesse.presentation.call(dracula, 'scary', 'evening');

// apply method //
//jesse.presentation.apply(dracula, ['scary, evening']);

// bind method //
let jesseFriendly = jesse.presentation.bind(jesse, 'friendly');

jesseFriendly('morning');
jesseFriendly('evening');

let draculaFormal = jesse.presentation.bind(dracula, 'formal');
draculaFormal('evening');

let years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn){
	let arrRes = [];
	for(let i=0; i < arr.length; i++){
		arrRes.push(fn(arr[i]));
	}
	return arrRes;
}

function calculateAge(birthYear){
	return new Date().getFullYear() - birthYear;
}

function isFullAge(limit, age){
	return age >= limit;
}

let ages = arrayCalc(years, calculateAge);

let fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);