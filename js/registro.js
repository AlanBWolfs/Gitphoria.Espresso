document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registerForm");
  const firstNameInput = document.getElementById("firstName");
  const lastNameInput = document.getElementById("lastName");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const confirmPasswordInput = document.getElementById("confirmPassword");
  const confirmFeedback = document.getElementById("confirmPasswordFeedback");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    let valid = true;

    // Limpiar estilos anteriores
    [firstNameInput, lastNameInput, emailInput, passwordInput, confirmPasswordInput].forEach(input => {
      input.classList.remove("is-invalid");
    });
    confirmFeedback.textContent = "";

    // Validar campos vacíos
    if (!firstNameInput.value.trim()) {
      firstNameInput.classList.add("is-invalid");
      valid = false;
    }
    if (!lastNameInput.value.trim()) {
      lastNameInput.classList.add("is-invalid");
      valid = false;
    }
    if (!emailInput.value.trim()) {
      emailInput.classList.add("is-invalid");
      valid = false;
    }

    const passwordValue = passwordInput.value.trim();
    const confirmValue = confirmPasswordInput.value.trim();

    // Validar contraseña
    const regexPassword = /^(?=.*[A-Z])(?=.*\d).{6,}$/;
    if (!regexPassword.test(passwordValue)) {
      passwordInput.classList.add("is-invalid");
      passwordInput.nextElementSibling.textContent =
        "La contraseña debe tener al menos 6 caracteres, una mayúscula y un número.";
      valid = false;
    }

    // Validar coincidencia de contraseñas
    if (passwordValue !== confirmValue) {
      confirmPasswordInput.classList.add("is-invalid");
      confirmFeedback.textContent = "Las contraseñas no coinciden.";
      valid = false;
    }

    if (!valid) return;

    // Guardar en localStorage
    const nombreCompleto = `${firstNameInput.value.trim()} ${lastNameInput.value.trim()}`;
    const userData = {
      nombre: nombreCompleto,
      email: emailInput.value.trim(),
      password: passwordValue
    };

    localStorage.setItem("userData", JSON.stringify(userData));
    mostrarToast("Registro exitoso. ¡Ya puedes iniciar sesión!", "success");

    setTimeout(() => {
      window.location.href = "/pages/login.html";
    }, 1800);
  });

  
  function mostrarToast(mensaje, tipo = "info") {
    const toastContainer = document.querySelector(".toast-registro-container");

    const toast = document.createElement("div");
    toast.className = `toast align-items-center text-bg-${tipo} show`;
    toast.setAttribute("role", "alert");
    toast.setAttribute("aria-live", "assertive");
    toast.setAttribute("aria-atomic", "true");

    toast.innerHTML = `
      <div class="d-flex">
        <div class="toast-body">${mensaje}</div>
        <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Cerrar"></button>
      </div>
    `;

    toastContainer.appendChild(toast);

    setTimeout(() => toast.remove(), 4000);
  }
});