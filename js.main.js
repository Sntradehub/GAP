// Simple scroll animation placeholder
document.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", e => {
    if (link.getAttribute("href") === "#") {
      e.preventDefault();
      alert("This section will be linked soon.");
    }
  });
});// ...existing code...
document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.getElementById('sidebar');
  const hamburger = document.querySelector('.hamburger');

  // create backdrop once
  let backdrop = document.querySelector('.sidebar-backdrop');
  if (!backdrop) {
    backdrop = document.createElement('div');
    backdrop.className = 'sidebar-backdrop';
    document.body.appendChild(backdrop);
  }

  function openSidebar() {
    sidebar.classList.add('open');
    hamburger.classList.add('open');
    backdrop.classList.add('visible');
    document.body.classList.add('no-scroll');
    hamburger.setAttribute('aria-expanded', 'true');
    sidebar.setAttribute('aria-hidden', 'false');
  }

  function closeSidebar() {
    sidebar.classList.remove('open');
    hamburger.classList.remove('open');
    backdrop.classList.remove('visible');
    document.body.classList.remove('no-scroll');
    hamburger.setAttribute('aria-expanded', 'false');
    sidebar.setAttribute('aria-hidden', 'true');
  }

  function toggleSidebar() {
    sidebar.classList.contains('open') ? closeSidebar() : openSidebar();
  }

  // Events
  hamburger.addEventListener('click', toggleSidebar);
  hamburger.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleSidebar();
    }
  });

  backdrop.addEventListener('click', closeSidebar);

  // Close on ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeSidebar();
  });

  // Close when a sidebar link is clicked
  sidebar.querySelectorAll('.nav-links a').forEach(a => a.addEventListener('click', closeSidebar));
});
 // ...existing code...