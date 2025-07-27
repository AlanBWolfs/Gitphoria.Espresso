document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("login-form");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const loginError = document.getElementById("loginError");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    let valid = true;

    // Reset estilos y mensajes
    emailInput.classList.remove("is-invalid");
    passwordInput.classList.remove("is-invalid");
    loginError.style.display = "none";
    loginError.textContent = "";

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
  // Marcar sesión activa
  localStorage.setItem("clienteLogueado", "true");
  localStorage.setItem("clienteNombre", userData.nombre || "Usuario");

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
