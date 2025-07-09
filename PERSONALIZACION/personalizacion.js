const formulario = document.querySelector(".custom-form");
const campos = ["tipo", "material", "tamano", "texto", "imagen"];
const vistaPrevia = document.querySelector(".preview-box");
const botonEnviar = formulario.querySelector("button");

// Evento cuando se envía el formulario
formulario.addEventListener("submit", function (e) {
  e.preventDefault();

  const valores = {};
  for (let i = 0; i < campos.length; i++) {
    const campo = campos[i];
    const elemento = document.getElementById(campo);
    if (campo !== "imagen") {
      valores[campo] = elemento.value;
    } else {
      valores[campo] = elemento.files.length > 0 ? elemento.files[0] : null;
    }
  }

  if (valores["texto"].trim() === "") {
    vistaPrevia.innerHTML = "⚠️ Por favor ingresa un texto personalizado.";
    return;
  }

  // Crear HTML del resumen
  let resumen = "<div style='text-align:left'><strong>✅ Pedido personalizado:</strong><br>";
  resumen += `🧩 Tipo: ${valores.tipo}<br>`;
  resumen += `🎨 Material: ${valores.material}<br>`;
  resumen += `📐 Tamaño: ${valores.tamano}<br>`;
  resumen += `✍️ Texto: ${valores.texto}<br>`;

  if (valores.imagen) {
    const imgURL = URL.createObjectURL(valores.imagen);
    resumen += `📎 Imagen: ${valores.imagen.name}<br><img src="${imgURL}" style="max-width: 100%; margin-top: 10px; border-radius: 8px;" alt="Vista previa de la imagen">`;
  } else {
    resumen += `📎 Imagen: No se adjuntó`;
  }

  resumen += "</div>";
  vistaPrevia.innerHTML = resumen;

  // Cambiar el botón a "Enviado"
  botonEnviar.textContent = "Enviado ✅";
  botonEnviar.disabled = true;
  botonEnviar.style.backgroundColor = "#28a745";

  // Restaurar después de 4 segundos
  setTimeout(() => {
    botonEnviar.textContent = "Enviar pedido";
    botonEnviar.disabled = false;
    botonEnviar.style.backgroundColor = "#7d7777";
  }, 4000);
});
