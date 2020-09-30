// Variables
var startButton = document.getElementById('start-btn')
var nextButton = document.getElementById('next-btn')
var answerButton = document.getElementById('answers')
var questionContainerElement = document.getElementById('question-container')
var shuffledQuestions, currentQuestion
var questionElement = document.getElementById('question')
var myTimer = document.getElementById('timer')

//Next question function
function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestion])
}

//Start and next button event listeners
startButton.addEventListener('click', startQuiz)
nextButton.addEventListener('click', () => {
    currentQuestion++
    setNextQuestion()
})

//Start button function to start the quiz
function startQuiz() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestion = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()

}


//Question function for each question to appear
function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        var button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButton.appendChild(button)
    })
}

function resetState() {
    nextButton.classList.add('hide')
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild)
    }
}

//Selecting answer function
function selectAnswer(e) {
    var selectedButton = e.target
    var correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButton.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    nextButton.classList.remove('hide')
}


function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}


function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

//Questions
var questions = [
    {
        question: 'What is 78 + 192?',
        answers: [
          { text: '260', correct: false },
          { text: '270', correct: true },
          { text: '272', correct: false },
          { text: '258', correct: false }
        ]
      },
      {
        question: 'What is 1987 - 453?',
        answers: [
          { text: '1534', correct: true },
          { text: '1487', correct: false },
          { text: '1558', correct: false },
          { text: '1620', correct: false }
        ]
      },
      {
        question: 'What is 128 / 8?',
        answers: [
          { text: '14', correct: false },
          { text: '18', correct: false },
          { text: '16', correct: true },
          { text: '20', correct: false }
        ]
      },
      {
        question: 'What is 3 * 2?',
        answers: [
          { text: '6', correct: true },
          { text: '9', correct: false },
          { text: '7', correct: false },
          { text: '8', correct: false }
        ]
      }
]

//Timer that I had trouble getting to work
var myTimer
function clock() {
    myTimer = setInterval(myClock, 1000);
    function myClock() {
        document.getElementById("timer").innerHTML = c--;
        if (c == 0) {
        clearInterval(myTimer);
       }
    }
}

//Score function I wasn't able to get working
function calcScore(){
    document.getElementById("result").score;
    return;
}
