/*********** Variables and data types *******************/
/**
let firstName = 'Sasquatch';
console.log(firstName);

firstName = 'Bigfoot';
console.log(firstName);

let age = 100;
console.log(age);

let gender = undefined;
console.log(gender);

let sex = null;
console.log(sex);

let humanoid = true;
console.log(humanoid);
**/

/****** Variables mutations and type coercion **********/
/**
let firstName = 'Bigfoot';
let age = 100;
let gender = undefined;

console.log(firstName + ' ' + age + ' ' + gender);

alert('You are gonna die!')

let answer = prompt('What is your problem?');
console.log(answer);
**/
/***************** Basic Operators **********************/
/**
let currentYear = 2020;
let age = prompt("How old are you, be honest.");
let ageOfRetirement = 65;

console.log('You were born in ' + (currentYear - age));

console.log(typeof age);
**/
/**************** Operator Precedence *******************/
/*
let now = 2020;
let birthYear = 1982;
let legalAge = 18;

let isLegal = now - birthYear >= legalAge;
console.log("You are legal " + isLegal );

let ageJesse = now - birthYear;
let ageBigFoot = 100;
let average = (ageBigFoot + ageJesse) / 2;
console.log(average);

let x, y;
x = y = (3 + 5) * 4 - 6;
console.log(x, y);

console.log(x += 10);
console.log(++x);
console.log(x++);
console.log(x);
*/
/******************* If/Else statements ***********************/
/*
let firstName = 'Jesse';
let marriageStatus = 'single';

let isMarried = false;

//if(marriageStatus === 'married'){
if(isMarried){
	console.log(firstName + " is married.");
}

else{
	console.log(firstName + " is single.");
}

let markMass = 72.57;
let markHeight = 1.73;

let johnMass = 81.65;
let johnHeight = 1.85;

let markBMI = markMass / Math.pow(markHeight, 2);
let johnBMI = johnMass / johnHeight * johnHeight;

if(markMass > johnMass)
	console.log("Mark is fatter than John!");

else if (markMass === johnMass) {
	console.log("Mark and John are the same weight.");
	
} else {
	console.log("John is fatter than Mark!");
	
}
*/
/*************** The Ternary Operator and switch statement ********************/
/*
let firstName = 'Jesse';
let age = 38;

age >= 21 ? console.log(firstName + " drinks beer") : console.log(firstName + " drinks juice.");

var drink = age >= 21 ? 'beer' : 'juice';

let job = 'Cop';

switch(job){
	case 'Goon':
		console.log(firstName + " is a thug.");
		break;

	case 'Thief':
		console.log(firstName + ' steals things');
		break;

	case 'Cop':
		console.log(firstName + " is a pig!");
		break;

	default:
		console.log(firstName + " is a honest person.");
}

switch(true){
	case (age < 18):
		console.log(firstName + " is a minor!");
		break;

	case (age >= 18 && age < 21):
		console.log(firstName + " is old enough to bone but not to drink.");
		break;

	case (age >= 21 && age < 65):
		console.log(firstName + " is in the prime of their life.");
		break;

	default:
		console.log(firstName + " is old!");

}
*/
/****** Truthy and Falsy Values and Equality Operator *********/
// Falsy values considered false in an if/else statement such as:
// undefined, 0, null, and NaN.
// Truthy: all values considered true in if/else statement.
/*
let height;

if(height)
	console.log("Variable is defined.");
else
	console.log("Variable undefined.");

height = 100;

if(height)
console.log("Variable is defined.");
else
console.log("Variable undefined.");

height = 0;

if(height)
console.log("Variable is defined.");
else
console.log("Variable undefined.");

height = 100;

if(height || height === 0)
console.log("Variable is defined.");
else
console.log("Variable undefined.");

height = '';

if(height)
console.log("Variable is defined.");
else
console.log("Variable undefined.");

height = 100;

if(height === 100)
console.log("Height is equal to 100");
else
console.log("Height is not equal to 100.");

if(height == '100')
	console.log("Type coercion equality");
*/
/****************************** Functions *************************/
/*
function calculateAge(birthYear, thisYear){
	return thisYear - birthYear;
}

console.log("You are " + calculateAge(1982, 2020) + " years old.");

function yearsUntilRetirement(birthYear, currentYear, firstName){
	let age = calculateAge(birthYear, currentYear);
	let retirementAge = 65;

	console.log(firstName + " you have " + (retirementAge - age) 
	+ " years left until you can retire.");

}

let date = new Date();
let year = date.getFullYear();

yearsUntilRetirement(1982, year, 'Jesse');
*/
/************ Function Statements and Expressions ***************/
/*
// function declaration //
// function profession(job, firstName){}

// function expression //
let profession = function(job, firstName){
	switch(job){
		case 'cop':
			return fistName + ' is a pig';

		case 'thief':
			return firstName + ' steals some shit';

		default:
			return fistName + ' you have an honest job';
	}
}
	
console.log(profession('thief', 'Jesse'));
*/
/******************************** Arrays ******************************/
/*
let creatures = ['Bigfoot', 'Yeti', 'El Chupacabra'];
let monsters= new Array('Wolfman', 'Mummy', 'Dracula');

console.log("creatures: " + creatures);
console.log(creatures.length);

console.log("monsters: " + monsters);
console.log(monsters.length);

monsters[3] = "Frankenstein\'s Monster";
console.log('monsters: ' + monsters);
console.log(monsters.length);

//add element to end of array
creatures.push('Nessi');
console.log('creatures: ' + creatures);

//add element to beginning of array
creatures.unshift("Jersey Devil");
console.log('creatures: ' + creatures);

//remove element from element from end
creatures.pop()
console.log('creatures: ' + creatures);

//remove element from beginning of list
creatures.shift()
console.log('creatures: ' + creatures);

//return position of argument
console.log(creatures.indexOf('Yeti'));
*/
/************************* Objects and Properties **********************/
/*
let jesse = {
	firstName: 'Jesse',
	lastName: 'Olson',
	birthYear: 1982,
	family: ['Tamela', 'Mark', 'Erik'],
	job: 'unemployed',
	isMarried: false
};

console.log(jesse);
console.log(jesse.family)
console.log(jesse['family']);
console.log(jesse['birthYear']);
let x = 'birthYear';
console.log(jesse[x]);


jesse.job = 'bum';
jesse['isMarried'] = true;
console.log(jesse);

let bob = new Object();
bob.name = 'Bob';
bob.birthYear = 1969;
bob['lastName'] = 'Smith';
console.log(bob);
*/
/****************** Objects and Methods ***********************/
/*
let jesse = {
	firstName: 'Jesse',
	lastName: 'Olson',
	birthYear: 1982,
	family: ['Tamela', 'Mark', 'Erik'],
	job: 'unemployed',
	isMarried: false,

	calcAge: function(){
		this.age = new Date().getFullYear() - this.birthYear;
	}
};

jesse.calcAge();
console.log(jesse);
*/
/******************* Loops and Iteration **********************/
for(let i=0; i < 10; i++){
	console.log(i + 1);
}

let monsters= new Array('Wolfman', 'Mummy', 'Dracula', 'Frankenstein');

for(let i=0; i < monsters.length; i++){
	console.log(monsters[i]);
}

let i= (monsters.length -1);
while(i >=0 ){
	console.log(monsters[i]);
	i--;
}

for(let i=0; i < monsters.length; i++){
	if(typeof monsters[i] !== 'string') continue;

	console.log(monsters[i]);
}