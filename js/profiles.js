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
        <a href="profiles.html">Réessayer le Quiz</a>
    </div>
    `;
    let quizElement = document.getElementById("quiz");
    quizElement.innerHTML = quizEndHTML;
};

// create questions here
let questions = [
  

    new Question(
        "À quoi servent les profils dans Visual Studio Code ?", ["changer le théme de couleur", "organiser le projet dans des fichiers", "personnaliser l'environnement et se retrouver rapidement dans les différentes configurations", "inviter les utilisateurs de vscode"], "personnaliser l'environnement et se retrouver rapidement dans les différentes configurations"
    ) 
     ,
    new Question(
        "Pouvez-vous partager un profil avec d'autres développeurs ?", [ "Vous pouvez effectivement partager un profil en l'exportant soit en tant que fichier local, soit en tant que Gist GitHub","non impossible de faire le partage", "oui mais uniquement en local","oui avec les developpeurs du monde entier"], "Vous pouvez effectivement partager un profil en l'exportant soit en tant que fichier local, soit en tant que Gist GitHub"
    ),
    new Question(
        "Quel est le seul profil qui ne peut être ni renommé ni supprimé dans Visual Studio Code ?", ["le profil html", "le profil de guithub", "le profil par défaut", "tous les profils"], "### heading"
    ),new Question(
        "Quels éléments peuvent être personnalisés dans un profil ?", ["seulement les paramétres", "les paramétres et extensions", "les paramètres, les extensions, les tâches, les extraits de code et les raccourcis clavier dans un profil", "seulement  les extensions, les tâches, les extraits de code"], "les paramètres, les extensions, les tâches, les extraits de code et les raccourcis clavier dans un profil"
    ),
    new Question(
        "Comment ouvrir un dossier dans Visual Studio Code avec un profil spécifique présélectionné à partir de la ligne de commande ?", ["code . profile profile_name", "code . --profile profile_name", "code . -profile profile_name", "code .  profile_name --profile"], "code . --profile profile_name"
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