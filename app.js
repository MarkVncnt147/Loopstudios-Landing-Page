const hamburger_menu = document.querySelector(".hamburger");
const close_btn = document.querySelector(".close");
const navbar = document.querySelector(".nav");

close_btn.addEventListener("click", () => {
  close_btn.style.display = "none";
  hamburger_menu.style.display = "block";
  navbar.style.display = "none";
});

hamburger_menu.addEventListener("click", () => {
  close_btn.style.display = "block";
  hamburger_menu.style.display = "none";
  navbar.style.display = "block";
});