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

function getRand() {
    return Math.floor(Math.random() * 10);
}

let indexes = [getRand(), getRand(), getRand()];

quiz = [quiz[indexes[0]], quiz[indexes[1]], quiz[indexes[2]]];

let awsers = [].slice.call(document.getElementsByClassName("awnser"));
let question = document.getElementById('question');
let selected = null;
let selectedDiv = null;
let questionID = 0;
let right = 0;
let wrong = 0;
let responses = [];

function select(div, id) {
    selected = id;
    clearSelection();
    div.style.backgroundColor = "#17a2b8";
    selectedDiv = div;
}

function clearSelection() {
    awsers.forEach(awnser => {
        awnser.style.backgroundColor = "#6c757d";
    });
}

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

function lastQuestion(){
    if (questionID > quiz.length - 1) {
        // alert(`Acabaram as questões, você acertou ${right} questões e errou ${wrong}!`);
        awsers.forEach(awnser => {
            awnser.style.visibility = "hidden";
        });
        question.innerHTML = `Obrigado por responder o quiz, você acertou ${right} de ${quiz.length} questões.<br>Por favor, preencha a baixo e envie as respostas`
        button = document.getElementById('next');
        form = document.getElementById('form');
        button.innerHTML = "Enviar";
        button.style.display = "none";
        form.style.display = "inline";
        return true;
    }
    return false;
}

function check() {
    if (selected == null) return;
    
    let correctIndex = -1;

    quiz[questionID].choices.forEach((choice, index) => {
        if (choice.correct == true) {
            correctIndex = index;
        }
    });

    status = null;

    if (correctIndex == selected) {
        selectedDiv.style.backgroundColor = "#28a745";
        questionID++;
        right++;
        status = "acertou";
        if(!lastQuestion()){
            setTimeout(updateQuestion, 1000);
        }

    } else {
        selectedDiv.style.backgroundColor = "#dc3545";
        questionID++;
        wrong++;
        status = "errou";
        if(!lastQuestion()){
            setTimeout(updateQuestion, 1000);
        }
    }

    responses.push({
        id: selected,
        text: selectedDiv.innerHTML,
        status: status
    });

    selected = null;
    selectedDiv = null;
}

updateQuestion(questionID);

function submit(){
    let nameInput = document.getElementById('name');
    let emailInput = document.getElementById('email');
    let data = {
        name: nameInput.value,
        email: emailInput.value,
        responses: JSON.stringify(responses),
        acertos: right,
        erros: wrong
    };

    sendResponse(data);

}
function sendResponse(data) {
    var xhr = new XMLHttpRequest();
    var url = "https://formspree.io/mbjzbkpw";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var json = JSON.parse(xhr.responseText);
            console.log(json);
        }
    };
    //var data = JSON.stringify({ "email": "hey@mail.com", "password": "101010" });
    data = JSON.stringify(data);
    xhr.send(data);
    end();
}

function end(){
    question.innerHTML = `Obrigado pela participação!`
    form = document.getElementById('form');
    form.style.display = "none";
}