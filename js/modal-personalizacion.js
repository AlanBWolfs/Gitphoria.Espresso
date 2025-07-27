// modal-personalizacion.js
import { menuElementos } from './menu-data.js';
import { actualizarContadorCarrito } from './utils-carrito.js';


// Mostrar el modal con contenido dinámico
export function mostrarModalPersonalizacion(nombre, precio, imagen) {
  const modal = new bootstrap.Modal(document.getElementById('modalPersonalizacion'));
  document.getElementById('modalNombre').textContent = nombre;
  document.getElementById('modalPrecio').textContent = `$${precio.toFixed(2)}`;
  document.getElementById('modalImagen').src = imagen;
  document.getElementById('cantidadProducto').value = 1;

  const modalEl = document.getElementById('modalPersonalizacion');
  modalEl.dataset.nombre = nombre;
  modalEl.dataset.precio = precio;
  modalEl.dataset.imagen = imagen;

  rellenarOpciones(nombre);
  modal.show();
}

// Rellenar opciones dinámicas según el producto
export function rellenarOpciones(nombreBuscado) {
  const opcionesContainer = document.getElementById('opcionesContainer');
  opcionesContainer.innerHTML = '';

  for (const tipo in menuElementos) {
    for (const categoria in menuElementos[tipo]) {
      for (const subcategoria in menuElementos[tipo][categoria]) {
        const productos = menuElementos[tipo][categoria][subcategoria];
        const producto = productos.find(p => p.name === nombreBuscado || p.nombre === nombreBuscado);
        if (!producto) continue;

        if (producto.opciones?.salsas) {
          const grupo = document.createElement('div');
          grupo.className = 'mb-3';
          grupo.innerHTML = `<label class="form-label">Salsa</label>`;
          producto.opciones.salsas.forEach(salsa => {
            grupo.innerHTML += `
              <div class="form-check">
                <input class="form-check-input" type="radio" name="salsa" value="${salsa}">
                <label class="form-check-label">${salsa}</label>
              </div>`;
          });
          opcionesContainer.appendChild(grupo);
        }

        if (producto.proteinas) {
          const grupo = document.createElement('div');
          grupo.className = 'mb-3';
          grupo.innerHTML = `<label class="form-label">Proteína extra</label>`;
          for (const [nombreProteina, precio] of Object.entries(producto.proteinas)) {
            grupo.innerHTML += `
              <div class="form-check">
                <input class="form-check-input" type="radio" name="proteina" value="${nombreProteina}" data-precio="${precio}">
                <label class="form-check-label">
                  ${nombreProteina} (+$${precio.toFixed(2)})
                </label>
              </div>`;
          }
          opcionesContainer.appendChild(grupo);
        }

        if (producto.description?.includes("Base a elegir")) {
          const grupo = document.createElement('div');
          grupo.className = 'mb-3';
          grupo.innerHTML = `<label class="form-label">Base</label>`;
          ["Limonada", "Agua mineral", "Leche"].forEach(base => {
            grupo.innerHTML += `
              <div class="form-check">
                <input class="form-check-input" type="radio" name="base" value="${base}">
                <label class="form-check-label">${base}</label>
              </div>`;
          });
          opcionesContainer.appendChild(grupo);
        }

        return; // Solo cargamos una vez
      }
    }
  }
}

// Configurar suma y resta sin duplicar eventos
export function inicializarPersonalizacion() {
  const btnSumar = document.getElementById('btnSumar');
  btnSumar.replaceWith(btnSumar.cloneNode(true));
  document.getElementById('btnSumar').addEventListener('click', () => {
    const input = document.getElementById('cantidadProducto');
    input.value = parseInt(input.value) + 1;
  });

  const btnRestar = document.getElementById('btnRestar');
  btnRestar.replaceWith(btnRestar.cloneNode(true));
  document.getElementById('btnRestar').addEventListener('click', () => {
    const input = document.getElementById('cantidadProducto');
    input.value = Math.max(1, parseInt(input.value) - 1);

   
  });
  
}

