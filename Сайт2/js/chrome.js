(function () {
  var cfg = window.SITE_CONFIG || {};
  var MAIL_ADDR = cfg.email || "ivamarmaris@yandex.ru";
  /* Веб-интерфейс Яндекс.Почты: окно письма с уже указанным получателем */
  var YANDEX_COMPOSE =
    "https://mail.yandex.ru/compose?to=" + encodeURIComponent(MAIL_ADDR);
  var SITE_TELEGRAM = cfg.telegram || "https://t.me/your_username";
  var TG_USER = (function () {
    var m = /(?:t\.me|telegram\.me)\/([a-zA-Z0-9_]+)/i.exec(cfg.telegram || "");
    return m ? m[1] : "ivamarmaris";
  })();

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
    '<a class="contact-chip contact-chip--email" href="' +
    YANDEX_COMPOSE +
    '" target="_blank" rel="noopener noreferrer" title="' +
    MAIL_ADDR +
    '" aria-label="Написать на почту ' +
    MAIL_ADDR +
    ' (Яндекс Почта)">e-mail</a>' +
    '<a class="contact-chip" href="' +
    SITE_TELEGRAM +
    '" target="_blank" rel="noopener noreferrer" title="Написать в Telegram: @' +
    TG_USER +
    '" aria-label="Открыть чат Telegram с @' +
    TG_USER +
    '" style="display:inline-flex;align-items:center;justify-content:center;min-width:48px;min-height:48px;padding:10px 12px">' +
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>' +
    "</a>" +
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
