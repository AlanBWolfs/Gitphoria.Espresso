import { menuElementos } from './menu-data.js';

// Función para renderizar el menú (sin manipulación DOM directa aún)
export function renderMenu(isAdmin = false) {
  console.log(isAdmin ? '🛠️ Modo ADMIN (sin carrito)' : '👤 Modo USUARIO');

  const container = document.getElementById('menu-container');
  container.innerHTML = '';

  const params = new URLSearchParams(window.location.search);
  const tipo = params.get('tipo'); // alimentos o bebidas
  const categoria = params.get('categoria'); // Desayunos, Especiales, etc.

  const categoriaDatos = menuElementos[tipo]?.[categoria];
  if (!categoriaDatos) {
    container.innerHTML = `<p>No se encontró la categoría "${categoria}" para el tipo "${tipo}".</p>`;
    return;
  }

  // Recorrer subcategorías
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

// Crear la tarjeta HTML de un producto
function crearTarjeta(item, isAdmin) {
  const card = document.createElement('div');
  card.className = 'card';

  const nombre = item.name || item.nombre || 'Sin nombre';
  const descripcion = item.description || item.descripcion || '';
  const precio = item.price !== undefined ? item.price : (item.precio !== undefined ? item.precio : 0);
  const imagen = item.image || item.imagen || '../assets/default.png';

  let botonesHTML = '';

  if (!isAdmin) {
    // Usuarios solo ven "Agregar al carrito"
    botonesHTML += `<button class="btn btn-cart">Agregar al carrito</button>`;
  } else {
    // Admin ven Editar y Eliminar
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

// Todo el código que manipula el DOM y añade listeners va dentro de DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  // Aquí decides si es admin o no, por ejemplo leyendo URL
  const params = new URLSearchParams(window.location.search);
  const isAdmin = params.get('admin') === 'true';

  // Renderizar menú
  renderMenu(isAdmin);

  // Listener global para botones
  document.addEventListener('click', e => {
    if (e.target.matches('.btn-cart')) {
      const card = e.target.closest('.card');
      const nombre = card.querySelector('.card-title').textContent;

      let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
      carrito.push({
        nombre,
        precio: parseFloat(card.querySelector('.card-price').textContent.replace('$', ''))
      });
      localStorage.setItem('carrito', JSON.stringify(carrito));

      // Navegar a la página de carrito
      window.location.href = './carrito.html';
    }

    if (e.target.matches('.btn-edit')) {
      const card = e.target.closest('.card');

      // Obtener datos actuales del producto
      const nombre = card.querySelector('.card-title').textContent;
      const descripcion = card.querySelector('.card-description').textContent;
      const precio = parseFloat(card.querySelector('.card-price').textContent.replace('$', ''));
      const imagen = card.querySelector('img').src;

      // Rellenar inputs del modal
      document.getElementById('nombreProducto').value = nombre;
      document.getElementById('descripcionProducto').value = descripcion;
      document.getElementById('precioProducto').value = precio;
      document.getElementById('imagenProducto').value = imagen;
      document.getElementById('productoActual').value = nombre;

      // Mostrar modal
      const modal = new bootstrap.Modal(document.getElementById('modalEditar'));
      modal.show();
    }

    if (e.target.matches('.btn-delete')) {
      const card = e.target.closest('.card');
      const nombre = card.querySelector('.card-title').textContent;
      const confirmar = confirm(`¿Seguro que quieres eliminar "${nombre}"?`);
      if (confirmar) {
        card.remove();
        console.log(`Producto eliminado: ${nombre}`);
      }
    }
  });

  // Listener para el submit del formulario del modal editar
  const formEditar = document.getElementById('formEditarProducto');
  if (formEditar) {
    formEditar.addEventListener('submit', e => {
      e.preventDefault();

      const nuevoNombre = document.getElementById('nombreProducto').value;
      const nuevaDescripcion = document.getElementById('descripcionProducto').value;
      const nuevoPrecio = parseFloat(document.getElementById('precioProducto').value).toFixed(2);
      const nuevaImagen = document.getElementById('imagenProducto').value;
      const productoOriginal = document.getElementById('productoActual').value;

      // Buscar la tarjeta que estamos editando y actualizarla
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

      // Cerrar modal
      const modal = bootstrap.Modal.getInstance(document.getElementById('modalEditar'));
      modal.hide();

      // Resetear formulario para futuras ediciones
      e.target.reset();
    });
  }
});