// ===================================
// TechAtlas — Fields Search
// ===================================

const fieldSearch = document.getElementById("field-search");

const fieldCards = document.querySelectorAll(
    ".technical-fields-grid .field-card"
);

const fieldsCount = document.getElementById("fields-count");

const noFields = document.getElementById("no-fields");


// Search Fields

function searchFields() {

    const searchText = fieldSearch.value
        .trim()
        .toLowerCase();

    let visibleCount = 0;

    fieldCards.forEach(card => {

        const fieldText = card.textContent.toLowerCase();

        const matchesSearch = fieldText.includes(searchText);

        card.hidden = !matchesSearch;

        if (matchesSearch) {
            visibleCount++;
        }

    });

    fieldsCount.textContent =
        `${visibleCount} من المجالات المتاحة`;

    noFields.hidden = visibleCount !== 0;

}


// Search Event

fieldSearch.addEventListener("input", searchFields);


// Initial Results

searchFields();