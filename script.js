const toggleButton = document.getElementById("theme-toggle");
const root = document.documentElement;
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
  root.setAttribute("data-theme", "light");
  toggleButton.setAttribute("aria-pressed", "true");
}

toggleButton.addEventListener("click", () => {
  const isLight = root.getAttribute("data-theme") === "light";

  if (isLight) {
    root.removeAttribute("data-theme");
    localStorage.setItem("theme", "dark");
    toggleButton.setAttribute("aria-pressed", "false");
  } else {
    root.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    toggleButton.setAttribute("aria-pressed", "true");
  }
});