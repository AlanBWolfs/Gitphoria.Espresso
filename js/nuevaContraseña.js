document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("new-password-form");
  const newPassword = document.getElementById("newPassword");
  const confirmPassword = document.getElementById("confirmPassword");
  const errorDiv = document.getElementById("resetPasswordError");

  // Extrae el token de la URL (ej. ?token=abc123)
  const urlParams = new URLSearchParams(window.location.search);
  const token = urlParams.get("token");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    errorDiv.style.display = "none";
    errorDiv.textContent = "";

    // Validación: ambas contraseñas deben coincidir
    if (newPassword.value !== confirmPassword.value) {
      errorDiv.style.display = "block";
      errorDiv.textContent = "Las contraseñas no coinciden.";
      return;
    }

    // Validación: el token debe estar presente en la URL
    if (!token) {
      errorDiv.style.display = "block";
      errorDiv.textContent = "Token inválido o ausente en la URL.";
      return;
    }

    try {
      // 🔽 AQUÍ debes reemplazar esta URL por la de tu backend real que maneje el cambio de contraseña
      const response = await fetch("https://tu-api.com/api/reset-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token, // el token que recibiste en la URL del correo
          newPassword: newPassword.value, // nueva contraseña ingresada
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Error al cambiar la contraseña.");
      }

      // Si el cambio fue exitoso, redirecciona al login
      alert("¡Contraseña actualizada con éxito!");
      window.location.href = "/pages/login.html";
    } catch (error) {
      errorDiv.style.display = "block";
      errorDiv.textContent = error.message;
    }
  });
});
