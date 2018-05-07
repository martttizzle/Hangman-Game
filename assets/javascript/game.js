
var planets = ["MARS"];//, "EARTH", "JUPITER", "NEPTUNE", "URANUS", "PLUTO", "SATURN", "MERCURY", "VENUS"
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z'];
var underScoreArry = [];//storing the amount of underscores;
console.log(underScoreArry);
var wrongInpt = [""]; //the user inputs from keyboard.
var planetImg = ["../images/mars.jpg", "../images/jupiter.jpg", "../images/neptune.jpg", "../images/uranus.jpg", "../images/pluto.jpg", "../images/saturn.jpg", "../images/mercury.jpg", "../images/venus.jpg"];
var guessesRemaining;
var wins = 0;
var rmdPlnt;
var plntSplt;
var stringSize;


randomPlanet()


//Randomizing the number for array
function randomPlanet() {
    rmdPlnt = planets[Math.floor(Math.random() * planets.length)];
    plntSplt = rmdPlnt.split("");
    stringSize = rmdPlnt.length;
    document.getElementById("guessR").innerHTML = guessesRemaining = 5;
    underScoreGenerator(stringSize).join("   ");
}
//Generating and displaying underscores
function underScoreGenerator(amt) {
    for (var i = 0; i < amt; i++) {
        underScoreArry.push("_");
        document.getElementById("entered").innerHTML = underScoreArry.join(' ');
    }
    return underScoreArry;
}


//USER Input from keyboard
document.onkeyup = function (event) {
    var guess = String.fromCharCode(event.keyCode);
    checker(guess);
}
//Function to check if guess is correct or not.
function checker(guess) {
    if (plntSplt.indexOf(guess) > -1) {
        for (var i = 0; i < plntSplt.length; i++) {
            if (plntSplt[i] === guess) {
                underScoreArry[i] = guess;
                // var s = plntSplt.splice(i, 1, " ");
                document.getElementById("entered").innerHTML = underScoreArry.join(' ');
                break;
            }
        }
    } else if (alphabet.indexOf(guess) > -2) {
        for(var i = 0; i < alphabet.length; i++) {
            var s = alphabet.splice(i, 1, " ");
            break;
        alert(s);
     }
        wrongInpt.push(guess);
        document.getElementById("wrongL").innerHTML = wrongInpt.join(' ');
        document.getElementById("guessR").innerHTML = guessesRemaining--;
       
    }else{
        alert('nothing');
    }

}







//document.getElementById("test").innerHTML = rmdPlnt;
//document.getElementById("test3").innerHTML = guesses;else{document.querySelector(".img").style.backgroundImage = planetImg[3];


