const perguntaElemento =
    document.getElementById("pergunta");

const respostasElemento =
    document.getElementById("respostas");

const progressoElemento =
    document.getElementById("progresso");

const pontuacaoElemento =
    document.getElementById("pontuacao");

const botaoReiniciar =
    document.getElementById("reiniciar");


const perguntas = [

    {
        pergunta: "O que é um array?",

        respostas: [
            "Uma função",
            "Uma estrutura para guardar vários valores",
            "Uma propriedade CSS",
            "Um evento"
        ],

        correta: 1
    },


    {
        pergunta: "Qual é o índice do primeiro elemento de um array?",

        respostas: [
            "1",
            "-1",
            "0",
            "2"
        ],

        correta: 2
    },


    {
        pergunta: "Qual método adiciona um elemento ao final de um array?",

        respostas: [
            "push()",
            "splice()",
            "forEach()",
            "getElementById()"
        ],

        correta: 0
    },


    {
        pergunta: "O que significa true em JavaScript?",

        respostas: [
            "Texto",
            "Erro",
            "Verdadeiro",
            "Número"
        ],

        correta: 2
    },


    {
        pergunta: "Para que serve addEventListener()?",

        respostas: [
            "Criar um arquivo CSS",
            "Detectar eventos e executar uma função",
            "Excluir um array",
            "Criar uma variável automaticamente"
        ],

        correta: 1
    }

];


let perguntaAtual = 0;

let pontuacao = 0;


function mostrarPergunta() {

    const pergunta =
        perguntas[perguntaAtual];


    perguntaElemento.textContent =
        pergunta.pergunta;


    respostasElemento.innerHTML = "";


    progressoElemento.textContent =
        `Pergunta ${perguntaAtual + 1} de ${perguntas.length}`;


    pontuacaoElemento.textContent =
        `Pontuação: ${pontuacao}`;


    pergunta.respostas.forEach(
        function(resposta, indice) {

            const botao =
                document.createElement("button");


            botao.textContent =
                resposta;


            botao.addEventListener(
                "click",
                function() {

                    verificarResposta(indice, botao);

                }
            );


            respostasElemento.appendChild(
                botao
            );

        }
    );

}


function verificarResposta(indice, botao) {

    const pergunta =
        perguntas[perguntaAtual];


    if (indice === pergunta.correta) {

        botao.classList.add("correta");
        pontuacao++;

    } else {

        botao.classList.add("incorreta");

    }


    respostasElemento.querySelectorAll("button").forEach(
        function(respostaBotao) {

            respostaBotao.disabled = true;

        }
    );


    setTimeout(
        function() {

            perguntaAtual++;

            if (perguntaAtual < perguntas.length) {

                mostrarPergunta();

            } else {

                mostrarResultado();

            }

        },
        700
    );

}


function mostrarResultado() {

    respostasElemento.innerHTML = "";


    perguntaElemento.textContent =
        `Você acertou ${pontuacao} de ${perguntas.length} perguntas.`;


    progressoElemento.textContent =
        "Quiz finalizado";


    pontuacaoElemento.textContent =
        `Pontuação final: ${pontuacao}`;


    botaoReiniciar.hidden = false;

}


function reiniciarQuiz() {

    perguntaAtual = 0;

    pontuacao = 0;


    botaoReiniciar.hidden = true;


    mostrarPergunta();

}


botaoReiniciar.addEventListener(
    "click",
    function() {

        reiniciarQuiz();

    }
);

mostrarPergunta();