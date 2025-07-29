import { actualizarContadorCarrito } from './utils-carrito.js';
import { actualizarBotonLogin } from './main.js';

// Modularización del menú dinámico
function configurarMenuDinamico() {
  const menuLink = document.getElementById("menu-dinamico");
  const rol = localStorage.getItem("rolUsuario");

  if (menuLink) {
    // Lógica según rol
    let rutaMenu;
    if (rol === "admin") {
      rutaMenu = "/Administrador/menu-admin.html";
    } else {
      rutaMenu = "/pages/menu.html"; // Cliente o sin sesión
    }

    menuLink.style.cursor = "pointer";
    menuLink.setAttribute("role", "link");
    menuLink.setAttribute("tabindex", "0");

    menuLink.addEventListener("click", () => {
      window.location.href = rutaMenu;
    });

    menuLink.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        window.location.href = rutaMenu;
      }
    });
  }
}

export function cargarNavFooter() {
  const rutaBase = window.location.pathname.includes('/pages') ? '../' : './';

  fetch(`${rutaBase}navbar.html`)
    .then(res => res.text())
    .then(data => {
      document.getElementById('navbar').innerHTML = data;

      actualizarContadorCarrito();
      actualizarBotonLogin();
      configurarMenuDinamico(); 
    })
    .catch(err => console.error('Error cargando navbar', err));

  fetch(`${rutaBase}footer.html`)
    .then(res => res.text())
    .then(data => {
      document.getElementById('footer').innerHTML = data;
    })
    .catch(err => console.error('Error cargando footer', err));
}

document.addEventListener('DOMContentLoaded', cargarNavFooter);