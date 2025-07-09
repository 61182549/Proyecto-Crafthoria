document.addEventListener("DOMContentLoaded", () => {
  const navHTML = `
    <h1><a href="../inicio/inicio.html">Crafthoria</a></h1>
    <div class="nav">
      <a href="../inicio/inicio.html">Inicio</a>
      <a href="../productos/productos.html">Productos</a>
      <a href="../personalizacion/personalizacion.html">Personalización</a>
      <a href="../blog/blog.html">Blog</a>
      <a href="../contactos/contacto.html">Contacto</a>
      <a href="../registro/registro.html">Registro</a>
    </div>
  `;
  const header = document.querySelector(".header");
  if (header) header.innerHTML = navHTML;
});
