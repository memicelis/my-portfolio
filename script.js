const openMenu = document.querySelector(".mobile-nav");
const closeMenu = document.querySelector(".close-icon");
const menuLinks = document.querySelectorAll(".sidebar-link");

openMenu.addEventListener("click", () => {
  document.querySelector(".mobile-menu-nav").classList.add("visible");
  console.log("OPEN");
});

closeMenu.addEventListener("click", () => {
  document.querySelector(".mobile-menu-nav").classList.remove("visible");
  console.log("CLOSE");
});

menuLinks.forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelector(".mobile-menu-nav").classList.remove("visible");
  });
});
