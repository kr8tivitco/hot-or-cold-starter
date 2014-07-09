
$(document).ready(function(){

////////////////Global Variable Initialization////////////////////////////////
	var guessCount =0;
	var guess =0;
	var userGuess =0;
	var randNum =0;
/////////////////////////////////////////////////////////////////////////////////////		

		
////////////////Play Game when user guesses a number////////////////////////////////
	$('#guessButton').click(playGame);
		
		function playGame() {	

		//if (($.isNumeric( $('#guess').val() )) && (userGuess >0) && (userGuess < 101)) {
		//if (!isNaN('#userGuess')) {	

			guess = $('#userGuess').val();
			userGuess = +guess;
			
		if (($.isNumeric( $('#userGuess').val() )) && (userGuess >0) && (userGuess < 101)) {
			
			guessCount++;

			//alert("User Guess Is: " + userGuess + "  Guess Count Is: " + guessCount);
			$("#count").html(guessCount);
			userGuessFunc(userGuess, randNum);

			$('#guessList'). append('<li class="appendLiItem">' + userGuess + '</li>');
			
		} else {
			$("#feedback").html("Enter a NUMBER between 1-100");
			
			$('#guessForm')[0].reset();
		}

			return false; // stops page from automatically reloading when #guessButton selected 
						//Use the below link  as a reference
						//http://stackoverflow.com/questions/1878264/how-do-i-make-an-html-button-not-reload-the-page
	}
/////////////////////////////////////////////////////////////////////////////////////			

	
////////////////Clear ALL values to start a newGame when .new Button selected///////////////////////////////////
	$('.new').click(newGame);
	
		function newGame () {

			//$('#userGuess').val("");
			guessCount = 0;
			$('#guessForm')[0].reset();
			$("ul").empty();
			$("#feedback").html("Make your Guess!");
			$("#count").html("0");
			randNumFunc();
			

			return false;
		}
/////////////////////////////////////////////////////////////////////////////////////	
		
////////////////randNumFunc generates random number between 1-100////////////////////
	var randNumFunc =function () {//randomIntFromInterval()
	
    	var minNum  = 1;
    	var maxNum = 100;

    	randNum = Math.floor(Math.random()*(maxNum-minNum+1)+minNum);
    return randNum;
	}
/////////////////////////////////////////////////////////////////////////////////////
	
	randNumFunc();


////////////////userGuessFunc determines if user is Hot|| Cold /////////////////////
	var userGuessFunc =function (arg1, arg2) {
		//alert('rand number is: ' + randNum);
		var guessCalc = +(Math.abs(arg2 - arg1));
		

		if (guessCalc > 50) {
			//alert(userGuess + ' - ' + randNum + ' = ' + (userGuess - randNum));
			$("#feedback").html("You're ICE Cold");
		
		} else if ((guessCalc <= 50) && (guessCalc > 30)) {
			$("#feedback").html("You're Cold");

		} else if ((guessCalc <= 30) && (guessCalc > 20)) {
			$("#feedback").html("You're Warm");

		} else if ((guessCalc <= 20) && (guessCalc > 10)) {
			$("#feedback").html("You're Hot");

		} else if ((guessCalc <= 10) && (guessCalc > 5)) {
			$("#feedback").html("You're VERY Hot");

		} else if ((guessCalc <= 5) && (guessCalc > 0)) {
			$("#feedback").html("You're BOILING HOT");

		} else {
			$("#feedback").html("You have guessed it!!! The # is: " + arg2);
		}

	}

/////////////////////////////////////////////////////////////////////////////////////
	

//////////////////////////////////DIRECTIONS////////////////////////////////////////////
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});



});

