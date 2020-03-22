var timerEl = document.getElementById("timer");
var startEl = document.getElementById("quiz-Start");

startEl.addEventListener("click", countdown);

var timeCount = 0;
var text = document.createTextNode("Time: " + timeCount);
timerEl.appendChild(text);

function countdown() {
    var timeLeft = 60;

    var timeInterval = setInterval(function() {
        timeCount = timeLeft;
        text.textContent = ("Time: " + timeCount);
        timerEl.appendChild(text);
        timeLeft--;

        if (timeLeft === 0 ) {
            prompt("Time's up!");
            clearInterval(timeInterval);
        }

    }, 1000);
}

