// ===================================
// TechAtlas — Lesson System
// ===================================

(() => {

    // 1. Lesson Information

    const courseId = document.body.dataset.course;

    const lessonId = document.body.dataset.lesson;

    if (!courseId || !lessonId) return;


    // 2. Storage

    const storageKey =
        `techatlas-progress-${courseId}`;


    function loadProgress() {

        try {

            const saved = JSON.parse(
                localStorage.getItem(storageKey) || "[]"
            );

            return Array.isArray(saved)
                ? saved
                : [];

        } catch (_) {

            return [];

        }

    }


    // 3. Lesson Completion

    const completeButton =
        document.getElementById("complete-lesson");

    const completionMessage =
        document.getElementById("completion-message");


    function updateCompletion() {

        const completed = loadProgress();

        const isCompleted =
            completed.includes(lessonId);

        if (completeButton) {

            completeButton.disabled = isCompleted;

            completeButton.textContent =
                isCompleted
                    ? "✓ تم إكمال الدرس"
                    : "إنهاء الدرس";

        }

        if (completionMessage) {

            completionMessage.textContent =
                isCompleted
                    ? "تم حفظ تقدمك في الكورس."
                    : "";

        }

    }


    if (completeButton) {

        completeButton.addEventListener("click", () => {

            const completed = loadProgress();

            if (!completed.includes(lessonId)) {

                completed.push(lessonId);

            }

            try {

                localStorage.setItem(
                    storageKey,
                    JSON.stringify(completed)
                );

                updateCompletion();

            } catch (_) {

                if (completionMessage) {

                    completionMessage.textContent =
                        "تعذر حفظ التقدم في المتصفح.";

                }

            }

        });

    }


    // 4. Quiz Elements

    const questions = document.querySelectorAll(
        ".quiz-question"
    );

    const checkButton =
        document.getElementById("check-quiz");

    const quizResult =
        document.getElementById("quiz-result");


    // 5. Check Answers

    function checkQuiz() {

        let correctCount = 0;

        let answeredCount = 0;

        questions.forEach(question => {

            const correctAnswer =
                question.dataset.answer;

            const selected =
                question.querySelector(
                    "input[type='radio']:checked"
                );

            const feedback =
                question.querySelector(".quiz-feedback");

            if (!feedback) return;

            feedback.classList.remove(
                "correct",
                "incorrect"
            );


            // Unanswered Question

            if (!selected) {

                feedback.textContent =
                    "اختر إجابة أولًا.";

                return;

            }

            answeredCount++;


            // Correct Answer

            if (selected.value === correctAnswer) {

                correctCount++;

                feedback.textContent =
                    "✓ إجابة صحيحة. " +
                    (question.dataset.explanation || "");

                feedback.classList.add("correct");

            } else {

                feedback.textContent =
                    "✗ إجابة غير صحيحة. حاول مرة أخرى.";

                feedback.classList.add("incorrect");

            }

        });


        // 6. Display Score

        if (quizResult) {

            quizResult.textContent =
                `النتيجة: ${correctCount} / ${questions.length}`;

            if (answeredCount < questions.length) {

                quizResult.textContent +=
                    " — توجد أسئلة لم تتم الإجابة عنها.";

            } else if (correctCount === questions.length) {

                quizResult.textContent +=
                    " — ممتاز!";

            }

        }

    }


    if (checkButton) {

        checkButton.addEventListener(
            "click",
            checkQuiz
        );

    }


    // 7. Initial State

    updateCompletion();

    window.addEventListener(
        "pageshow",
        updateCompletion
    );

})();