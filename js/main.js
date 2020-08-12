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
                text: "É uma metodologia ativa, que usa a mecânica de jogos, aplicado em áreas que não estão relacionadas a jogos, como: saúde, vida social, negócios e outros",
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
                text: "Vídeo aula",
                correct: false
            },
            {
                text: "Gamificação, projetos, resolução de problemas, sala invertida...",
                correct: true
            },
        ],
    },
    {
        question: "Qual a definição de meteodologia ativa?",
        choices: [
            {
                text: "São processos de aprendizagem em que os alunos participam ativamente da construção do conhecimento",
                correct: false
            },
            {
                text: "Processo de ensino pelo qual o aluno, passa a ser o responsável pela produção de atividades que potencializam seus conhecimentos, de forma prática",
                correct: false
            },
            {
                text: "Processo em que o professor cria/sugere atividades ou problemas que devem ser resolvidos pelos alunos, enquanto o professor passa a ser um consultor/facilitador",
                correct: false
            },
            {
                text: "Todas as alternativas acima estão corretas",
                correct: true
            },
        ],
    },
    {
        question: "Quais meteodologias ativas, podem ser associadas a gamificação?",
        choices: [
            {
                text: "ABE (aprendizagem baseada em equipes)",
                correct: false
            },
            {
                text: "Sala invertida",
                correct: false
            },
            {
                text: "Resolução de problemas",
                correct: false
            },
            {
                text: "Todas as alternativas estão corretas",
                correct: true
            },
        ],
    },
    {
        question: "O que o professor deve considerar ao aplicar a Gamificação?",
        choices: [
            {
                text: "Proporcionar a interdisciplinaridade",
                correct: false
            },
            {
                text: "Divisão de tarefas e responsabilidades",
                correct: false
            },
            {
                text: "Aulas teóricas em todas as aulas",
                correct: false
            },
            {
                text: "Construção do conhecimento com uso de simuladorTodas as alternativas estão corretas",
                correct: false
            },
            {
                text: "Apenas a resposta C não está correta",
                correct: true
            },
        ],
    },
    {
        question: "Conceitos utilizados na gamificação?",
        choices: [
            {
                text: "Competição e ranqueamento",
                correct: false
            },
            {
                text: "Cooperação",
                correct: false
            },
            {
                text: "Aplicação de fases",
                correct: false
            },
            {
                text: "Entrega de prêmios (pontos/notas)",
                correct: false
            },
            {
                text: "Todas as alternativas estão corretas",
                correct: true
            },
        ],
    },
    {
        question: "Qual seu nível de concordância, quando se afirma que, o uso da gamificação no processo de ensino e aprendizagem, proporciona benefícios como: Melhoria da memória e concentração, processo de aprendizagem mais prazeroso, autorresponsabilidade, desenvolve e aprimora habilidades e fortalece os relacionamentos entre membros do time",
        choices: [
            {
                text: "Muito pouco",
                correct: true
            },
            {
                text: "Pouco",
                correct: true
            },
            {
                text: "Razoável",
                correct: true
            },
            {
                text: "Muito",
                correct: true
            },
            {
                text: "TOP 😄",
                correct: true
            },
        ],
    },
    {
        question: "De acordo com pesquisas realizadas por algumas instituições de ensino superior (IES), qual foi o incremento no índice de rematrícula depois da implantação da gamificação:",
        choices: [
            {
                text: "25%",
                correct: true
            },
            {
                text: "18%",
                correct: false
            },
            {
                text: "10%",
                correct: false
            },
            {
                text: "15%",
                correct: false
            },
        ],
    },
    {
        question: "    9) Com a inclusão da gamificação no processo de ensino e aprendizagem, os alunos ganham autonomia, conhecimento prático e desenvolvem habilidades. Como consequência disso, o índice de satisfação e aprovação dos alunos, tem aumentado significativamente (prof Cláudio Rabelo Bastos Pró-reitor UniAteneu). Essa é uma dor que muitas instituições de ensino procuram resolver",
        choices: [
            {
                text: "Concordo",
                correct: true
            },
            {
                text: "Concordo parcialmente",
                correct: true
            },
            {
                text: "Discordo",
                correct: true
            },
        ],
    },
    {
        question: "Você concorda que as metodologias ativas, contribuem para melhor avaliação do MEC?",
        choices: [
            {
                text: "Muito pouco",
                correct: true
            },
            {
                text: "Pouco",
                correct: true
            },
            {
                text: "Razoável",
                correct: true
            },
            {
                text: "Muito",
                correct: true
            },
            {
                text: "TOP 😄",
                correct: true
            },
        ],
    },
];

