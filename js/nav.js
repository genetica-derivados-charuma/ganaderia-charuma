(() => {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || currentPath.includes(href)) {
      link.classList.add('active');
    }
  });
})();

document.addEventListener('DOMContentLoaded', () => {
  const profileBtn = document.getElementById('profileBtn');
  const profileDropdown = document.getElementById('profileDropdown');

  if (profileBtn) {
    profileBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      profileDropdown.classList.toggle('active');
    });

    document.addEventListener('click', function (e) {
      if (!profileDropdown.contains(e.target) && !profileBtn.contains(e.target)) {
        profileDropdown.classList.remove('active');
      }
    });
  }
});