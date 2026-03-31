document.documentElement.classList.add("js");

document.addEventListener("DOMContentLoaded", function () {
  var navShell = document.querySelector("[data-nav-shell]");
  var navToggle = document.querySelector("[data-nav-toggle]");
  var navLinks = Array.prototype.slice.call(document.querySelectorAll("[data-nav-link]"));
  var revealNodes = Array.prototype.slice.call(document.querySelectorAll(".reveal"));
  var sectionNodes = Array.prototype.slice.call(document.querySelectorAll("section[id]"));

  if (navShell && navToggle) {
    navToggle.addEventListener("click", function () {
      var isOpen = navShell.getAttribute("data-open") === "true";
      navShell.setAttribute("data-open", isOpen ? "false" : "true");
      navToggle.setAttribute("aria-expanded", isOpen ? "false" : "true");
    });

    navLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        navShell.setAttribute("data-open", "false");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  if ("IntersectionObserver" in window) {
    var revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18 }
    );

    revealNodes.forEach(function (node) {
      revealObserver.observe(node);
    });
  } else {
    revealNodes.forEach(function (node) {
      node.classList.add("is-visible");
    });
  }

  if (sectionNodes.length && navLinks.length && "IntersectionObserver" in window) {
    var activeObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) {
            return;
          }

          var activeId = entry.target.getAttribute("id");
          navLinks.forEach(function (link) {
            var linkTarget = link.getAttribute("href").replace("#", "");
            link.classList.toggle("is-active", linkTarget === activeId);
          });
        });
      },
      {
        rootMargin: "-35% 0px -45% 0px",
        threshold: 0.01,
      }
    );

    sectionNodes.forEach(function (section) {
      activeObserver.observe(section);
    });
  }
});
