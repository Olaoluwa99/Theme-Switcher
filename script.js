const toggleBtn = document.getElementById("toggleBtn");
const body = document.body;

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-theme");
  body.classList.toggle("light-theme");

  toggleBtn.textContent = body.classList.contains("dark-theme")
    ? "🌞 Switch to Light Theme"
    : "🌙 Switch to Dark Theme";
});
