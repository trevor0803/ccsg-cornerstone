/* CCSG — shared interactions */
(function () {
  // Mobile nav toggle
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      links.classList.toggle("open");
    });
  }

  // Contact form (mailto fallback; set FORM_ENDPOINT to capture in a dashboard)
  var FORM_ENDPOINT = ""; // e.g. Formspree or LeadConnector form action URL
  var RECIPIENT = "mark@ccsg.com";
  var form = document.getElementById("ccsg-contact");
  var status = document.getElementById("form-status");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }
      var d = {
        name: form.name.value.trim(),
        email: form.email.value.trim(),
        phone: form.phone.value.trim(),
        role: form.role.value,
        service: form.service.value,
        message: form.message.value.trim()
      };
      if (FORM_ENDPOINT) {
        fetch(FORM_ENDPOINT, {
          method: "POST",
          headers: { Accept: "application/json", "Content-Type": "application/json" },
          body: JSON.stringify(d)
        }).then(function (r) {
          if (r.ok) { ok(); form.reset(); } else { fail(); }
        }).catch(fail);
      } else {
        var subject = "New project inquiry from " + (d.name || "website");
        var body =
          "Name: " + d.name + "\n" +
          "Email: " + d.email + "\n" +
          "Phone: " + (d.phone || "-") + "\n" +
          "I am a: " + (d.role || "-") + "\n" +
          "Service needed: " + (d.service || "-") + "\n\n" +
          "Project details:\n" + d.message + "\n";
        window.location.href = "mailto:" + RECIPIENT +
          "?subject=" + encodeURIComponent(subject) +
          "&body=" + encodeURIComponent(body);
        ok();
      }
    });
  }
  function ok() {
    if (!status) return;
    status.className = "status show";
    status.textContent = "Thanks! Your message is on its way — we respond within 24 hours.";
  }
  function fail() {
    alert("Something went wrong. Please call 561-723-3580.");
  }

  // Footer year
  var y = document.getElementById("year");
  if (y) y.textContent = "2026";
})();
