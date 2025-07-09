document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registerForm");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirmPassword");
  const confirmPasswordFeedback = document.getElementById(
    "confirmPasswordFeedback"
  );

  form.addEventListener("submit", function (event) {
    // validación de bootstrap
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

    // Guardado en localStorage si el formulario es válido y las contraseñas coinciden
    if (form.checkValidity() && password.value === confirmPassword.value) {
      const userData = {
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        email: document.getElementById("email").value,
        password: password.value, // No guardar contraseñas en texto plano en un futuro
      };
      localStorage.setItem("userData", JSON.stringify(userData));
      // se va a poder redirigir al usuario en un futuro
      // event.preventDefault(); // Descomentar si NO se quiere enviar el formulario
    }
  });
});
