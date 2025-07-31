document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("editProfileForm");
  const nombreInput = document.getElementById("nombre");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const passwordFeedback = document.getElementById("passwordFeedback");

  const userData = JSON.parse(localStorage.getItem("userData"));

  if (userData) {
    nombreInput.value = userData.nombre || "";
    emailInput.value = userData.email || "";
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let valid = true;

    [nombreInput, emailInput, passwordInput].forEach(input => {
      input.classList.remove("is-invalid");
    });

    if (!nombreInput.value.trim()) {
      nombreInput.classList.add("is-invalid");
      valid = false;
    }
    if (!emailInput.value.trim()) {
      emailInput.classList.add("is-invalid");
      valid = false;
    }

    const newPassword = passwordInput.value.trim();
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;
    if (newPassword && !passwordRegex.test(newPassword)) {
      passwordInput.classList.add("is-invalid");
      passwordFeedback.textContent =
        "La contraseña debe tener al menos 6 caracteres, una mayúscula y un número.";
      valid = false;
    }

    if (!valid) return;

    // Actualizar localStorage
    const updatedUser = {
      nombre: nombreInput.value.trim(),
      email: emailInput.value.trim(),
      password: newPassword || userData.password
    };

    localStorage.setItem("userData", JSON.stringify(updatedUser));
    localStorage.setItem("clienteNombre", updatedUser.nombre);
    localStorage.setItem("clienteCorreo", updatedUser.email);

    mostrarToast("✅ Perfil actualizado correctamente.", "success");

    setTimeout(() => {
      window.location.href = "/pages/perfil-usuario.html";
    }, 1800);
  });

  
  function mostrarToast(mensaje, tipo = "info") {
    const container = document.querySelector(".toast-actualizacion-container");

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

    container.appendChild(toast);

    setTimeout(() => toast.remove(), 4000);
  }
});