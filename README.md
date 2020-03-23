# JavaScript_Quiz  
Take a quiz on JavaScript fundamentals. 

```  
GIVEN I am taking a code quiz  
WHEN I click the start button  
THEN a timer starts and I am presented with a question  
WHEN I answer a question  
THEN I am presented with another question  
WHEN I answer a question incorrectly  
THEN time is subtracted from the clock  
WHEN all questions are answered or the timer reaches 0  
THEN the game is over  
WHEN the game is over  
THEN I can save my initials and score  
```  

## Latest Commit  
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


## Previous Commits  
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
