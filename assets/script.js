const menuBtn = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");
const sticky = nav.offsetTop;
const navLinks = document.querySelectorAll(".menu a");

navLinks.forEach((link) => link.addEventListener("click", toggleMenu));

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (menu.classList.contains("is-active")) {
    menu.classList.remove("is-active");
    menuBtn.classList.remove("is-active");
  } else {
    menu.classList.add("is-active");
    menuBtn.classList.add("is-active");
  }
}

window.onscroll = function () {
  lockNavbar();
};

function lockNavbar() {
  if (window.pageYOffset >= sticky) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
}
