const botonMensaje = document.querySelector("#mostrar-mensaje");
const mensajeTexto = document.querySelector("#mensaje-motivador");

const mensajes = [
  "🌟 Cree en tu creatividad, ¡hazlo único!",
  "🪵 Lo hecho a mano tiene alma.",
  "💡 Cada detalle cuenta. Personaliza con amor.",
  "✨ Tu hogar merece algo especial.",
  "🛠️ Hoy es un buen día para crear algo hermoso.",
  "🌿 Inspiración natural para tu espacio ideal.",
];

botonMensaje.addEventListener("click", () => {
  const indice = Math.floor(Math.random() * mensajes.length);
  mensajeTexto.textContent = mensajes[indice];
});
