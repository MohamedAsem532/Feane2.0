const filterItems = document.querySelectorAll(".filter-menu li");
const menuCards = document.querySelectorAll(".menu-card");

filterItems.forEach((item) => {
  item.addEventListener("click", () => {
    // active class
    filterItems.forEach((li) => li.classList.remove("active"));
    item.classList.add("active");

    const filter = item.dataset.filter;

    menuCards.forEach((card) => {
      const category = card.dataset.category;

      card.classList.remove("show");
      card.classList.add("hide");

      if (filter === "all" || filter === category) {
        card.classList.remove("hide");

        // Force reflow to restart animation
        void card.offsetWidth;

        card.classList.add("show");
      }
    });
  });
});
