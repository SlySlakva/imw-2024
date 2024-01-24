document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('myBox').addEventListener('click', function() {
      window.location.href = 'box.html';
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    let timer;
    let timeLeft;
    const timerDisplay = document.getElementById('timer');
    const startBtn = document.getElementById('startBtn');

    startBtn.addEventListener('click', function () {
        if (!timer || timeLeft === 0) {
            startTimer(300); // 5 minutes in seconds
        }
    });

    function startTimer(seconds) {
        clearInterval(timer);

        timeLeft = seconds;
        displayTimeLeft();

        timer = setInterval(function () {
            timeLeft--;
            displayTimeLeft();

            if (timeLeft === 0) {
                clearInterval(timer);
            }
        }, 1000);
    }

    function displayTimeLeft() {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        const display = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        timerDisplay.textContent = display;
    }
});

 // Function to handle hovering effect
 function handleHover() {
    var box = document.getElementById('hover-box');
    box.style.top = '-40px'; // Move the box up
  }

  // Function to handle when the cursor leaves the box
  function handleLeave() {
    var box = document.getElementById('hover-box');
    box.style.top = '40px'; // Move the box back to its original position
  }

