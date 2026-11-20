
// TechAtlas — Theme Toggle

const themeButton = document.getElementById("theme-toggle");
const heroCity = document.getElementById("hero-city");
const siteLogo = document.getElementById("site-logo");
const footerLogo = document.getElementById("footer-logo");

function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);

    const isDark = theme === "dark";

    if (themeButton) {
        themeButton.textContent = isDark ? "☀️" : "🌙";
    }

    if (heroCity) {
        heroCity.src = isDark
            ? "assets/images/hero-dark.webp"
            : "assets/images/hero-light.webp";
    }

    if (siteLogo) {
        siteLogo.src = isDark
            ? "assets/images/logo-dark1.png"
            : "assets/images/logo-light1.png";
    }

    if (footerLogo) {
        footerLogo.src = isDark
            ? "assets/images/logo-dark1.png"
            : "assets/images/logo-light1.png";
    }

    localStorage.setItem("theme", theme);
}

// Load saved theme
const savedTheme = localStorage.getItem("theme");
applyTheme(savedTheme || "light");

// Toggle theme
if (themeButton) {
    themeButton.addEventListener("click", function () {
        const currentTheme =
            document.documentElement.getAttribute("data-theme");

        if (currentTheme === "dark") {
            applyTheme("light");
        } else {
            applyTheme("dark");
        }
    });
}
