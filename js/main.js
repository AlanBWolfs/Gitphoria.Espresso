import { cargarNavFooter } from './nav-foot.js';
import { renderMenu } from './menu-ui2.js';
import { inicializarPersonalizacion } from './modal-personalizacion.js';
import { inicializarAdmin } from '../Administrador/js-admin/admin-manager.js';

export function actualizarBotonLogin() {
  const clienteLogueado = localStorage.getItem("clienteLogueado") === "true";

  if (clienteLogueado) {
    const loginBtn = document.getElementById("btnLogin");
    if (loginBtn) {
      const loginLi = loginBtn.closest("li");

      const nuevoLi = document.createElement("li");
      nuevoLi.className = "nav-item";

      const botonPerfil = document.createElement("button");
      botonPerfil.className = "btn btn-profile";
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

// Inicialización general
document.addEventListener('DOMContentLoaded', () => {
  cargarNavFooter(); 

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