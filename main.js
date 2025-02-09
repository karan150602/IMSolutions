const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-3-line"
  );
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

const scrollRevealOptions = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOptions,
});

ScrollReveal().reveal(".header__btn", {
  ...scrollRevealOptions,
  delay: 500,
});

// service container
ScrollReveal().reveal(".service__card", {
  ...scrollRevealOptions,
  interval: 500,
});

// price container
ScrollReveal().reveal(".price__card", {
  ...scrollRevealOptions,
  interval: 500,
});

ScrollReveal().reveal(".choose__image img", {
    ...scrollRevealOptions,
    origin: "left",
  });
  ScrollReveal().reveal(".choose__content .section__header", {
    ...scrollRevealOptions,
    delay: 500,
  });
  ScrollReveal().reveal(".choose__content .section__description", {
    ...scrollRevealOptions,
    delay: 1000,
  });
  ScrollReveal().reveal(".choose__card", {
    duration: 1000,
    delay: 1500,
    interval: 500,
  });

const swiper = new Swiper(".swiper", {
  pagination: {
    el: '.swiper-pagination',
  },
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  loop: true,
  clickable: true,
});

// instructor container
ScrollReveal().reveal(".instructor__card", {
  ...scrollRevealOption,
  interval: 500,
});