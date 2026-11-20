
// ===================================
// TechAtlas — Homepage JavaScript
// ===================================

(() => {

    const assets = new URL(
        "../assets/",
        document.currentScript.src
    );

    const heroCity =
        document.getElementById("hero-city");

    if (!heroCity) return;


    // Change hero image

    function updateHero() {

        const isDark =
            document.documentElement.dataset.theme === "dark";

        heroCity.src = new URL(
            isDark
                ? "images/hero-dark.webp"
                : "images/hero-light.webp",
            assets
        ).href;

    }


    // Listen for theme changes

    document.addEventListener(
        "techatlas:themechange",
        updateHero
    );


    // Set initial image

    updateHero();

})();
