const questions = [
    {
        question: "What is the capital of India?",
        answers: ["Mumbai", "Delhi", "Chennai", "Kolkata"],
        correct: 1
    },
    {
        question: "HTML stands for?",
        answers: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyperlinks Text Mark Language",
            "None"
        ],
        correct: 0
    },
    {
        question: "Which language is used for styling web pages?",
        answers: ["HTML", "JQuery", "CSS", "XML"],
        correct: 2
    },
    {
        question: "Which is not a programming language?",
        answers: ["Python", "Java", "HTML", "C++"],
        correct: 2
    },
    {
        question: "Which symbol is used for comments in JavaScript?",
        answers: ["//", "<!-- -->", "#", "**"],
        correct: 0
    },
    {
        question: "JavaScript runs in?",
        answers: ["Server", "Browser", "Database", "Compiler"],
        correct: 1
    },
    {
        question: "CSS stands for?",
        answers: [
            "Creative Style Sheets",
            "Cascading Style Sheets",
            "Colorful Style Sheets",
            "Computer Style Sheets"
        ],
        correct: 1
    },
    {
        question: "Which HTML tag is used for JavaScript?",
        answers: ["<js>", "<javascript>", "<script>", "<code>"],
        correct: 2
    },
    {
        question: "Which company created JavaScript?",
        answers: ["Google", "Microsoft", "Netscape", "Apple"],
        correct: 2
    },
    {
        question: "Which operator compares value and type?",
        answers: ["==", "=", "===", "!="],
        correct: 2
    }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const buttons = document.querySelectorAll(".btn");
const progress = document.getElementById("progress");

function loadQuestion() {
    const q = questions[currentQuestion];
    questionEl.innerText = q.question;

    buttons.forEach((btn, index) => {
        btn.innerText = q.answers[index];
    });

    progress.innerText = `Question ${currentQuestion + 1} of ${questions.length}`;
}

function checkAnswer(selected) {
    if (selected === questions[currentQuestion].correct) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        document.querySelector(".quiz-container").innerHTML = `
            <h2>Quiz Completed!</h2>
            <p>Your Score: ${score} / ${questions.length}</p>
            <button class="btn" onclick="location.reload()">Restart Quiz</button>
        `;
    }
}

loadQuestion();