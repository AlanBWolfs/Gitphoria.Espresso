document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registerForm");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirmPassword");
  const confirmPasswordFeedback = document.getElementById(
    "confirmPasswordFeedback"
  );

  form.addEventListener("submit", function (event) {
    // Bootstrap validation
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }

    // Validar que las contraseñas coincidan
    if (password.value !== confirmPassword.value) {
      confirmPassword.setCustomValidity("Las contraseñas no coinciden");
      confirmPasswordFeedback.textContent = "Las contraseñas no coinciden.";
      event.preventDefault();
      event.stopPropagation();
    } else {
      confirmPassword.setCustomValidity("");
      confirmPasswordFeedback.textContent =
        "Debes confirmar la contraseña correctamente.";
    }

    form.classList.add("was-validated");

    // Guardar en localStorage si el formulario es válido y las contraseñas coinciden
    if (form.checkValidity() && password.value === confirmPassword.value) {
      const userData = {
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        email: document.getElementById("email").value,
        password: password.value, // No guardar contraseñas en texto plano en producción
      };
      localStorage.setItem("userData", JSON.stringify(userData));
      // Puedes mostrar un mensaje o redirigir al usuario aquí si lo deseas
      // event.preventDefault(); // Descomenta si NO quieres enviar el formulario
    }
  });
});
