document.addEventListener("DOMContentLoaded", function () {
  var btn = document.getElementById("calc-run");
  var out = document.getElementById("calc-output");
  if (!btn || !out) return;

  function num(id) {
    var el = document.getElementById(id);
    var v = parseFloat(el && el.value ? el.value.replace(",", ".") : "0");
    return isFinite(v) ? v : 0;
  }

  function fmt(n) {
    return Math.round(n).toLocaleString("ru-RU") + " ₽";
  }

  btn.addEventListener("click", function () {
    var leads = num("calc-leads");
    var convLoss = num("calc-conv-loss");
    var deal = num("calc-deal");
    var hours = num("calc-hours");
    var rate = num("calc-rate");

    var lostDeals = leads * (convLoss / 100);
    var revenueLoss = lostDeals * deal;
    var timeLoss = hours * rate;
    var total = revenueLoss + timeLoss;

    out.innerHTML =
      "<strong>Оценка потерь в месяц: " +
      fmt(total) +
      "</strong><br>" +
      '<span class="hint">Потери по заявкам: ' +
      fmt(revenueLoss) +
      " · Потери по времени: " +
      fmt(timeLoss) +
      "</span>";
  });
});
