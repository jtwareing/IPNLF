const mobileMenu = document.querySelector('.mobile-nav');

document.addEventListener('click', (event) => {
  if (event.target.closest('.mobile-panel a')) mobileMenu?.removeAttribute('open');
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') mobileMenu?.removeAttribute('open');
});
