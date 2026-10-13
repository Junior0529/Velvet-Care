const NUMERO_WHATSAPP = "18093961604";
let carrito = [];

function cargarCatalogo(listaProductos = productos) {
  const contenedor = document.getElementById("grid-productos");
  if (!contenedor) return;

  contenedor.innerHTML = "";

  if (listaProductos.length === 0) {
    contenedor.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #777;">No hay productos disponibles en esta categoría.</p>`;
    return;
  }

  listaProductos.forEach(prod => {
    const mensajeComprarAhora = encodeURIComponent(
      `Hola Velvet & Care, quiero comprar inmediatamente el siguiente producto:\n\n*Producto:* ${prod.nombre}\n*Precio:* RD$ ${prod.precioPVP.toFixed(2)}`
    );
    const linkComprarAhora = `https://wa.me/${NUMERO_WHATSAPP}?text=${mensajeComprarAhora}`;

    contenedor.innerHTML += `
      <div class="tarjeta-producto" onclick="abrirModal('${prod.id}')">
        <div class="contenedor-img">
          <img src="${prod.imagen}" alt="${prod.nombre}" onerror="this.src='https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=300'">
        </div>
        <div class="info-producto">
          <h3>${prod.nombre}</h3>
          <p class="descripcion">${prod.descripcion}</p>
          <p class="precio">RD$ ${prod.precioPVP.toFixed(2)}</p>
          <div class="botones-tarjeta" onclick="event.stopPropagation()">
            <button class="btn-agregar" onclick="agregarAlCarrito('${prod.id}')">
              <i class="fas fa-cart-plus"></i> Agregar al Carrito
            </button>
            <a href="${linkComprarAhora}" target="_blank" class="btn-comprar-directo">
              <i class="fab fa-whatsapp"></i> Comprar Ahora
            </a>
          </div>
        </div>
      </div>
    `;
  });
}

function filtrarProductos(categoria) {
  const botones = document.querySelectorAll(".btn-filtro");
  botones.forEach(btn => btn.classList.remove("active"));
  event.target.classList.add("active");

  if (categoria === "todos") {
    cargarCatalogo(productos);
  } else {
    const filtrados = productos.filter(p => p.categoria === categoria);
    cargarCatalogo(filtrados);
  }
}

// --- LÓGICA DEL CARRITO ---
function agregarAlCarrito(idProducto) {
  const producto = productos.find(p => p.id === idProducto);
  if (!producto) return;

  const itemExistente = carrito.find(item => item.id === idProducto);
  if (itemExistente) {
    itemExistente.cantidad++;
  } else {
    carrito.push({ ...producto, cantidad: 1 });
  }

  actualizarCarritoUI();
  document.getElementById("panel-carrito").classList.add("activo");
}

function eliminarDelCarrito(idProducto) {
  carrito = carrito.filter(item => item.id !== idProducto);
  actualizarCarritoUI();
}

function cambiarCantidad(idProducto, cambio) {
  const item = carrito.find(item => item.id === idProducto);
  if (item) {
    item.cantidad += cambio;
    if (item.cantidad <= 0) {
      eliminarDelCarrito(idProducto);
    } else {
      actualizarCarritoUI();
    }
  }
}

function actualizarCarritoUI() {
  const contador = document.getElementById("contador-carrito");
  const contadorNav = document.getElementById("contador-nav");
  const listaItems = document.getElementById("lista-carrito-items");
  const totalPrecio = document.getElementById("carrito-total-precio");

  const totalItems = carrito.reduce((sum, item) => sum + item.cantidad, 0);
  contador.innerText = totalItems;
  if (contadorNav) contadorNav.innerText = totalItems;

  if (carrito.length === 0) {
    listaItems.innerHTML = `<p class="carrito-vacio">Tu carrito está vacío.</p>`;
    totalPrecio.innerText = "RD$ 0.00";
    return;
  }

  listaItems.innerHTML = "";
  let sumaTotal = 0;

  carrito.forEach(item => {
    const subtotal = item.precioPVP * item.cantidad;
    sumaTotal += subtotal;

    listaItems.innerHTML += `
      <div class="carrito-item">
        <div class="carrito-item-info">
          <h4>${item.nombre}</h4>
          <p>RD$ ${item.precioPVP.toFixed(2)} x ${item.cantidad}</p>
        </div>
        <div class="carrito-item-controles">
          <button onclick="cambiarCantidad('${item.id}', -1)">-</button>
          <span>${item.cantidad}</span>
          <button onclick="cambiarCantidad('${item.id}', 1)">+</button>
          <button class="btn-eliminar-item" onclick="eliminarDelCarrito('${item.id}')"><i class="fas fa-trash"></i></button>
        </div>
      </div>
    `;
  });

  totalPrecio.innerText = `RD$ ${sumaTotal.toFixed(2)}`;
}

function toggleCarrito() {
  const panel = document.getElementById("panel-carrito");
  panel.classList.toggle("activo");
}

function enviarPedidoWhatsApp() {
  if (carrito.length === 0) {
    alert("Tu carrito está vacío. Agrega productos antes de enviar el pedido.");
    return;
  }

  let mensaje = "Hola Velvet & Care, deseo realizar el siguiente pedido:\n\n";
  let sumaTotal = 0;

  carrito.forEach(item => {
    const subtotal = item.precioPVP * item.cantidad;
    sumaTotal += subtotal;
    mensaje += `▪️ *${item.nombre}* (${item.cantidad}x) - RD$ ${subtotal.toFixed(2)}\n`;
  });

  mensaje += `\n*Total General: RD$ ${sumaTotal.toFixed(2)}*\n\n¡Espero su confirmación!`;

  const linkWhatsApp = `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(mensaje)}`;
  window.open(linkWhatsApp, '_blank');
}

// --- VISTA MODAL (DETALLE DE PRODUCTO) ---
function abrirModal(idProducto) {
  const producto = productos.find(p => p.id === idProducto);
  if (!producto) return;

  document.getElementById("modal-img").src = producto.imagen;
  document.getElementById("modal-titulo").innerText = producto.nombre;
  document.getElementById("modal-categoria").innerText = `Categoría: ${producto.categoria.toUpperCase()}`;
  document.getElementById("modal-descripcion").innerText = producto.descripcion;
  document.getElementById("modal-precio").innerText = `RD$ ${producto.precioPVP.toFixed(2)}`;

  // Botón Agregar al carrito en el modal
  const btnAgregarModal = document.getElementById("modal-btn-agregar");
  btnAgregarModal.onclick = function() {
    agregarAlCarrito(producto.id);
    cerrarModal();
  };

  // Botón Comprar Ahora en el modal
  const mensajeModal = encodeURIComponent(
    `Hola Velvet & Care, quiero comprar inmediatamente el siguiente producto:\n\n*Producto:* ${producto.nombre}\n*Precio:* RD$ ${producto.precioPVP.toFixed(2)}`
  );
  document.getElementById("modal-btn-comprar").href = `https://wa.me/${NUMERO_WHATSAPP}?text=${mensajeModal}`;

  document.getElementById("modal-producto").style.display = "flex";
}

function cerrarModal() {
  document.getElementById("modal-producto").style.display = "none";
}

window.onclick = function(event) {
  const modal = document.getElementById("modal-producto");
  if (event.target === modal) {
    cerrarModal();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  cargarCatalogo(productos);
});