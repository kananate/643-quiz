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
        <a href="v1.html">Réessayer le Quiz</a>
    </div>
    `;
    let quizElement = document.getElementById("quiz");
    quizElement.innerHTML = quizEndHTML;
};

// create questions here
let questions = [
  
    new Question(
        "Lorsque vous ________ un dossier dans l'Explorateur, vous affichez tous les fichiers et dossiers qu'il contient. ?", ["developpez", "reduisez"],"developper"
    ),
    new Question(
        "Quand avez-vous besoin d'actualiser manuellement l'Explorateur dans Visual Studio Code ?", ["Aprés avoir créer un dossier", "aprés modification d'un fichier", "quanc on ouvre un nouveau fichier", "lorsque sa vue ne correspond pas à la structure actuelle de votre projet sur le système de fichiers"], "lorsque sa vue ne correspond pas à la structure actuelle de votre projet sur le système de fichiers"
    ),
    new Question(
        "Quel est l'objectif principal de l'outil de recherche dans Visual Studio Code ?", ["debbuger le code", "naviguer dans les fichier", "editer des fichiers", "recherche de texte et de motif à l'aide du code"], "recherche de texte et de motif à l'aide du code"
    ),
    new Question(
        "Quand faut-il activer l'option « Respecter la casse » dans la recherche ?", ["correspondance majuscules/minuscules", "utiliser une expression régulière", "utiliser un motif","correspondance des mots entiers"], "correspondance des mots entiers"
    ),
    new Question(
        "Que pouvez-vous utiliser pour spécifier des modèles de recherche complexes permettant de trouver des correspondances dans votre code ?", ["conditions réguliéres", "motif réguliers", "séquences réguliers", "expressions régulieres"], "expressions régulieres"
    ),
    new Question(
        "Quelle commande pouvez-vous utiliser pour ouvrir des fichiers et des dossiers dans Visual Studio Code directement depuis le terminal ?", ["open", "vscode", "code", "shut"], "code"
    )
];

// INITIALIZE quiz
let quiz = new Quiz(questions);

// display questions
displayQuestion();


// Add A CountDown for the Quiz
let time = 10;
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