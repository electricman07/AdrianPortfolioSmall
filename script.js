document.getElementById("year").textContent = new Date().getFullYear();

// Hamburger menu
const hamburger = document.getElementById("hamburger");
const overlay = document.getElementById("overlay");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  overlay.classList.toggle("active");
});
