const menuToggle = document.querySelector(".menu-toggle");
const navbarMobile = document.getElementById("display-menu-navbar");

menuToggle.addEventListener("click", function () {
  navbarMobile.classList.toggle("slide");
});
