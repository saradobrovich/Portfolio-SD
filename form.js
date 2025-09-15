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