// Generate a random Integer between 0 and 9
function getRand() {
    return Math.floor(Math.random() * 10);
}

// Get a random Integer exept the vaues that an array contains
function getRandExept(values) {
    let index = getRand();
    let valid = true;
    if (values) {
        values.forEach(value => {
            valid = index != value;
        });
    }

    if (valid) {
        return index;
    } else {
        return getRandExept(values);
    }
}

// Set the random questions to the quiz
function getRandomQuestions() {
    let indexes = [];
    indexes.push(getRandExept(indexes));
    indexes.push(getRandExept(indexes));
    indexes.push(getRandExept(indexes));
    return indexes;
}

let indexes = getRandomQuestions();
quiz = [quiz[indexes[0]], quiz[indexes[1]], quiz[indexes[2]]];

// DOM Elements
let awsers = [].slice.call(document.getElementsByClassName("awnser"));
let question = document.getElementById('question');
let startButton = document.getElementById('send');
let nextButton = document.getElementById('next');
let nameInput = document.getElementById('name');
let emailInput = document.getElementById('email');
let roleInput = document.getElementById('role');
let awnserParentdiv = document.getElementById('awnsers');
let form = document.getElementById('form');

// Variables
let selected = null;
let selectedDiv = null;
let questionID = 0;
let right = 0;
let wrong = 0;
let responses = [];
let data = {};

// Select and highlight an option
function select(div, id) {
    selected = id;
    clearSelection();
    div.style.backgroundColor = "#17a2b8";
    selectedDiv = div;
}

// Clear the highleted option
function clearSelection() {
    awsers.forEach(awnser => {
        awnser.style.backgroundColor = "#6c757d";
    });
}

// Update the quote and the options text
function updateQuestion() {
    question.innerHTML = quiz[questionID].question;
    awsers.forEach((awnser, index) => {
        if (quiz[questionID].choices[index]) {
            awnser.innerHTML = quiz[questionID].choices[index].text;
            awnser.style.display = "";
        } else {
            awnser.style.display = "none";
        }

    });
    clearSelection();
}

// When the quiz over clean the page
function lastQuestion() {
    if (questionID > quiz.length - 1) {
        awnserParentdiv.style.display = 'none';
        nextButton.style.display = 'none';
        data = { ...data, hits: right, responses: JSON.stringify(responses) };
        return true;
    }
    return false;
}

// Check if the player was a right awnser
function check() {
    if (selected == null) return;

    let correctIndex = -1;
    let hit = false;

    quiz[questionID].choices.forEach((choice, index) => {
        if (choice.correct == true) {
            hit = hit || (index == selected);
        }
    });

    status = null;

    if (hit) {
        selectedDiv.style.backgroundColor = "#28a745";
        questionID++;
        right++;
        status = "hit";
        if (!lastQuestion()) {
            setTimeout(updateQuestion, 1000);
        }

    } else {
        selectedDiv.style.backgroundColor = "#dc3545";
        questionID++;
        wrong++;
        status = "miss";
        if (!lastQuestion()) {
            setTimeout(updateQuestion, 1000);
        }
    }

    responses.push({
        question: selectedDiv.innerHTML,
        status: status
    });

    selected = null;
    selectedDiv = null;

    if (lastQuestion()) {
        sendResponse(data);
    }
}

//updateQuestion(questionID);

// Save the data
function submit() {
    data = {
        name: nameInput.value,
        email: emailInput.value.toLowerCase(),
        role: roleInput.value
    }
    if(validade()){
        startQuiz();
    }else{
        alert('Por favor, verifique os dados!');
    }
    //sendResponse(data);
}

function validade(){
    return (nameInput.value.length >= 3) && (validateEmail(emailInput.value));
}

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function startQuiz() {
    form.style.display = 'none';
    question.style.display = 'flex';
    awnserParentdiv.style.display = 'flex';
    nextButton.style.display = 'flex';
    updateQuestion(questionID);
}

// Send the data
function sendResponse(data) {
    var xhr = new XMLHttpRequest();
    var url = "https://formspree.io/xbjzbzjg";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var json = JSON.parse(xhr.responseText);
            //console.log(json);
        }
    };
    data = JSON.stringify(data);
    xhr.send(data);
    end();
}

// Clear the page and ends que quiz
function end() {
    question.innerHTML = `Obrigado por responder o quiz, você acertou ${right} de ${quiz.length} questões.<br>Parabéns, você acaba de ganhar uma cópia teste e consultoria!`;
}