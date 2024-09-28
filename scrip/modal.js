// modal.js
const movieCards = document.querySelectorAll(".movie-card");

movieCards.forEach((card) => {
  card.addEventListener("click", function (event) {
    // Verifica que no se ha hecho clic en el botÃ³n de favoritos
    if (!event.target.classList.contains("favorite-btn")) {
      const movieTitle = this.querySelector("h3").textContent;
      const movieDescription = this.querySelector("p").textContent;
      const movieImage = this.querySelector(".movie-img").src;

      // Rellena los datos del modal
      document.getElementById("movieTitle").textContent = movieTitle;
      document.getElementById("movieDescription").textContent =
        movieDescription;
      document.getElementById("modalMovieImage").src = movieImage; // Muestra la misma portada

      // Muestra el modal
      document.getElementById("movieModal").style.display = "block";
    }
  });
});

// Cerrar el modal
function closeModal() {
  document.getElementById("movieModal").style.display = "none";
}
