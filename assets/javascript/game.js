
var planets = ["MARS", "EARTH", "JUPITER", "NEPTUNE", "URANUS", "PLUTO", "SATURN", "MERCURY", "VENUS"];
var underScoreArry = [];//storing the amount of underscores;
var wrongInpt = [""]; //the user inputs from keyboard.
var planetImg = ["../images/mars.jpg", "../images/jupiter.jpg", "../images/neptune.jpg", "../images/uranus.jpg", "../images/pluto.jpg", "../images/saturn.jpg", "../images/mercury.jpg", "../images/venus.jpg"];
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
/*AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA*/

//USER Input from keyboard
document.onkeyup = function (event) {
    var guess = String.fromCharCode(event.keyCode);
    checker(guess);
}
debugger;
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
             document.getElementById("wrongL").innerHTML = wrongInpt.join(' ');
             wins++;
             randomPlanet();
        }

}










// 
//document.getElementById("test").innerHTML = rmdPlnt;
//document.getElementById("test3").innerHTML = guesses;else{document.querySelector(".img").style.backgroundImage = planetImg[3];
//function removeAlpabet(guess) {
//     for (var x = 0; x < alphabet.length; x++) {
//         if (alphabet[x] === guess && wrongInpt.indexOf(guess) === -1) {
//             var s = alphabet.splice(x, 1, " ");
//             wrongInpt.push(s);
//             document.getElementById("wrongL").innerHTML = wrongInpt.join(' ');
//             guessesRemaining--;
//             document.getElementById("guessR").innerHTML = guessesRemaining;
//             break;
//         }
//         else if (alphabet[x] !== guess) {
//             alert("Not in the alphabet list")
//         }
//         else {
//             alert("already guessed");
//         }
//     }
// }


    // else if (plntSplt.indexOf(guess) === -1) {
    //     for (var u = 0; u < wrongInpt.length; u++) {
    //         if(wrongInpt[u] === guess ) {
    //             alert('That letter ' + guess + ' was already used')
    //             break;     
    //         }  
    //     }     
    // }
    // else {
    //      removeAlpabet(guess);
    //  }