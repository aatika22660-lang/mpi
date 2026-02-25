// Scroll reveal
const targets = document.querySelectorAll(
  '.str-card, .comp-item, .bit-card, .mc-card, .isa-card, .arch-card, ' +
  '.fam-card, .app-card, .af-box, .cr-card, .plat-card, .sbc-card, ' +
  '.qt-row, .hero-card, .sub-section, .port-card'
);

targets.forEach(el => el.classList.add('reveal'));

const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const idx = Array.from(targets).indexOf(entry.target);
      setTimeout(() => entry.target.classList.add('visible'), (idx % 7) * 70);
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

targets.forEach(el => io.observe(el));

// Nav active highlight
const sections = document.querySelectorAll('section[id]');
const pills = document.querySelectorAll('.nav-pill');

window.addEventListener('scroll', () => {
  let cur = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 220) cur = s.id;
  });
  pills.forEach(p => {
    const active = p.getAttribute('href') === `#${cur}`;
    p.style.background = active ? '#1e1e2e' : '';
    p.style.color = active ? '#fff' : '';
    p.style.borderColor = active ? '#1e1e2e' : '';
  });
});
