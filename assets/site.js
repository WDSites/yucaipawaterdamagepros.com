(function () {
  "use strict";
  var BREAKPOINT = 900;
  var toggle = document.querySelector(".menu-toggle");
  var links = document.getElementById("navlinks");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.textContent = open ? "Close" : "Menu";
    });
    window.addEventListener("resize", function () {
      if (window.innerWidth > BREAKPOINT && links.classList.contains("open")) {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.textContent = "Menu";
      }
    });
  }
  var items = document.querySelectorAll(".faq-item");
  Array.prototype.forEach.call(items, function (item) {
    var q = item.querySelector(".faq-q");
    var a = item.querySelector(".faq-a");
    if (!q || !a) { return; }
    q.addEventListener("click", function () {
      var open = item.classList.toggle("open");
      q.setAttribute("aria-expanded", open ? "true" : "false");
      a.style.maxHeight = open ? a.scrollHeight + "px" : "0px";
    });
  });
})();
