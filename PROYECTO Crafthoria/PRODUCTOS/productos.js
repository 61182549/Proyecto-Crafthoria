const productos = [
  {
    nombre: "Espejo con marco de madera",
    descripcion: "Diseño contemporáneo en madera pulida. Aporta elegancia y amplitud a cualquier espacio.",
    precio: 95.00,
    imagen: "https://dstilo.es/17288-big_default_2x/espejo-de-diseno-contemporaneo-con-marco-de-madera-ds263-4019.jpg"
  },
  {
    nombre: "Cojín decorativo",
    descripcion: "Estilo moderno, perfecta para muebles.",
    precio: 65.00,
    imagen: "https://oechsle.vteximg.com.br/arquivos/ids/20512470-800-800/image-8986891c218d4158a51a7aa12ba97973.jpg?v=638754267596100000"
  },
  {
    nombre: "Caja de almacenamiento rústica",
    descripcion: "Fabricada en madera envejecida. Ideal para organizar mantas, revistas o juguetes.",
    precio: 69.90,
    imagen: "https://plazavea.vteximg.com.br/arquivos/ids/27177311-418-418/null.jpg"
  },
  {
    nombre: "Cuadro artístico rústico",
    descripcion: "Pintura abstracta montada sobre bastidor de madera. Perfecto para espacios creativos.",
    precio: 110.00,
    imagen: "https://dbdzm869oupei.cloudfront.net/img/quadres/medium/34569.jpg"
  },
  {
    nombre: "Cajonera organizadora de madera",
    descripcion: "Ideal para escritorios, tocadores o salas de manualidades.",
    precio: 250.00,
    imagen: "https://storage.googleapis.com/catalog-pictures-carrefour-es/catalog/pictures/hd_510x_/8721158390233_1.jpg"
  },
  {
    nombre: "Portavelas de madera",
    descripcion: "Ideal para decorar salas o mesas.",
    precio: 20.00,
    imagen: "https://m.media-amazon.com/images/I/61XKjKlk6fL._UF894,1000_QL80_.jpg"
  }
];

const boton = document.querySelector("#mostrar");
const contenedor = document.querySelector(".product-grid");

boton.addEventListener("click", () => {
  contenedor.innerHTML = "";

  for (let i = 0; i < productos.length; i++) {
    // Si quieres mostrar solo productos con precio < 150, puedes usar if aquí
    contenedor.innerHTML += `
      <div class="product">
        <img src="${productos[i].imagen}" alt="${productos[i].nombre}" class="product-img">
        <h3>${productos[i].nombre}</h3>
        <p>${productos[i].descripcion}</p>
        <p>Precio: S/ ${productos[i].precio}</p>
        <button>Añadir al Carrito</button>
      </div>
    `;
  }
});
