let questions = [
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
                text: "Apenas o terceiro item não está correto",
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
        question: "Com a inclusão da gamificação no processo de ensino e aprendizagem, os alunos ganham autonomia, conhecimento prático e desenvolvem habilidades. Como consequência disso, o índice de satisfação e aprovação dos alunos, tem aumentado significativamente (prof Cláudio Rabelo Bastos Pró-reitor UniAteneu). Essa é uma dor que muitas instituições de ensino procuram resolver",
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
    indexes.push(0);
    indexes.push(getRandExept(indexes));
    indexes.push(getRandExept(indexes));
    return indexes;
}

let indexes = getRandomQuestions();
quiz = [questions[indexes[0]], questions[indexes[1]], questions[indexes[2]]];

// DOM Elements
const awsers = [].slice.call(document.getElementsByClassName("awnser"));
const question = document.getElementById('question');
const startButton = document.getElementById('send');
const nextButton = document.getElementById('next');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const roleInput = document.getElementById('role');
const phoneInput = document.getElementById('phone');
const awnserParentdiv = document.getElementById('awnsers');
const form = document.getElementById('form');
const option = document.getElementById('option');
const yes = document.getElementById('yes');
const no = document.getElementById('no');


// Variables
let selected = null;
let selectedDiv = null;
let questionID = 0;
let right = 0;
let wrong = 0;
let responses = [];
let data = {};
let userOption = undefined;

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
    if (lastQuestion()) {
        awnserParentdiv.style.display = 'none';
        nextButton.style.display = 'none';
        data = { ...data, hits: right, responses: JSON.stringify(responses) };
        sendResponse(data);
        return;
    }

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
            correctIndex = index;
        }
    });

    status = null;

    if (hit) {
        selectedDiv.style.backgroundColor = "#28a745";
        questionID++;
        right++;
        status = "hit";
        setTimeout(updateQuestion, 1000);
    } else {
        selectedDiv.style.backgroundColor = "#dc3545";
        awsers[correctIndex].style.backgroundColor = "#28a745";
        questionID++;
        wrong++;
        status = "miss";
        setTimeout(updateQuestion, 1000);
    }

    responses.push({
        question: question.innerHTML,
        status: status
    });

    selected = null;
    selectedDiv = null;
}

//updateQuestion(questionID);

// Save the data
function submit() {
    data = {
        name: nameInput.value,
        email: emailInput.value.toLowerCase(),
        role: roleInput.value,
        phone: phoneInput.value.replace(/[^\d]/g, '')
    }
    if (validade()) {
        startQuiz();
    } else {
        alert('Por favor, verifique os dados!');
    }
    //sendResponse(data);
}

function validade() {
    let phone = phoneInput.value.replace(/[^\d]/g, '');
    const numbers = /^[0-9]+$/;
    return (nameInput.value.length >= 3) && (validateEmail(emailInput.value)) && (phone.match(numbers) && phone.length >= 11);
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

function restart() {
    right = 0;
    wrong = 0;
    responses = [];
    questionID = 0;
    userOption = undefined;
    let indexes = getRandomQuestions();
    quiz = [questions[indexes[0]], questions[indexes[1]], questions[indexes[2]]];
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
    if (right !== 3) {
        question.innerHTML = `Infelizmente você só acertou ${right} de ${quiz.length} questões.<br>Quer tentar de novo?`
        option.style.display = 'flex';
    } else {
        question.innerHTML = `Obrigado por responder o quiz, você acertou ${right} de ${quiz.length} questões.<br>Parabéns, você acaba de ganhar uma licença do UP BUSINESS GAME e uma consultoria gratuita para implantação da disciplina na sua instituição de ensino. Em breve entraremos em contato, valeu!`;
    }
}

function handleYes() {
    userOption = true;
    option.style.display = 'none';
    restart();
}

function handleNo() {
    userOption = false;
    option.style.display = 'none';
    question.innerHTML = '😢 Ah, que pena!';
}