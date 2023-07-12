// Quiz Questions
var questions = [
    {
        question: "Question 1: How do you find the minimum of x and y using JavaScript?",
        options: ["min(x, y)", "Math.min(x, y)", "Math.min(xy)", "min(xy)"],
        answer: 1
    },
    {
        question: "Question 2: Javascript is a _____ language.",
        options: ["Programming", "Application", "Scripting", "None of the above"],
        answer: 2
    },
    {
        question: "Question 3: JavaScript code is written inside file having extension?",
        options: [".js", ".jvs", ".jsc", ".javascript"],
        answer: 0
    },
    {
        question: "Question 4: Local Browser used for validations on the Web Pages uses?",
        options: ["JS", "Java", "HTML", "CSS"],
        answer: 0
    },
    {
        question: "Question 5: JavaScript is a _____ Side Scripting Language.?",
        options: ["Server", "Browser", "ISP", "None of the above"],
        answer: 1
    }
];

var currentQuestion = 0;
var score = 0;

// Display question and options
function displayQuestion() {
    var questionElement = document.getElementById("question");
    var optionsElement = document.getElementById("options");
    var nextButton = document.getElementById("next-btn");
    var progressElement = document.getElementById("progress");

    progressElement.textContent = "Question " + (currentQuestion + 1) + " of " + questions.length;
    questionElement.textContent = questions[currentQuestion].question;
    optionsElement.innerHTML = "";

    for (var i = 0; i < questions[currentQuestion].options.length; i++) {
        var option = document.createElement("button");
        option.textContent = questions[currentQuestion].options[i];
        option.setAttribute("onclick", "checkAnswer(this)");
        optionsElement.appendChild(option);
    }

    nextButton.style.display = "none";
}

// Check selected answer
function checkAnswer(selectedOption) {
    var answer = questions[currentQuestion].answer;

    if (selectedOption.textContent === questions[currentQuestion].options[answer]) {
        selectedOption.style.backgroundColor = "green";
        score++;
    } else {
        selectedOption.style.backgroundColor = "red";
    }

    var options = document.getElementById("options").getElementsByTagName("button");
    for (var i = 0; i < options.length; i++) {
        options[i].setAttribute("disabled", "true");
        if (options[i].textContent === questions[currentQuestion].options[answer]) {
            options[i].style.backgroundColor = "green";
        }
    }

    var nextButton = document.getElementById("next-btn");
    nextButton.style.display = "block";
}

// Load next question or display results
function nextQuestion() {
    currentQuestion++;
    var nextButton = document.getElementById("next-btn");

    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        var quizContainer = document.getElementById("quiz-container");
        var resultContainer = document.getElementById("result-container");
        var scoreElement = document.getElementById("score");
        var percentageElement = document.getElementById("percentage");

        quizContainer.style.display = "none";
        resultContainer.style.display = "block";
        scoreElement.textContent = "Your Score: " + score + "/" + questions.length;
        percentageElement.textContent = "Marks percentage is: " + ((score / questions.length) * 100).toFixed(2) + "%";
    }

    nextButton.style.display = "none";
}

// Event listeners
document.getElementById("next-btn").addEventListener("click", nextQuestion);

// Display first question
displayQuestion();
