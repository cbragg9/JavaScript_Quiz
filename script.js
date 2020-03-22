var timerEl = document.getElementById("timer");
var startEl = document.getElementById("quiz-Start");
var quizTitlesEl = document.getElementById("quiz-titles");
var quizInstructionsEl = document.getElementById("quiz-instructions");

// Stores an HTML collection, requires a for loop to iterate through all buttons
var quizButtonsEl = document.getElementsByClassName("quiz-questions");


// Start countdown and first question when quiz start button is clicked
startEl.addEventListener("click", countdown);
startEl.addEventListener("click", firstQuestion);

// Create text node and display initial timer as 0
var timeCount = 0;
var timeLeft = 60;
var text = document.createTextNode("Time: " + timeCount);
timerEl.appendChild(text);

// Start timer countdown and display first question
function countdown() {

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

// Remove quiz instructions and quiz start quizButtonsEl, change title to quiz questionTwo, and display button html collection
function firstQuestion() {

    startEl.style.display = "none";
    quizInstructionsEl.style.display = "none";
    quizTitlesEl.textContent = "Commonly used data types DO NOT include:";

    // for loop to iterate over all html collection 
    for (var i = 0; i < quizButtonsEl.length; i++) {
        quizButtonsEl[i].style.display = "block";
    }

}




var questionTwo = ["1. quotes", "2. curly brackets", "3. parentheses", "4. square brackets"];
