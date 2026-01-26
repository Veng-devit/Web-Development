// DOM ELEMENTS ---------------------------------------------------------
const dom_quiz = document.querySelector("#quiz");
const dom_question = document.querySelector("#question");
const dom_choiceA = document.querySelector("#A");
const dom_choiceB = document.querySelector("#B");
const dom_choiceC = document.querySelector("#C");
const dom_choiceD = document.querySelector("#D");
const dom_score = document.querySelector("#scoreContainer");
const dom_start = document.querySelector("#start");

dom_start.addEventListener("click", onStart);

// DEFAULT QUESTIONS ----------------------------------------------------
let defaultQuestions = [
  {
    title: "What does HTML stand for?",
    choiceA: "Hi Thierry More Laught",
    choiceB: "How To move Left",
    choiceC: "Ho Theary Missed the Laundry !",
    choiceD: "Hypertext Markup Language",
    correct: "D",
  },
  {
    title: "What does CSS stand for?",
    choiceA: "Cisco and Super Start",
    choiceB: "Ci So Sa",
    choiceC: "Cascading Style Sheets ",
    choiceD: "I don't know !",
    correct: "C",
  },
  {
    title: "What does JS stand for?",
    choiceA: "Junior stars",
    choiceB: "Justing Star",
    choiceC: "Javascript",
    choiceD: "RonanScript",
    correct: "C",
  },
];

// ------------------------------------------------------------
// Load questions from localStorage OR use defaults
function loadQuestions() {
  let savedQuestions = JSON.parse(localStorage.getItem("questions")) || [];

  // Add default questions if not already present
  defaultQuestions.forEach((q) => {
    if (!savedQuestions.some((sq) => sq.title === q.title)) {
      savedQuestions.push(q);
    }
  });

  localStorage.setItem("questions", JSON.stringify(savedQuestions));
  return savedQuestions;
}

// Get questions
let questions = loadQuestions();

// RUNNING VARIABLES ---------------------------------------------------
let runningQuestionIndex = 0;
let score = 0;

// FUNCTIONS -----------------------------------------------------------

// Hide element
function hide(element) {
  element.style.display = "none";
}

// Show element
function show(element) {
  element.style.display = "block";
}

// Start quiz
function onStart() {
  renderQuestion();
  hide(dom_start);
  hide(dom_score);
  show(dom_quiz);
}

// Render current question
function renderQuestion() {
  let question = questions[runningQuestionIndex];
  dom_question.textContent = question.title;
  dom_choiceA.textContent = question.choiceA;
  dom_choiceB.textContent = question.choiceB;
  dom_choiceC.textContent = question.choiceC;
  dom_choiceD.textContent = question.choiceD;
}

// Check answer
function checkAnswer(answer) {
  onPlayerSubmit(answer);
}

// Handle answer submission
function onPlayerSubmit(answer) {
  let q = questions[runningQuestionIndex];
  if (answer === q.correct) score++;

  if (runningQuestionIndex < questions.length - 1) {
    runningQuestionIndex++;
    renderQuestion();
  } else {
    renderScore();
  }
}

// Render final score
function renderScore() {
  let scorePerc = (score * 100) / questions.length;

  localStorage.setItem("lastScore", score);
  localStorage.setItem("lastScorePercent", scorePerc.toFixed(0));

  let emoji = "";
  if (scorePerc < 20) emoji = "😭";
  else if (scorePerc <= 40) emoji = "🥲";
  else if (scorePerc <= 60) emoji = "🙂";
  else if (scorePerc <= 80) emoji = "☺️";
  else emoji = "🥰";

  hide(dom_question);
  hide(document.getElementById("choices"));
  show(dom_score);

  dom_score.innerHTML = `
    <div style="text-align: center;">
      <div style="font-size: 80px; margin: 20px 0;">${emoji}</div>
      <div>Your Score is: ${scorePerc.toFixed(0)}%</div>
    </div>
  `;
}

// INITIAL UI STATE ----------------------------------------------------
show(dom_start);
hide(dom_quiz);
hide(dom_score);
