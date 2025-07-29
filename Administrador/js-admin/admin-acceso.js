 const rol = localStorage.getItem("rolUsuario");
  if (rol !== "admin") {
    window.location.href = "/pages/perfil-usuario.html";
  }
