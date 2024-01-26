//Click Function (applied to the box)
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('myBox').addEventListener('click', function () {
    window.location.href = 'decision.html';
  });
});

//Timer Function
document.getElementById("four").addEventListener("animationend", startTimer); //Starts after the end of the fourth introductory message animation.

function startTimer() {
  var timeLeft = 180; // 3 minutes in seconds
  var timerDisplay = document.getElementById("timer");

  var countdown = setInterval(function () {
    var minutes = Math.floor(timeLeft / 60);
    var seconds = timeLeft % 60;

    timerDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

    if (--timeLeft < 0) {
      clearInterval(countdown);
    }
  }, 1000);
}

