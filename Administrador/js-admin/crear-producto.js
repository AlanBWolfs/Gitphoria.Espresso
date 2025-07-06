const controller = new ItemsController(0);

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('productForm');

  form.addEventListener('submit', function (e){
    e.preventDefault();

    function mostrarAlerta(mensaje, tipo = 'success') {
  const alertContainer = document.getElementById('alertContainer');
  alertContainer.innerHTML = `
    <div class="alert alert-${tipo} alert-dismissible fade show" role="alert">
      ${mensaje}
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  `;
}

    //captura de los datos
    const nombre = document.getElementById('nombre').value;
    const descripcion = document.getElementById('description').value;
    const tipo = document.getElementById('type').value;
    const categoria = document.getElementById('category').value;
    const subcategoria = document.getElementById('subcategory').value;
    const precio = document.getElementById('price').value;
    const imagen = document.getElementById('imageUrl').value;

    controller.addItem(nombre, descripcion, tipo, categoria, subcategoria, precio, imagen);
//Alerta exito
    mostrarAlerta('Producto guardado exitosamente.', 'success');
    //Alerta error
   if (!nombre || !descripcion || !tipo || !categoria || !precio || !imagen) {
  mostrarAlerta('Por favor completa todos los campos obligatorios.', 'danger');
  return;
}
//reset del formulario
    form.reset();
  });
});