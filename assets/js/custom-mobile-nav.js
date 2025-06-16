document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("mobile-nav-toggle");
  const mobileNav = document.getElementById("main_nav");

  toggleBtn.addEventListener("click", function () {
    mobileNav.classList.toggle("active");
  });

  // Optional: Close menu when clicking a link
  mobileNav.querySelectorAll("a.nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      mobileNav.classList.remove("active");
    });
  });
});
