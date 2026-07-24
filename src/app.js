(() => {
  "use strict";

  const config = window.QUIZ_CONFIG;
  const questions = window.QUIZ_QUESTIONS;

  if (!config || !Array.isArray(questions) || questions.length === 0) {
    document.body.innerHTML =
      "<h1>Test savollari yuklanmadi.</h1>";
    return;
  }

  const state = {
    currentIndex: 0,
    answers: {},
    startedAt: null,
    finishedAt: null,
    remainingSeconds: config.timeLimitMinutes * 60,
    timerId: null,
    candidate: null,
    result: null,
    finished: false
  };

  const elements = {
    startScreen: document.querySelector("#startScreen"),
    quizScreen: document.querySelector("#quizScreen"),
    resultScreen: document.querySelector("#resultScreen"),

    quizTitle: document.querySelector("#quizTitle"),
    quizDescription: document.querySelector("#quizDescription"),
    questionCount: document.querySelector("#questionCount"),
    timeLimit: document.querySelector("#timeLimit"),
    passingPercent: document.querySelector("#passingPercent"),

    startForm: document.querySelector("#startForm"),
    fullName: document.querySelector("#fullName"),
    department: document.querySelector("#department"),

    timer: document.querySelector("#timer"),
    timerValue: document.querySelector("#timerValue"),

    questionNavigation: document.querySelector("#questionNavigation"),
    questionPosition: document.querySelector("#questionPosition"),
    progressText: document.querySelector("#progressText"),
    progressBar: document.querySelector("#progressBar"),
    questionType: document.querySelector("#questionType"),
    questionText: document.querySelector("#questionText"),
    answersContainer: document.querySelector("#answersContainer"),

    previousButton: document.querySelector("#previousButton"),
    nextButton: document.querySelector("#nextButton"),
    finishButton: document.querySelector("#finishButton"),

    resultCard: document.querySelector(".result-card"),
    resultIcon: document.querySelector("#resultIcon"),
    resultTitle: document.querySelector("#resultTitle"),
    resultMessage: document.querySelector("#resultMessage"),
    scorePercent: document.querySelector("#scorePercent"),
    correctCount: document.querySelector("#correctCount"),
    incorrectCount: document.querySelector("#incorrectCount"),
    elapsedTime: document.querySelector("#elapsedTime"),

    reviewButton: document.querySelector("#reviewButton"),
    saveButton: document.querySelector("#saveButton"),
    printButton: document.querySelector("#printButton"),
    restartButton: document.querySelector("#restartButton"),
    reviewContainer: document.querySelector("#reviewContainer"),

    modal: document.querySelector("#modal"),
    modalTitle: document.querySelector("#modalTitle"),
    modalMessage: document.querySelector("#modalMessage"),
    modalCancel: document.querySelector("#modalCancel"),
    modalConfirm: document.querySelector("#modalConfirm")
  };

  function initialize() {
    elements.quizTitle.textContent = config.title;
    elements.quizDescription.textContent = config.description;
    elements.questionCount.textContent = questions.length;
    elements.timeLimit.textContent =
      `${config.timeLimitMinutes} daqiqa`;
    elements.passingPercent.textContent =
      `${config.passingPercent}%`;

    elements.startForm.addEventListener("submit", startQuiz);
    elements.previousButton.addEventListener("click", showPrevious);
    elements.nextButton.addEventListener("click", showNext);
    elements.finishButton.addEventListener(
      "click",
      requestFinish
    );

    elements.reviewButton.addEventListener(
      "click",
      toggleReview
    );

    elements.saveButton.addEventListener(
      "click",
      saveResult
    );

    elements.printButton.addEventListener(
      "click",
      printResult
    );

    elements.restartButton.addEventListener(
      "click",
      restartQuiz
    );

    window.addEventListener("beforeunload", (event) => {
      if (state.startedAt && !state.finished) {
        event.preventDefault();
        event.returnValue = "";
      }
    });
  }

  function switchScreen(screen) {
    [
      elements.startScreen,
      elements.quizScreen,
      elements.resultScreen
    ].forEach((item) => {
      item.classList.remove("active");
    });

    screen.classList.add("active");
  }

  function startQuiz(event) {
    event.preventDefault();

    const fullName = elements.fullName.value.trim();
    const department = elements.department.value.trim();

    if (!fullName) {
      elements.fullName.focus();
      return;
    }

    state.candidate = {
      fullName,
      department
    };

    state.startedAt = new Date();
    state.remainingSeconds = config.timeLimitMinutes * 60;
    state.finished = false;

    createQuestionNavigation();
    renderQuestion();
    updateTimer();
    startTimer();

    elements.timer.classList.add("visible");
    switchScreen(elements.quizScreen);
  }

  function startTimer() {
    clearInterval(state.timerId);

    state.timerId = setInterval(() => {
      state.remainingSeconds -= 1;

      updateTimer();

      if (state.remainingSeconds <= 0) {
        clearInterval(state.timerId);
        finishQuiz(true);
      }
    }, 1000);
  }

  function updateTimer() {
    const value = Math.max(0, state.remainingSeconds);

    elements.timerValue.textContent = formatDuration(value);

    elements.timer.classList.toggle(
      "warning",
      value <= 300 && value > 60
    );

    elements.timer.classList.toggle(
      "danger",
      value <= 60
    );
  }

  function createQuestionNavigation() {
    elements.questionNavigation.innerHTML = "";

    questions.forEach((_question, index) => {
      const button = document.createElement("button");

      button.type = "button";
      button.textContent = String(index + 1);
      button.dataset.index = String(index);

      button.addEventListener("click", () => {
        if (
          !config.allowBackNavigation &&
          index < state.currentIndex
        ) {
          return;
        }

        state.currentIndex = index;
        renderQuestion();
      });

      elements.questionNavigation.appendChild(button);
    });
  }

  function renderQuestion() {
    const question = questions[state.currentIndex];

    elements.questionPosition.textContent =
      `${state.currentIndex + 1}-savol`;

    elements.progressText.textContent =
      `${state.currentIndex + 1} / ${questions.length}`;

    const progress =
      ((state.currentIndex + 1) / questions.length) * 100;

    elements.progressBar.style.width = `${progress}%`;

    const typeLabels = {
      single: "Bitta javobni tanlang",
      multiple: "Bir nechta javobni tanlang",
      truefalse: "To'g'ri yoki noto'g'ri",
      text: "Javobni yozing",
      numeric: "Son kiriting",
      fillInTheBlank: "Bo'sh joylarni to'ldiring",
      multipleChoiceText: "Ro'yxatdan tanlang"
    };

    elements.questionType.textContent = typeLabels[question.type] || "Savol";
    elements.questionText.textContent = question.question;
    elements.answersContainer.innerHTML = "";

    if (question.type === "fillInTheBlank") {
      renderFillInTheBlankQuestion(question);
    } else if (question.type === "text") {
      renderTextQuestion(question);
    } else if (question.type === "numeric") {
      renderNumericQuestion(question);
    } else if (question.type === "multipleChoiceText") {
      renderMultipleChoiceTextQuestion(question);
    } else {
      renderChoiceQuestion(question);
    }

    elements.previousButton.disabled =
      state.currentIndex === 0 ||
      !config.allowBackNavigation;

    const isLast =
      state.currentIndex === questions.length - 1;

    elements.nextButton.classList.toggle("hidden", isLast);
    elements.finishButton.classList.remove("hidden");

    updateQuestionNavigation();
  }

  function renderChoiceQuestion(question) {
    const stored = state.answers[question.id] || [];
    const multiple = question.type === "multiple";

    question.answers.forEach((answer, index) => {
      const label = document.createElement("label");
      label.className = "answer-option";

      if (stored.includes(index)) {
        label.classList.add("selected");
      }

      const input = document.createElement("input");
      input.type = multiple ? "checkbox" : "radio";
      input.name = `question-${question.id}`;
      input.value = String(index);
      input.checked = stored.includes(index);

      const text = document.createElement("span");
      text.textContent = answer;

      input.addEventListener("change", () => {
        if (multiple) {
          const selected = Array.from(
            elements.answersContainer.querySelectorAll(
              "input:checked"
            )
          ).map((item) => Number(item.value));

          state.answers[question.id] = selected;
        } else {
          state.answers[question.id] = [index];
        }

        renderQuestion();
      });

      label.append(input, text);
      elements.answersContainer.appendChild(label);
    });
  }

  function renderTextQuestion(question) {
    const labels = question.inputLabels;

    if (labels && labels.length > 0) {
      const stored = state.answers[question.id] || [];

      labels.forEach((labelText, index) => {
        const wrapper = document.createElement("label");
        wrapper.className = "multi-text-field";

        const title = document.createElement("span");
        title.textContent = labelText;

        const input = document.createElement("input");
        input.type = "text";
        input.className = "fillblank-answer";
        input.placeholder = "Javobni kiriting...";
        input.value = stored[index] || "";

        input.addEventListener("input", () => {
          const current = state.answers[question.id] || [];
          current[index] = input.value;
          state.answers[question.id] = [...current];
          updateQuestionNavigation();
        });

        wrapper.append(title, input);
        elements.answersContainer.appendChild(wrapper);
      });
    } else {
      const textarea = document.createElement("textarea");

      textarea.className = "text-answer";
      textarea.placeholder = "Javobingizni kiriting...";
      textarea.value = state.answers[question.id]?.[0] || "";

      textarea.addEventListener("input", () => {
        state.answers[question.id] = [textarea.value];
        updateQuestionNavigation();
      });

      elements.answersContainer.appendChild(textarea);
    }
  }

  function renderNumericQuestion(question) {
    const input = document.createElement("input");

    input.type = "number";
    input.step = "any";
    input.className = "text-answer numeric-answer";
    input.placeholder = "Sonni kiriting...";
    input.value = state.answers[question.id]?.[0] || "";

    input.addEventListener("input", () => {
      state.answers[question.id] = [input.value];
      updateQuestionNavigation();
    });

    elements.answersContainer.appendChild(input);
  }

  function renderFillInTheBlankQuestion(question) {
    const stored = state.answers[question.id] || {};

    question.blanks.forEach((blank, index) => {
      const label = document.createElement("label");
      label.className = "blank-field";

      const title = document.createElement("span");
      title.textContent = blank.label;

      const input = document.createElement("input");
      input.type = "text";
      input.className = "fillblank-answer";
      input.placeholder = "Javobni kiriting...";
      input.value = stored[index] || "";

      input.addEventListener("input", () => {
        state.answers[question.id] = {
          ...state.answers[question.id],
          [index]: input.value
        };
        updateQuestionNavigation();
      });

      label.append(title, input);
      elements.answersContainer.appendChild(label);
    });
  }

  const FIELD_LABELS = {
    debit: "Hisobning debeti:",
    credit: "Hisobning krediti:",
    prepayment: "Oldindan to'lov:",
    expense: "Xarajatlar:",
    invoiceDebit: "Hisob-faktura debeti:",
    invoiceCredit: "Hisob-faktura krediti:",
    costDebit: "Tannarx debeti:",
    costCredit: "Tannarx krediti:",
    profit: "Foyda hisobvarag'i:"
  };

  function renderMultipleChoiceTextQuestion(question) {
    if (isMatchingQuestion(question)) {
      renderMatchingQuestion(question);
      return;
    }

    const keys = Object.keys(question.answers);
    const stored = state.answers[question.id] || {};

    keys.forEach((key, i) => {
      const label = document.createElement("p");
      label.textContent = FIELD_LABELS[key] || key;
      label.style.fontWeight = "bold";
      label.style.marginBottom = "8px";
      elements.answersContainer.appendChild(label);

      const select = document.createElement("select");
      select.className = "text-answer";
      if (i < keys.length - 1) {
        select.style.marginBottom = "16px";
      }

      const defaultOpt = document.createElement("option");
      defaultOpt.value = "";
      defaultOpt.textContent = "-- Tanlang --";
      select.appendChild(defaultOpt);

      question.answers[key].forEach((answer, index) => {
        const option = document.createElement("option");
        option.value = index;
        option.textContent = answer;
        select.appendChild(option);
      });

      if (stored[key] !== null && stored[key] !== undefined) {
        select.value = stored[key];
      }

      select.addEventListener("change", () => {
        state.answers[question.id] = {
          ...state.answers[question.id],
          [key]: select.value !== "" ? parseInt(select.value) : null
        };
        updateQuestionNavigation();
      });

      elements.answersContainer.appendChild(select);
    });
  }

  function renderMatchingQuestion(question) {
    const stored = state.answers[question.id] || {};
    const choices = question.answers.choices;
    const labels = question.answers.labels;

    labels.forEach((labelText, index) => {
      const label = document.createElement("p");
      label.textContent = labelText;
      label.style.fontWeight = "bold";
      label.style.marginBottom = "8px";
      elements.answersContainer.appendChild(label);

      const select = document.createElement("select");
      select.className = "text-answer";
      if (index < labels.length - 1) {
        select.style.marginBottom = "16px";
      }

      const defaultOpt = document.createElement("option");
      defaultOpt.value = "";
      defaultOpt.textContent = "-- Tanlang --";
      select.appendChild(defaultOpt);

      choices.forEach((choice, choiceIndex) => {
        const option = document.createElement("option");
        option.value = choiceIndex;
        option.textContent = choice;
        select.appendChild(option);
      });

      if (stored[index] !== null && stored[index] !== undefined) {
        select.value = stored[index];
      }

      select.addEventListener("change", () => {
        state.answers[question.id] = {
          ...state.answers[question.id],
          [index]: select.value !== "" ? parseInt(select.value, 10) : null
        };
        updateQuestionNavigation();
      });

      elements.answersContainer.appendChild(select);
    });
  }

  function updateQuestionNavigation() {
    const buttons =
      elements.questionNavigation.querySelectorAll("button");

    buttons.forEach((button, index) => {
      const question = questions[index];

      button.classList.toggle(
        "current",
        index === state.currentIndex
      );

      button.classList.toggle(
        "answered",
        hasAnswer(question)
      );
    });
  }

  function hasAnswer(question) {
    const answer = state.answers[question.id];

    if (!answer) {
      return false;
    }

    if (question.type === "text") {
      if (question.inputLabels && question.inputLabels.length > 0) {
        return question.inputLabels.every(
          (_label, index) => String(answer[index] || "").trim().length > 0
        );
      }
      return String(answer[0] || "").trim().length > 0;
    }

    if (question.type === "fillInTheBlank") {
      return question.blanks.every(
        (_blank, index) => String(answer[index] || "").trim().length > 0
      );
    }

    if (question.type === "numeric") {
      return parseNumericAnswer(answer[0]) !== null;
    }

    if (question.type === "multipleChoiceText") {
      if (isMatchingQuestion(question)) {
        return Object.keys(question.answers.labels).every(
          (index) => answer[index] !== null &&
                     answer[index] !== undefined &&
                     answer[index] !== ""
        );
      }

      return Object.keys(question.answers).every(
        (key) => answer[key] !== null &&
                 answer[key] !== undefined &&
                 answer[key] !== ""
      );
    }

    return answer.length > 0;
  }

  function showPrevious() {
    if (state.currentIndex > 0) {
      state.currentIndex -= 1;
      renderQuestion();
    }
  }

  function showNext() {
    if (state.currentIndex < questions.length - 1) {
      state.currentIndex += 1;
      renderQuestion();
    }
  }

  function requestFinish() {
    const unanswered = questions.filter(
      (question) => !hasAnswer(question)
    ).length;

    const message = unanswered
      ? `${unanswered} ta savol javobsiz qolgan. Testni baribir yakunlaysizmi?`
      : "Testni yakunlashni tasdiqlaysizmi?";

    showConfirmation(
      "Testni yakunlash",
      message,
      () => finishQuiz(false)
    );
  }

  function showConfirmation(title, message, callback) {
    elements.modalTitle.textContent = title;
    elements.modalMessage.textContent = message;
    elements.modal.classList.remove("hidden");

    const close = () => {
      elements.modal.classList.add("hidden");
      elements.modalConfirm.onclick = null;
      elements.modalCancel.onclick = null;
    };

    elements.modalCancel.onclick = close;

    elements.modalConfirm.onclick = () => {
      close();
      callback();
    };
  }

  function finishQuiz(timeExpired) {
    if (state.finished) {
      return;
    }

    state.finished = true;
    state.finishedAt = new Date();

    clearInterval(state.timerId);

    let earnedPoints = 0;
    let maxPoints = 0;
    let correctQuestions = 0;

    const details = questions.map((question) => {
      const userAnswer = state.answers[question.id] || [];
      const isCorrectAnswer = isCorrect(question, userAnswer);
      
      const points = question.points || 1;
      maxPoints += points;
      
      if (isCorrectAnswer) {
        earnedPoints += points;
        correctQuestions += 1;
      }

      return {
        id: question.id,
        question: question.question,
        type: question.type,
        userAnswer,
        correctAnswer: getCorrectAnswer(question),
        isCorrect: isCorrectAnswer,
        explanation: question.explanation || "",
        points: points,
        earned: isCorrectAnswer ? points : 0
      };
    });

    const percent = Math.round((earnedPoints / maxPoints) * 100);

    const elapsedSeconds = Math.max(
      0,
      config.timeLimitMinutes * 60 -
        state.remainingSeconds
    );

    state.result = {
      quizTitle: config.title,
      candidate: state.candidate,
      startedAt: state.startedAt.toISOString(),
      finishedAt: state.finishedAt.toISOString(),
      timeExpired,
      elapsedSeconds,
      totalQuestions: questions.length,
      correctQuestions,
      incorrectQuestions: questions.length - correctQuestions,
      earnedPoints,
      maxPoints,
      percent,
      passingPercent: config.passingPercent,
      passed: percent >= config.passingPercent,
      answers: details
    };

    renderResult();
  }

  function getCorrectAnswer(question) {
    if (question.type === "text") {
      return question.correctText;
    }

    if (question.type === "fillInTheBlank") {
      return question.blanks.map((blank) => blank.correct);
    }

    if (question.type === "numeric") {
      return question.correct;
    }

    if (question.type === "multipleChoiceText") {
      if (isMatchingQuestion(question)) {
        return question.correctIndices;
      }

      const result = {};
      Object.keys(question.answers).forEach((key) => {
        const correctKey = "correct" + key.charAt(0).toUpperCase() + key.slice(1);
        result[key] = question[correctKey];
      });
      return result;
    }
    return question.correct;
  }

  function isCorrect(question, userAnswer) {
    if (question.type === "text") {
      if (question.inputLabels && question.inputLabels.length > 0) {
        return question.correctText.every((correct, index) => {
          const normalized = normalizeText(userAnswer[index] || "");
          return normalizeText(correct) === normalized;
        });
      }
      const normalized = normalizeText(userAnswer[0] || "");
      return question.correctText.some(
        (answer) => normalizeText(answer) === normalized
      );
    }

    if (question.type === "fillInTheBlank") {
      return question.blanks.every((blank, index) => {
        const userValue = normalizeText(userAnswer[index] || "");
        return normalizeText(blank.correct) === userValue;
      });
    }

    if (question.type === "numeric") {
      const userValue = parseNumericAnswer(userAnswer[0]);
      if (userValue === null) {
        return false;
      }

      const tolerance = Number.isFinite(question.tolerance)
        ? question.tolerance
        : 0.01;

      return question.correct.some((correctValue) => {
        const expected = parseNumericAnswer(correctValue);
        return (
          expected !== null &&
          Math.abs(userValue - expected) <= tolerance
        );
      });
    }

    if (question.type === "multipleChoiceText") {
      if (isMatchingQuestion(question)) {
        const correct = question.correctIndices || [];
        const selected = question.answers.labels.map((_, index) => Number(userAnswer[index]));

        return (
          correct.length === selected.length &&
          correct.every((value, index) => value === selected[index])
        );
      }

      return Object.keys(question.answers).every(
        (key) => {
          const correctKey = "correct" + key.charAt(0).toUpperCase() + key.slice(1);
          return userAnswer[key] === question[correctKey];
        }
      );
    }

    const correct = [...question.correct].sort();
    const selected = userAnswer
      .map(Number)
      .sort((a, b) => a - b);

    return (
      correct.length === selected.length &&
      correct.every(
        (value, index) => value === selected[index]
      )
    );
  }

  function normalizeText(value) {
    return String(value)
      .trim()
      .toLocaleLowerCase("uz")
      .replace(/[ʻʼ’`]/g, "'")
      .replace(/\s+/g, " ");
  }

  function isMatchingQuestion(question) {
    return Boolean(
      question?.answers &&
      Array.isArray(question.answers.choices) &&
      Array.isArray(question.answers.labels)
    );
  }

  function parseNumericAnswer(value) {
    const normalized = String(value)
      .trim()
      .replace(/\s+/g, "")
      .replace(",", ".");

    if (!normalized) {
      return null;
    }

    const parsed = Number(normalized);
    return Number.isFinite(parsed) ? parsed : null;
  }

  function renderResult() {
    const result = state.result;

    elements.timer.classList.remove("visible");
    elements.resultCard.classList.toggle(
      "passed",
      result.passed
    );
    elements.resultCard.classList.toggle(
      "failed",
      !result.passed
    );

    elements.resultIcon.textContent =
      result.passed ? "✓" : "×";

    elements.resultTitle.textContent =
      result.passed
        ? "Tabriklaymiz!"
        : "Test yakunlandi";

    elements.resultMessage.textContent =
      result.passed
        ? `Siz testdan muvaffaqiyatli o'tdingiz! (${result.earnedPoints}/${result.maxPoints} ball)`
        : `O'tish uchun kamida ${config.passingPercent}% natija kerak. Siz ${result.percent}% (${result.earnedPoints}/${result.maxPoints} ball) to'pladingiz.`;

    elements.scorePercent.textContent =
      `${result.percent}% (${result.earnedPoints}/${result.maxPoints})`;

    elements.correctCount.textContent =
      String(result.correctQuestions);

    elements.incorrectCount.textContent =
      String(result.incorrectQuestions);

    elements.elapsedTime.textContent =
      formatDuration(result.elapsedSeconds);

    renderReview();
    elements.reviewContainer.classList.add("hidden");
    elements.reviewButton.textContent =
      "Javoblarni ko'rish";

    switchScreen(elements.resultScreen);
  }

  function renderReview() {
    elements.reviewContainer.innerHTML = "";

    state.result.answers.forEach((detail, index) => {
      const question = questions[index];
      const item = document.createElement("article");

      item.className =
        `review-item ${detail.isCorrect ? "correct" : ""}`;

      const heading = document.createElement("h3");
      heading.textContent =
        `${index + 1}. ${detail.question}`;

      const points = document.createElement("p");
      points.innerHTML =
        `<span class="review-label">Ball:</span> ${detail.earned} / ${detail.points}`;

      const status = document.createElement("p");
      status.innerHTML =
        `<span class="review-label">Natija:</span> ` +
        (detail.isCorrect
          ? "To'g'ri"
          : "Noto'g'ri");

      const user = document.createElement("p");
      user.innerHTML =
        `<span class="review-label">Sizning javobingiz:</span> ` +
        escapeHtml(
          formatAnswer(question, detail.userAnswer)
        );

      const correct = document.createElement("p");
      correct.innerHTML =
        `<span class="review-label">To'g'ri javob:</span> ` +
        escapeHtml(formatCorrectAnswer(question));

      item.append(heading, points, status, user, correct);

      if (detail.explanation) {
        const explanation = document.createElement("p");

        explanation.innerHTML =
          `<span class="review-label">Izoh:</span> ` +
          escapeHtml(detail.explanation);

        item.appendChild(explanation);
      }

      elements.reviewContainer.appendChild(item);
    });
  }

  function formatAnswer(question, answer) {
    if (!answer) {
      return "Javob berilmagan";
    }

    if (question.type === "multipleChoiceText" && isMatchingQuestion(question)) {
      return question.answers.labels
        .map((label, index) => {
          const selectedIndex = answer[index];
          const selectedText =
            selectedIndex !== null && selectedIndex !== undefined
              ? question.answers.choices[selectedIndex]
              : "Tanlanmagan";

          return `${label}: ${selectedText}`;
        })
        .join("; ");
    }

    if (Array.isArray(answer) && answer.length === 0) {
      return "Javob berilmagan";
    }

    if (question.type === "text") {
      if (question.inputLabels && question.inputLabels.length > 0) {
        return question.inputLabels
          .map((label, index) => {
            const value = String(answer[index] || "").trim() || "Javob berilmagan";
            return `${label}: ${value}`;
          })
          .join("; ");
      }
      return String(answer[0] || "").trim() ||
        "Javob berilmagan";
    }

    if (question.type === "fillInTheBlank") {
      return question.blanks
        .map((blank, index) => {
          const value = String(answer[index] || "").trim() || "Tanlanmagan";
          return `${blank.label}: ${value}`;
        })
        .join("; ");
    }

    if (question.type === "numeric") {
      return String(answer[0] || "").trim() ||
        "Javob berilmagan";
    }

    if (question.type === "multipleChoiceText") {
      if (isMatchingQuestion(question)) {
        return question.answers.labels
          .map((label, index) => {
            const selectedIndex = answer?.[index];
            const selectedText =
              selectedIndex !== null && selectedIndex !== undefined
                ? question.answers.choices[selectedIndex]
                : "Tanlanmagan";

            return `${label}: ${selectedText}`;
          })
          .join("; ");
      }

      const keys = Object.keys(question.answers);
      if (keys.some((key) => answer[key] === undefined || answer[key] === null)) {
        return "Tanlanmagan";
      }
      return keys
        .map((key) => `${FIELD_LABELS[key] || key} ${question.answers[key][answer[key]] || "?"}`)
        .join(", ");
    }

    return answer
      .map((index) => question.answers[index])
      .filter(Boolean)
      .join(", ");
  }

  function formatCorrectAnswer(question) {
    if (question.type === "text") {
      if (question.inputLabels && question.inputLabels.length > 0) {
        return question.inputLabels
          .map((label, index) => `${label}: ${question.correctText[index]}`)
          .join("; ");
      }
      return question.correctText[0];
    }

    if (question.type === "fillInTheBlank") {
      return question.blanks
        .map((blank) => blank.correct)
        .join("; ");
    }

    if (question.type === "numeric") {
      return question.correct.join(", ");
    }

    if (question.type === "multipleChoiceText") {
      if (isMatchingQuestion(question)) {
        return question.answers.labels
          .map((label, index) => {
            const choiceIndex = question.correctIndices?.[index];
            return `${label}: ${question.answers.choices[choiceIndex]}`;
          })
          .join("; ");
      }

      return Object.keys(question.answers)
        .map((key) => {
          const correctKey = "correct" + key.charAt(0).toUpperCase() + key.slice(1);
          return `${FIELD_LABELS[key] || key} ${question.answers[key][question[correctKey]]}`;
        })
        .join(", ");
    }

    return question.correct
      .map((index) => question.answers[index])
      .filter(Boolean)
      .join(", ");
  }

  function toggleReview() {
    const hidden =
      elements.reviewContainer.classList.toggle("hidden");

    elements.reviewButton.textContent = hidden
      ? "Javoblarni ko'rish"
      : "Javoblarni yashirish";
  }

  async function saveResult() {
    if (!window.electronAPI) {
      const data = new Blob([
        JSON.stringify(state.result, null, 2)
      ], { type: "application/json" });

      const url = URL.createObjectURL(data);
      const link = document.createElement("a");
      const date = new Date().toISOString().slice(0, 10);

      link.href = url;
      link.download = `test-natijasi-${date}.json`;
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url);

      alert("Natija fayli yuklab olindi.");
      return;
    }

    const response =
      await window.electronAPI.saveResult(state.result);

    if (response.success) {
      alert("Natija muvaffaqiyatli saqlandi.");
    } else if (!response.canceled) {
      alert(
        `Natijani saqlashda xatolik: ${response.error}`
      );
    }
  }

  async function printResult() {
    elements.reviewContainer.classList.remove("hidden");

    if (!window.electronAPI) {
      window.print();
      return;
    }

    const response =
      await window.electronAPI.printResult();

    if (!response.success && response.error) {
      alert(`Chop etishda xatolik: ${response.error}`);
    }
  }

  function restartQuiz() {
    window.location.reload();
  }

  function formatDuration(totalSeconds) {
    const seconds = Math.max(
      0,
      Math.floor(totalSeconds)
    );

    const minutes = Math.floor(seconds / 60);
    const remaining = seconds % 60;

    return `${String(minutes).padStart(2, "0")}:${String(
      remaining
    ).padStart(2, "0")}`;
  }

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  initialize();
})();
