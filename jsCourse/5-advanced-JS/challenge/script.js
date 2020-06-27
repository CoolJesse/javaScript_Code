/*********************************** Challenge *********************************************/
/** *
 ******** Let's build a fun quiz game in the console **********

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

 7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that
 all your code is private and doesn't interfere with the other programmers code. (Hint: we learned a 
	technique to do exactly that.)
*/

function Question(theQuestion, answer){

	return function(){

		console.log(theQuestion);

		let response = prompt(theQuestion + ' yes: 1, no: 2, maybe: 3');

		while(response < 1 || response > 3){
			response = prompt(response + ": Illegal answer, please try again. Yes = 1, no = 2, maybe = 3.");
		}

		console.log('answer: ' + response);

		if(response == answer)
			console.log('Correct!');

		else
			console.log('Wrong stupid!');
	}
}

let questArray = [];

let dogQuestion = Question('Do you like dogs?', 1);
let catQuestion = Question('Do you like cats?', 1);
let fishQuestion = Question('Do you like fish?', 2);
let snakeQuestion = Question('Do you like snakes?', 3);


questArray.push(dogQuestion);
questArray.push(catQuestion);
questArray.push(fishQuestion);
questArray.push(snakeQuestion);

let randomChoice = Math.floor(Math.random() * questArray.length);
questArray[randomChoice](1);
3.