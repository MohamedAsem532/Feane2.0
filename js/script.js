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


  const revealElements = document.querySelectorAll(
    ".slideLeftShow,.slideRightShow,.menu-card "
  );

  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    revealElements.forEach((element) => {
      element.classList.add("scroll-reveal");
      revealObserver.observe(element);
    });
  } else {
    revealElements.forEach((element) => element.classList.add("is-visible"));
  }
