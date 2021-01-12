/*Straight off the bat we need to tell the computer that we want to keep score
of a couple of variables. We're going to declare them hereas global variables. */
let computerScore = '0';
let playerScore = '0';
let roundNumber = '0';
/*First we write a function that will return rock, paper or scissors. an easy way
to do this is to make an array and call it choices. an array naturally has an
index for each choice, in this case, rock = 0, paper = 1 and scissors = 2.

Then we want the computer to return an index number from this array. We can do
this by telling it to return a choice equal to a random number between 0 an 2,
we do that by returning a random number between 0.0 and 0.2 and then use
the math.floor function to turn that random number into an integer between 0 and
2*/
function computerPlay() {
	let choices = [`rock`,`paper`,`scissors`];
	return choices[Math.floor(Math.random() * choices.length)]
}

/*Now we're going to declare another function and inside it we want the user
to be prompted to enter a choice between Rock, Paper or Scissors. We want their
choice to always be in lowercase to make the compare function easy later. This
function should return Rock, Paper or Scissors in lowercase*/
 function playerPlay() {
 	let playerChoice = prompt(`Enter Rock, Paper or Scissors`)
    playerChoice = playerChoice.toLowerCase();
    return playerChoice;
 }
/*Now we gotta play the GAME. So we're going to make 2 variables, playerSelection
and computerSelection, they're going to store the variables we get when the player
returns a selection from the playerPlay function and the computers return from the
computerPlay function. We're then going to declare a result function and leave it
blank because fuck it we'll fill it in later. Then we're going to run an if statement
that'll compare the player and computer selection results and if the player wins
it'll increment the playerScore variable by one and copy a message into the result
variable that says the player won. if none of the win conditions are true, it'll tell
the player that they lost. boo.  */
 function playGame() {
 	let playerSelection = playerPlay();
 	let computerSelection = computerPlay();
 	let result = ``;

 	if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
 	(playerSelection == 'paper' && computerSelection == 'rock') ||
 	(playerSelection == 'scissors' && computerSelection == 'paper'))
    {
 		playerScore++;
 		result = `You Won.`}
 	else {computerScore++;
 		result = `You Lost.`}
 		return result;
 }
/* just sneaking this little guy in there, so uh, for when people dont feel like adding
after each 5 game round, this function will just return the winner by evaluating who
has the bigger score, if it's human, then it just prints "player", if it's the CPU, it'll
just print "computer". I'm gonna make this part of a backtick template string so it's cool
that it isn't any more verbose in what it returns, unlike my comments, amirite, wink woonk! */
 function whoWins() {
 	let winner = '';
 	if (computerScore > playerScore)
 		{winner = `Computer`;}
 	else if (computerScore < playerScore)
 		{winner = `Player`;}
 	return winner;
 }
/*Now this function is what we're going to do to execute 5 round of RPS. Basically we have
ourselves here a for loop, the first statement is the code it executes at the start of the
loop, the second statement is the condition to keep the loop going and the last statment runs
after each loop cycle has been completed. in this case we set the round to 0 first off, then
it'll check to see if the roundNumber is less than 5 on each go around, if it is, it'll run
the code inside the for block, then increment the round number by 1 after the code has been
ran. The code block itself announces the current round number, and then plays the rock paper
scissors game, the game will return whether the player won or lost after each game. after
the round is complete, the computer will display the score out of 5 games for the player
and the CPU. Then for the people who can't add it'll print who wins from the whoWins function
yeeaaahhhhhhhhhhh */
 function playRound () {
 	playerScore = 0;
 	computerScore = 0;
 	for (roundNumber =0; roundNumber < 5; roundNumber++) {
  		console.log(`round number ${roundNumber}`);
  		console.log(playGame());
 		}
 		console.log(`Player score ${playerScore}. ComputerScore ${computerScore}.`)
 		console.log(`${whoWins()} Wins!`)
 }
