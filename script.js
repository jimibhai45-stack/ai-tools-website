const searchInput = document.querySelector(".search");
const cards = document.querySelectorAll(".card");

searchInput.addEventListener("input", function () {
  const searchText = this.value.toLowerCase();

  cards.forEach(function (card) {
    const toolName = card.querySelector("h3").textContent.toLowerCase();
    const description = card.querySelector("p").textContent.toLowerCase();

    if (
      toolName.includes(searchText) ||
      description.includes(searchText)
    ) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});
