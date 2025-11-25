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
        <a href="copilot.html">Réessayer le Quiz</a>
    </div>
    `;
    let quizElement = document.getElementById("quiz");
    quizElement.innerHTML = quizEndHTML;
};

// create questions here
let questions = [
  new Question(
        "Quel est l'objectif de GitHub Copilot ?", ["manageur de de pilotes", "un assistant de codage alimenté par l'IA", "debogueur auto","IDE cloud"], "un assistant de codage alimenté par l'IA"
    ) 
     ,
    new Question(
        "Quel est l'objectif principal d'un participant au chat (@) dans GitHub Copilot ?", [ "choisir un langage particulier","il ya des agents de expert de miami", "force l'IA à dire hiii haaa","les participants de chat agissent effectivement comme des experts qui orientent les réponses du modèle d'IA sur un domaine particulier"], " les participants de chat agissent effectivement comme des experts qui orientent les réponses du modèle d'IA sur un domaine particulier"
    ),
    new Question(
        "Quelle commande Slash pouvez-vous utiliser pour analyser le code sélectionné et générer une analyse détaillée de sa logique et de son objectif ?", ["/help", "/fix", "/explain", "/doc"], "/explain"
    ),new Question(
        "Si vous souhaitez que Copilot concentre sa réponse sur le contenu de package.json sans ouvrir ou sélectionner le fichier. Quelle variable de chat devriez-vous inclure dans votre invite ?", ["#block", "#editor", "#class", "#file"], "#file"
    ),
    new Question(
        "Si vous souhaitez que Copilot concentre sa réponse sur le code spécifique que vous avez actuellement mis en surbrillance dans l'éditeur, quelle variable de chat devez-vous utiliser ?", ["#selection", "#codebase", "#line", "#block"], "#selection"
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