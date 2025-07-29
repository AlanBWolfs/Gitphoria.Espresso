document.addEventListener("DOMContentLoaded", () => {
  const nombreSpan = document.getElementById("nombreUsuario");
  const correoSpan = document.getElementById("emailUsuario");
  const pedidosContainer = document.getElementById("historialPedidos");

  const nombreCrudo = localStorage.getItem("clienteNombre") || "Usuario";
  const correo = localStorage.getItem("clienteCorreo") || "correo@ejemplo.com";

  function capitalizarNombre(nombre) {
    return nombre
      .toLowerCase()
      .split(" ")
      .map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1))
      .join(" ");
  }

  nombreSpan.textContent = capitalizarNombre(nombreCrudo);
  correoSpan.textContent = correo;

function renderizarHistorialPedidos() {
  const pedidos = JSON.parse(localStorage.getItem("pedidos")) || [];
  pedidosContainer.innerHTML = "";

  pedidos.forEach(pedido => {
    const card = document.createElement("div");
    card.className = "card mb-3 shadow-sm";

    const totalFormateado = !isNaN(pedido.total) ? `$${parseFloat(pedido.total).toFixed(2)}` : "No disponible";
    const estado = pedido.tiempoPreparacion || "Sin estado"; 

    // Renderizado básico de productos
    const listaProductos = pedido.productos.map(prod => `
      <li>
        <strong>${prod.nombre}</strong> x${prod.cantidad} —
        $${prod.precioTotal.toFixed(2)}
        ${prod.salsa ? ` | Salsa: ${prod.salsa}` : ''}
        ${prod.proteina ? ` | Proteína: ${prod.proteina}` : ''}
        ${prod.base ? ` | Base: ${prod.base}` : ''}
        ${prod.notas ? ` | Notas: ${prod.notas}` : ''}
      </li>
    `).join("");

    card.innerHTML = `
      <div class="card-body">
        <h5 class="card-title">Pedido ${pedido.id}</h5>
        <p class="card-text">
          <strong>Fecha:</strong> ${pedido.fecha}<br>
          <strong>Total:</strong> ${totalFormateado}<br>
          <strong>Estado:</strong>
          <span class="badge ${
            estado.includes("min") ? "bg-info text-dark" : "bg-secondary"
          }">${estado}</span>
        </p>
        <ul>${listaProductos}</ul>
      </div>
    `;

    pedidosContainer.appendChild(card);
  });
}

  renderizarHistorialPedidos();
});