const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-header nav');
if (navToggle && nav) {
  navToggle.addEventListener('click', () => nav.classList.toggle('open'));
  nav.addEventListener('click', (event) => {
    if (event.target instanceof HTMLAnchorElement) nav.classList.remove('open');
  });
}
