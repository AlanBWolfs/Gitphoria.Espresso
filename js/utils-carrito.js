export function actualizarContadorCarrito() {
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  const totalItems = carrito.reduce((acc, item) => acc + item.cantidad, 0);
  const contador = document.getElementById("cart-count");
  if (contador) contador.textContent = totalItems;
}