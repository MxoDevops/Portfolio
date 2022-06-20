const hamburgermenu = document.querySelector('.nav-toggle');
const menuNav = document.querySelector('.navbar ul');

hamburgermenu.addEventListener('click', () => {
  hamburgermenu.classList.toggle('active');
  menuNav.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((n) =>
  n.addEventListener('click', () => {
    hamburgermenu.classList.remove('active');
    menuNav.classList.remove('active');
  })
);