
var astronomers = ["GALILEOGALILEI","HIPPARCHUS","EDWINHUBBLE","STEVENHAWKING"];
var underScoreArry =[];//storing the amount of underscores;
var userInputs = []; //the user inputs from keyboard.
var stringSize;
var userInput;
//Randomizing the number for array
var astroPeople = astronomers[Math.floor(Math.random()*astronomers.length)];
var astrPplSplt = astroPeople.split("");
console.log(astrPplSplt);

// Storing number value of length of astronomers name
stringSize = astroPeople.length;

// Generating underscores and putting in to array. 
function underScoreGenerator (amt) {
    for(var i = 0; i <= amt; i++){
        underScoreArry.push("_");      
    }
    return underScoreArry;
}
   
//Make the function call and input length of name for function args
var displayUnderScore = underScoreGenerator(stringSize).join("   ");
console.log(displayUnderScore);
//USER Input
 

document.onkeyup = function(event) {
   var guess = String.fromCharCode(event.keyCode);

    for(var i = 0; i < astrPplSplt.length; i++) {
        if (astrPplSplt[i] === guess) {  
            console.log(displayUnderScore[i]);
            displayUnderScore[i] = guess;
        }
      }
    };
 
 



//  document.getElementById("test3").innerHTML = guess;







//  document.getElementById("test3").innerHTML = guess;

//testing onto HTML 
document.getElementById("test").innerHTML = astroPeople;
document.getElementById("test2").innerHTML = displayUnderScore;
//document.getElementById("test3").innerHTML = guesses;


