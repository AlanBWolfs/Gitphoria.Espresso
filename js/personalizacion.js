// Mostrar el modal con info del producto
export function mostrarModalPersonalizacion(producto) {
  const modal = document.getElementById('modalPersonalizacion');
  const modalTitulo = document.getElementById('modal-titulo');
  const modalImagen = document.getElementById('modal-imagen');
  const modalDescripcion = document.getElementById('modal-descripcion');
  const modalPrecio = document.getElementById('modal-precio');
  const modalOpciones = document.getElementById('modal-opciones');

  modalTitulo.textContent = producto.name;
  modalImagen.src = producto.image;
  modalDescripcion.textContent = producto.description;
  modalPrecio.textContent = `$${producto.price.toFixed(2)}`;
  modalOpciones.innerHTML = ''; // Limpiar opciones previas

  if (producto.opciones?.salsas) {
    const label = document.createElement('label');
    label.textContent = 'Elige una salsa:';
    const select = document.createElement('select');
    select.name = 'salsa';
    producto.opciones.salsas.forEach(salsa => {
      const option = document.createElement('option');
      option.value = salsa;
      option.textContent = salsa;
      select.appendChild(option);
    });
    modalOpciones.appendChild(label);
    modalOpciones.appendChild(select);
  }

  // Mostrar modal
  modal.classList.remove('d-none');

  // Confirmar
  document.getElementById('btn-confirmar').onclick = () => {
    const opcionElegida = modalOpciones.querySelector('select')?.value || null;
    const productoFinal = {
      ...producto,
      opcionElegida
    };
    agregarAlCarrito(productoFinal);
    modal.classList.add('d-none');
  };
}

// Cerrar modal
document.getElementById('cerrarModal').addEventListener('click', () => {
  document.getElementById('modalPersonalizacion').classList.add('d-none');
});

// Simula añadir al carrito (usa LocalStorage por ahora)
function agregarAlCarrito(producto) {
  const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  carrito.push(producto);
  localStorage.setItem('carrito', JSON.stringify(carrito));
  alert(`${producto.name} agregado al carrito.`);
}
