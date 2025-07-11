document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".nav");

  const base = location.hostname.includes("github.io")
    ? "/Proyecto-Crafthoria/"
    : "/";

  if (nav) {
    nav.innerHTML = `
      <a href="${base}INICIO/inicio.html">Inicio</a>
      <a href="${base}PRODUCTOS/productos.html">Productos</a>
      <a href="${base}PERSONALIZACION/personalizacion.html">Personalización</a>
      <a href="${base}BLOG/blog.html">Blog</a>
      <a href="${base}CONTACTOS/contacto.html">Contactos</a>
      <a href="${base}REGISTRO/registro.html">Registro</a>
    `;
  }
});







