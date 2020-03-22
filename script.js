var timerEl = document.getElementById("timer");
var startEl = document.getElementById("quiz-Start");
var quizTitlesEl = document.getElementById("quiz-titles");
var quizInstructionsEl = document.getElementById("quiz-instructions");
var answerButtonsEl = document.getElementById("answer-button");
var initialsEl = document.getElementById("initals-form");
var score = 0;

// Stores an HTML collection, requires a for loop to iterate through all buttons
var quizButtonsEl = document.getElementsByClassName("quiz-questions");


// Start countdown and first question when quiz start button is clicked
startEl.addEventListener("click", countdown);
startEl.addEventListener("click", firstQuestion);

// Create text node and display initial timer as 0
var timeCount = 0;
var timeLeft = 75;
var text = document.createTextNode("Time: " + timeCount);
timerEl.appendChild(text);

// Start timer countdown and display first question, if timer reaches 0 display all done screen
function countdown() {

    var timeInterval = setInterval(function () {
        text.textContent = ("Time: " + timeLeft);
        timerEl.appendChild(text);
        timeLeft--;

        if (timeLeft === 0) {
            allDone();
            clearInterval(timeInterval);
        }

    }, 1000);
}

var currentQuestion = 0;

// Remove quiz instructions and quiz start quizButtonsEl, change title to quiz questionTwo, and display button html collection
function firstQuestion() {

    startEl.style.display = "none";
    quizInstructionsEl.style.display = "none";
    quizTitlesEl.textContent = questions[currentQuestion];
    currentQuestion++;
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

// Change title of question and add one to variable to iterate through questions array
function changeTitles() {
    quizTitlesEl.textContent = questions[currentQuestion];
    currentQuestion++;
    console.log(currentQuestion);
}

// Depending on current question, displays next question (or all done) and assigns new strings to buttons
function nextQuestion() {
    if (event.target.matches("button")) {

        if (currentQuestion === 1) {

            changeTitles();

            // Loop that assigns button names
            for (var i = 0; i < quizButtonsEl.length; i++) {
                quizButtonsEl[i].textContent = questionTwoAnswers[i];
            }


        } else if (currentQuestion === 2) {

            changeTitles();

            // Loop that assigns button names
            for (var i = 0; i < quizButtonsEl.length; i++) {
                quizButtonsEl[i].textContent = questionThreeAnswers[i];
            }

        } else if (currentQuestion === 3) {

            changeTitles();

            // Loop that assigns button names
            for (var i = 0; i < quizButtonsEl.length; i++) {
                quizButtonsEl[i].textContent = questionFourAnswers[i];
            }

        } else if (currentQuestion === 4) {

            changeTitles();

            // Loop that assigns button names
            for (var i = 0; i < quizButtonsEl.length; i++) {
                quizButtonsEl[i].textContent = questionFiveAnswers[i];
            }
        } else if (currentQuestion === 5) {
            allDone();
        }
    }
}

// Displays score and form to submit initials 
function allDone() {
    for (var i = 0; i < quizButtonsEl.length; i++) {
        quizButtonsEl[i].style.display = "none";
    }

    score = score + timeLeft;
    quizTitlesEl.textContent = "All done!";
    quizInstructionsEl.textContent = "Your final score is " + score + ".";
    quizInstructionsEl.style.display = "block";
    quizInstructionsEl.className = "text-left";
    initialsEl.style.display = "block";
}

answerButtonsEl.addEventListener("click", nextQuestion);




// To do:
// -Display Correct/Wrong with timer 
// -Save initials and score to local Storage
// -Link View Highscores button to function that displays high scores 
// -Sort high scores by highest score
