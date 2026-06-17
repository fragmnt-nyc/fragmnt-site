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

const SHARED_CSS = `
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
:root{
  --black:#080808;
  --surface:#111111;
  --surface2:#181818;
  --border:rgba(255,255,255,0.08);
  --border-hover:rgba(255,255,255,0.18);
  --text:#f0f0f0;
  --muted:#888;
  --white:#ffffff;
}
html{scroll-behavior:smooth;}
body{background:var(--black);color:var(--text);font-family:'Space Grotesk',sans-serif;font-size:16px;line-height:1.6;-webkit-font-smoothing:antialiased;}

nav{position:fixed;top:0;left:0;right:0;z-index:100;display:flex;align-items:center;justify-content:space-between;padding:1.2rem 3rem;background:rgba(8,8,8,0.9);backdrop-filter:blur(12px);border-bottom:1px solid var(--border);}
.nav-logo{font-family:'Space Mono',monospace;font-size:1rem;font-weight:700;letter-spacing:0.12em;color:var(--white);text-decoration:none;}
.nav-links{display:flex;gap:2.5rem;list-style:none;}
.nav-links a{color:var(--muted);text-decoration:none;font-size:0.85rem;letter-spacing:0.06em;text-transform:uppercase;transition:color 0.2s;}
.nav-links a:hover{color:var(--white);}
.nav-links a.active{color:var(--white);}
.nav-cta{background:var(--white) !important;color:var(--black) !important;padding:0.5rem 1.2rem;border-radius:4px;font-weight:600 !important;}
.nav-cta:hover{opacity:0.85;}
.nav-hamburger{display:none;background:none;border:none;color:var(--white);font-size:1.4rem;cursor:pointer;}

.divider{height:1px;background:var(--border);max-width:1100px;margin:0 auto;}
footer{display:flex;align-items:center;justify-content:space-between;max-width:1100px;margin:0 auto;padding:2.5rem 3rem;}
.footer-logo{font-family:'Space Mono',monospace;font-size:0.9rem;font-weight:700;letter-spacing:0.12em;color:var(--muted);}
.footer-copy{font-size:0.78rem;color:var(--muted);}
.footer-link{color:var(--muted);text-decoration:none;font-size:0.78rem;transition:color 0.2s;}
.footer-link:hover{color:var(--white);}

.section-label{font-family:'Space Mono',monospace;font-size:0.7rem;letter-spacing:0.2em;text-transform:uppercase;color:var(--muted);margin-bottom:0.75rem;display:flex;align-items:center;gap:0.75rem;}
.section-label::before{content:'';display:block;width:24px;height:1px;background:var(--muted);}
.section-title{font-size:clamp(1.8rem,3.5vw,2.8rem);font-weight:600;letter-spacing:-0.025em;color:var(--white);margin-bottom:3.5rem;line-height:1.1;}

.btn-primary{background:var(--white);color:var(--black);border:none;padding:0.85rem 2rem;border-radius:4px;font-family:'Space Grotesk',sans-serif;font-size:0.9rem;font-weight:600;cursor:pointer;text-decoration:none;transition:opacity 0.2s;display:inline-block;}
.btn-primary:hover{opacity:0.85;}
.btn-ghost{background:transparent;color:var(--muted);border:1px solid var(--border-hover);padding:0.85rem 2rem;border-radius:4px;font-family:'Space Grotesk',sans-serif;font-size:0.9rem;font-weight:500;cursor:pointer;text-decoration:none;transition:border-color 0.2s,color 0.2s;display:inline-block;}
.btn-ghost:hover{border-color:var(--white);color:var(--white);}

@media(max-width:768px){
  nav{padding:1rem 1.5rem;}
  .nav-links{display:none;flex-direction:column;position:absolute;top:100%;left:0;right:0;background:rgba(8,8,8,0.98);border-bottom:1px solid var(--border);padding:1.5rem;gap:1.25rem;}
  .nav-links.open{display:flex;}
  .nav-hamburger{display:block;}
  footer{flex-direction:column;gap:1rem;text-align:center;padding:2rem 1.5rem;}
}
`;

function injectShared(activePage) {
  // Inject Google Fonts
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&display=swap';
  document.head.appendChild(link);

  // Inject shared CSS
  const style = document.createElement('style');
  style.textContent = SHARED_CSS;
  document.head.appendChild(style);

  // Inject nav
  document.body.insertAdjacentHTML('afterbegin', NAV_HTML);

  // Inject footer
  document.body.insertAdjacentHTML('beforeend', FOOTER_HTML);

  // Set active nav link
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === activePage) a.classList.add('active');
  });
}

function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}
