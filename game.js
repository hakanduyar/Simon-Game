var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
userClickedPattern = [];

var gameStarted = false; // Oyunun başladığını takip eden bir değişken

// Klavye tuşuna basıldığında çalışacak olay
$(document).keydown(function (event) {
  if (!gameStarted) {
    // Oyun başlamamışsa
    gameStarted = true; // Oyunu başlat
    nextSequence(); // nextSequence işlemini çağır
    $("#level-title").text("Level 0"); // H1 başlığını güncelle
  }
});

$(".btn").click(function () {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
});

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);

  playSound(randomChosenColour);
}
nextSequence();

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
