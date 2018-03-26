
var astronomers = ["GalileoGalilei","Hipparchus","EdwinHubble","StevenHawking"];
var underScoreArry =[];//storing the amount of underscores;
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
    
var displayUnderScore = underScoreGenerator(stringSize).join("   ");



console.log(underScoreArry.join(" "));







//testing onto HTML 
document.getElementById("test").innerHTML = astroPeople;
document.getElementById("test2").innerHTML = displayUnderScore;

