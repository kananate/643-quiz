const titreResultat = document.querySelector('.resultats h2');


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
        <a href="b1.html">Réessayer le Quiz</a>
    </div>
    `;
    let quizElement = document.getElementById("quiz");
    quizElement.innerHTML = quizEndHTML;
};

// create questions here
let questions = [
    new Question(
        "Avantages de l'interface en ligne de commande:", ["meilleur option pour les technologies", "les interphaces graphiques cachent certaines choses", "Beaucoup d'aide en ligne sur l'utilisation des commandes", "Tous ce qui précéde est vrai"], "Tous ce qui précéde est vrai"
    ),
    new Question(
        "Quels sont les deux types de shells ?", ["bonnie et cli", "guy et cli", "gui et cry", "gui et cli"], "gui et cli"
    ),
    new Question(
        "Est-il possible de modifier ou de référencer des dossiers sur des lecteurs Windows autres que le lecteur C:\ à l'aide de Git Bash.", ["oui", "oui mais...", "non", "non mais..."], "oui"
    ),
    new Question(
        "Comment fermer Git Bash ?", ["close", "exit", "ctrl c", "alt  delete"], "exit"
    ),
    
    new Question(
        "Quelle commande permet de trouver l'emplacement d'un fichier exécutable, à condition qu'il soit disponible dans le chemin d'accès actuel ?", ["which", "what", "where", "find"], "which"
    ),
    new Question(
        "Quelle commande vous permettra de changer de répertoire ?", ["pwd", "ls", "cd", "ps"], "cd"
    )
];

// INITIALIZE quiz
let quiz = new Quiz(questions);

// display questions
displayQuestion();


// Add A CountDown for the Quiz
let time = 2;
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






