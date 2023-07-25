const openMenu = document.querySelector('.mobile-nav');
const closeMenu = document.querySelector('.close-icon');
const menuLinks = document.querySelectorAll('.sidebar-link');

openMenu.addEventListener('click', () => {
  document.querySelector('.mobile-menu-nav').classList.add('visible');
});

closeMenu.addEventListener('click', () => {
  document.querySelector('.mobile-menu-nav').classList.remove('visible');
});

menuLinks.forEach((item) => {
  item.addEventListener('click', () => {
    document.querySelector('.mobile-menu-nav').classList.remove('visible');
  });
});
