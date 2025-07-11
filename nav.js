document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".nav");

  const isGitHub = location.hostname.includes("github.io");
  const base = isGitHub ? "/Proyecto-Crafthoria/" : "";

  if (nav) {
    nav.innerHTML = `
      <a href="${base}inicio/inicio.html">Inicio</a>
      <a href="${base}productos/productos.html">Productos</a>
      <a href="${base}personalizacion/personalizacion.html">Personalización</a>
      <a href="${base}blog/blog.html">Blog</a>
      <a href="${base}contactos/contacto.html">Contactos</a>
      <a href="${base}registro/registro.html">Registro</a>
    `;
  }
});






