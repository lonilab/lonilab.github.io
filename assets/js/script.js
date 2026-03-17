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

document.addEventListener("DOMContentLoaded", function () {
  console.log("script loaded");

  const yearEl = document.getElementById("current_year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  } else {
    console.log("current_year not found");
  }
});