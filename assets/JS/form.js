// Chiudi menu mobile se la finestra supera i 900px
window.addEventListener('resize', function() {
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  if (window.innerWidth > 900 && mobileMenu && hamburger) {
    mobileMenu.classList.remove('open');
    hamburger.classList.remove('active');
    hamburger.setAttribute('aria-expanded', false);
    mobileMenu.setAttribute('aria-hidden', true);
  }
});
// form.js

// Inizializza EmailJS con la tua Public Key
document.addEventListener("DOMContentLoaded", function() {
  emailjs.init("U70abOd0ArdnhoMS7");
});

// Aggiungi event listener al form
document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("contact-form");
  const msg = document.getElementById("form-message");

  if (form) {
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      console.log("Form inviato!"); // <--- aggiungi questa riga

      // Invia i dati tramite EmailJS
      emailjs.sendForm("service_portfolio", "template_za5h3wo", this)
        .then(function() {
          if (msg) {
            msg.textContent = "✅ Il tuo messaggio è stato inviato con successo! Ti risponderò il prima possibile.";
            msg.style.color = "green";
          }
          form.reset(); // svuota il form dopo l’invio
        }, function(error) {
          if (msg) {
            msg.textContent = "❌ Qualcosa è andato storto: ricontrolla che le info siano giuste " + JSON.stringify(error);
            msg.style.color = "red";
          }
        });
    });
  }
});

// Hamburger menu functionality
document.addEventListener("DOMContentLoaded", function() {
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', function() {
      const isOpen = mobileMenu.classList.toggle('open');
      hamburger.classList.toggle('active');
      hamburger.setAttribute('aria-expanded', isOpen);
      mobileMenu.setAttribute('aria-hidden', !isOpen);
    });
    mobileMenu.querySelectorAll('.menu-link').forEach(link => {
      link.addEventListener('click', function() {
        mobileMenu.classList.remove('open');
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', false);
        mobileMenu.setAttribute('aria-hidden', true);
      });
    });
  }
});
