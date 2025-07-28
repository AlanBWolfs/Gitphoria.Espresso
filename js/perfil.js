
  document.addEventListener("DOMContentLoaded", () => {
    const nombreSpan = document.getElementById("nombreUsuario");
    const correoSpan = document.getElementById("emailUsuario");

    const nombreCrudo = localStorage.getItem("clienteNombre") || "Usuario";
    const correo = localStorage.getItem("clienteCorreo") || "correo@ejemplo.com";

    // Función para capitalizar nombres tipo: "juan pérez" → "Juan Pérez"
    function capitalizarNombre(nombre) {
      return nombre
        .toLowerCase()
        .split(' ')
        .map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1))
        .join(' ');
    }

    nombreSpan.textContent = capitalizarNombre(nombreCrudo);
    correoSpan.textContent = correo;
  });
