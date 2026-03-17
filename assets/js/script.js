document.addEventListener("DOMContentLoaded", function () {
  console.log("script loaded");

  const yearEl = document.getElementById("current_year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  } else {
    console.log("current_year not found");
  }
});