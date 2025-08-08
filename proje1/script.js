const startBtn = document.getElementById("start-btn");
const submitBtn = document.getElementById("submit-btn");
const restartBtn = document.getElementById("restart-btn");

const decisionInput = document.getElementById("decision-input");
const questionSection = document.getElementById("question-section");
const endSection = document.getElementById("end-section");

const questionText = document.getElementById("question-text");
const answerInput = document.getElementById("answer-input");
const progressBar = document.getElementById("progress-bar");

let currentQuestionIndex = 0;

const questions = [
  "Are you absolutely sure about that?",
  "But what if you regret it later?",
  "Have you considered all the possible consequences?",
  "What will people think?",
  "Could there be a better option?",
  "What if this ruins everything?",
  "Have you thought about the long-term effects?",
  "Are you prepared for the worst-case scenario?",
  "What if you're missing something important?",
  "Could you be making a mistake?",
  "What if you change your mind tomorrow?",
  "Have you weighed every single pro and con?",
  "Could you be overlooking something obvious?",
  "Are you acting too quickly?",
  "Have you truly thought this through?",
  "Is this really the best choice?",
  "Could this lead to another problem?",
  "Have you asked enough people for advice?",
  "Could this be a trap?",
  "Are you ready to live with the consequences?",
  "What if you’re wrong about this?",
  "Is this based on facts or feelings?",
  "Could you delay this for more thinking?",
  "Will this keep you up at night?"
];

function showQuestion() {
  questionText.textContent = questions[currentQuestionIndex];
  answerInput.value = "";
  updateProgressBar();
}

function updateProgressBar() {
  let progress = ((currentQuestionIndex + 1) / questions.length) * 100;
  progressBar.style.width = progress + "%";
}

startBtn.addEventListener("click", () => {
  if (decisionInput.value.trim() === "") {
    alert("Please enter a decision to begin.");
    return;
  }
  document.getElementById("start-section").classList.add("hidden");
  questionSection.classList.remove("hidden");
  currentQuestionIndex = 0;
  showQuestion();
});

submitBtn.addEventListener("click", () => {
  const answer = answerInput.value.trim();
  if (answer === "") {
    alert("Please answer the question.");
    return;
  }

  currentQuestionIndex++;
  if (currentQuestionIndex >= questions.length) {
    questionSection.classList.add("hidden");
    endSection.classList.remove("hidden");
    progressBar.style.width = "100%";
  } else {
    showQuestion();
  }
});

restartBtn.addEventListener("click", () => {
  endSection.classList.add("hidden");
  document.getElementById("start-section").classList.remove("hidden");
  decisionInput.value = "";
  progressBar.style.width = "0%";
});
