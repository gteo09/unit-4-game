// GLOBAL VARIABLES
///Crystals
var greenCrystal=0;
var blueCrystal=0;
var redCrystal=0;
var yellowCrystal=0;

//// Win/Loss Counters
var winCount=0;
var lossCount=0;

////Scores
var currentScore= 0;
var targetScore = 0;

//FUNCTIONS

//reusable function for making random numbers for our targetscore and crystal values
function createRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  
//Starts and resets the game
function initiateGame(){

currentScore=0;
targetScore = createRandom(19,120);
greenCrystal= createRandom(1,12);
blueCrystal= createRandom(1,12);
redCrystal= createRandom(1,12);
yellowCrystal= createRandom(1,12);

$(document).ready(function() {
$("#myscore").html(currentScore);
$("#targetscore").html(targetScore);
});

console.log(targetScore, greenCrystal, blueCrystal, redCrystal, yellowCrystal);


};

//updates currentScore value based on crystal clicks
function addcurrentScore(crystalvalue){

currentScore = currentScore + crystalvalue;

    $("#myscore").html(currentScore);

checkwins();

};

//checks to see if user's score has won or lost and updates win/loss counters
function checkwins(){
    if(currentScore===targetScore){
        alert("Winner, winner, chicken dinner!")
        winCount++;
        $("#wincounter").html(winCount);
        initiateGame();
    }
    else if(currentScore>targetScore){
        alert("Your score is higher than the target score, try again!");
        lossCount++;
        $("#losscounter").html(lossCount);
        initiateGame();
    };


};


initiateGame();

//JQUERY
$(document).ready(function() {
    
$("#green").on("click", function(){

    addcurrentScore(greenCrystal);
    
});
    
$("#blue").on("click", function(){
    addcurrentScore(blueCrystal);
    
});

$("#red").on("click", function(){
    addcurrentScore(redCrystal);
   
});

$("#yellow").on("click", function(){
    addcurrentScore(yellowCrystal);
    
    });
});
