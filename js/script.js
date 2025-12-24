const filterItems = document.querySelectorAll(".filter-menu li");
const menuCards = document.querySelectorAll(".menu-card");

filterItems.forEach(item => {
  item.addEventListener("click", () => {

    // active class
    filterItems.forEach(li => li.classList.remove("active"));
    item.classList.add("active");
    
    const filter = item.dataset.filter;

    menuCards.forEach(card => {
      const category = card.dataset.category;

      if (filter === "all" || filter === category) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});
