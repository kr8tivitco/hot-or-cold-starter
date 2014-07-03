
$(document).ready(function(){

	
	
	
	$('#guessButton').click(function() {
		
		var guess = $('#userGuess').val();
		var userGuess = +guess;
		var guessCount = $("#count").text(parseInt($("#count").text()) + 1);
		//alert(userGuess + '' + guessCount);


	});


	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});





	//var newGame = function() {


	//}	
});