// FAQ Accordion
document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {
      // Close all other items
      faqItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove("active");
        }
      });

      // Toggle current item
      item.classList.toggle("active");
    });
  });
});

// Smooth scrolling for navigation links
window.addEventListener("scroll", function () {
  const navSection = document.querySelector(".nav-section");
  if (window.scrollY > 50) {
    navSection.style.backgroundColor = "white"; /* Change as needed */
    navSection.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
  } else {
    navSection.style.backgroundColor = "transparent";
    navSection.style.boxShadow = "none";
  }
});

// navbar responsive menu
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.querySelector(".nav-links");
  const btnGroup = document.querySelector(".btn-group");
  const menuIcon = hamburger.querySelector("img");

  function toggleMenu() {
    const isOpen = navLinks.classList.toggle("active");
    btnGroup.classList.toggle("active");

    menuIcon.src = isOpen ? "images/menubar.png" : "images/menubar.png";
    menuIcon.alt = isOpen ? "X" : "Open menu";
  }

  hamburger.addEventListener("click", toggleMenu);

  document
    .querySelectorAll(".nav-links a, .btn-group button")
    .forEach((item) => {
      item.addEventListener("click", function () {
        if (window.innerWidth < 769) {
          toggleMenu();
        }
      });
    });

  window.addEventListener("resize", function () {
    if (window.innerWidth >= 769) {
      navLinks.classList.remove("active");
      btnGroup.classList.remove("active");
      menuIcon.src = "images/menubar.png";
      menuIcon.alt = "Open menu";
    }
  });
});
