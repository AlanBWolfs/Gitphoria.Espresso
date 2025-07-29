import { actualizarContadorCarrito } from './utils-carrito.js';
import { actualizarBotonLogin } from './main.js';

// ⛑ Modularización del menú dinámico
function configurarMenuDinamico() {
  const menuLink = document.getElementById("menu-dinamico");
  const rol = localStorage.getItem("rolUsuario");

  if (menuLink) {
    const rutaMenu = rol === "admin"
      ? "/Administrador/menu-admin.html"
      : "/pages/menu.html";

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

      // 🔄 Una vez renderizado, aplicamos lógica
      actualizarContadorCarrito();
      actualizarBotonLogin();
      configurarMenuDinamico(); // 🧠 Esto estaba fallando por tiempos
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