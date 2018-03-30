
var astronomers = ["GalileoGalilei","Hipparchus","EdwinHubble","StevenHawking"];
var underScoreArry =[];//storing the amount of underscores;
var userInputs = []; //the user inputs from keyboard.
var stringSize;

//Randomizing the number for array
var randNum = Math.floor(Math.random()*astronomers.length);
var astroPeople = astronomers[randNum];

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

//USER Input

document.addEventListener('keydown', function(event) {
    console.log("------> "+ event.keyCode);
    var res = String.fromCharCode(event.keyCode);
    document.getElementById("test3").innerHTML = res;
    
});
 



//testing onto HTML 
//document.getElementById("test").innerHTML = astroPeople;
document.getElementById("test2").innerHTML = displayUnderScore;
//document.getElementById("test3").innerHTML = guesses;


