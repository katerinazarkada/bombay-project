const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  if (navLinks.classList.contains("active")) {
    menuToggle.innerHTML = '&times;'; // X symbol
    menuToggle.setAttribute("aria-expanded", "true");
  } else {
    menuToggle.innerHTML = '&#9776;'; // Hamburger symbol
    menuToggle.setAttribute("aria-expanded", "false");
  }
});
