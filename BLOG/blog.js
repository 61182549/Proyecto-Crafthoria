const articulos = [
  {
    titulo: "5 Ideas para decorar tu casa con madera reciclada",
    descripcion: "Descubre cómo transformar espacios con materiales sostenibles, elegantes y únicos.",
    imagen: "https://www.handfie.com/wp-content/uploads/2018/03/organizador-con-latas-recicladas.jpg",
    enlace: "blog1.html"
  },
  {
    titulo: "Regalos personalizados: más que un detalle",
    descripcion: "Los obsequios hechos a mano son memorables. Mira cómo crear el tuyo en Crafthoria.",
    imagen: "https://www.reciclajecontemar.es/wp-content/uploads/reciclar-palets-de-madera-una-forma-sostenible-de-reutilizacion.jpg",
    enlace: "blog2.html"
  },
  {
    titulo: "Crafthoria y el medio ambiente",
    descripcion: "Descubre cómo usamos materiales reciclados y procesos sostenibles para cuidar el planeta.",
    imagen: "https://www.handfie.com/wp-content/uploads/2018/03/portavelas-pinzas-tender.jpg",
    enlace: "blog3.html"
  },
  {
    titulo: "Decoración bohemia con materiales reciclados",
    descripcion: "Crea ambientes con alma usando fibras naturales, madera y objetos reutilizados.",
    imagen: "https://imgmedia.wapa.pe/1200x630/wapa/migration/imagen/2019/05/19/noticia-1558317360-boho-portada.png",
    enlace: "blog4.html"
  }
];

const contenedor = document.getElementById("blog-contenedor");

for (let i = 0; i < articulos.length; i++) {
  const a = articulos[i];

  const card = document.createElement("div");
  card.classList.add("blog-post");

  card.innerHTML = `
    <img src="${a.imagen}" alt="${a.titulo}">
    <h3>${a.titulo}</h3>
    <p>${a.descripcion}</p>
    <a href="${a.enlace}">Leer más</a>
  `;

  contenedor.appendChild(card);
}
