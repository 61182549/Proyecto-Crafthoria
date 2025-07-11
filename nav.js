const isGitHub = location.hostname.includes("github.io");
const basePath = isGitHub ? "/Proyecto-Crafthoria/" : "";

document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".nav");
  if (nav) {
    nav.innerHTML = `
      <a href="${basePath}INICIO/inicio.html">Inicio</a>
      <a href="${basePath}PRODUCTOS/productos.html">Productos</a>
      <a href="${basePath}PERSONALIZACION/personalizacion.html">Personalización</a>
      <a href="${basePath}BLOG/blog.html">Blog</a>
      <a href="${basePath}CONTACTOS/contacto.html">Contactos</a>
      <a href="${basePath}REGISTRO/registro.html">Registro</a>
    `;
  }
});
