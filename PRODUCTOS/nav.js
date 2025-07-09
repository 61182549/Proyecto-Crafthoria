document.addEventListener("DOMContentLoaded", () => {
  const navHTML = `
    <h1><a href="/Proyecto-Crafthoria/INICIO/inicio.html">Crafthoria</a></h1>
    <div class="nav">
      <a href="/Proyecto-Crafthoria/INICIO/inicio.html">Inicio</a>
      <a href="/Proyecto-Crafthoria/PRODUCTOS/productos.html">Productos</a>
      <a href="/Proyecto-Crafthoria/PERSONALIZACION/personalizacion.html">Personalización</a>
      <a href="/Proyecto-Crafthoria/BLOG/blog.html">Blog</a>
      <a href="/Proyecto-Crafthoria/CONTACTOS/contacto.html">Contacto</a>
      <a href="/Proyecto-Crafthoria/REGISTRO/registro.html">Registro</a>
    </div>
  `;
  const header = document.querySelector(".header");
  if (header) header.innerHTML = navHTML;
});

