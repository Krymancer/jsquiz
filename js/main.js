let quiz = [
    {
        question: "O que é GAMIFICAÇÃO?",
        choices: [
            {
                text: "Jogos Digitais",
                correct: false
            },
            {
                text: "Jogos de Entreterimento",
                correct: false
            },
            {
                text: "É uma metodologia ativa, que usa a mecânica de jogos, aplicando em areas q n",
                correct: true
            },
        ],
    },
    {
        question: "Quais dessas atividades é considerada uma meteodologia ativa?",
        choices: [
            {
                text: "Aula expositiva",
                correct: false
            },
            {
                text: "Video aula",
                correct: false
            },
            {
                text: "Gamificação, projetos, resolução de problemas, sala invertida",
                correct: true
            },
        ],
    },
    {
        question: "Qual a definição de meteodologia ativa?",
        choices: [
            {
                text: "São processos de aprendizagem em que os alunso participam ativamente",
                correct: false
            },
            {
                text: "Processo de ensino pelo qual o aluno passa a ser o responsavél",
                correct: false
            },
            {
                text: "Todas as alternativas estao corretas",
                correct: true
            },
        ],
    },
    {
        question: "Quais meteodologias ativas, podem ser associadas a gamificação?",
        choices: [
            {
                text: "ABE (Aprendizagem Baseada em Equipes)",
                correct: false
            },
            {
                text: "Sala Invertida",
                correct: false
            },
            {
                text: "Todas as alternativas estão corretas",
                correct: true
            },
        ],
    },
];

let awsers = [].slice.call(document.getElementsByClassName("awnser"));
let question = document.getElementById('question');
let selected = null;
let selectedDiv = null;
let questionID = 0;
let right = 0;
let wrong = 0;

function select(div,id) {
    selected = id;
    clearSelection();
    div.style.backgroundColor = "#17a2b8";
    selectedDiv = div;
}

function clearSelection(){
    awsers.forEach(awnser => {
        awnser.style.backgroundColor = "#6c757d";
    });
}

function updateQuestion() {
    question.innerHTML = quiz[questionID].question;
    awsers.forEach((awnser, index) => {
        awnser.innerHTML = quiz[questionID].choices[index].text;
    });
    clearSelection();
}

function check() {
    if(questionID>quiz.length-1){
        alert(`Acabaram as questões, você acertou ${right} questões e errou ${wrong}!`);
        return;
    }

    let correctIndex = -1;
    
    quiz[questionID].choices.forEach((choice, index) => {
        if (choice.correct == true) {
            correctIndex = index;
        }
    });

    if(correctIndex == selected){
        selectedDiv.style.backgroundColor = "#28a745";
        questionID++;
        setTimeout(updateQuestion,1000);
        right++;
    }else{
        selectedDiv.style.backgroundColor = "#dc3545";
        questionID++;
        setTimeout(updateQuestion,1000);
        wrong++;
    }
}

updateQuestion(questionID);