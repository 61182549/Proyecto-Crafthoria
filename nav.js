document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".nav");

  if (nav) {
    nav.innerHTML = `
      <a href="/inicio/inicio.html">Inicio</a>
      <a href="/productos/productos.html">Productos</a>
      <a href="/personalizacion/personalizacion.html">Personalización</a>
      <a href="/blog/blog.html">Blog</a>
      <a href="/contactos/contacto.html">Contactos</a>
      <a href="/registro/registro.html">Registro</a>
    `;
  }
});



