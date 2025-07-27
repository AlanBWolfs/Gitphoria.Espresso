// 🚀 Renderizar productos en el checkout
function renderizarCheckout() {
  const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  const contenedor = document.getElementById('checkoutProductos');
  contenedor.innerHTML = '';

  if (carrito.length === 0) {
    contenedor.innerHTML = '<p class="text-center">Tu carrito está vacío.</p>';
    document.getElementById('checkoutTotal').textContent = '$0.00';
    return;
  }

  carrito.forEach(producto => {
    const col = document.createElement('div');
    col.className = 'col-md-6 col-lg-4';
    col.innerHTML = `
      <div class="card">
        <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
        <div class="card-body">
          <h5 class="card-title">${producto.nombre}</h5>
          <p class="card-text">Cantidad: ${producto.cantidad}</p>
          <p class="card-text">Precio total: $${producto.precioTotal.toFixed(2)}</p>
          ${producto.salsa ? `<p class="card-text">Salsa: ${producto.salsa}</p>` : ''}
          ${producto.proteina ? `<p class="card-text">Proteína: ${producto.proteina}</p>` : ''}
          ${producto.base ? `<p class="card-text">Base: ${producto.base}</p>` : ''}
          ${producto.notas ? `<p class="card-text"><em>Notas:</em> ${producto.notas}</p>` : ''}
        </div>
      </div>
    `;
    contenedor.appendChild(col);
  });

  const total = carrito.reduce((acc, prod) => acc + prod.precioTotal, 0);
  document.getElementById('checkoutTotal').textContent = `$${total.toFixed(2)}`;
}

// ✨ Validación del formulario en tiempo real
function inicializarValidaciones() {
  const form = document.getElementById('checkoutForm');
  form.addEventListener('input', e => {
    const input = e.target;
    if (input.checkValidity()) {
      input.classList.add('is-valid');
      input.classList.remove('is-invalid');
    } else {
      input.classList.add('is-invalid');
      input.classList.remove('is-valid');
    }
  });

  form.addEventListener('submit', e => {
    e.preventDefault();
    if (!form.checkValidity()) {
      e.stopPropagation();
      form.classList.add('was-validated');
      mostrarToast("Por favor, completa correctamente todos los campos.", "danger");
      return;
    }

    finalizarCompra();
  });
}

// 🧾 Finalizar compra: genera ID, guarda pedido, limpia carrito
function finalizarCompra() {
  const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  if (carrito.length === 0) return;

  const pedidoId = `PED-${Math.floor(10000 + Math.random() * 90000)}`;
  const total = carrito.reduce((acc, prod) => acc + prod.precioTotal, 0);

  const datosCliente = {
    nombre: document.getElementById('nombre').value,
    apellido: document.getElementById('apellido').value,
    telefono: document.getElementById('telefono').value,
    correo: document.getElementById('correo').value,
    tarjeta: document.getElementById('tarjeta').value,
    expiracion: document.getElementById('expiracion').value,
    cvv: document.getElementById('cvv').value
  };

  const nuevoPedido = {
    id: pedidoId,
    productos: carrito,
    total: total.toFixed(2),
    tiempoPreparacion: "50 minutos",
    cliente: datosCliente,
    fecha: new Date().toLocaleString()
  };

  const pedidosPrevios = JSON.parse(localStorage.getItem('pedidos')) || [];
  pedidosPrevios.push(nuevoPedido);
  localStorage.setItem('pedidos', JSON.stringify(pedidosPrevios));

  localStorage.removeItem('carrito');

  mostrarToast(`✅ Pedido ${pedidoId} generado exitosamente`, "success");

  setTimeout(() => {
    window.location.href = "/pages/confirmacion.html"; // puedes usar una página de éxito
  }, 2500);
}

// 🔔 Toast visual modular
function mostrarToast(mensaje, tipo = "info") {
  const toast = document.createElement("div");
  toast.className = `toast align-items-center text-bg-${tipo} border-0`;
  toast.setAttribute("role", "alert");
  toast.setAttribute("aria-live", "assertive");
  toast.setAttribute("aria-atomic", "true");

  toast.innerHTML = `
    <div class="d-flex">
      <div class="toast-body">${mensaje}</div>
      <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Cerrar"></button>
    </div>
  `;

  const container = document.querySelector(".toast-container-dinamica");
  container.appendChild(toast);

  const bsToast = new bootstrap.Toast(toast, { delay: 3000 });
  bsToast.show();

  toast.addEventListener("hidden.bs.toast", () => toast.remove());
}

// 🧩 Inicialización
document.addEventListener('DOMContentLoaded', () => {
  renderizarCheckout();
  inicializarValidaciones();
});