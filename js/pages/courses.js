// ===================================
// TechAtlas — Courses Library
// ===================================

const searchInput = document.getElementById("course-search");

const filterButtons = document.querySelectorAll(".filter-btn");

const courseCards = document.querySelectorAll(
    ".course-library .field-card"
);

const resultsCount = document.getElementById("results-count");

const noResults = document.getElementById("no-results");

let currentFilter = "all";


// 1. Filter Courses

function filterCourses() {

    const searchText = searchInput.value
        .trim()
        .toLowerCase();

    let visibleCount = 0;

    courseCards.forEach(card => {

        const courseText = card.textContent.toLowerCase();

        const category = card.dataset.category;

        const matchesSearch =
            courseText.includes(searchText);

        const matchesCategory =
            currentFilter === "all" ||
            category === currentFilter;

        const isVisible =
            matchesSearch && matchesCategory;

        card.hidden = !isVisible;

        if (isVisible) {
            visibleCount++;
        }

    });

    resultsCount.textContent =
        `${visibleCount} من الكورسات المتاحة`;

    noResults.hidden = visibleCount !== 0;

}


// 2. Search Event

searchInput.addEventListener("input", filterCourses);


// 3. Category Events

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        currentFilter = button.dataset.filter;

        filterCourses();

    });

});


// 4. Initial Results

filterCourses();