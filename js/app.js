
$(document).ready(function(){

	var guessCount =0;
	var guess =0;
	var userGuess =0;
	var randNum =0;
	

		//$('#guessButton').click(function() {
	
	$('#guessButton').click(playGame);
		
		function playGame() {		

			guess = $('#userGuess').val();
			userGuess = +guess;
			//var guessCount =0; // $("#count").text(parseInt($("#count").text()) + 1);
		
			guessCount++;

			alert("User Guess Is: " + userGuess + "  Guess Count Is: " + guessCount);
			$("#count").html(guessCount);
			userGuessFunc(userGuess, randNum);
			
			return false; // stops page from automatically reloading when #guessButton 
						//selected. Use the below link  as a referene
						//http://stackoverflow.com/questions/1878264/how-do-i-make-an-html-button-not-reload-the-page
		}
		//});

	

	$('.new').click(newGame);
	
	function newGame () {

		//$('#userGuess').val("");
		guessCount = 0;
		$('#guessForm')[0].reset();
		$("#feedback").html("Make your Guess!");

		randNumFunc();

			//setTimeout(function (){

             	//playGame();//something you want delayed

        	//}, 800);
		

	}
	
	
	
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
		alert('rand number is: ' + randNum);
		var guessCalc = +(Math.abs(arg2 - arg1));
		//alert('guessCalc is: ' + guessCalc);

		if (guessCalc > 50) {
			alert(userGuess + ' - ' + randNum + ' = ' + (userGuess - randNum));
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
			$("#feedback").html("You have guessed it!!! " + arg1 + " = " + arg2);
		}

	}

/////////////////////////////////////////////////////////////////////////////////////
	

/////////////////////////////////////////////////////////////////////////////////////
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});



});

