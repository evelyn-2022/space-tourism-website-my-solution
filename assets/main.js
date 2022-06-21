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
const navLinkGroup = document.querySelector(".nav-list");
const navLinkItems = document.querySelectorAll(".nav-list a");
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
if (btnBack && btnFront) {
  btnFront.addEventListener("mouseenter", function () {
    btnBack.classList.add("expand-ani");
    btnBack.classList.remove("shrink-ani");
  });
  btnFront.addEventListener("mouseleave", function () {
    btnBack.classList.remove("expand-ani");
    btnBack.classList.add("shrink-ani");
  });
}

// Change Technology picture
const toLandscape = function () {
  const img = document.querySelector(".technology-img");
  if (!img) return;

  const winWidth = this.window.outerWidth;
  const name = img.dataset.name;

  if (winWidth <= 768) {
    img.setAttribute(
      "src",
      `./assets/images/technology/image-${name}-landscape.jpg`
    );
  }
};

const toPortrait = function () {
  const img = document.querySelector(".technology-img");
  if (!img) return;

  const winWidth = this.window.outerWidth;
  const name = img.dataset.name;

  if (winWidth > 768) {
    img.setAttribute(
      "src",
      `./assets/images/technology/image-${name}-portrait.jpg`
    );
  }
};
window.addEventListener("load", toLandscape);
window.addEventListener("resize", toLandscape);
window.addEventListener("load", toPortrait);
window.addEventListener("resize", toPortrait);
