document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("contact-form");
  if (!form) return;
  var cfg = window.SITE_CONFIG || {};
  var email = cfg.email || "ivamarmaris@yandex.ru";

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var consent = document.getElementById("consent-pd");
    if (!consent || !consent.checked) {
      alert("Нужно согласие на обработку персональных данных.");
      return;
    }
    var name = (document.getElementById("cf-name") || {}).value || "";
    var from = (document.getElementById("cf-email") || {}).value || "";
    var msg = (document.getElementById("cf-message") || {}).value || "";
    var subj = "Заявка с сайта — архитектурный разбор";
    var body =
      "Имя: " +
      name +
      "\n" +
      "Email: " +
      from +
      "\n\n" +
      msg;
    var yandexUrl =
      "https://mail.yandex.ru/compose?to=" +
      encodeURIComponent(email) +
      "&subject=" +
      encodeURIComponent(subj) +
      "&body=" +
      encodeURIComponent(body);
    window.open(yandexUrl, "_blank", "noopener,noreferrer");
  });
});
