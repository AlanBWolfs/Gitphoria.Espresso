document.addEventListener("DOMContentLoaded", () => {
    const btnCerrar = document.getElementById("cerrarSesionBtn");

    if (btnCerrar) {
      btnCerrar.addEventListener("click", () => {
        // 🔒 Limpiar estado de sesión
        localStorage.removeItem("clienteLogueado");
        localStorage.removeItem("clienteNombre");

        // 🧭 Redirigir al inicio
        window.location.href = "/index.html";
      });
    }
  });