// Solo se usa en el submit para limpiar backdrop y desbloquear scroll
/*function cerrarModalPersonalizacion() {
  const modalElement = document.getElementById('modalPersonalizacion');
const modal = bootstrap.Modal.getOrCreateInstance(modalElement);
modal.hide();

  const instancia = bootstrap.Modal.getInstance(modal);
  instancia?.hide();

  setTimeout(() => {
    document.querySelector('.modal-backdrop')?.remove();
    document.body.classList.remove('modal-open');
    document.body.style.paddingRight = '';
    modal.classList.remove('show');
    modal.setAttribute('aria-hidden', 'true');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    document.body.style.pointerEvents = 'auto';
    document.documentElement.style.overflow = 'auto';
  }, 300);
}*/

function limpiezaPostModal() {
  setTimeout(() => {
    document.querySelector('.modal-backdrop')?.remove();
    document.body.classList.remove('modal-open');
    document.body.style.removeProperty('overflow');
    document.body.style.removeProperty('padding-right');
    document.documentElement.style.removeProperty('overflow');
  }, 100);
}
// Submit: agrega producto al carrito y cierra el modal
document.getElementById('formPersonalizar').addEventListener('submit', e => {
  e.preventDefault();

  const modalEl = document.getElementById('modalPersonalizacion');
  const modalInstance = bootstrap.Modal.getOrCreateInstance(modalEl);
  modalInstance.hide(); // 👈 esto es suficiente

 limpiezaPostModal();

  const nombre = modalEl.dataset.nombre;
  const precioBase = parseFloat(modalEl.dataset.precio);
  const imagen = modalEl.dataset.imagen;
  const cantidad = parseInt(document.getElementById('cantidadProducto').value);
  const notas = document.getElementById('notasCliente').value;

  const salsa = document.querySelector('input[name="salsa"]:checked')?.value;
  const proteinaEl = document.querySelector('input[name="proteina"]:checked');
  const proteina = proteinaEl?.value;
  const precioProteina = proteinaEl ? parseFloat(proteinaEl.dataset?.precio) : 0;
  const base = document.querySelector('input[name="base"]:checked')?.value;

  const precioFinal = (precioBase + precioProteina) * cantidad;

  const productoPersonalizado = {
    nombre,
    imagen,
    cantidad,
    precioUnitario: precioBase,
    precioTotal: precioFinal,
    salsa,
    proteina,
    base,
    notas
  };

  const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  carrito.push(productoPersonalizado);
  localStorage.setItem('carrito', JSON.stringify(carrito));

  e.target.reset();
  mostrarMensaje(`"${nombre}" agregado al carrito ✅`, "success"); // función modular opcional
actualizarContadorCarrito(); // ← nuevo, explicado abajo
});


document.getElementById('modalPersonalizacion')
  .addEventListener('hidden.bs.modal', () => {
    setTimeout(() => {
      document.querySelector('.modal-backdrop')?.remove();
      document.body.classList.remove('modal-open');
      document.body.style.removeProperty('overflow');
      document.body.style.removeProperty('padding-right');
      document.documentElement.style.removeProperty('overflow');
    }, 100);
  });

export function mostrarMensaje(texto, tipo = "success") {
  const toast = document.createElement("div");
  toast.className = `toast align-items-center text-bg-${tipo} border-0`;
  toast.setAttribute("role", "alert");
  toast.setAttribute("aria-live", "assertive");
  toast.setAttribute("aria-atomic", "true");

  toast.innerHTML = `
    <div class="d-flex">
      <div class="toast-body">${texto}</div>
      <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Cerrar"></button>
    </div>
  `;

  const container = document.querySelector(".toast-container-dinamica");
  container.appendChild(toast);

  const bsToast = new bootstrap.Toast(toast, { delay: 3000 });
  bsToast.show();

  toast.addEventListener("hidden.bs.toast", () => {
    toast.remove();
  });
}