const hamburger = document.getElementById("hamburger");
const overlay = document.getElementById("overlay");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  overlay.classList.toggle("active");
});
