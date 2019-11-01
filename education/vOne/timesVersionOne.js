var userScore = 0;
var answerOne = 3*3;
var answerTwo = 5*6;
var answerThree = 7*9;
var answerFour = 4*8;
var answerFive = 9*6;
var percentageScore = 0;
var healthBar = 100; 

function startGame() 
	{
    confirm("Mussta's Maths Quiz");
	var start = prompt("Type 'start' to begin.");
      if (start == "start")
          {
          questionOne();
          }
      else {
        console.log("Goodbye")
      }
    }

function questionOne() 
	{
var a = prompt("3 times 3 equals? ");
	if (a == answerOne) 
		{
      userScore += 1;
	  confirm("You are correct! The answer was " + answerOne + ". Your score is now: " + userScore + ". Your health is now: " + healthBar + "points.");
      questionTwo();
        }
    else 
    	{
          healthBar = healthBar-10;
          confirm("You were wrong. The answer was " + answerOne + ". Your score is now: " + userScore + ". Your health is now: " + healthBar + "points.");
      questionTwo();
    	}
	}

function questionTwo() 
	{
var b = prompt("5 times 6 equals? ");
	if (b == answerTwo) 
    	{
      userScore += 1;
	  confirm("You are correct! The answer was " + answerTwo + ". Your score is now: " + userScore + ". Your health is now: " + healthBar + "points.");
      questionThree();
        }
    else 
    	{
          healthBar = healthBar-10;
      confirm("You were wrong. The answer was " + answerTwo + ". Your score is now: " + userScore + ". Your health is now: " + healthBar + "points.");
      questionThree();
 	    }  
	}

function questionThree() 
	{
var c = prompt("7 times 9 equals? ")
	if (c == answerThree)
      	{
        userScore += 1;
        confirm("You are correct. The answer was " + answerThree + ". Your score is now: " + userScore + ". Your health is now: " + healthBar + "points.")
        questionFour
();
      	}
    else 
    	{
          healthBar = healthBar-10;
      	confirm("You were wrong.  The answer was " + answerThree + ". Your score is now: " + userScore + ". Your health is now: " + healthBar + "points.")
        questionFour();
    	}  
	}

function questionFour () 
	{
var d = prompt("4 times 8 equals? ")
	if (d == answerFour)
      	{
        userScore += 1;
        confirm("You are correct. The answer was " + answerFour
 + ". Your score is now: " + userScore + ". Your health is now: " + healthBar + "points.")
        questionFive();
      	}
    else 
    	{
          healthBar = healthBar-10;
      	confirm("You were wrong.  The answer was " + answerFour + ". Your score is now: " + userScore + ". Your health is now: " + healthBar + "points.")
        questionFive();
    	}  
	}

function questionFive() 
	{
var e = prompt("9 times 6 equals? ")
	if (e == answerFive)
      	{
        userScore += 1;
        confirm("You are correct. The answer was " + answerFive + ". Your score is now: " + userScore + ". Your health is now: " + healthBar + "points.")
        endGame();
      	}
    else 
    	{
          healthBar = healthBar-10;
      	confirm("You were wrong.  The answer was " + answerFive + ". Your score is now: " + userScore + ". Your health is now: " + healthBar + "points.")
        endGame();
    	}  
	}

function endGame()
	{
      percentageScore = Math.round((userScore/5)*100)
    confirm("You have completed all of the maths questions. Your score is: " + userScore + " out of 5. That is " + percentageScore + "%.  Also your remaining health is: " + healthBar)
      if (percentageScore > 50) 
        {
        confirm("Well done, you have passed the maths quiz!")
        document.getElementById("display").innerHTML= "Thanks for playing!";
        }
      else
        {
        confirm("Unfortunately you have not passed the quiz today.  Please try again another time.")  
        
        document.getElementById("display").innerHTML= "Thanks for playing";
        }
   	}
