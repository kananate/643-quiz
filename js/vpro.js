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
        <a href="vpro.html">Réessayer le Quiz</a>
    </div>
    `;
    let quizElement = document.getElementById("quiz");
    quizElement.innerHTML = quizEndHTML;
};

// create questions here
let questions = [
  
    new Question(
        "Qu'est-ce qu'un code snippet?", ["une modéle de morceau de code reutilisable", "une bloc de code non utilisable", "un module complémentaire qui ajoute une noubelle fonctionnalité", "une fonction intégrée"], "une modéle de morceau de code reutilisable"
    ),
    new Question(
        "Où trouver des extraits de code dans Visual Studio Code ?", ["dans le marketplace des extensions",
             "dans l'ensemble des fonctions intégrées des code snippet", "liste de personnalisation définie", "Tous les options sont vraies"], "Tous les options sont vraies"
    ),
    new Question(
        "Quel tabstop indique la position finale du curseur dans un extrait de code personnalisé ?", ["$1", "$0", "$2", "$3"], "$0"
    ), 
   
    new Question(
        "À quoi sert l'extension Live Server ?", ["aperçu en temps réel de notre projet dans le navigateur", "aperçu dans vscode", "aperçu dans le terminal", "ça n'hexiste pas"], "aperçu en temps réel de notre projet dans le navigateur"
    ), new Question(
        "À quoi sert l'extension preview ?", ["aperçu en temps réel de notre projet dans le navigateur", "aperçu en temps réel de notre projet dans vscode", "aperçu danslz terminal", "ça n'hexiste pas"], "aperçu en temps réel de notre projet dans vscode"
    ),
    new Question(
        "À quoi servent les abréviations Emmet ?", ["écrire rapidement et efficacement du html", "créer de nouvelles balises", "créer de nouvelles fonctionnalités","comme son nom l'indique émet"], "écriez rapidement et efficacement du html"
    ),
    new Question(
        "Comment ajouter un dépôt GitHub distant à votre dépôt local dans Visual Studio Code ?", ["par le clonage", "selectionner le dépôt dans la liste ds vscode", "les deux précédents", "par push"], "les deux précédents"
    ),new Question(
        "Où trouver l'option permettant de passer à une nouvelle branche dans Visual Studio Code ?", ["bar d'activité", "bar de status", "bar des menus", "autres"], "bar de status"
    ) ,
    new Question(
        "Quelle est la signification du code de contrôle de source U ?", ["mattraqued", " detracked", "untracked", "deleted"], "untracked"
    ),
    new Question(
        "Quelle est la signification du code de contrôle de source M ?", ["mattraqued", " detracked", "untracked", "modified"], "modified"
    ),new Question(
        "Quelle est la signification du code de contrôle de source D ?", ["mattraqued", " detracked", "untracked", "deleted"], "deleted"
    ),
    new Question(
        "Où trouver l'option permettant de passer à une nouvelle branche dans Visual Studio Code ?", ["bar d'activité", "bar de status", "bar des menus", "autres"], "bar de status"
    ) 
];

// INITIALIZE quiz
let quiz = new Quiz(questions);

// display questions
displayQuestion();


// Add A CountDown for the Quiz
let time = 5;
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