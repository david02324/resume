/* 장다윗 · resume — interactions */
(function () {
  "use strict";

  var root = document.documentElement;
  var KEY = "resume-theme";

  /* ---- theme ---- */
  function apply(theme) {
    if (theme === "light") root.setAttribute("data-theme", "light");
    else root.removeAttribute("data-theme"); // dark = default
    var icon = document.querySelector("[data-theme-icon]");
    if (icon) icon.textContent = theme === "light" ? "☀" : "☾";
  }

  var saved = null;
  try { saved = localStorage.getItem(KEY); } catch (e) {}
  if (!saved) {
    saved = window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  }
  apply(saved);

  var toggle = document.getElementById("themeToggle");
  if (toggle) {
    toggle.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
      apply(next);
      try { localStorage.setItem(KEY, next); } catch (e) {}
    });
  }

  /* ---- PDF download (uses the browser's print → Save as PDF, vector & crisp) ---- */
  var pdfBtn = document.getElementById("downloadPdf");
  if (pdfBtn) {
    pdfBtn.addEventListener("click", function () {
      window.print();
    });
  }

  /* keyboard: Ctrl/Cmd+P already prints; nothing extra needed */
})();
