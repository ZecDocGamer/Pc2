function showMovieDetails(title, description) {
  const modal = document.getElementById("movieModal");
  document.getElementById("movieTitle").textContent = title;
  document.getElementById("movieDescription").textContent = description;
  modal.style.display = "block";
}

function closeModal() {
  document.getElementById("movieModal").style.display = "none";
}

function toggleFavorite(event, button) {
  event.stopPropagation();
  button.classList.toggle("favorited");

  if (button.classList.contains("favorited")) {
    button.textContent = "Favorited";
    button.style.backgroundColor = "red";
  } else {
    button.textContent = "Add to Favorites";
    button.style.backgroundColor = "#007bff";
  }
}

const favoriteButtons = document.querySelectorAll(".favorite-btn");

favoriteButtons.forEach((button) => {
  button.addEventListener("click", function () {
    if (!this.classList.contains("favorited")) {
      this.classList.add("favorited");
      this.textContent = "Favorito"; // Cambia el texto del botÃ³n
    } else {
      this.classList.remove("favorited");
      this.textContent = "Favorite"; // Regresa al estado original si se hace clic nuevamente
    }
  });
});
