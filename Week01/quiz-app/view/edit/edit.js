let questions = JSON.parse(localStorage.getItem("questions")) || [];
let editIndex = null;

const modal = document.getElementById("modal");
const addBtn = document.getElementById("addBtn");
const saveBtn = document.getElementById("saveBtn");
const cancelBtn = document.getElementById("cancelBtn");
const questionList = document.getElementById("questionList");
const questionInput = document.getElementById("questionInput");
const answerA = document.getElementById("answerA");
const answerB = document.getElementById("answerB");
const answerC = document.getElementById("answerC");
const answerD = document.getElementById("answerD");
const correctAnswer = document.getElementById("correctAnswer");

addBtn.onclick = () => openModal();
cancelBtn.onclick = () => closeModal();
saveBtn.onclick = () => saveQuestion();

function openModal(isEdit = false) {
  modal.style.display = "block";
  document.getElementById("modalTitle").innerText = isEdit ? "Edit Question" : "Add Question";
}

function closeModal() {
  modal.style.display = "none";
  clearInputs();
  editIndex = null;
}

function clearInputs() {
  questionInput.value = "";
  answerA.value = "";
  answerB.value = "";
  answerC.value = "";
  answerD.value = "";
  correctAnswer.value = "";
}

function saveQuestion() {
  const questionData = {
    title: questionInput.value,
    choiceA: answerA.value,
    choiceB: answerB.value,
    choiceC: answerC.value,
    choiceD: answerD.value,
    correct: correctAnswer.value
  };

  if (editIndex === null) {
    questions.push(questionData);
  } else {
    questions[editIndex] = questionData;
  }

  localStorage.setItem("questions", JSON.stringify(questions));
  renderQuestions();
  closeModal();
}

function renderQuestions() {
  questionList.innerHTML = "";
  questions.forEach((q, index) => {
    const div = document.createElement("div");
    div.className = "question-item";
    div.innerHTML = `
      <span>${q.title}</span>
      <div class="actions">
        <button onclick="editQuestion(${index})">✏️</button>
        <button onclick="deleteQuestion(${index})">🗑️</button>
      </div>`;
    questionList.appendChild(div);
  });
}

function editQuestion(index) {
  const q = questions[index];
  editIndex = index;
  questionInput.value = q.title;
  answerA.value = q.choiceA;
  answerB.value = q.choiceB;
  answerC.value = q.choiceC;
  answerD.value = q.choiceD;
  correctAnswer.value = q.correct;
  openModal(true);
}

function deleteQuestion(index) {
  questions.splice(index, 1);
  localStorage.setItem("questions", JSON.stringify(questions));
  renderQuestions();
}

// On page load
renderQuestions();
