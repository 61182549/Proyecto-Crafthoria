document.addEventListener("DOMContentLoaded", () => {
  const navHTML = `
    <h1><a href="/Proyecto-Crafthoria/inicio/inicio.html">Crafthoria</a></h1>
    <div class="nav">
      <a href="/Proyecto-Crafthoria/inicio/inicio.html">Inicio</a>
      <a href="/Proyecto-Crafthoria/productos/productos.html">Productos</a>
      <a href="/Proyecto-Crafthoria/personalizacion/personalizacion.html">Personalización</a>
      <a href="/Proyecto-Crafthoria/blog/blog.html">Blog</a>
      <a href="/Proyecto-Crafthoria/contactos/contacto.html">Contacto</a>
      <a href="/Proyecto-Crafthoria/registro/registro.html">Registro</a>
    </div>
  `;
  const header = document.querySelector(".header");
  if (header) header.innerHTML = navHTML;
});
