
var astronomers = ["GALILEOGALILEI","HIPPARCHUS","EDWINHUBBLE","STEVENHAWKING"];
var underScoreArry =[];//storing the amount of underscores;
var wrongInpt = [" "]; //the user inputs from keyboard.
//Randomizing the number for array
var astroPeople = astronomers[Math.floor(Math.random()*astronomers.length)];
var astrPplSplt = astroPeople.split("");//Putting individual letters in each array indicies. 
var stringSize = astroPeople.length;
var guessesRemaining = 10; 
 
// Storing number value of length of astronomers name
 underScoreGenerator(stringSize).join("   ");
 
// Generating underscores and putting in to array. 
function underScoreGenerator (amt) {
    for(var i = 0; i < amt; i++){
        underScoreArry.push("_");      
    }
    return underScoreArry;
}
//Starting with underscores on page. 
document.getElementById("entered").innerHTML = underScoreArry.join(' '); 

//USER Input from keyboard
document.onkeyup =  function(event) {
    var guess = String.fromCharCode(event.keyCode);
    checker(guess);
}
//Function to check if guess is correct or not.

   function checker(guess) {
     if(astrPplSplt.indexOf(guess) > -1) { 
        for(var i = 0; i < astrPplSplt.length; i++) {
            if(astrPplSplt[i] === guess) {
                underScoreArry[i] = guess;
                var s = astrPplSplt.splice(i, 1, " " );
                 document.getElementById("entered").innerHTML = underScoreArry.join(' ');   
                 break;
                }
            }
          }else{
             wrongLetters(guess);
            }
        }
     //Stores the wrong answers
    function wrongLetters(wrgLtr) {
        for(var i = 0; i < wrongInpt.length; i++) {
          if(console.log(wrongInpt[i]) !== wrgLtr) {
            wrongInpt.push(wrgLtr);
            document.getElementById("wrongL").innerHTML = wrongInpt.join(' ');
            guessesRemaining--;
            winGame();
            break;
            }
            else{
                var a = wrgLtr;
            }
        }
    } 
     function winGame() {
            if( guessesRemaining < 1) {
                alert("GAME OVER!");
                prompt("Would you like to play again?")
            }
     }
     

    
   // document.getElementById("test4").innerHTML = wrongInpt.join(' ');
    
         


 
// document.getElementById("test2").innerHTML = displayUnderScore;



//  document.getElementById("test3").innerHTML = guess;

//testing onto HTML 
document.getElementById("test").innerHTML = astroPeople;
//document.getElementById("test3").innerHTML = guesses;


