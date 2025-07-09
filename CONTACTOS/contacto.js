document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-contacto");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Crear mensaje flotante
    const notificacion = document.createElement("div");
    notificacion.className = "notificacion visible";
    notificacion.textContent = "✅ ¡Tu mensaje fue enviado con éxito!";
    document.body.appendChild(notificacion);

    // Ocultar y eliminar después de 3 segundos
    setTimeout(() => {
      notificacion.classList.remove("visible");
      setTimeout(() => notificacion.remove(), 500);
    }, 3000);

    // Limpiar formulario
    form.reset();
  });
});

