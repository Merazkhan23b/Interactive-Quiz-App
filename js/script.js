const questions = [
   {
      question: "Which planet is known as the “Red Planet”?",
      answers: [
       { text: "Venus", correct: false},
       { text: "Mars", correct: true},
       { text: "Jupiter", correct: false},
       { text: "Saturn ", correct: false},
      ]
   },
   {
       question: "What is the value of 12 multiply by 8?",
      answers: [
       { text: "80", correct: false},
       { text: "92", correct: false},
       { text: "96", correct: true},
       { text: "108", correct: false},
      ]
    },
    {
        question: "Who is known as the “Father of the Nation” in India?",
      answers: [
       { text: "Jawaharlal Nehru", correct: false},
       { text: "Sardar Patel", correct: false},
       { text: "Subhas Chandra Bose", correct: false},
       { text: "Mahatma Gandhi", correct: true},
      ]
     },
      {
        question: "Which of the following is an input device?",
      answers: [
       { text: "Monitor", correct: false},
       { text: "Keyboard", correct: true},
       { text: "Printer", correct: false},
       { text: "Speaker ", correct: false},
      ]
     },
      {
        question: "Choose the correct spelling:",
      answers: [
       { text: "Environment", correct: true},
       { text: "Enviroment", correct: false},
       { text: "Enviourment", correct: false},
       { text: "Envoirnment ", correct: false},
      ]
     }
   ];
   
   const questionElement = document.getElementById("question");
   const answerButtons = document.getElementById("answer-buttons");
   const nextButton = document.getElementById("next-btn");
   
   let currentQuestionIndex = 0;
   let score = 0;
   
   function startQuiz(){
       currentQuestionIndex=0;
       score = 0;
       nextButton.innerHTML = "Next";
       showQuestion();
   } 
  function showQuestion(){
     resetState();
     let currentQuestion = questions[currentQuestionIndex];
     let questionNo = currentQuestionIndex + 1;
     questionElement.innerHTML = questionNo + ". " + currentQuestion.
     question;
     
     currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
             button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
        }); 
  }
  
  function resetState(){
   nextButton.style.display = "none";
   while(answerButtons.firstChild){
     answerButtons.removeChild(answerButtons.firstChild);
   }
  }
  function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
      selectedBtn.classList.add("correct");
      score++;
    } 
    else{
      selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
      if(button.dataset.correct === "true"){
           button.classList.add("correct");
      }
      button.disabled = true;
       });
       nextButton.style.display = "block";
  }
  function showScore(){
     resetState();
     questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
     nextButton.innerHTML = "Play Again";
     nextButton.style.display = "block"; 
  }
  
  function handleNextButton(){
     currentQuestionIndex++;
     if(currentQuestionIndex < questions.length){
          showQuestion();
     }else{
        showScore();
     }
  }
  
  
  nextButton.addEventListener("click",()=>{
   if(currentQuestionIndex < questions.length){
          handleNextButton();
    }
    else{
      startQuiz();
    }
  });
  startQuiz(); 
