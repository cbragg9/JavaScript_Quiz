var timerEl = document.getElementById("timer");
var startEl = document.getElementById("quiz-Start");
var quizTitlesEl = document.getElementById("quiz-titles");
var quizInstructionsEl = document.getElementById("quiz-instructions");
var answerButtonsEl = document.getElementById("answer-button");
var score = 0;

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

    var timeInterval = setInterval(function () {
        timeCount = timeLeft;
        text.textContent = ("Time: " + timeCount);
        timerEl.appendChild(text);
        timeLeft--;

        if (timeLeft === 0) {
            clearInterval(timeInterval);
        }

    }, 1000);
}

// Remove quiz instructions and quiz start quizButtonsEl, change title to quiz questionTwo, and display button html collection
function firstQuestion() {

    startEl.style.display = "none";
    quizInstructionsEl.style.display = "none";
    quizTitlesEl.textContent = questions[currentQuestion];
    quizTitlesEl.className = "text-left"

    // for loop to iterate over all html collection to display buttons 
    for (var i = 0; i < quizButtonsEl.length; i++) {
        quizButtonsEl[i].style.display = "block";
    }

}

// Array of next questions to ask user
var questions = [
    "Commonly used data types DO NOT include:",
    "The condition in an if / else statement is enclosed within ______.",
    "Arrays in JavaScript can be used to store ______.",
    "String values must be enclosed within ______ when being assigned to variables.",
    "A very useful tool used during development and debugging for printing content to the debugger is:"
]

// Array of possible answers 
var questionTwoAnswers = ["1. quotes", "2. curly brackets", "3. parentheses", "4. square brackets"];
var questionThreeAnswers = ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"];
var questionFourAnswers = ["1. commas", "2. curly brackets", "3. quotes", "4. parenthesis"];
var questionFiveAnswers = ["1. JavaScript", "2. terminal/bash", "3. for loops", "4. console.log"];

var currentQuestion = 0;

function nextQuestion() {
    if (event.target.matches("button")) {

        if (currentQuestion === 0) {

            quizTitlesEl.textContent = questions[1];

            // Loop that assigns button names
            for (var i = 0; i < quizButtonsEl.length; i++) {
                quizButtonsEl[i].textContent = questionTwoAnswers[i];
            }

            currentQuestion++;

        } else if (currentQuestion === 1) {

            quizTitlesEl.textContent = questions[2];

            // Loop that assigns button names
            for (var i = 0; i < quizButtonsEl.length; i++) {
                quizButtonsEl[i].textContent = questionThreeAnswers[i];
            }

            currentQuestion++;

        } else if (currentQuestion === 2) {

            quizTitlesEl.textContent = questions[3];

            // Loop that assigns button names
            for (var i = 0; i < quizButtonsEl.length; i++) {
                quizButtonsEl[i].textContent = questionFourAnswers[i];
            }

            currentQuestion++;

        } else if (currentQuestion === 3) {

            quizTitlesEl.textContent = questions[4];

            // Loop that assigns button names
            for (var i = 0; i < quizButtonsEl.length; i++) {
                quizButtonsEl[i].textContent = questionFiveAnswers[i];
            }

            currentQuestion++;
        }

    }
}

answerButtonsEl.addEventListener("click", nextQuestion);





