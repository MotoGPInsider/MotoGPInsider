const quizData = [
    {
        question: "Qual è il campione del mondo MotoGP 2021?",
        answers: [
            { text: "Marc Marquez", correct: false },
            { text: "Fabio Quartararo", correct: true },
            { text: "Joan Mir", correct: false },
            { text: "Valentino Rossi", correct: false }
        ]
    },
    {
        question: "Qual è il circuito più lungo nel calendario della MotoGP?",
        answers: [
            { text: "Mugello", correct: false },
            { text: "Le Mans", correct: false },
			{ text: "Phillip Island", correct: true },
            { text: "Sepang International Circuit", correct: false }
        ]
    },
	{
        question: "Quale team ha vinto il titolo del Costruttore nel 2022?",
        answers: [
            { text: "Yamaha", correct: false },          
			{ text: "Honda", correct: false },
            { text: "Suzuki", correct: false },
			{ text: "Ducati", correct: true }
        ]
    },
	{
        question: "Quale pilota ha ottenuto più vittorie nella stagione 2022?",
        answers: [
            { text: "Jack Miller", correct: false },          
			{ text: "Enea Bastianini", correct: false },
            { text: "Francesco Bagnaia", correct: true },
			{ text: "Fabio Quartararo", correct: false }
        ]
    },
	{
        question: "In quale paese si trova il circuito di Misano, che ospita regolarmente una tappa del Campionato del Mondo MotoGP?",
        answers: [
            { text: "Italia", correct: true },          
			{ text: "Spagna", correct: false },
            { text: "Francia", correct: false },
			{ text: "Germania", correct: false }
        ]
    },
	{
        question: "Quale pilota detiene il record del giro più veloce al Mugello, uno dei circuiti più iconici nel calendario della MotoGP?",
        answers: [
            { text: "Valentino Rossi", correct: false },          
			{ text: "Marc Márquez", correct: true },
            { text: " Andrea Dovizioso", correct: false },
			{ text: "Jorge Lorenzo", correct: false }
        ]
    },
	{
        question: "Qual è il nome del trofeo assegnato al pilota che vince il Campionato del Mondo MotoGP alla fine della stagione?",
        answers: [
            { text: "Trofeo d'Oro", correct: true },          
			{ text: "Coppa dei Campioni", correct: false },
            { text: "Trofeo del Campione", correct: false },
			{ text: " Coppa del Mondo MotoGP", correct: false }
        ]
    },
	{
        question: "Qual è la denominazione ufficiale del circuito situato a Barcellona, che ospita una tappa del Campionato del Mondo MotoGP?",
        answers: [      
			{ text: "Circuito di Montmelo", correct: false },
            { text: "Circuito Catalano", correct: false },
			{ text: "Barça Racing Circuit", correct: false },
			{ text: "Circuit de Barcelona-Catalunya", correct: true }
        ]
    },
];

let currentQuestionIndex = 0;
let userScore = 0;

const questionContainer = document.getElementById("question-container");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-button");

function startQuiz() {
    showQuestion(quizData[currentQuestionIndex]);
}

function showQuestion(question) {
    questionContainer.innerText = question.question;
    clearAnswerButtons();
	
    question.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        button.addEventListener("click", () => selectAnswer(answer));
        answerButtons.appendChild(button);
    });
}

function clearAnswerButtons() {
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(selectedAnswer) {
    const correctAnswer = quizData[currentQuestionIndex].answers.find(answer => answer.correct);

    if (selectedAnswer.id === correctAnswer.id) {
        userScore++;
    }

    answerButtons.querySelectorAll(".btn").forEach(button => {
        button.disabled = true;
        if (button.innerText === selectedAnswer.text) {
            button.classList.add("btn-selected");
        }
    });

    nextButton.disabled = false;
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        showQuestion(quizData[currentQuestionIndex]);
        resetButtons();
    } else {
        // Fine del quiz
        alert("Quiz completato! Punteggio: " + userScore + "/" + quizData.length);
    }
}

function resetButtons() {
    answerButtons.querySelectorAll(".btn").forEach(button => {
        button.disabled = false;
        button.classList.remove("btn-selected");
    });

    nextButton.disabled = true;
}

startQuiz();