function renderExamList() {
  elements.examList.innerHTML = EXAMS.map((exam) => {
    const count = QUESTIONS.filter((question) => question.exam === exam.id).length;
    return `
      <a class="exam-item" href="${exam.source || OFFICIAL_INDEX}" target="_blank" rel="noreferrer">
        <strong>${exam.label}</strong>
        <span>${exam.year} / 演習 ${count}問 / PDF</span>
      </a>
    `;
  }).join("");
}

function renderReviewList() {
  const reviewQuestions = QUESTIONS.filter(hasReviewMark);
  if (!reviewQuestions.length) {
    elements.reviewList.innerHTML = `<p class="empty">間違えた問題や☆を付けた問題がここに入ります。</p>`;
    return;
  }

  elements.reviewList.innerHTML = reviewQuestions
    .slice(0, 8)
    .map((question) => {
      const exam = getExam(question.exam);
      return `
        <button class="review-item" type="button" data-question-id="${question.id}">
          <strong>${question.topic}</strong>
          <span>${exam.label} / ${question.category}</span>
        </button>
      `;
    })
    .join("");
}

function render() {
  renderStats();
  renderQuestion();
  renderExamList();
  renderReviewList();
}

function answerQuestion(value) {
  const question = queue[currentIndex];
  if (!question) return;

  const correct = value === question.answer;
  const previous = progress[question.id] ?? {};
  progress[question.id] = {
    ...previous,
    answered: true,
    answer: value,
    correct,
    misses: (previous.misses ?? 0) + (correct ? 0 : 1),
    lastAnsweredAt: new Date().toISOString(),
  };

  if (filters.mode === "review") {
    freshReviewAnswers.add(question.id);
  }

  saveProgress();
  render();
}

function move(step) {
  if (!queue.length) return;
  currentIndex = (currentIndex + step + queue.length) % queue.length;
  render();
}

function shuffleQueue() {
  for (let index = queue.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [queue[index], queue[swapIndex]] = [queue[swapIndex], queue[index]];
  }
  currentIndex = 0;
  render();
}

function updateFilter(key, value) {
  filters = { ...filters, [key]: value };
  if (key === "mode") {
    freshReviewAnswers = new Set();
  }
  saveFilters();
  currentIndex = 0;
  rebuildQueue();
}

function resetProgress() {
  const ok = window.confirm("回答記録と復習マークをリセットしますか？");
  if (!ok) return;
  progress = {};
  saveProgress();
  rebuildQueue();
}

function toggleBookmark() {
  const question = queue[currentIndex];
  if (!question) return;
  const previous = progress[question.id] ?? {};
  progress[question.id] = {
    ...previous,
    review: !previous.review,
  };
  saveProgress();
  render();
}

function openSource() {
  const question = queue[currentIndex];
  const exam = question ? getExam(question.exam) : null;
  window.open(exam?.source || OFFICIAL_INDEX, "_blank", "noreferrer");
}

function jumpToQuestion(id) {
  freshReviewAnswers = new Set();
  filters = { ...filters, mode: "review" };
  elements.modeFilter.value = "review";
  saveFilters();
  rebuildQueue(id);
}

function bindEvents() {
  elements.examFilter.addEventListener("change", (event) =>
    updateFilter("exam", event.target.value),
  );
  elements.categoryFilter.addEventListener("change", (event) =>
    updateFilter("category", event.target.value),
  );
  elements.modeFilter.addEventListener("change", (event) =>
    updateFilter("mode", event.target.value),
  );
  elements.trueButton.addEventListener("click", () => answerQuestion(true));
  elements.falseButton.addEventListener("click", () => answerQuestion(false));
  elements.prevButton.addEventListener("click", () => move(-1));
  elements.nextButton.addEventListener("click", () => move(1));
  elements.shuffleButton.addEventListener("click", shuffleQueue);
  elements.resetButton.addEventListener("click", resetProgress);
  elements.bookmarkButton.addEventListener("click", toggleBookmark);
  elements.sourceButton.addEventListener("click", openSource);
  elements.reviewList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-question-id]");
    if (button) jumpToQuestion(button.dataset.questionId);
  });
}

buildFilters();
bindEvents();
rebuildQueue();

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  });
}
