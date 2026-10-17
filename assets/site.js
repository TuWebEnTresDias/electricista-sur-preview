"use strict";

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".main-nav");

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const expanded = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!expanded));
    navigation.classList.toggle("is-open", !expanded);
  });
}

const contactForm = document.querySelector("#whatsapp-form");
if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!contactForm.reportValidity()) return;
    const fields = new FormData(contactForm);
    const text = [
      "Hola, quisiera consultar por un trabajo eléctrico.",
      `Nombre: ${fields.get("name")}`,
      `Correo: ${fields.get("email")}`,
      `Teléfono: ${fields.get("phone") || "No indicado"}`,
      `Consulta: ${fields.get("message")}`,
    ].join("\n");
    const url = `https://wa.me/541150432855?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  });
}
