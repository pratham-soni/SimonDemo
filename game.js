var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var started = false;
var level = 0;

$(document).keypress(function() {
    if (!started){
        $("#level-title").text("Level "+level);
        nextSequence();
        started = true;
    }
  });

$("[type|='button']").click(function (event){
//.here
    var userChosenColour = event.target.id;
    userClickedPattern.push(userChosenColour);
    console.log("userClickedPattern : "+userClickedPattern, " , Length : " + userClickedPattern.length);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
})

function checkAnswer(currentLevel){
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        // console.log("success...");
        if (userClickedPattern.length === gamePattern.length){
            setTimeout(() => {
                nextSequence();
            }, 1000);
        }
    }
    else {
        // console.log("wrong !!!");
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(()=> {
            $("body").removeClass("game-over");
        }, 200);
        $("#level-title").text("Game Over, Press Any Key to Restart");
        startOver();
    }
}

function startOver(){
    level = 0;
    started = false;
    gamePattern = [];
}

function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed");
    setTimeout(() => {
        $("#"+currentColour).removeClass("pressed");
    }, 100);
}

function nextSequence(){
    
    userClickedPattern = [];
    level++;
    $("#level-title").text("Level "+level);
    console.log("Level "+level);

    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour)
    console.log("gamePattern : " +gamePattern)

element = $("#" + randomChosenColour)
element.fadeIn(100).fadeOut(100).fadeIn(100);

playSound(randomChosenColour);

}

function playSound(path){
    var audio = new Audio(`sounds/${path}.mp3`);
    audio.play();
}
