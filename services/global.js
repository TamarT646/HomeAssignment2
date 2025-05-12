document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");
  
    if (toggleButton && navLinks) {
      toggleButton.addEventListener("click", () => {
        navLinks.classList.toggle("active");
      });
    }
  
    const modeToggle = document.getElementById("modeToggle");
    const modeIcon = document.getElementById("modeIcon");
    const body = document.body;
  
    if (modeToggle && modeIcon) {
      const updateMode = () => {
        const isDark = body.classList.toggle("mode-dark");
        modeIcon.textContent = isDark ? "☀️" : "🌙";
        localStorage.setItem("darkMode", isDark);
      };
  
      modeToggle.addEventListener("click", updateMode);
  
      if (localStorage.getItem("darkMode") === "true") {
        body.classList.add("mode-dark");
        modeIcon.textContent = "☀️";
      }
    }
  });
  