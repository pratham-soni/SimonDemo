var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

$(document).keypress(function() {
    nextSequence();
  });

$("[type|='button']").click(function (event){
    // console.log(event.target.id)
    var userChosenColour = event.target.id;
    userClickedPattern.push(userChosenColour)
    console.log(userClickedPattern)
    playSound(userChosenColour)

})

function nextSequence(){
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour)
    // console.log(gamePattern)

element = $("#" + randomChosenColour)
element.fadeIn(100).fadeOut(100).fadeIn(100);
// element.fadeOut();
playSound(randomChosenColour);
}

function playSound(path){
    var audio = new Audio(`sounds/${path}.mp3`);
    audio.play();
}

