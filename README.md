# JavaScript_Quiz  
Take a quiz on JavaScript fundamentals. 

Starting the quiz will begin a timer for 75 seconds.  
The HTML will change to display a question and 4 answer buttons.  
Depending on the answer, either a correct or wrong prompt will appear.  
If you choose an incorrect answer, 10 seconds will be taken off the timer.  
After all 5 questions, the user will be given a final score based on the time left.  
User will enter initials on a form and submit, both the score and initials will be saved in Local Storage.  
When submitted, the highscores will be parsed and the highscores page will render.  
Pressing Clear Highscores will clear the local storage and re-render the highscores.  
Pressing Go Back will refresh the page to start at the home page.  
A view highscores button will render the saved highscores.  

## Latest Commit  
-Updated readme to describe project in my own words.  


## Previous Commits  
-Added additional comments to functions for clarity  
-Modified event handlers to include function instead of separated out  
-Added function to clear local storage and hide created highscore display elements  
-Added function to refresh browser  
-Modified highscore page rendering and local storage entries  
-Added comments for clarity  
-Added html for highscores page buttons  
-Added localstorage for score and initials  
-Modified functions to create and display highscores  
-Added Event Handler to reload page when pressing Go Back  
-Created html/css for "Correct!" and "Wrong!" pop ups  
-Stopped timer when last question is answered  
-Replaced first question answers from html to javascript array  
-Declared variables for each answer button  
-Display correct/wrong depending on which answer button was clicked  
-Take 10 seconds off the clock if wrong button is clicked  
-Created displayCorrect and displayWrong functions  
-Set score to 0 if negative number created from removing 10 seconds  
-Created function for displaying highscores  
-Added function to display highscore if html form is submitted (and prevent form default refresh)  
-Added event listener for view highscores button to call highscores function  
-Created changeTitles function to reduce repeated steps  
-Created allDone function to display score/initials form when timer reaches 0 or past last question  
-Added array of questions to ask user  
-Added multiple array of answers to put into buttons  
-Added event listener to display questions based off current question  
-Created event listener to prompt firstQuestion function  
-Added firstQuestion to change element displays and change textContent  
-Added title page html contents  
-Added styling to buttons, titles  
-Created javascript timer  
-Created files html, css, js files  
-Linked sheets and bootstrap  
