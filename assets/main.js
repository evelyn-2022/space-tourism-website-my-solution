// Toggle Navbar
const navToggleIcon = document.querySelector(".nav-toggle-icon");
const navToggleIconImage = document.querySelector(".nav-toggle-icon-img");
const navbar = document.querySelector(".navbar");

navToggleIcon.addEventListener("click", function () {
  if (navbar.classList.contains("responsive")) {
    navbar.classList.remove("responsive");
    navToggleIconImage.setAttribute(
      "src",
      "./assets/images/shared/icon-hamburger.svg"
    );
  } else {
    navbar.classList.add("responsive");
    navToggleIconImage.setAttribute(
      "src",
      "./assets/images/shared/icon-close.svg"
    );
  }
});

// Set Link Active
const navLinkGroup = document.querySelector(".nav-list.link-group");
const navLinkItems = document.querySelectorAll(".nav-item a");
navLinkGroup.addEventListener("click", function (e) {
  const clickedLink = e.target.closest("a");

  if (!clickedLink) return;
  if (clickedLink.classList.contains("active-nav-link")) return;

  navLinkItems.forEach((item) => {
    item.classList.remove("active-nav-link");
  });
  clickedLink.classList.add("active-nav-link");
});

// Explore Hover
const btnBack = document.querySelector(".bg-back");
const btnFront = document.querySelector(".bg-front");
btnFront.addEventListener("mouseenter", function () {
  btnBack.classList.add("expand-ani");
  btnBack.classList.remove("shrink-ani");
});
btnFront.addEventListener("mouseleave", function () {
  btnBack.classList.remove("expand-ani");
  btnBack.classList.add("shrink-ani");
});
