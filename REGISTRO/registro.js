document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registro-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (!nombre || !email || !password || !confirmPassword) {
      mostrarMensaje("Por favor, completa todos los campos.");
      return;
    }

    if (password !== confirmPassword) {
      mostrarMensaje("Las contraseñas no coinciden.");
      return;
    }

    // Si todo está OK
    mostrarMensaje("✅ ¡Registro exitoso!", true);

    setTimeout(() => {
      window.location.href = "../INICIO/inicio.html";
    }, 2500);
  });

  function mostrarMensaje(texto, exito = false) {
    const noti = document.createElement("div");
    noti.className = "notificacion";
    noti.textContent = texto;

    if (exito) noti.style.backgroundColor = "#28a745";
    else noti.style.backgroundColor = "#d9534f";

    document.body.appendChild(noti);
    setTimeout(() => noti.classList.add("visible"), 100);

    setTimeout(() => {
      noti.classList.remove("visible");
      setTimeout(() => noti.remove(), 400);
    }, 3000);
  }
});


