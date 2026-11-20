
// ===================================
// TechAtlas — Shared JavaScript
// ===================================

(() => {

    // Assets directory

    const assets = new URL(
        "../assets/",
        document.currentScript.src
    );

    // Shared elements

    const themeButton =
        document.getElementById("theme-toggle");

    const siteLogo =
        document.getElementById("site-logo");


    // Apply theme

    function applyTheme(theme) {

        document.documentElement.dataset.theme = theme;

        const isDark = theme === "dark";


        // Change theme button

        if (themeButton) {
            themeButton.textContent =
                isDark ? "☀️" : "🌙";
        }


        // Change logo

        if (siteLogo) {

            siteLogo.src = new URL(
                isDark
                    ? "images/logo-dark1.png"
                    : "images/logo-light1.png",
                assets
            ).href;

        }


        // Save theme

        try {
            localStorage.setItem("theme", theme);
        } catch (_) {}


        // Notify other scripts

        document.dispatchEvent(
            new Event("techatlas:themechange")
        );

    }


    // Load saved theme

    let savedTheme;

    try {
        savedTheme = localStorage.getItem("theme");
    } catch (_) {}

    applyTheme(
        savedTheme === "dark" ? "dark" : "light"
    );


    // Theme button event

    if (themeButton) {

        themeButton.addEventListener("click", () => {

            const currentTheme =
                document.documentElement.dataset.theme;

            applyTheme(
                currentTheme === "dark"
                    ? "light"
                    : "dark"
            );

        });

    }

})();
