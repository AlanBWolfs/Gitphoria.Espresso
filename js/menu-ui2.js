import { menuElementos } from './menu-data.js';

export function renderMenu() {
    // buscamos en el html un elemento que tenda el id (menu-container)
    //y lo gusrdamos en la "container"
    const container = document.getElementById('menu-container');
    //limpia el contenedor, si ya habia un menu antes, lo borra 
    container.innerHTML = '';
    //con el for recorro las categorias de alimentos 
    for (const cat in menuElementos.alimentos) {
        //creamos un elemento h2
        const h2 = document.createElement('h2');
        //Asignamos texto al elemento h2 (cat contiene desayunos y especiales)
        h2.textContent = cat;
        //lo agrega al html real 
        container.append(h2);
        //console.log(cat);
        //recorremos las subcategorias (claves)
        for (const sub in menuElementos.alimentos[cat]) {
            const h3 = document.createElement('h3');
            h3.textContent = sub;
            container.append(h3)
            //creamos un elemento div
            const grid = document.createElement('div');
            //<div class="subcategoria"></div>; para css
            grid.className = 'subcategoria';
            menuElementos.alimentos[cat][sub].forEach(item => {
                //console.log('platillo', item);
                grid.append(crearTarjeta(item));
            });
            container.append(grid);
        }
    }
}
function crearTarjeta(item) {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <div class="card-img-wrapper">
      <div class="card-img-container">
        <img src="${item.imagen || '../assets/default.png'}" alt="${item.nombre}" class="card-img">

      </div>
    </div>
    <div class="card-content">
      <h4 class="card-title">${item.nombre}</h4>
      <p class="card-description">${item.description}</p>
      <p class="card-options">
        ${
            item.opciones && item.opciones.salsas
            ? 'Salsas disponibles: ' + item.opciones.salsas.join(' • ')
            : ''
        }
      </p>
      <p class="card-price">$${item.precio.toFixed(2)}</p>
      <p class="card-horario">${item.horario || ''}</p>
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
