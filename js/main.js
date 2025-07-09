import { cargarNavFooter } from './nav-foot.js';
import { renderMenu } from './menu-ui2.js';
document.addEventListener('DOMContentLoaded', () => {
  cargarNavFooter();
  if (window.location.pathname.includes('menu2.html')) {
    //console.log('Invocando renderMenu()');
    renderMenu();
  }
});
import { renderDrinks } from './menu-ui2.js';
document.addEventListener('DOMContentLoaded', () => {
  cargarNavFooter();
  if (window.location.pathname.includes('menu3.html')) {
    //console.log('Invocando renderDrinks()');
    renderDrinks();
  }
});