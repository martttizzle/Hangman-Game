
var planets = ["MARS","EARTH","JUPITER","NEPTUNE","URANUS","PLUTO","SATURN","MERCURY","VENUS"];
var underScoreArry =[];//storing the amount of underscores;
var wrongInpt = [" "]; //the user inputs from keyboard.
var planetImg = ["../images/mars.jpg","../images/jupiter.jpg","../images/neptune.jpg","../images/uranus.jpg","../images/pluto.jpg","../images/saturn.jpg","../images/mercury.jpg","../images/venus.jpg"]
//Randomizing the number for array
var plntChsn = planets[Math.floor(Math.random()*planets.length)];
var plntSplt = plntChsn.split("");//Putting individual letters in each array indicies. 
var stringSize = plntChsn.length;
var guessesRemaining = 10; 
var wins = 0;
 
// Storing number value of length of planets name
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
     if(plntSplt.indexOf(guess) > -1) { 
        for(var i = 0; i < plntSplt.length; i++) {
            if(plntSplt[i] === guess) {
                underScoreArry[i] = guess;
                var s = plntSplt.splice(i, 1, " " );
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
            document.getElementById("guessR").innerHTML = guessesRemaining--;
            lostGame();
            break;
            }
            else{
                var a = wrgLtr;
            }
        }
    } 
     function lostGame() {
            if(guessesRemaining <= -1) {
                alert("GAME OVER!");
                document.querySelector(".img").style.backgroundImage = planetImg[3];
                
            }    
         }
     
   


    
document.getElementById("test").innerHTML = plntChsn;
//document.getElementById("test3").innerHTML = guesses;


