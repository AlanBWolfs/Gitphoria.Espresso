import { menuElementos } from '../../js/menu-data.js';
import { renderMenu } from '../../js/menu-ui2.js';


export function inicializarAdmin(tipo, categoria) {
  const btnAgregar = document.getElementById('btnAgregarProducto');
  if (btnAgregar) {
    btnAgregar.addEventListener('click', () => {
      const modal = new bootstrap.Modal(document.getElementById('modalEditar'));
      document.getElementById('formEditarProducto').reset();
      document.getElementById('productoActual').value = '';
      modal.show();
    });
  }

  const formEditar = document.getElementById('formEditarProducto');
  formEditar.addEventListener('submit', e => {
    e.preventDefault();
    const nombre = document.getElementById('nombreProducto').value;
    const descripcion = document.getElementById('descripcionProducto').value;
    const precio = parseFloat(document.getElementById('precioProducto').value);
    const imagen = document.getElementById('imagenProducto').value;
    const original = document.getElementById('productoActual').value;

    let datos = menuElementos[tipo]?.[categoria];
    if (!datos) return;

    let actualizado = false;

    for (const subcat in datos) {
      const productos = datos[subcat];
      const index = productos.findIndex(p => p.nombre === original);
      if (index !== -1) {
        productos[index] = { nombre, descripcion, precio, imagen };
        actualizado = true;
        break;
      }
    }

    if (!actualizado) {
      // Si no se encontró, lo agregamos a la primera subcategoría
      const primera = Object.keys(datos)[0];
      datos[primera].push({ nombre, descripcion, precio, imagen });
    }

    bootstrap.Modal.getInstance(document.getElementById('modalEditar')).hide();
    renderMenu(true); // Re-render en modo admin
  });
}