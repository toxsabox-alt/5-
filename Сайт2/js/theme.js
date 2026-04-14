(function () {
  var KEY = "terpenyeva-site-theme";

  function read() {
    var t = localStorage.getItem(KEY);
    if (t === "light" || t === "dark") return t;
    return "dark";
  }

  function write(t) {
    localStorage.setItem(KEY, t);
  }

  function paint() {
    var t = read();
    document.documentElement.setAttribute("data-theme", t);
    var btn = document.getElementById("theme-toggle");
    if (btn) {
      btn.setAttribute("aria-pressed", t === "light" ? "true" : "false");
      btn.setAttribute(
        "aria-label",
        t === "light" ? "Включить тёмную тему" : "Включить светлую тему"
      );
      btn.textContent = t === "light" ? "☾" : "☀";
    }
  }

  paint();

  document.addEventListener("click", function (e) {
    var b = e.target.closest("#theme-toggle");
    if (!b) return;
    var cur =
      document.documentElement.getAttribute("data-theme") === "light"
        ? "light"
        : "dark";
    var next = cur === "light" ? "dark" : "light";
    write(next);
    paint();
  });

  document.addEventListener("DOMContentLoaded", paint);
})();
