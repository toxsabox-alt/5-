document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("contact-form");
  if (!form) return;
  var cfg = window.SITE_CONFIG || {};
  var email = cfg.email || "your@email.ru";

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
    window.location.href =
      "mailto:" +
      email +
      "?subject=" +
      encodeURIComponent(subj) +
      "&body=" +
      encodeURIComponent(body);
  });
});
