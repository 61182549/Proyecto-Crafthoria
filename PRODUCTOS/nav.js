document.addEventListener("DOMContentLoaded", () => {
  const navHTML = `
    <h1><a href="/Crafthoria/inicio/inicio.html">Crafthoria</a></h1>
    <div class="nav">
      <a href="/Crafthoria/inicio/inicio.html">Inicio</a>
      <a href="/Crafthoria/productos/productos.html">Productos</a>
      <a href="/Crafthoria/personalizacion/personalizacion.html">Personalización</a>
      <a href="/Crafthoria/blog/blog.html">Blog</a>
      <a href="/Crafthoria/contactos/contacto.html">Contacto</a>
      <a href="/Crafthoria/registro/registro.html">Registro</a>
    </div>
  `;
  const header = document.querySelector(".header");
  if (header) header.innerHTML = navHTML;
});
