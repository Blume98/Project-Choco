document.addEventListener("DOMContentLoaded", () => {
  const openModalBtn = document.querySelector(".loved-btn");
  const closeModalBtn = document.querySelector(".modal-close-btn");
  const modal = document.querySelector(".backdrop");
  openModalBtn.addEventListener("click", () => {
    modal.classList.add("is-open");
  });

  closeModalBtn.addEventListener("click", () => {
    modal.classList.remove("is-open");
  });

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.classList.remove("is-open");
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("is-open")) {
      modal.classList.remove("is-open");
    }
  });
});

const menu = document.querySelector(".burger-menu");
const openBtn = document.querySelector(".btn-open-menu");
const closeBtn = document.querySelector(".burger-close-btn");

openBtn.addEventListener("click", () => {
  menu.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  menu.classList.remove("active");
});

document.addEventListener("click", (e) => {
  if (!menu.contains(e.target) && !openBtn.contains(e.target)) {
    menu.classList.remove("active");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".burger-menu");
  const openBtn = document.querySelector(".btn-open-menu");
  const closeBtn = document.querySelector(".burger-close-btn");

  openBtn.addEventListener("click", () => {
    menu.classList.add("active");
  });

  closeBtn.addEventListener("click", () => {
    menu.classList.remove("active");
  });

  document.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && !openBtn.contains(e.target)) {
      menu.classList.remove("active");
    }
  });

  const menuLinks = menu.querySelectorAll("a");
  menuLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      menu.classList.remove("active");

      const targetId = link.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth",
        });
      }
    });
  });
});
