import { actualizarContadorCarrito } from './utils-carrito.js';
import { actualizarBotonLogin } from './main.js';

//Se crea una funcion para cargar la barra de navegación y el footer
export function cargarNavFooter(){
    // primero detectamos si estamos en paginas 
    const rutaBase = window.location.pathname.includes('/pages') ? '../' : './';
    //cargar Navbar 
    fetch(`${rutaBase}navbar.html`)
  .then(res => res.text())
  .then(data => {
    document.getElementById('navbar').innerHTML = data;
    actualizarContadorCarrito(); // ✅ ahora sí: se ejecuta justo después
    actualizarBotonLogin();
  })
  .catch(err => console.error('Error cargando navbar', err));

    //cargar Footer 
    fetch(`${rutaBase}footer.html`)
        .then(res=> res.text())
        .then(data =>{
            document.getElementById('footer').innerHTML = data;
        })
        .catch(err => console.err('Error cargango footer',err));
        
}
document.addEventListener('DOMContentLoaded',cargarNavFooter);
