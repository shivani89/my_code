var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var resetButton = document.getElementById("reset");
var h1 = document.querySelector("h1");
var p1Display = document.getElementById("player1");
var p2Display = document.getElementById("player2");
var input = document.querySelector("input");
var winningScoreDisplay = document.querySelector("p span");
var p1Score = 0;
var p2Score = 0;
var winningScore = 0;
var gameOver = false;

p1Button.addEventListener("click", function(){
	if(!gameOver)
	{
		p1Score++;
		if(p1Score === winningScore)
		{
			p1Display.classList.add("winner");
			gameOver = true;
		}
	
	p1Display.textContent = p1Score;
	
	}
});

p2Button.addEventListener("click", function(){
	if(!gameOver)
	{
	p2Score++;
		if(p2Score === winningScore){
			p2Display.classList.add("winner");
			gameOver = true;
		}
	p2Display.textContent = p2Score;
	}
});

resetButton.addEventListener("click", function(){
	reset();

});

//here we use the change event rather than the click event as we have to change the input value frquently
input.addEventListener("change", function(){

	// we can also use the this keyword instead of input
	winningScoreDisplay.textContent = input.value;// .value gives the value inside the input var.
	winningScore = Number(input.value);
	reset();
});


//to change the winning score half way thru the game and also reset the scorese back to zero we have to run the reset even in input function,so 
// here we have our reset func whihc we have to use @ 2 places
function reset(){

	p1Display.textContent = 0;
	p2Display.textContent = 0;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
	// we set them back to zero so that wen game over = false; they will start again from0 otherwise they start from the last winningscore set.
	p1Score = 0;
	p2Score = 0;
	gameOver = false;
}