var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];
var gameStarted = false; // Oyunun başladığını takip eden bir değişken
var level = 0;

// Klavye tuşuna basıldığında çalışacak olay
$(document).keypress(function () {
  if (!gameStarted) {
    // Oyun başlamamışsa
    $("#level-title").text("Level " + level); // H1 başlığını güncelle
    nextSequence(); // nextSequence işlemini çağır
    gameStarted = true; // Oyunu başlat
  }
});

$(".btn").click(function () {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer();
});

function checkAnswer(currentLevel) {}

function nextSequence() {
  level++;
  $("#level-title").text("Level " + level);

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);
  playSound(randomChosenColour);
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");

  setTimeout(function () {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}
