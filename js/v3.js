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
        <a href="v3.html">Réessayer le Quiz</a>
    </div>
    `;
    let quizElement = document.getElementById("quiz");
    quizElement.innerHTML = quizEndHTML;
};

// create questions here
let questions = [
  
    new Question(
        "Que verrez-vous si vous sélectionnez votre code et qu'il est indenté avec des espaces ?", ["asterix", "virgule", "obelix", "petits points"], "petits points"
    ),
    new Question(
        "Quel est le raccourci clavier permettant d'ouvrir le panneau Paramètres dans Visual Studio Code ?", ["ctrl s", "ctrl +", "ctrl ,", "ctrl x"], "ctrl ,"
    ),
    new Question(
        "Quels sont les deux types d'espaces de travail dans Visual Studio Code ?", ["dossier unique et dossiers de travail à racines multiples", "dossier multiple et dossiers de travail à racines multiples", "dossier unique et dossiers de travail à racines unique", "dossier unique seulement"], "dossier unique et dossiers de travail à racines multiples"
    ), 
   
    new Question(
        "Qu'est-ce que le mode Zen dans Visual Studio Code ?", ["outil de deboggage", "formatteur de code", "debuggeur de code", "une fonctionnalité qui masque la barre latérale et de status pour une expérience de codage sans distraction"], "une fonctionnalité qui masque la barre latérale et de status pour une expérience de codage sans distraction"
    ),
    new Question(
        "Comment passer du deuxième groupe d'éditeurs de gauche à droite lorsque plusieurs groupes d'éditeurs sont ouverts ?", ["ctrl 1", "ctrl 2", "ctrl 3", "ctrl 4"], "ctrl 2"
    ), 
   
    new Question(
        "Qu'est-ce que le Sticky Scroll dans Visual Studio Code ?", ["permet de visualiser les premières lignes des scopes imbriqués actuellement visibles en haut de l'éditeur,", "permet de visualiser les derniéres lignes des scopes imbriqués actuellement visibles en bas de l'éditeur,", "debuggeur de code", "une fonctionnalité qui masque la barre latérale et de status pour une expérience de codage sans distraction"], "permet de visualiser les premières lignes des scopes imbriqués actuellement visibles en haut de l'éditeur,"
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