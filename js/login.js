document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("login-form");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const loginError = document.getElementById("loginError");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Limpieza visual previa
    emailInput.classList.remove("is-invalid");
    passwordInput.classList.remove("is-invalid");
    loginError.style.display = "none";
    loginError.textContent = "";

    let valid = true;

    // Validación de campos vacíos
    if (!emailInput.value) {
      emailInput.classList.add("is-invalid");
      valid = false;
    }
    if (!passwordInput.value) {
      passwordInput.classList.add("is-invalid");
      valid = false;
    }
    if (!valid) {
      loginError.textContent = "Por favor, completa todos los campos.";
      loginError.style.display = "block";
      return;
    }

    // Obtener usuario guardado en localStorage
    const userData = JSON.parse(localStorage.getItem("userData"));

    if (
      userData &&
      emailInput.value === userData.email &&
      passwordInput.value === userData.password
    ) {
      // Sesión activa
      localStorage.setItem("clienteLogueado", "true");
      localStorage.setItem("clienteNombre", userData.nombre || "Usuario");
      localStorage.setItem("clienteCorreo", userData.email);

      // Separación de roles
      const correoAdmin = "atencion.cafeespresso@gmail.com";
      const rolAsignado =
        userData.email === correoAdmin ? "admin" : "cliente";
      localStorage.setItem("rolUsuario", rolAsignado);

      loginError.style.display = "none";
      alert("¡Inicio de sesión exitoso!");

      window.location.href = "/index.html"; 
    } else {
      loginError.textContent = "Correo o contraseña incorrectos.";
      loginError.style.display = "block";
      emailInput.classList.add("is-invalid");
      passwordInput.classList.add("is-invalid");
    }
  });
});