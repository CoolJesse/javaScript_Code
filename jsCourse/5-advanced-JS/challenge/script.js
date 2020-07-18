/************************************************ Challenge *******************************************************/
/******************************* Let's build a fun quiz game in the console ****************************************
 1. Build a function constructor called Question to describe a question. A question should include:
	a) question itself
	b) the answers from which the player can choose the correct one (choose an adequate data structure 
	here, array, objec, etc.)
	c) correct answer (I would use a number for this)

 2. Create a couple of questions using the constructor

 3. Store them all inside an array

 4. Select one random question and log it on the console. together with the possible answers (each 
	question should have a number). (Hint: write a method for the Question objects for this task).

 5. Use the 'prompt' function to ask the user for the correct answer. The user should input the 
 number of the correct answer as you display it on Task 4.

 6. Check if the answer is correct and print to the console whether the answer is correct or not. 
 (Hint: write another method for this).

 7. After you display the results, display the next random question, so that the game never ends (Hint: write a function
 for this and call it right after displaying the results.)

 8. Be careful: after Task 7, the game never ends, So include the option to quit the game if the user writes 'exit'/ or
 in my this case -1 instead of the answer. In this case don't call the function from step 7.

 9. Track the user's score to make the game more fun. Each time the user answers write add a point to the score.

 10. Display the score in the console. Use another method for this.
*********************************************************************************************************************/
/********************************************** Function Constructor ************************************************/
//let Question = function(theQuestion, correctAnswer, ...answerArray){
let Question = function(theQuestion, correctAnswer, answerArray){

		this.theQuestion = theQuestion;
		this.correctAnswer = correctAnswer;
		this.possibleAnswers = [answerArray.length];
		this.allAnswers = "";

		
		for(let i=0; i < answerArray.length; i++){
			this.possibleAnswers[i] = answerArray[i];
			this.allAnswers += answerArray[i];
		}		
}
/********************************************************************************************************************/
/********************************************** Ask Question Method *************************************************/
Question.prototype.askQuestion = function(){

	console.log(this.theQuestion);

	for(let i=0; i < this.possibleAnswers.length; i++){
		console.log(this.possibleAnswers[i]);
	}

	let response = prompt(this.theQuestion + ' ' + this.allAnswers);

	while(response > this.possibleAnswers.length){
		response = prompt(response + ': Illegal answer, please try again. ' + this.allAnswers);
	}

	// if user wishes to exit game
	if(response < 1)
		return -1;

	// if user answers correctly
	if(response == this.correctAnswer){ // we use == instead of === to convert string answer to int
		console.log('Correct!');
		return 1;
	}

	// is user answers incorrectly
	else{
		console.log('Wrong answer stupid!');
		return 0;
	}
}
/********************************************************************************************************************/
/************************************************ Score keeping closure *********************************************/
function score(){
	let sc = 0;
	return function(answer){
		if(answer === 1)
			sc++;

		return sc;
	}
}
/********************************************************************************************************************/
/************************************************ Main body of program **********************************************/
let questArray = [];

// question #1 //
let theQuestion = 'Do you like dogs?';
let tempArray = ['1: yes ', '2: no ', '3: maybe ', '-1: exit'];
let correctAnswer = 1;
questArray.push(new Question(theQuestion, correctAnswer, tempArray));

// question #2 //
theQuestion = 'What is your favorite band?';
tempArray = ['1: The Beatles ', '2: The Rolling Stones ', '3: The Beach Boys ', '4: Elvis ', '-1: exit'];
correctAnswer = 4;
questArray.push(new Question(theQuestion, correctAnswer, tempArray));

// question #3 //
theQuestion = 'What is the closest planet to the sun?';
tempArray = ['1: Mercury ', '2: Venus ', '3: Earth ', '4: Mars ', '5: Jupiter ', '6: Saturn ', '7: Uranus ', '8: Neptune ', '-1: exit'];
correctAnswer = 1;
questArray.push(new Question(theQuestion, correctAnswer, tempArray));

// question #4 //
theQuestion = 'What would you like to eat?';
tempArray = ['1: Tacos ', '2: Spaghetti ', '3: General Tsao Chicken ', '4: Steak ', '5: Hot Dogs ', '6: Fried Chicken ', '-1: exit'];
correctAnswer = 2;
questArray.push(new Question(theQuestion, correctAnswer, tempArray));

let loop = true;
let result = 0; 
let userScore = score();

while(loop){
	let randomChoice = Math.floor(Math.random() * questArray.length);
	result = questArray[randomChoice].askQuestion();

	if(result < 0) break;
	
	//userScore += result;
	console.log(userScore(result));
	console.log('--------------------------------------------');
}

console.log("Your score is: " + userScore(0));
