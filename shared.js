const NAV_HTML = `
<nav>
  <a href="index.html" class="nav-logo">FRAGMNT</a>
  <button class="nav-hamburger" onclick="toggleMenu()" aria-label="Menu">&#9776;</button>
  <ul class="nav-links" id="navLinks">
    <li><a href="index.html">Home</a></li>
    <li><a href="services.html">Services</a></li>
    <li><a href="pricing.html">Pricing</a></li>
    <li><a href="about.html">About</a></li>
    <li><a href="contact.html">Contact</a></li>
    <li><a href="book.html" class="nav-cta">Book Now</a></li>
  </ul>
</nav>`;

const FOOTER_HTML = `
<div class="divider"></div>
<footer>
  <span class="footer-logo">FRAGMNT</span>
  <div style="display:flex;align-items:center;gap:1.5rem;">
    <a href="https://www.instagram.com/fragmnt.nyc/" target="_blank" class="footer-link">@fragmnt.nyc ↗</a>
    <span class="footer-copy">© 2026 Fragmnt · New York City</span>
  </div>
</footer>`;

function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}

// Auto-inject on load — no need to call injectShared() manually
document.addEventListener('DOMContentLoaded', function() {
  document.body.insertAdjacentHTML('afterbegin', NAV_HTML);
  document.body.insertAdjacentHTML('beforeend', FOOTER_HTML);
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === page) a.classList.add('active');
  });
});
