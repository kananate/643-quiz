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
        <a href="debug.html">Réessayer le Quiz</a>
    </div>
    `;
    let quizElement = document.getElementById("quiz");
    quizElement.innerHTML = quizEndHTML;
};

// create questions here
let questions = [
  

    new Question(
        "Qu'est-ce que le débogueur ?", [ "un programme qui éxécute le code","un detecteur de bugs dans le code", "un programme asynchrone", "n'entre dans aucun des trois précédents"], "un detecteur de bugs dans le code"
    ),
    new Question(
        "Qu'est-ce qu'un point d'arrêt ou breakpoint ?", ["un code qui crash", " ligne de code qui lance une exception", "une pause intentionnelle que vous pouvez établir pendant l'exécution d'un programme pour faciliter le débogage", "un panneau stod du code"], "une pause intentionnelle que vous pouvez établir pendant l'exécution d'un programme pour faciliter le débogage"
    ),new Question(
        "Qu'est-ce qu'un point de connexion ou logpoint? ", [" un message dans la console qui interrompre l'exécution du programme", "  un message dans la console sans interrompre l'exécution du programme", " un message dans la console qui met en pause l'exécution du programme", "un message qui arréte le programme dans une ligne de code donnée"], " un message dans la console sans interrompre l'exécution du programme"
    ),
    new Question(
        "Quelle action de débogage vous permet de passer au point d'arrêt suivant ?", ["continue", "stop", "step over", "step by step"], "continue"
    ),
    new Question(
        "Le débogueur s'arrêtera si la condition d'un point d'arrêt conditionnel est...", ["null", "vraie", "fausse", "fauve"], "vraie"
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