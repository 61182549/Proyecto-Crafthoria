// Capturar elementos
const formulario = document.querySelector(".custom-form");
const tipo = document.querySelector("#tipo");
const material = document.querySelector("#material");
const tamano = document.querySelector("#tamano");
const texto = document.querySelector("#texto");
const imagen = document.querySelector("#imagen");
const vistaPrevia = document.querySelector(".preview-box");

// Evento cuando se envía el formulario
formulario.addEventListener("submit", function (e) {
  e.preventDefault(); // evitar recargar

  // Validación sencilla
  if (texto.value.trim() === "") {
    vistaPrevia.innerHTML = "Por favor ingresa un texto personalizado.";
    return;
  }

  // Generar resumen
  vistaPrevia.innerHTML = `
    <div style="text-align:left">
      <strong>✅ Pedido personalizado:</strong><br>
      🧩 <b>Tipo:</b> ${tipo.value}<br>
      🎨 <b>Material:</b> ${material.value}<br>
      📐 <b>Tamaño:</b> ${tamano.value}<br>
      ✍️ <b>Texto:</b> ${texto.value}<br>
      <b>📎 Imagen:</b> ${imagen.files.length > 0 ? imagen.files[0].name : "No se adjuntó"}<br>
    </div>
  `;
});
