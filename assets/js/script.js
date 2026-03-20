document.addEventListener("DOMContentLoaded", function () {
  console.log("script loaded");

  const yearEl = document.getElementById("current_year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  } else {
    console.log("current_year not found");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const cards = Array.from(document.querySelectorAll("#news-list .news-card"));
  const prevBtn = document.getElementById("news-prev");
  const nextBtn = document.getElementById("news-next");
  const indicator = document.getElementById("news-indicator");

  const perPage = 10;
  let currentPage = 1;
  const totalPages = Math.max(1, Math.ceil(cards.length / perPage));

  function renderPage(page) {
    currentPage = page;

    cards.forEach((card, index) => {
      const start = (page - 1) * perPage;
      const end = start + perPage;
      card.style.display = index >= start && index < end ? "block" : "none";
    });

    indicator.textContent = `Page ${currentPage} of ${totalPages}`;
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages;
  }

  prevBtn.addEventListener("click", function () {
    if (currentPage > 1) renderPage(currentPage - 1);
  });

  nextBtn.addEventListener("click", function () {
    if (currentPage < totalPages) renderPage(currentPage + 1);
  });

  renderPage(1);
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".update-card").forEach(card => {
    const content = card.querySelector(".update-description");
    const btn = card.querySelector(".toggle-btn");

    if (!content || !btn) return;

    btn.addEventListener("click", () => {
      const collapsed = content.getAttribute("data-collapsed") === "true";

      content.setAttribute("data-collapsed", collapsed ? "false" : "true");
      btn.textContent = collapsed ? "Show less" : "Show more";
    });
  });
});
