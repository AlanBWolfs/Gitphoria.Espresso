import { actualizarContadorCarrito } from './utils-carrito.js';
import { mostrarMensaje } from './modal-personalizacion.js';
// Renderizar los productos del carrito
function renderizarCarrito() {
  const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  const contenedor = document.getElementById('carritoProductos');
  contenedor.innerHTML = '';

  if (carrito.length === 0) {
    contenedor.innerHTML = '<p class="text-center">Tu carrito está vacío.</p>';
    document.getElementById('totalCarrito').textContent = '$0.00';
    return;
  }

  carrito.forEach((item, index) => {
    const col = document.createElement('div');
    col.className = 'col-md-6 col-lg-4';
    col.innerHTML = `
      <div class="card card-producto">
       <div class="card-img-wrapper">
  <img src="${item.imagen}" class="card-img" alt="${item.nombre}">
</div>
        <div class="card-body">
          <h5 class="card-title">${item.nombre}</h5>
          <p class="card-text"><strong>Cantidad:</strong> ${item.cantidad}</p>
          <p class="card-text"><strong>Precio total:</strong> $${item.precioTotal.toFixed(2)}</p>
          ${item.salsa ? `<p class="card-text"><strong>Salsa:</strong> ${item.salsa}</p>` : ''}
          ${item.proteina ? `<p class="card-text"><strong>Proteína:</strong> ${item.proteina}</p>` : ''}
          ${item.base ? `<p class="card-text"><strong>Base:</strong> ${item.base}</p>` : ''}
          ${item.notas ? `<p class="card-text"><em><strong>Notas:</strong></em> ${item.notas}</p>` : ''}
          <div class="botones-cantidad">
  <button class="btn btn-outline-secondary btn-sm" data-action="restar" data-index="${index}">−</button>
  <button class="btn btn-outline-secondary btn-sm" data-action="sumar" data-index="${index}">+</button>
  <button class="btn btn-outline-danger btn-sm" data-action="eliminar" data-index="${index}">
  <i class="fas fa-trash-alt"></i>
</button>
</div>

        </div>
      </div>
    `;
    contenedor.appendChild(col);
  });

  calcularTotal();
}

// Calcular el total del carrito
function calcularTotal() {
  const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  const total = carrito.reduce((acc, prod) => acc + prod.precioTotal, 0);
  document.getElementById('totalCarrito').textContent = `$${total.toFixed(2)}`;
}

// Actualizar cantidad de un producto
function actualizarCantidad(index, operacion) {
  const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  const producto = carrito[index];
  if (!producto) return;

  if (operacion === 'sumar') {
    producto.cantidad += 1;
  } else if (operacion === 'restar' && producto.cantidad > 1) {
    producto.cantidad -= 1;
  }

  if (!producto.precioUnitario) {
  producto.precioUnitario = producto.precioTotal / producto.cantidad;
}

const precioUnitario = producto.precioUnitario;
producto.precioTotal = precioUnitario * producto.cantidad;

  carrito[index] = producto;
  localStorage.setItem('carrito', JSON.stringify(carrito));
   actualizarContadorCarrito();
  renderizarCarrito();
}

// Eliminar un producto
function eliminarProducto(index) {
  const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  carrito.splice(index, 1);
  localStorage.setItem('carrito', JSON.stringify(carrito));
   actualizarContadorCarrito();
  renderizarCarrito();
}

// Vaciar todo el carrito
function vaciarCarrito() {
  localStorage.removeItem('carrito');
  renderizarCarrito();
  actualizarContadorCarrito(); 
}

// nicializar eventos
document.addEventListener('DOMContentLoaded', () => {
  renderizarCarrito();

  // Delegación para botones dentro de las cards
  document.getElementById('carritoProductos').addEventListener('click', e => {
    const index = e.target.dataset.index;
    const action = e.target.dataset.action;
    if (action === 'sumar') actualizarCantidad(index, 'sumar');
    if (action === 'restar') actualizarCantidad(index, 'restar');
    if (action === 'eliminar') eliminarProducto(index);
  });

  // Vaciar carrito
  document.getElementById('btnVaciarCarrito').addEventListener('click', () => {
    if (confirm('¿Seguro que deseas vaciar el carrito?')) {
      vaciarCarrito();
    }
  });

  
 //Continuar compra con validación de sesión
document.getElementById('btnContinuarCompra').addEventListener('click', () => {
  const clienteLogueado = localStorage.getItem('clienteLogueado') === "true";
  const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

  if (carrito.length === 0) {
    mostrarMensaje('Tu carrito está vacío. Agrega un producto antes de continuar 🛒', 'danger');
    return;
  }

  if (!clienteLogueado) {
    const modalSesion = new bootstrap.Modal(document.getElementById('modalSesion'));
    modalSesion.show();
  } else {
    window.location.href = "/pages/checkout.html";
  }
});
});