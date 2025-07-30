document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("reset-password-form");
  const emailInput = document.getElementById("resetEmail");
  const errorDiv = document.getElementById("resetError");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); 
    const email = emailInput.value.trim();

    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  
    emailInput.classList.remove("is-invalid");
    errorDiv.style.display = "none";
    errorDiv.textContent = "";

    if (email === "") {
      mostrarError("Por favor, ingresa tu correo electrónico.");
    } else if (!emailRegex.test(email)) {
      mostrarError("El formato del correo no es válido.");
    } else {
      
      console.log("Correo válido:", email);

      
      form.innerHTML = `
        <p class="p-login text-success">
          Si el correo está registrado, recibirás un mensaje con instrucciones para restablecer tu contraseña.
        </p>
      `;
    }
  });

  function mostrarError(mensaje) {
    emailInput.classList.add("is-invalid");
    errorDiv.textContent = mensaje;
    errorDiv.style.display = "block";
  }
});
