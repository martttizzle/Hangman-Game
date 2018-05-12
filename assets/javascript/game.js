
var planets = ["MARS", "EARTH", "JUPITER", "NEPTUNE", "URANUS", "PLUTO", "SATURN", "MERCURY", "VENUS"];
var underScoreArry = [];//storing the amount of underscores;
var wrongInpt = [""]; //the user inputs from keyboard.
var planetImg = ["../Hangman-Game/assets/images/mars.jpg", "../Hangman-Game/assets/images/earth.jpg", "../Hangman-Game/assets/images/jupiter.jpg", "../Hangman-Game/assets/images/neptune.jpg", "../Hangman-Game/assets/images/uranus.jpg", "../Hangman-Game/assets/images/pluto.jpg", "../Hangman-Game/assets/images/saturn.jpg", "../Hangman-Game/assets/images/mercury.jpg", "../Hangman-Game/assets/images/venus.jpg"];
var correctLetter = [];
var guessesRemaining;
var wins = 0;
var rmdPlnt;
var plntSplt;
var stringSize;
var wins = 0;

randomPlanet()

//Randomizing the number for array
function randomPlanet() {
    document.getElementById("guessR").innerHTML = guessesRemaining = 5;
    document.getElementById("win").innerHTML = wins;
    rmdPlnt = planets[Math.floor(Math.random() * planets.length)];
    plntSplt = rmdPlnt.split("");
    stringSize = rmdPlnt.length;

    underScoreGenerator(stringSize).join(" ");
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

    if (duplicateGuess(guess)) {
        alert("This " + guess + " was already entered!")
    }
    else {
        CorrectGuess(guess);
    }
}//end of checker function
function duplicateGuess(guess) {
    var tries = 0;
    while (tries < wrongInpt.length) {
        for (var i = 0; i < wrongInpt.length; i++) {
            wrongInpt[i] === guess;
            tries++;
            if ((wrongInpt[i] === guess) === true) {
                return true;
                break;
            }
        }
    }
}
function CorrectGuess(guess) {
    if (plntSplt.indexOf(guess) > -1) {
        for (var i = 0; i < plntSplt.length; i++) {
            if (plntSplt[i] === guess) {
                underScoreArry[i] = guess;
                var s = plntSplt.splice(i, 1, " ");
                document.getElementById("entered").innerHTML = underScoreArry.join(' ');
                gameWon(s);
                break;
            }
        }
    } else {
        wrongInpt.push(guess);
        document.getElementById("wrongL").innerHTML = wrongInpt.join(' ');
        guessesRemaining--;
        document.getElementById("guessR").innerHTML = guessesRemaining;
        gameOver(guessesRemaining);

    }
}
function gameOver(guessesRemaining) {
    if (guessesRemaining === 0) {
        alert("game Over");
        underScoreArry = [];
        wrongInpt = [""];
        correctLetter = [];
        document.getElementById('pltIMG').style.backgroundImage = "url(" + planetImg[planets.indexOf(rmdPlnt)] + ")";
        document.getElementById("wrongL").innerHTML = wrongInpt.join(' ');
        randomPlanet();
    }
}
function gameWon(crtLetter) {
    var total = correctLetter.push(crtLetter);
    console.log(stringSize);
    console.log(total);
    if (total === stringSize) {
        document.getElementById('pltIMG').style.backgroundImage = "url(" + planetImg[planets.indexOf(rmdPlnt)] + ")";
        alert("You WON!!!");
        correctLetter = [];
        underScoreArry = [];
        wrongInpt = [""];
        document.getElementById("wrongL").innerHTML = wrongInpt.join(' ');
        wins++;
        randomPlanet();
    }
}





