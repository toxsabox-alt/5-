/* Fade animation */
const faders = document.querySelectorAll(".fade");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
});
faders.forEach((fade) => observer.observe(fade));

/* Parallax gold line */
window.addEventListener("scroll", () => {
  document.querySelectorAll(".parallax-line").forEach((line) => {
    const offset = window.pageYOffset * 0.4;
    line.style.transform = "translateY(" + offset + "px)";
  });
});

/* Scroll light effect */
const light = document.getElementById("light");
if (light) {
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    light.style.opacity = Math.min(scrollY / 800, 0.25);
  });
}
