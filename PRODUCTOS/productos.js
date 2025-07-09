const productos = [
  {
    nombre: "Espejo con marco de madera contemporaneo",
    descripcion: "excelente para ponerlo en donde quieras.",
    precio: "S/. 60.00",
    imagen: "https://dstilo.es/17288-big_default_2x/espejo-de-diseno-contemporaneo-con-marco-de-madera-ds263-4019.jpg",
    categoria: "madera"
  },
  {
    nombre: "Reloj de madera",
    descripcion: "Diseño elegante y ecológico con madera .",
    precio: "S/. 25.00",
    imagen: "https://i5.walmartimages.com/asr/3f7d5fee-6fa5-4c37-ab5b-6a6f93c72dd8.465fef6ffd90c439f040299056d09985.jpeg",
    categoria: "madera"
  },
  {
    nombre: "Portavasos",
    descripcion: "Ligero, ecológico y resistente. adecuado como base de tus tazas",
    precio: "S/. 20.00",
    imagen: "https://i.etsystatic.com/14697383/r/il/7abebf/2788568314/il_570xN.2788568314_66yk.jpg",
    categoria: "madera"
  },
  {
    nombre: "Cuadro tallado en madera",
    descripcion: "Cuadro artesanal tallado a mano con detalles geometricos.",
    precio: "S/. 70.00",
    imagen: "https://i.pinimg.com/originals/cc/f3/33/ccf333a7a773ad8da1b4557c8e221eec.jpg"
  },
  {
   nombre: "Lámpara colgante de acero",
   descripcion: "Ideal para salas modernas o cocinas industriales.",
   precio: "S/. 120.00",
   imagen: "https://m.media-amazon.com/images/I/41EADsdoYSL._UF894,1000_QL80_.jpg",
   categoria: "metal"
  },
  {
   nombre: "Estantería flotante metalico",
   descripcion: "Estilo industrial con acabado negro mate.",
   precio: "S/. 55.00",
   imagen: "https://http2.mlstatic.com/D_NQ_NP_985815-MLU72595912361_102023-O.webp",
   categoria: "metal"
  },
  {
   nombre: "Cuadro personalizado con frase",
   descripcion: "Elige tu frase favorita y la grabamos en madera o acrílico.",
   precio: "S/. 45.00",
   imagen: "img/cuadro-frase.jpg",
   categoria: "madera"
  },
  {
   nombre: "Bandeja de desayuno de bambú",
   descripcion: "Sostenible y elegante, ideal para sorprender con un desayuno en la cama.",
   precio: "S/. 38.00",
   imagen: "img/bandeja-bambu.jpg",
   categoria: "bambu"
  },
  {
   nombre: "Perchero rústico de pared",
   descripcion: "Organiza tus prendas con este perchero de diseño vintage en madera natural.",
   precio: "S/. 50.00",
   imagen: "img/perchero-pared.jpg",
   categoria: "madera"
  },
  {
   nombre: "Marco de fotos grabado",
   descripcion: "Un recuerdo especial con grabado personalizado en la madera.",
   precio: "S/. 30.00",
   imagen: "img/marco-foto.jpg",
   categoria: "madera"
  },
  {
   nombre: "Candelabro artesanal de madera",
   descripcion: "Para velas delgadas, ideal para cenas románticas o decoraciones bohemias.",
   precio: "S/. 28.00",
   imagen: "img/candelabro.jpg",
   categoria: "madera"
  },
  {
   nombre: "Soporte de laptop de bambú",
   descripcion: "Ergonómico, ligero y perfecto para tu zona de estudio.",
   precio: "S/. 65.00",
   imagen: "img/soporte-laptop.jpg",
   categoria: "bambu"
  },
  {
   nombre: "Cojines artesanales tejidos",
   descripcion: "Juego de 2 con diseños andinos. Colores vibrantes.",
   precio: "S/. 45.00",
   imagen: "https://andina-concept.com/cdn/shop/collections/Cojines-1087_689ae9b1-cf20-456c-9f26-4b4310063107.jpg?v=1736101475&width=1500",
   categoria: "textil"
  },
  {
   nombre: "Caminos de mesa bordados",
   descripcion: "Hechos a mano con patrones florales tradicionales.",
   precio: "S/. 35.00",
   imagen: "https://i.pinimg.com/736x/8d/91/91/8d91913aac798e0c8e1f36e152f08cbe.jpg",
   categoria: "textil"
  }
];

// Referencias DOM
const contenedor = document.querySelector("#product-grid");
const listaCarrito = document.querySelector("#lista-carrito");
const totalElemento = document.querySelector("#total");
const btnVaciar = document.querySelector("#vaciar-carrito");
const btnToggle = document.querySelector("#toggle-carrito");
const carritoLateral = document.querySelector("#carrito-lateral");
const filtro = document.querySelector("#filtro-categoria");

let total = 0;

// Mostrar productos con `for`
function mostrarProductos(categoria = "todos") {
  contenedor.innerHTML = "";

  // Filtrar productos según la categoría
  const filtrados = (categoria === "todos")
    ? productos
    : productos.filter(p => p.categoria === categoria);

  for (let i = 0; i < filtrados.length; i++) {
    const producto = filtrados[i];

    const tarjeta = document.createElement("div");
    tarjeta.classList.add("product");

    tarjeta.innerHTML = `
      <img src="${producto.imagen}" alt="${producto.nombre}" class="product-img">
      <h3>${producto.nombre}</h3>
      <p>${producto.descripcion}</p>
      <p>Precio: ${producto.precio}</p>
      <button class="btn-agregar">Añadir al Carrito</button>
    `;

    const boton = tarjeta.querySelector(".btn-agregar");
    boton.addEventListener("click", function () {
      agregarAlCarrito(producto);
    });

    contenedor.appendChild(tarjeta);
  }
}

// Agregar al carrito
function agregarAlCarrito(producto) {
  const item = document.createElement("li");
  item.textContent = `${producto.nombre} - ${producto.precio}`;
  listaCarrito.appendChild(item);

  const precioNumerico = parseFloat(producto.precio.replace("S/. ", ""));
  total += precioNumerico;
  totalElemento.textContent = `Total: S/. ${total.toFixed(2)}`;
}

// Vaciar carrito
btnVaciar.addEventListener("click", () => {
  listaCarrito.innerHTML = "";
  total = 0;
  totalElemento.textContent = "Total: S/. 0.00";
});

// Mostrar u ocultar carrito
btnToggle.addEventListener("click", () => {
  carritoLateral.classList.toggle("oculto");
});

// Filtrado por categoría
filtro.addEventListener("change", () => {
  const seleccion = filtro.value;
  mostrarProductos(seleccion);
});

// Mostrar todos los productos al cargar
mostrarProductos();






