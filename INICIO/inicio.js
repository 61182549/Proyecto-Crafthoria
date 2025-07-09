const mensajes = [
  "Crea con pasión y transforma tu espacio 🌿",
  "Cada rincón cuenta una historia... ¡Hazla tuya! ✨",
  "Un hogar con alma empieza con un toque artesanal 🏡",
  "No vendas productos, comparte emociones ❤️",
  "La sostenibilidad comienza con pequeños cambios 🌱"
];

// Muestra un mensaje al azar
const btnMensaje = document.getElementById("mostrar-mensaje");
const parrafo = document.getElementById("mensaje-motivador");

btnMensaje.addEventListener("click", () => {
  const index = Math.floor(Math.random() * mensajes.length);
  parrafo.textContent = mensajes[index];
});

// Requisito: mostrar todos los mensajes usando for
for (let i = 0; i < mensajes.length; i++) {
  console.log(`Mensaje ${i + 1}: ${mensajes[i]}`);
}

// ==== Productos (usando for) ====

const productos = [
  {
    nombre: "Cuadro tallado en madera",
    descripcion: "Cuadro artesanal tallado a mano con detalles geométricos. Ideal para decorar salas o estudios con estilo rústico.",
    precio: "S/. 60.00",
    imagen: "./img/cuadro-madera.jpg",
    estrellas: 4
  },
  {
    nombre: "Portavasos de madera grabado",
    descripcion: "Set de 4 piezas de madera natural con grabados únicos. Elegante y funcional para el día a día.",
    precio: "S/. 25.00",
    imagen: "img/portavasos.jpg",
    estrellas: 4
  },
  {
    nombre: "Soporte para celular de bambú",
    descripcion: "Ligero, ecológico y resistente. Perfecto para escritorio, hecho de bambú natural.",
    precio: "S/. 35.00",
    imagen: "img/soporte-bambu.jpg",
    estrellas: 4
  },
  {
    nombre: "Reloj de pared de madera",
    descripcion: "Diseño elegante y minimalista hecho con madera reutilizada. Añade estilo y conciencia ecológica a tu hogar.",
    precio: "S/. 70.00",
    imagen: "img/reloj-madera.jpg",
    estrellas: 4
  }
];

// Mostrar productos con for
const contenedorProductos = document.querySelector("#product-grid");

for (let i = 0; i < productos.length; i++) {
  const producto = productos[i];

  // Crear el HTML con innerHTML + estrellas
  const tarjeta = document.createElement("div");
  tarjeta.classList.add("product");

  // Generar estrellas
  let estrellasHtml = "";
  for (let j = 0; j < 5; j++) {
    estrellasHtml += j < producto.estrellas ? "⭐" : "☆";
  }

  tarjeta.innerHTML = `
    <img src="${producto.imagen}" alt="${producto.nombre}" class="product-img">
    <h3>${producto.nombre}</h3>
    <p>${producto.descripcion}</p>
    <p>Precio: ${producto.precio}</p>
    <div class="rating">${estrellasHtml}</div>
  `;

  contenedorProductos.appendChild(tarjeta);
}

