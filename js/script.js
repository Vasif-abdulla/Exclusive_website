document.addEventListener("DOMContentLoaded", function () {
  const openMenu = document.getElementById('openMenu');
  const closeMenu = document.getElementById('closeMenu');
  const navMenu = document.getElementById('navMenu');

  openMenu.addEventListener('click', function () {
    navMenu.classList.add('active');
    openMenu.style.display = 'none';
    closeMenu.style.display = 'inline';
  });

  closeMenu.addEventListener('click', function () {
    navMenu.classList.remove('active');
    openMenu.style.display = 'inline';
    closeMenu.style.display = 'none';
  });
});

const navLinks = document.querySelectorAll('.nav-menu a');

navLinks.forEach(link => {
  link.addEventListener('click', function () {
    // Remove active class from all
    navLinks.forEach(nav => nav.classList.remove('active'));

    // Add active to the clicked one
    this.classList.add('active');

    // Optional: close menu on mobile after click
    document.getElementById('navMenu').classList.remove('active');
    document.getElementById('openMenu').style.display = 'inline';
    document.getElementById('closeMenu').style.display = 'none';
  });
});