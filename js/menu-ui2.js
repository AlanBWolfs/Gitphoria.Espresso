import { menuElementos } from './menu-data.js';
import { mostrarModalPersonalizacion, inicializarPersonalizacion } from './modal-personalizacion.js';

document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const isAdmin = params.get('admin') === 'true';

  renderMenu(isAdmin);
  inicializarPersonalizacion();

  // Clicks globales para carrito, editar y eliminar
  document.addEventListener('click', e => {
    if (e.target.matches('.btn-cart')) {
      const nombre = e.target.dataset.nombre;
      const precio = parseFloat(e.target.dataset.precio);
      const imagen = e.target.dataset.imagen;
      mostrarModalPersonalizacion(nombre, precio, imagen);
    }

    if (e.target.matches('.btn-edit')) {
      const card = e.target.closest('.card');
      const nombre = card.querySelector('.card-title').textContent;
      const descripcion = card.querySelector('.card-description').textContent;
      const precio = parseFloat(card.querySelector('.card-price').textContent.replace('$', ''));
      const imagen = card.querySelector('img').src;

      document.getElementById('nombreProducto').value = nombre;
      document.getElementById('descripcionProducto').value = descripcion;
      document.getElementById('precioProducto').value = precio;
      document.getElementById('imagenProducto').value = imagen;
      document.getElementById('productoActual').value = nombre;

      const modal = new bootstrap.Modal(document.getElementById('modalEditar'));
      modal.show();
    }

    if (e.target.matches('.btn-delete')) {
      const card = e.target.closest('.card');
      const nombre = card.querySelector('.card-title').textContent;
      if (confirm(`¿Seguro que quieres eliminar "${nombre}"?`)) {
        card.remove();
        console.log(`Producto eliminado: ${nombre}`);
      }
    }
  });

  // Submit del formulario de edición
  const formEditar = document.getElementById('formEditarProducto');
  if (formEditar) {
    formEditar.addEventListener('submit', e => {
      e.preventDefault();

      const nuevoNombre = document.getElementById('nombreProducto').value;
      const nuevaDescripcion = document.getElementById('descripcionProducto').value;
      const nuevoPrecio = parseFloat(document.getElementById('precioProducto').value).toFixed(2);
      const nuevaImagen = document.getElementById('imagenProducto').value;
      const productoOriginal = document.getElementById('productoActual').value;

      const cards = document.querySelectorAll('.card');
      cards.forEach(card => {
        const titulo = card.querySelector('.card-title');
        if (titulo.textContent === productoOriginal) {
          titulo.textContent = nuevoNombre;
          card.querySelector('.card-description').textContent = nuevaDescripcion;
          card.querySelector('.card-price').textContent = `$${nuevoPrecio}`;
          card.querySelector('img').src = nuevaImagen;
        }
      });

      bootstrap.Modal.getInstance(document.getElementById('modalEditar')).hide();
      e.target.reset();
    });
  }
});


// Renderizador del menú
export function renderMenu(isAdmin = false) {
  console.log(isAdmin ? '🛠️ Modo ADMIN (sin carrito)' : '👤 Modo USUARIO');

  const container = document.getElementById('menu-container');
  container.innerHTML = '';

  const params = new URLSearchParams(window.location.search);
  const tipo = params.get('tipo');
  const categoria = params.get('categoria');

  const categoriaDatos = menuElementos[tipo]?.[categoria];
  if (!categoriaDatos) {
    container.innerHTML = `<p>No se encontró la categoría "${categoria}" para el tipo "${tipo}".</p>`;
    return;
  }

  for (const subcategoria in categoriaDatos) {
    const h2 = document.createElement('h2');
    h2.textContent = subcategoria;
    container.appendChild(h2);

    const grid = document.createElement('div');
    grid.className = 'subcategoria';

    const items = categoriaDatos[subcategoria];
    if (Array.isArray(items)) {
      items.forEach(item => {
        grid.appendChild(crearTarjeta(item, isAdmin));
      });
    }

    container.appendChild(grid);
  }
}

// Crear la tarjeta de producto
function crearTarjeta(item, isAdmin) {
  const card = document.createElement('div');
  card.className = 'card';

  const nombre = item.name || item.nombre || 'Sin nombre';
  const descripcion = item.description || item.descripcion || '';
  const precio = item.price !== undefined ? item.price : (item.precio !== undefined ? item.precio : 0);
  const imagen = item.image || item.imagen || '../assets/default.png';

  let botonesHTML = '';

  if (!isAdmin) {
    botonesHTML += `<button class="btn btn-cart" data-nombre="${nombre}" data-precio="${precio}" data-imagen="${imagen}">Agregar al carrito</button>`;
  } else {
    botonesHTML += `
      <button class="btn btn-edit">Editar</button>
      <button class="btn btn-delete">Eliminar</button>
    `;
  }

  card.innerHTML = `
    <div class="card-img-wrapper">
      <img src="${imagen}" alt="${nombre}" class="card-img">
    </div>
    <div class="card-content">
      <h4 class="card-title">${nombre}</h4>
      <p class="card-description">${descripcion}</p>
      <p class="card-price">$${precio.toFixed(2)}</p>
      <div class="card-buttons">
        ${botonesHTML}
      </div>
    </div>
  `;

  return card;
}



document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const isAdmin = params.get('admin') === 'true';

  renderMenu(isAdmin);

  document.addEventListener('click', e => {
    if (e.target.matches('.btn-cart')) {
      const nombre = e.target.dataset.nombre;
      const precio = parseFloat(e.target.dataset.precio);
      const imagen = e.target.dataset.imagen;

      mostrarModalPersonalizacion(nombre, precio, imagen);
    }

    if (e.target.matches('.btn-edit')) {
      const card = e.target.closest('.card');
      const nombre = card.querySelector('.card-title').textContent;
      const descripcion = card.querySelector('.card-description').textContent;
      const precio = parseFloat(card.querySelector('.card-price').textContent.replace('$', ''));
      const imagen = card.querySelector('img').src;

      document.getElementById('nombreProducto').value = nombre;
      document.getElementById('descripcionProducto').value = descripcion;
      document.getElementById('precioProducto').value = precio;
      document.getElementById('imagenProducto').value = imagen;
      document.getElementById('productoActual').value = nombre;

      const modal = new bootstrap.Modal(document.getElementById('modalEditar'));
      modal.show();
    }

    if (e.target.matches('.btn-delete')) {
      const card = e.target.closest('.card');
      const nombre = card.querySelector('.card-title').textContent;
      if (confirm(`¿Seguro que quieres eliminar "${nombre}"?`)) {
        card.remove();
        console.log(`Producto eliminado: ${nombre}`);
      }
    }
  });

 })