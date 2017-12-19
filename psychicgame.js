console.log("Hello, What are you doing in my waters?");
	/*var numTries=0;
	var maxTries=9;
	while(numTries<=maxTries) {
		document.write(<"p class='numtries'>"+numTries+"</p>");
		number++;
	};

	
	function (tracker){
		var numTries = 0;
		return function (){
			numTries ++;
			for(var 1 = 0; i<= 9; i ++)*/
			
var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var letter =letters[Math.floor(Math.random() * letters.length)];

console.log(letter);
var winCount = 0;

var i = 8;
var lossCount = 0;
var loss = document.getElementById("loss");
document.getElementById("loss").innerHTML = lossCount;
document.getElementById("numTries").innerHTML = "9";
var numTries = document.getElementById("numTries");
			
window.addEventListener('keydown', function(e){
	var guessed = document.getElementById("guessed");
	guessed.textContent +=(e.key);
});			


window.addEventListener('keydown', function(event){
		if(event.key === letter){
			alert("You won! The correct letter was "+letter);
			document.getElementById("wins").innerHTML = "";
			winCount ++;
			var wins = document.getElementById("wins");
			wins.textContent += winCount;
			letter =letters[Math.floor(Math.random() * letters.length)];
			console.log(letter);
			document.getElementById("guessed").innerHTML = "";
			document.getElementById("numTries").innerHTML = "";
			i = 9;
		}
		else if(i>0){
			onKeyPress = document.getElementById("numTries").innerHTML = i--;
			
		
		}
		else{
			document.getElementById("loss").innerHTML = "";
			lossCount ++;
			onKeyPress = loss.textContent += lossCount;
			letter =letters[Math.floor(Math.random() * letters.length)];
			console.log(letter);
			document.getElementById("guessed").innerHTML = "";
			document.getElementById("numTries").innerHTML = "";
			i = 9;
		}
		
});