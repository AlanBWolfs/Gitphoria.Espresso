import { cargarNavFooter } from './nav-foot.js';
import { renderMenu } from './menu-ui2.js';

document.addEventListener('DOMContentLoaded', () => {
  cargarNavFooter();

  if (window.location.pathname.includes('menu2.html')) {
    // Detectar si hay un parámetro admin=true
    const params = new URLSearchParams(window.location.search);
    const isAdmin = params.get('admin') === 'true';

    console.log(`Invocando renderMenu() — Modo admin: ${isAdmin}`);
    renderMenu(isAdmin);
  }
});
