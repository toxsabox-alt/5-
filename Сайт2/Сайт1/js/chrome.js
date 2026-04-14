(function () {
  var cfg = window.SITE_CONFIG || {};
  var SITE_EMAIL = "mailto:" + (cfg.email || "your@email.ru");
  var SITE_TELEGRAM = cfg.telegram || "https://t.me/your_username";

  var root = document.body.getAttribute("data-root") || "";
  var active = document.body.getAttribute("data-active") || "";

  function L(path) {
    return root + path;
  }

  function navClass(id) {
    return id === active ? ' class="active"' : "";
  }

  var navItems = [
    { id: "home", href: L("index.html"), label: "Главная" },
    { id: "services", href: L("services/index.html"), label: "Услуги" },
    { id: "blog", href: L("blog/index.html"), label: "Блог" },
    { id: "about", href: L("about/index.html"), label: "Обо мне" },
    {
      id: "calculator",
      href: L("calculator/index.html"),
      label: "Калькулятор потерь",
    },
    { id: "contact", href: L("contact.html"), label: "Начать работу" },
  ];

  var navHtml = navItems
    .map(function (item) {
      return (
        '<a href="' +
        item.href +
        '"' +
        navClass(item.id) +
        ">" +
        item.label +
        "</a>"
      );
    })
    .join("");

  var headerHtml =
    '<header class="site-header">' +
    '<div class="header-inner">' +
    '<a class="brand" href="' +
    L("index.html") +
    '">Оксана Терпенёва</a>' +
    "<nav>" +
    navHtml +
    "</nav>" +
    '<button type="button" class="theme-toggle" id="theme-toggle" aria-label="Переключить тему">☀</button>' +
    "</div>" +
    "</header>";

  var footerHtml =
    '<footer class="site-footer">' +
    '<div class="footer-grid">' +
    "<div>" +
    "<h3>Связь</h3>" +
    '<div class="contact-chips">' +
    '<a class="contact-chip" href="' +
    SITE_EMAIL +
    '">' +
    (cfg.email || "your@email.ru") +
    "</a>" +
    '<a class="contact-chip" href="' +
    SITE_TELEGRAM +
    '" target="_blank" rel="noopener noreferrer">Telegram</a>' +
    "</div>" +
    "</div>" +
    "<div>" +
    "<h3>Разделы</h3>" +
    '<a href="' +
    L("services/index.html") +
    '">Услуги</a><br>' +
    '<a href="' +
    L("blog/index.html") +
    '">Блог</a><br>' +
    '<a href="' +
    L("about/index.html") +
    '">Обо мне</a><br>' +
    '<a href="' +
    L("calculator/index.html") +
    '">Калькулятор потерь</a>' +
    "</div>" +
    "<div>" +
    "<h3>Документы</h3>" +
    '<a href="' +
    L("privacy/index.html") +
    '">Политика конфиденциальности</a><br>' +
    '<a href="' +
    L("consent/index.html") +
    '">Согласие на обработку ПДн</a>' +
    "</div>" +
    "</div>" +
    '<p class="footer-meta">Цифровая инфраструктура бизнеса · архитектура масштабирования 2026 Оксана Терпенёва</p>' +
    "</footer>";

  var h = document.getElementById("chrome-header");
  var f = document.getElementById("chrome-footer");
  if (h) h.outerHTML = headerHtml;
  if (f) f.outerHTML = footerHtml;
})();
