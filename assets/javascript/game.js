
// GLOBAL VARIABLES
var letters = ["a", "e", "i", "o", "u"];
var lettersGuessed = [];
var guessesLeft = 9
var wins = 0
var losses = 0
var outcome = false;






// FUNCTIONS

function updateGuesses () {
    document.querySelector('#guesses').innerHTML = guessesLeft
}
function updateWins () {
    document.querySelector('#wins').innerHTML = wins
}
function updateLosses () {
    document.querySelector('#losses').innerHTML = losses
}

function checkLetter(ltr){
    console.log("PARAMETER IS REPLACED BY LETTER: "+ ltr)
    var test = "a";
    // for loop to go through answers and verify if matches
    /* trying to write for loop to go through correct answers */

    for(var i=0; i<letters.length; i++){
        //console.log("I IS : "+ i);
        console.log("letter in array"+ letters[i])
        if(ltr === letters[i]){
            outcome = true;
            
        }
        // else alert("You're Incorrect")
        
    }
    if(outcome){
        
        outcome = false;
        wins++;
        updateWins()
        console.log("wins"+wins);
        alert ("Holy Moly, You're Psychic!");
    }else alert ("You AIN'T NO PSYCHIC!")
    
    


    if(ltr === test){
        console.log("YOU ARE AWESOME")
    }else{
        console.log("GUESS AGAIN!")
    }


}





// GAME LOGIC

// grab user input when key is pressed
document.onkeydown = function(event){

    guessesLeft--;
    updateGuesses();
    //console.log("KEY IS PRESSED DOWN!")

    var letter = String.fromCharCode(event.which).toLowerCase();
   // console.log("LETTER PRESSED IS: " +  letter)

    lettersGuessed.push(letter);
    // console.log("LETTERS GUESSED ARRAY IS: "+ lettersGuessed)
    // CALL CHECKLETTYER FUNCTION
    checkLetter(letter);

}

// Need a guess to compare to, what records the guess so we can compare that
// to the correct answers?
// Once a letter is chosen, loop through the correct answers to see if any are ===?
// If wrong letter chosen, add that to letters guessed until there are 9 and it says
// "you lose" and adds one loss to the var losses.
// If it is one of the right answers it should alert "you win" and add to 

// need a prompt at beginning to guess a letter.  How do you pass that guess 
// into the function to check it?