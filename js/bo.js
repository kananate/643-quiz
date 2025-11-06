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
        <a href="bo.html">Réessayer le Quiz</a>
    </div>
    `;
    let quizElement = document.getElementById("quiz");
    quizElement.innerHTML = quizEndHTML;
};

// create questions here
let questions = [

    new Question(
        "Quelle est la commande la plus dangereuse dans ce cours ?", ["rmdir", "mkdir", "clear", "rm -rf"], "rm -rf"
    ),
    new Question(
        "Quelle commande utiliser pour ajouter le drapeau exécutable à un fichier ?", ["execute", "add_flag", "chown", "chmod+x"], "chmod+x"
    ),
    new Question(
        "Le symbole > peut être utilisé pour rediriger la sortie d'une commande vers un fichier ?", ["oui", "no", "yes no", "non"], "oui"
    ),
    new Question(
        "La commande mv peut être utilisée pour renommer et déplacer des fichiers ?", ["oui", "no", "yes no", "non"], "oui"
    ),
    new Question(
        "La commande touch est utilisée pour :", ["modifier un fier", "creer un fichier vide", "supprimer un fichier", "il ya pas de touch commande"], "creer un fichier vide"
    ),
    new Question(
        "La commande mkdir est utilisée pour :", ["créer un fichier", "créer un alias", "créer un commit", "créer un dossier"], "créer un dossier"
    ),new Question(
        "Le symbole >> est utilisé pour ", ["ajouter du texte dans un fichier", "supprimer du texte dans un fichier", "ajouter du texte dans un fichier", "configurer un fichier"], "ajouter du texte dans un fichier"
    )
];

// INITIALIZE quiz
let quiz = new Quiz(questions);

// display questions
displayQuestion();


// Add A CountDown for the Quiz
let time = 3;
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