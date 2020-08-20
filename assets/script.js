(function () {
  const gameList = document.getElementById("main");
  const filtersElem = document.getElementById("platforms");
  const filters = filtersElem.querySelectorAll("input[type=checkbox]");
  let currentFilter = undefined;


  function updateFilters() {
    for (const filter of filters) {
      if (filter.name === currentFilter) {
        gameList.classList.add("filter-" + filter.name);
      } else {
        filter.checked = false;
        gameList.classList.remove("filter-" + filter.name);
      }
    }

    if (currentFilter !== undefined) {
      filtersElem.classList.add("filtered");
      gameList.classList.add("filtered");
    } else {
      filtersElem.classList.remove("filtered");
      gameList.classList.remove("filtered");
    }
  }

  for (const filter of filters) {
    filter.addEventListener("change", e => {
      if (e.target.checked) {
        currentFilter = e.target.name;
      } else {
        currentFilter = undefined;
      }
      updateFilters();
    });
    updateFilters(); // reset on refresh
  }
})();
