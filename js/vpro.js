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
        "Quelle commande devez-vous utiliser pour exécuter un fichier Python dans le terminal intégré ?", ["py", "python", "pypy", "pythoncom"], "python"
    ),
    new Question(
        "Que verrez-vous dans la barre d'état si votre fichier Python est indenté avec 4 espaces par niveau d'indentation ?", ["espaces 2", "indents 4", "indent 2","espaces 4"], "espaces 4"
    ),
    new Question(
        "À quoi servent les linters Python ?", ["exécuter le code", "formatter le code", "trouver des erreurs", "réecrire le code"], "trouver des erreurs"
    ),new Question(
        "Pourquoi est-il important d'utiliser des environnements virtuels lors de l'installation de paquets Python ?", 
        ["gagner en performance", "rendre le code plus lisible", "isoler le projet et prevenir des conflits de paquages", "réduire le code"], "isoler le projet et prevenir des conflits de paquages"
    ) ,
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
    )  ,
    new Question(
        "Qu'est-ce que jupyter notebook?", [ "un cahier qui combine du texte, du code et des visualisations dans un seul document interactif,","un document text", "un macbook pro", "enregistrer auto des statistiques"], "un cahier qui combine du texte, du code et des visualisations dans un seul document interactif"
    ),
    new Question(
        "À quoi servent généralement les notebooks Jupyter ?", ["créer des sites web", "développer un app mobile", "analyse les données et les visualisent", "developper des jeux vidéos"], "analyse les données et les visualisent"
    ),new Question(
        "Quelle est l'extension de fichier d'un notebook Jupyter ?", [".py", ".ipy", ".pynb", ".nb"], ".pynb"
    ),
    new Question(
        "Quel langage de balisage est utilisé pour les cellules de texte dans les notebooks Jupyter ?", ["marker", "markup", "markdown", "markup"], "markdown"
    ),
    new Question(
        "Qu'est-ce que le noyau d'un notebook Jupyter ?", ["un langage de programmation", "un environnement d'éxécution", "un éditeur de code", "un format de fichier"], "un environnement d'éxécution"
    ) 
     ,
    new Question(
        "Qu'est-ce que Markdown ?", [ "un langage de balisage utilisé pour créer du texte formaté","un langage de balisage utilisé pour créer du code", "un langage de balisage utilisé pour créer du code python", "un langage de balisage utilisé pour créer du texte non formaté"], "un langage de balisage utilisé pour créer du texte formaté"
    ),
    new Question(
        "Comment créer un titre de niveau 3 dans Markdown ?", ["#heading", "##heading", "###heading", "### heading"], "### heading"
    ),new Question(
        "Comment créer du texte en gras dans Markdown ?", ["**Text**", "--Text--", "((Text))", "{Text}"], ".pynb"
    ),
    new Question(
        "Comment créer un bloc de code avec mise en évidence de la syntaxe Python dans Markdown ?", ["print(hi)", "'''print(hi)'''", "...print(hi)...", "'''python <br>print(hi)'''"], "'''python <br>print(hi)'''"
    ),
    new Question(
        "Comment créer un lien dans Markdown ?", ["[My Link][http://myurl.com)", "[My Link](http://myurl.com)", "[My Link][http://myurl.com]", "(My Link)[http://myurl.com]"], "[My Link](http://myurl.com)"
    ) ,
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
    ) ,new Question(
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