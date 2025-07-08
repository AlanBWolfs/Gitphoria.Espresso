// Initialize a new TaskManager with currentId set to 0
import { menuElementos } from "./menuElementos.js";
const itemsController = new ItemsController(0);


// Select the New Task Form
const newItemForm = document.querySelector('#newItemForm');

// Add an 'onsubmit' event listener
newItemForm.addEventListener('submit', (event) => {
    // Prevent default action
    event.preventDefault();

    // Select the inputs
    const newItemNameInput = document.querySelector('#newItemNameInput');
    const newItemDescription = document.querySelector('#newItemDescription');
    const newItemPrice = document.querySelector('#newItemDescription');

    /*
        Validation code here
    */

    // Get the values of the inputs
    const name = newItemNameInput.value;
    const description = newItemDescription.value;
    const price = newItemPrice.value;
    const createdAt = new Date();

    // Add the task to the task manager
    itemsController.addItem(name, description, price, createdAt);

    // Clear the form
    newItemNameInput.value = '';
    newItemDescription.value = '';
    newItemPrice.value = '';
});




function addItemCard(item){
    const itemHTML = 
    '<div class="card" style="width: 18rem;">\n'+
        /* Funciona como marco para la iamgen */
        '<div class="card-img-wrapper">\n'+
            /* <!--Imagen con fondo dorado o blanco checar cual nos gusta gusta pero esta etiqueta es la que se vera modificada--> */
            '<div class="card-img-container">\n'+
                /* <!--Imagen del productos--> */
                '<img src="'+item.img+'" alt="Latte Macchiato" class="card-img">\n'+
                /* <!--Icono de corazon--> */
                '<span class="heart-icon">♡</span>\n'+
            '</div>\n'+
        '</div>\n'+
        /* <!--Contenido de la carta, precio, titulo boton--> */
        '<div class="card-body">\n'+
            '<h5 class="card-title">'+item.name+'</h5>\n'+
            '<p class="card-price">'+item.price+'</p>\n'+
            '<a href="/pages/carrito.html" class="btn btn-add">Agregar al carrito</a>\n'+
        '</div>\n'+
    '</div>\n';
    '</br>\n';
    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;
}


const menuElementosLen = menuElementos.length

for (let i = 0; i < menuElementosLen; i++) {
    const elemento = menuElementos[i];
    addItemCard({
        img: elemento.img || '../assets/Capibara.gif', // Use elemento.img if available, otherwise a placeholder
        name: elemento.nombre,
        price: `$${elemento.price}.00`
    });
}

    