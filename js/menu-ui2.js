import { menuElementos } from './menu-data.js';

export function renderMenu() {
  //contenedor donde se pondrá el menu
  const container = document.getElementById('menu-container');
  container.innerHTML = '';
  //obtenemos la parte del URL despues del ? obtenemos los valores de los parametros tipo y categoria 
  //ejemplo:
  //"menu2.html?tipo=bebidas&categoria=Calientes
  // tipo bebidas, categoria calientes
  const params = new URLSearchParams(window.location.search);
  const tipo = params.get('tipo'); // solo tenemos 2 tipos alimentos y bebidas
  const categoria = params.get('categoria'); // (Desayunos, Especiales, Extras) dependiendo el tipo


  const categoriaDatos = menuElementos[tipo][categoria];

  // Recorrer las subcategorías (en desayunos: huevos y chilaquiles)
  for (const subcategoria in categoriaDatos) {
    const h2 = document.createElement('h2');
    h2.textContent = subcategoria;
    container.appendChild(h2);

    const grid = document.createElement('div');
    grid.className = 'subcategoria';

    // Cada subcategoria es un array de items (productos ejemplo los platillos de huevos)
    const items = categoriaDatos[subcategoria];
    //verificamos que los itemns realmente sean un array y despues recorremos cada elemento de los items o sea los productos 
    if (Array.isArray(items)) {
      items.forEach(item => {
        grid.appendChild(crearTarjeta(item));//llamamos a la función 
      });
    }

    container.appendChild(grid);//contenedor genral de todas las tarjetas
  }
}

function crearTarjeta(item) {
  const card = document.createElement('div');
  card.className = 'card';

  // Para manejar diferencias en las propiedades (name / nombre, price / precio, image / imagen)
  const nombre = item.name || item.nombre || 'Sin nombre';
  const descripcion = item.description || item.descripcion || '';
  const precio = item.price !== undefined ? item.price : (item.precio !== undefined ? item.precio : 0);
  const imagen = item.image || item.imagen || '../assets/default.png';

  card.innerHTML = `
    <div class="card-img-wrapper">
      <img src="${imagen}" alt="${nombre}" class="card-img">
    </div>
    <div class="card-content">
      <h4 class="card-title">${nombre}</h4>
      <p class="card-description">${descripcion}</p>
      <p class="card-price">$${precio.toFixed(2)}</p>
      <div class="card-buttons">
        <button class="btn btn-cart">Agregar al carrito</button>
      </div>
    </div>
  `;

  return card;
}

let currentCard = null;

//evento eliminar 
//eschucha todos los clicks de la pagina 
document.addEventListener('click', e=>{
    //verifica si el clic fue en el boton delete con la clase .btn-delete
    if(e.target.matches('.btn-delete')){
        //busca el card mas cercano al boton usando closest('card')
        const card = e.target.closest('.card');
        //borra la terjeta del DOM
        card.remove();
    }
})
