// CREATE A QUIZ CLASS
class Quiz {
    constructor(questions) {
        this.score = 0;
        this.questions = questions;
        this.questionIndex = 0;
    }

    getQuestionIndex() {
        return this.questions[this.questionIndex];
    }

    guess(answer) {
        if (this.getQuestionIndex().isCorrectAnswer(answer)) {
            this.score++;
        }
        this.questionIndex++;
    }

    isEnded() {
        return this.questionIndex === this.questions.length;
    }
}

// Create a question Class
class Question {
    constructor(text, choices, answer) {
        this.text = text;
        this.choices = choices;
        this.answer = answer;
    }

    isCorrectAnswer(choice) {
        return this.answer === choice;
    }
}

// NOW DISPLAY THE QUESTIONS
function displayQuestion() {
    if (quiz.isEnded()) {
        showScores();
    } else {
        // show question
        let questionElement = document.getElementById("question");
        questionElement.innerHTML = quiz.getQuestionIndex().text;

        // show options
        let choices = quiz.getQuestionIndex().choices;
        for (let i = 0; i < choices.length; i++) {
            let choiceElement = document.getElementById("choice" + i);
            choiceElement.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

// GUESS ANSWER
function guess(id, guess) {
    let button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        displayQuestion();
    }
};

// SHOW QUIZ PROGRESS
function showProgress() {
    let currentQuestionNumber = quiz.questionIndex + 1;
    let ProgressElement = document.getElementById("progress");
    ProgressElement.innerHTML =
        `Question ${currentQuestionNumber} of ${quiz.questions.length}`;
};

// SHOW SCORES
function showScores() {
    let quizEndHTML =
        `
    <h1>Quiz Terminé</h1>
    <h2 id='score'> Your scored: ${quiz.score} of ${quiz.questions.length}</h2>
    
    <div class="quiz-repeat">
        <a href="v4.html">Réessayer le Quiz</a>
    </div>
    `;
    let quizElement = document.getElementById("quiz");
    quizElement.innerHTML = quizEndHTML;
};

// create questions here
let questions = [
  
    new Question(
        "Qu'est-ce qu'une extension dans Visual Studio Code ?", ["une theme de couleur", "Une langage de programmation", "un module complémentaire qui ajoute une noubelle fonctionnalité", "une fonction intégrée"], "un module complémentaire qui ajoute une noubelle fonctionnalité"
    ),
    new Question(
        "Quelle est la différence entre désactiver et désinstaller une extension ?", ["pas de difference", "pas active du tout", "tous les deux restent actifs", "Desactiver reste installer et désinstaller le supprime"], "Desactiver reste installer et désinstaller le supprime"
    ),
    new Question(
        "Quel filtre utiliser pour trouver des extensions liées à la science des données ?", ["data science", "@data-science", "@cat:data science", "@category: data science"], "@category: data science"
    ), 
   
    new Question(
        "Quel filtre utiliser pour trier les extensions par note ?", ["sort rationg", "@rating:sort", "@cat:rat", "@sort:rating"], "@sort:rating"
    )
];

// INITIALIZE quiz
let quiz = new Quiz(questions);

// display questions
displayQuestion();


// Add A CountDown for the Quiz
let time = 1;
let quizTimeInMinutes = time * 60 * 60;
let quizTime = quizTimeInMinutes / 60;

let counting = document.getElementById("count-down");

function startCountdown() {
    let quizTimer = setInterval(function() {
        if (quizTime <= 0) {
            clearInterval(quizTimer);
            showScores();
        } else {
            quizTime--;
            let sec = Math.floor(quizTime % 60);
            let min = Math.floor(quizTime / 60) % 60;
            counting.innerHTML = `TIME: ${min} : ${sec}`;
        }
    }, 1000);
}

startCountdown();