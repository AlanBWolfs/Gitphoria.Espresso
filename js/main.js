import { cargarNavFooter } from './nav-foot.js';
import { renderMenu } from './menu-ui2.js';
import { inicializarPersonalizacion } from './modal-personalizacion.js';
import { inicializarAdmin } from '../Administrador/js-admin/admin-manager.js';

// 🔄 Función para reemplazar el botón de login por el ícono de perfil
export function actualizarBotonLogin() {
  const clienteLogueado = localStorage.getItem("clienteLogueado") === "true";

  if (clienteLogueado) {
    const loginBtn = document.getElementById("btnLogin");

    if (loginBtn) {
      const loginLi = loginBtn.closest("li");

      const nuevoLi = document.createElement("li");
      nuevoLi.className = "nav-item";

      const botonPerfil = document.createElement("button");
      botonPerfil.className = "btn btn-profile"; // ✅ Estilo personalizado
      botonPerfil.setAttribute("title", "Mi perfil");
      botonPerfil.innerHTML = `
        <i class="fa fa-user-circle fa-lg"></i>
        <span class="profile-label">Mi perfil</span>
      `;
      botonPerfil.onclick = () => window.location.href = "/pages/perfil-usuario.html";

      nuevoLi.appendChild(botonPerfil);
      loginLi.replaceWith(nuevoLi);
    }
  }
}


// 🚀 Inicialización principal
document.addEventListener('DOMContentLoaded', () => {
  cargarNavFooter();

  // Detectar ruta base según ubicación
  const navbarRutaBase = window.location.pathname.includes('/pages') ? '../' : './';

  // Cargar navbar dinámicamente
  fetch(`${navbarRutaBase}navbar.html`)
    .then(res => res.text())
    .then(data => {
      document.getElementById('navbar').innerHTML = data;

      // Cargar módulo de carrito dinámico
      import('./utils-carrito.js').then(({ actualizarContadorCarrito }) => {
        actualizarContadorCarrito();

        // Esperamos a que el navbar se haya renderizado antes de modificar el botón
        setTimeout(() => {
          actualizarBotonLogin();
        }, 50);
      });
    })
    .catch(err => console.error('Error cargando navbar', err));

  // 🧪 Si estamos en vista admin del menú
  if (window.location.pathname.includes('menu2.html')) {
    const params = new URLSearchParams(window.location.search);
    const isAdmin = params.get('admin') === 'true';

    renderMenu(isAdmin);
    inicializarPersonalizacion();

    if (isAdmin) {
      const tipo = params.get('tipo');
      const categoria = params.get('categoria');
      inicializarAdmin(tipo, categoria);
    }
  }
});