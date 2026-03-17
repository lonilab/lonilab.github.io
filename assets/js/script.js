const toggleButton = document.getElementById("theme-toggle");
const root = document.documentElement;
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  root.setAttribute("data-theme", "dark");
  toggleButton.setAttribute("aria-pressed", "true");
}

toggleButton.addEventListener("click", () => {
  const isDark = root.getAttribute("data-theme") === "dark";

  if (isLight) {
    root.removeAttribute("data-theme");
    localStorage.setItem("theme", "dark");
    toggleButton.setAttribute("aria-pressed", "false");
  } else {
    root.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    toggleButton.setAttribute("aria-pressed", "true");
  }
});

(function () {
  const el = document.getElementById("current_year");
  if (el) {
    el.textContent = new Date().getFullYear();
  }
})();