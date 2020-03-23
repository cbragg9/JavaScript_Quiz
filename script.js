var timerEl = document.getElementById("timer");
var startEl = document.getElementById("quiz-Start");
var quizTitlesEl = document.getElementById("quiz-titles");
var quizInstructionsEl = document.getElementById("quiz-instructions");
var answerButtonsEl = document.getElementById("answer-button");
var initialsEl = document.getElementById("initals-form");
var viewHighscore = document.getElementById("view-highscore");
var newButtonsRow = document.getElementById("new-buttons-row");
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

        if (timeLeft === 0 || timeLeft < 0) {
            text.textContent = ("Time: 0");
            allDone();
            clearInterval(timeInterval);
        } else if (currentQuestion === 6) {
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
        quizButtonsEl[i].textContent = questionOneAnswers[i];
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
var questionOneAnswers = ["1. strings", "2. booleans", "3. alerts", "4. numbers"];
var questionTwoAnswers = ["1. quotes", "2. curly brackets", "3. parentheses", "4. square brackets"];
var questionThreeAnswers = ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"];
var questionFourAnswers = ["1. commas", "2. curly brackets", "3. quotes", "4. parenthesis"];
var questionFiveAnswers = ["1. JavaScript", "2. terminal/bash", "3. for loops", "4. console.log"];

// Change title of question and add one to variable to iterate through questions array
function changeTitles() {
    quizTitlesEl.textContent = questions[currentQuestion];
    currentQuestion++;
}

// Bring answer buttons and answer pop ups into javascript variables
var firstButtonEl = document.getElementById("first-answer");
var secondButtonEl = document.getElementById("second-answer");
var thirdButtonEl = document.getElementById("third-answer");
var fourthButtonEl = document.getElementById("fourth-answer");
var popupCorrect = document.getElementById("popupCorrect");
var popupWrong = document.getElementById("popupWrong");

// Depending on current question, displays next question (or all done) and assigns new strings to buttons
function nextQuestion() {
    if (event.target.matches("button")) {

        // Ask second question
        if (currentQuestion === 1) {

            changeTitles();

            // Loop that assigns button names
            for (var i = 0; i < quizButtonsEl.length; i++) {
                quizButtonsEl[i].textContent = questionTwoAnswers[i];
            }

            // Call displayCorrect function if correct button is pressed, else take off 10 seconds and call displayWrong function
            if (event.target === thirdButtonEl) {
                displayCorrect();
            } else {
                timeLeft = timeLeft - 10;
                displayWrong();
            }

            // Ask third question
        } else if (currentQuestion === 2) {

            changeTitles();

            // Loop that assigns button names
            for (var i = 0; i < quizButtonsEl.length; i++) {
                quizButtonsEl[i].textContent = questionThreeAnswers[i];
            }

            // Call displayCorrect function if correct button is pressed, else take off 10 seconds and call displayWrong function
            if (event.target === thirdButtonEl) {
                displayCorrect();
            } else {
                timeLeft = timeLeft - 10;
                displayWrong();
            }

            // Ask fourth question
        } else if (currentQuestion === 3) {

            changeTitles();

            // Loop that assigns button names
            for (var i = 0; i < quizButtonsEl.length; i++) {
                quizButtonsEl[i].textContent = questionFourAnswers[i];
            }

            // Call displayCorrect function if correct button is pressed, else take off 10 seconds and call displayWrong function
            if (event.target === fourthButtonEl) {
                displayCorrect();
            } else {
                timeLeft = timeLeft - 10;
                displayWrong();
            }

            // Ask fifth question
        } else if (currentQuestion === 4) {

            changeTitles();

            // Loop that assigns button names
            for (var i = 0; i < quizButtonsEl.length; i++) {
                quizButtonsEl[i].textContent = questionFiveAnswers[i];
            }

            // Call displayCorrect function if correct button is pressed, else take off 10 seconds and call displayWrong function
            if (event.target === thirdButtonEl) {
                displayCorrect();
            } else {
                timeLeft = timeLeft - 10;
                displayWrong();
            }

        } else if (currentQuestion === 5) {

            // Call displayCorrect function if correct button is pressed, else take off 10 seconds and call displayWrong function
            if (event.target === fourthButtonEl) {
                displayCorrect();
            } else {
                timeLeft = timeLeft - 10;
                displayWrong();
            }
            currentQuestion++;

            // Call allDone function after all questions answered
            allDone();
        }
    }
}


// Display correct function will popup "Correct!" for one second
function displayCorrect() {
    popupCorrect.style.display = "block";

    var timeInterval = setInterval(function () {
        var answerTimer = 1;
        answerTimer--;

        if (answerTimer === 0) {
            popupCorrect.style.display = "none";
            clearInterval(timeInterval);
        } 

    }, 1000);
}

// Display wrong function will popup "Wrong!" for one second and take 10 seconds off the clock
function displayWrong() {
    popupWrong.style.display = "block";

    var timeInterval = setInterval(function () {
        var answerTimer = 1;
        answerTimer--;

        if (answerTimer === 0) {
            popupWrong.style.display = "none";
            clearInterval(timeInterval);
        } 

    }, 500);
}


// Displays score and form to submit initials 
function allDone() {
    for (var i = 0; i < quizButtonsEl.length; i++) {
        quizButtonsEl[i].style.display = "none";
    }

    score = score + timeLeft;

    // Dont display score less than 0
    if (score < 0) {
        score = 0;
    }

    quizTitlesEl.textContent = "All done!";
    quizInstructionsEl.textContent = "Your final score is " + score + ".";
    quizInstructionsEl.style.display = "block";
    quizInstructionsEl.className = "text-left";
    initialsEl.style.display = "block";
}

// Event handler for clicks on answer buttons
answerButtonsEl.addEventListener("click", nextQuestion);


// Event handler for initials form submit
initialsEl.addEventListener("submit", function(event) {
    event.preventDefault();
    highScores();
});

// Display high scores, hide all other elements
function highScores() {
    quizTitlesEl.textContent = "Highscores";
    quizInstructionsEl.style.display = "none";
    initialsEl.style.display = "none";
    startEl.style.display = "none";

    for (var i = 0; i < quizButtonsEl.length; i++) {
        quizButtonsEl[i].style.display = "none";
        quizButtonsEl[i].textContent = questionOneAnswers[i];
    }
}

viewHighscore.addEventListener("click", highScores);


// To do:
// -Save initials and score to local Storage
// -Sort high scores by highest score
// Add Go Back and Clear Highscores button





// Create buttons
// var goBack = document.createElement("button");
// goBack.className = "purple-button";
// goBack.innerHTML = "Go Back";
// newButtonsRow.append(goBack);

// var clearScores = document.createElement("button");
// goBack.className = "purple-button";
// goBack.innerHTML = "Clear Highscores";
// newButtonsRow.append(clearScores);