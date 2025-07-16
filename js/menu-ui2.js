import { menuElementos } from './menu-data.js';

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

function crearTarjeta(item, isAdmin) {
  const card = document.createElement('div');
  card.className = 'card';

  const nombre = item.name || item.nombre || 'Sin nombre';
  const descripcion = item.description || item.descripcion || '';
  const precio = item.price !== undefined ? item.price : (item.precio !== undefined ? item.precio : 0);
  const imagen = item.image || item.imagen || '../assets/default.png';

  let botonesHTML = '';

  if (!isAdmin) {
    // SOLO usuarios ven "Agregar al carrito"
    botonesHTML += `<button class="btn btn-cart">Agregar al carrito</button>`;
  } else {
    // SOLO administradores ven Editar y Eliminar
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

// Listener global para botones
document.addEventListener('click', e => {
  if (e.target.matches('.btn-cart')) {
    const card = e.target.closest('.card');
    const nombre = card.querySelector('.card-title').textContent;
    alert(`"${nombre}" agregado al carrito`);
    // Aquí va la lógica real para el carrito
  }

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
    const nombre = card.querySelector('.card-title').textContent;
    alert(`Editar producto: "${nombre}"`);
    // Aquí puedes abrir un modal para editar el producto
  }
});
