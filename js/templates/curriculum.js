// ===================================
// TechAtlas — Curriculum Progress
// ===================================

(() => {

    // 1. Course Identification

    const courseId = document.body.dataset.course;

    if (!courseId) return;


    // 2. Page Elements

    const lessons = document.querySelectorAll(
        ".lesson-item[data-lesson]"
    );

    const progressFill =
        document.getElementById("progress-fill");

    const progressPercent =
        document.getElementById("progress-percent");

    const progressText =
        document.getElementById("progress-text");

    const resetButton =
        document.getElementById("reset-progress");


    // 3. Storage Key

    const storageKey =
        `techatlas-progress-${courseId}`;


    // 4. Load Progress

    function loadProgress() {

        try {

            const savedProgress =
                JSON.parse(
                    localStorage.getItem(storageKey) || "[]"
                );

            return Array.isArray(savedProgress)
                ? savedProgress
                : [];

        } catch (_) {

            return [];

        }

    }


    // 5. Save Progress

    function saveProgress(progress) {

        try {

            localStorage.setItem(
                storageKey,
                JSON.stringify(progress)
            );

            return true;

        } catch (_) {

            return false;

        }

    }


    // 6. Update Curriculum

    function updateProgress() {

        const completedLessons = loadProgress();

        let completedCount = 0;

        lessons.forEach(lesson => {

            const lessonId = lesson.dataset.lesson;

            const isCompleted =
                completedLessons.includes(lessonId);

            lesson.classList.toggle(
                "completed",
                isCompleted
            );

            const status =
                lesson.querySelector(".lesson-status");

            const action =
                lesson.querySelector(".lesson-action");

            if (status) {

                status.textContent =
                    isCompleted ? "✓" : "○";

            }

            if (action && !lesson.classList.contains("unavailable")) {

                action.textContent =
                    isCompleted
                        ? "مراجعة الدرس ←"
                        : "ابدأ الدرس ←";

            }

            if (isCompleted) {
                completedCount++;
            }

        });


        // 7. Calculate Percentage

        const totalLessons = lessons.length;

        const percentage = totalLessons === 0
            ? 0
            : Math.round(
                completedCount / totalLessons * 100
            );


        // 8. Update Progress Bar

        if (progressFill) {
            progressFill.style.width = `${percentage}%`;

            const track = progressFill.parentElement;

            if (track) {
                track.setAttribute(
                    "aria-valuenow",
                    percentage
                );
            }
        }

        if (progressPercent) {
            progressPercent.textContent = `${percentage}%`;
        }

        if (progressText) {

            progressText.textContent =
                `${completedCount} من ${totalLessons} درس مكتمل`;

        }

    }


    // 9. Reset Course Progress

    if (resetButton) {

        resetButton.addEventListener("click", () => {

            const confirmed = confirm(
                "هل تريد إعادة ضبط تقدمك في هذا الكورس؟"
            );

            if (!confirmed) return;

            if (saveProgress([])) {

                updateProgress();

            } else {

                alert("تعذر حفظ التقدم في المتصفح.");

            }

        });

    }


    // 10. Initial Progress

    updateProgress();

    window.addEventListener(
        "pageshow",
        updateProgress
    );

})();