//  variables
var timeLeft = 60;
var timeInterval = 0;
var timeClock = document.querySelector("#timer");
var quizBody = document.getElementById("quiz");
var results = document.getElementById("result");
var score = document.getElementById("score");
var timer = document.getElementById("timer");
var timeExpired = document.getElementById("quizEnded");
var questions = document.getElementById("questions");
var startQuizButton = document.getElementById("starQuizButton");
var startQuizDiv = document.getElementById("startQuizDiv");
var scoreContainer = document.getElementById("scoreContainer");
var scoreDiv = document.getElementById("scoreDiv");
var scoreInputLastname = document.getElementById("scoreInputLastname");
var scoreDisplayName = document.getElementById("scoreDisplayName");
var endQuizbtns = document.getElementById("endQuizbtns");
var finalScoreBtn = document.getElementById("finalScoreBtn");
var scoreDisplayNameScore = document.getElementById("scoreDisplayNameScore");
var buttonA = document.getElementById("a");
var buttonB = document.getElementById("b");
var buttonC = document.getElementById("c");
var buttonD = document.getElementById("d");
// Quiz questions
var quizQuestion = [{
   question: " What does DOM stands for?",
    choiceA: "Document Object Model",
    choiceB: "Direct Object Model",
    choiceC:"Data Object Model",
    choiceD:"Different Object Model",
    correctAnswer: "a"
},
{
    question: "What does API stand for?",
    choiceA: "Application Programing Interface",
    choiceB:"Apex Program Intel",
    choiceC:"Application Process interface",
    choiceD:"Advance Programing interface",
     correctAnswer, "a"
},
{
     question: "What does HTML stand for?",
     choiceA:"Hypertext Markup Language",
     choiceB:"Hyperactive Markup Language",
     choiceC:"Hypertext Marker Language",
     choiceD:"Hypoactive Markup Literature",
     correctAnswer, "a"
},
{
    question: "What does CSS stand for?,"
    choiceA: "Cascading Style Sheet",
    choiceB: "Custom Style Sheet",
    choiceC: "Creative Style Sheet",
    choiceD: "Cascading Script Style",
    correctAnswer, "a"
},
{
    answer: "What does javaScript do?",
    choiceA:  "Make the webpage fully interactive",
    choicedB: "Make webpage look colorful",
    choiceC:  "Style webpage",
    choiceD:  "Align text in webpage",
    correctAnswer, "a"

};
//other variables
var finalQuestionIndex = quizQuestion.length;
var currentQuestionIndex = 0;
var timeLeft = 76;
var timeInterval;
var score = 0;
var correct;
// this function cycle 
 generatedQuizQuestion() {
    gameOverDiv.style.display = "none";
    if (currentQuestionIndex===finalQuestionIndex){
        return showScore();
 }
 var currentQuestion = quizQuestion[currentQuestionIndex];
 questionEl.innerHTML = "<p>" + currentQuestion.question + "</p>";
    buttonA.innerHTML = currentQuestion.choiceA;
    buttonB.innerHTML = currentQuestion.choiceB;
    buttonC.innerHTML = currentQuestion.choiceC;
    buttonD.innerHTML = currentQuestion.choiceD;
//start quiz function start the timeRanges, hides the start button and start the first question.
 startQuiz(){
    gameoverDiv.style.display = "none";
    startQuizDiv.style.display = "none";
    generatedQuizQuestion();

    //timer
    timeInterval = setInterval(function)(){
        timeLeft--;
        quizTimer.textContent = "time left:" + timeLeft;
        if(timeLeft===0){
            clearInterval(timerInterval);
            showScore();
        }
    }, 1000);
    quizBody.style.display = "block";
    // this display end screen after taking the quiz.
    function showScore(){
        quizBody.style.display = "none";
        gameOverDiv.styl.display = "flex";
        clearInterval(timeInterval);
        highScoreInputName.value = "";
        finalScoreEl.innerHTML = ("You have + score + correct answer" + quizQuestionLength");
    }
//click to submit button
// display new user name
   submitScoreButton.addEventLister("click, function highScore"()) 
    if(highScoreInputName.value==="") {
        alert("Enter name");
        return false;
    } 
        var saveHighScore=JSON.parse(localStorage.getItem("saveHighScore")) || [];
        var currentUser = highScoreInputNme.value.trim();
        var currentHighScore = {
         userName: currentUser,
         score : score
        };
        gameoverStyleDisplay.push(currentHighScore);
        localStorage.setitem("savehighScore");
        generatehighScore();

        quizBody.style.display = "none";
        gameOverDiv.gameoverStyleDisplay.display = "none";
        highScoreContainer.style.display= "flex",
        highScoreDiv.style.display ="block";
        endGameBtns.style.display = "flex";
     
        saveHighScore.push(currentHighScore);
        localStorageSetItem("saveHighScore", JSON.stringify(saveHighScore));
        generatehighScore
        function clearScore(){
            window.localStorage.clear();
            HighScoreDispalyname.textContent ="";
            HighScoreDisplayScore.textContent ="";
            //this set all variables to its original
            function replayQuiz (){
                highScoreContainer.style.display ="none";
                gameoverDiv.style.display = "none";
                startQuizDiv.style.display = "flex";
                timeLeft = 76; 
                score = 0;
                currentQuestionIndex = 0;
                //this check the response to each answer
                function checkAnswer(answer){
                   
                 correct = quizQuestion[currentQuestionIndex] {
                  if(answer ===correct &&  [currentQuestionIndex!==finalQuestionIndex]) {
                      score++;
                      alert("that is correct!");
                      currentQuestionIndex++;
                      generatedQuizQuestion();
                      //display results
                 if ( answer == correct && currentQuestionIndex !==finalQuestionIndex);
                alert ("that is correct"); 
                generatedQuizQuestion();

             }
                showscore();
            }
        }
    

