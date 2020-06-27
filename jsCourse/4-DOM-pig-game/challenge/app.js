/** GAME RULES: ****************************************************************************************************************************/
 /*
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/
/*******************************************************************************************************************************************/
/** THE 3 CHALLENGES ***********************************************************************************************************************/
/**
 * Change the game to follow these rules:
 * 
 * 1. A player looses their ENTIRE score when they roll two 6 in a row. After that, it's the next player's turn.
 * (Hint: always save the previous dice roll in a seperate variable.)
 * 2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100.
 * (Hint: you can read this value with the .value property in JavaScript. Use google.)
 * 3. Add another dice to the game, so there are two dice now. The player looses their current score when one die rolls a 1.
 * (Hint: you will need CSS to position the second die, so take a look at the CSS code for the first one.)
 ******************************************************************************************************************************************/

/********************************** GETTER *****************************************************/
/** document.querySelector('#current-' + activePlayer).textContent = dice;					***/
/** document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>'; **/
/********************************************************************************************/

/*************************** SETTER ***************************/
/** let x = document.querySelector('#score-0').textContent; **/
/** console.log(x); 									   **/
/***********************************************************/

let scores, roundScore, activePlayer, gamePlaying, previous1, previous2;
let winningScore; //=100;
init();

document.querySelector('.btn-roll').addEventListener('click', function() {

	if(gamePlaying == true){
		// 1. Random Number
		let dice = Math.floor(Math.random() * 6) + 1;
		let dice2 = Math.floor(Math.random() * 6) + 1;

		// 2. Display the results
		let diceDOM = document.querySelector('.dice');
		let diceDOM2 = document.querySelector('.dice2');

		diceDOM.style.display = 'block';
		diceDOM2.style.display = 'block';

		diceDOM.src='dice-' + dice +'.png';
		diceDOM2.src='dice-' + dice2 +'.png';

		// 3. Update the round score IF the rolled number was not a 1

		if(dice !== 1 && dice2 !== 1){
			if( (previous1 === 6 && dice === 6) || (previous2 === 6 && dice2 === 6) ){
				//Next Player
				nextPlayer();
				console.log("Two 6's");

			}
			else{
				//Add score
				roundScore += (dice + dice2);
				previous1 = dice;
				previous2 = dice2;
				document.querySelector('#current-' + activePlayer).textContent = roundScore;		
			}
		}

		else{
			if(dice === 1)
				console.log('dice: ' + dice);

			else
				console.log('dice2: ' + dice2);
			//Next Player
			nextPlayer();
		}
	}
});

/** "btn-hold" add score of current player to their total score, checks if they won, and switched to next player **/
document.querySelector('.btn-hold').addEventListener('click', function(){

	if(gamePlaying){
		// Add current score to global score //
		scores[activePlayer] += roundScore;

		// Update UI //
		document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

		// Check if player won the game //
		if(scores[activePlayer] >= winningScore){
			document.querySelector('#name-' + activePlayer).textContent = 'Winner';
			document.querySelector('.dice').style.display = 'none';
			document.querySelector('.dice2').style.display = 'none';
			document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
			document.querySelector('.player-' + activePlayer + '-panel').classList.remove('winner');
			gamePlaying = false;
		}
		// Next Player //
		else{
			nextPlayer()
		}
	}
});
/********************************************************************************************************/
/************************* "btn-new" button starts new game when clicked ********************************/
document.querySelector('.btn-new').addEventListener('click', init);
/********************************************************************************************************/

/************************* Function to switch players and zero out values *******************************/
function nextPlayer() {
	activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
	roundScore = 0;
	previous1 = 0;

	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';

	document.querySelector('.player-0-panel').classList.toggle('active');
	document.querySelector('.player-1-panel').classList.toggle('active');

	//document.querySelector('.player-0-panel').classList.remove('active');
	//document.querySelector('.player-1-panel').classList.add('active');

	document.querySelector('.dice').style.display = 'none';
	document.querySelector('.dice2').style.display = 'none';
}
/******************************************************************************************************/
/************************************ Initialization Function *****************************************/
function init(){
	// Zero out all values //
	scores = [0,0];
	activePlayer = 0;
	roundScore = 0;
	gamePlaying = true;
	previous1 = 0;
	previous2 = 0;
	////////////////////////

	/**Get winning score from user, or set to 100 if no score chosen **/
	winningScore = document.getElementById("score").value;

	// undefined, 0, null, or "" are all coerced to false
	// anything else is coerced to true

	//if(typeof winningScore === undefined)
	if(!winningScore || winningScore == 0)
		winningScore = 100;

	console.log("Winning Score: " + winningScore);
	/******************************************************************/

	document.getElementById('score-0').textContent = '0';
	document.getElementById('score-1').textContent = '0';

	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';

	document.getElementById('name-0').textContent = 'Player 1';
	document.getElementById('name-1').textContent = 'Player 2';

	document.querySelector('.player-0-panel').classList.remove('winner');	
	document.querySelector('.player-1-panel').classList.remove('winner');

	document.querySelector('.player-0-panel').classList.remove('active');
	document.querySelector('.player-1-panel').classList.remove('active');	
	
	document.querySelector('.player-0-panel').classList.add('active');
}
/*******************************************************************************************************/
