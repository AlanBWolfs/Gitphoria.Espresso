const form = document.querySelector("#contactFormMain");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#exampleInputEmail1");
const motivoInput = document.querySelector("#motivo");
const mensajeInput = document.querySelector("#textarea");
const Gracias = document.querySelector("#Gracias");


const nameError = nameInput.nextElementSibling;
const isValidEmail = (email) => {
const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
return re.test(String(email).toLowerCase());
};
const inputs = [nameInput, emailInput, motivoInput, mensajeInput];

let isFormValid = false;
let isValidationOn = false;

const resetElm =(elm) => {
  elm.classList.remove("is-invalid");
  elm.nextElementSibling.classList.add("hidden");
};

const invalidateElm = (elm) => {
  elm.classList.add("is-invalid");
  elm.nextElementSibling.classList.remove("hidden");
};

const validateInputs = () => {
  if (!isValidationOn) return false;
  isFormValid = true;
  inputs.forEach(resetElm);

  if (!nameInput.value) {
    invalidateElm(nameInput);
    isFormValid = false;
  }
  if (!isValidEmail(emailInput.value)) {
    invalidateElm(emailInput);
    isFormValid = false;
  }
  if (!motivoInput.value) {
    invalidateElm(motivoInput);
    isFormValid = false;
  }
  if (!mensajeInput.value) {
    invalidateElm(mensajeInput);
    isFormValid = false;
  }

  return isFormValid;
};

form.addEventListener('submit', (e) => {
e.preventDefault();
isValidationOn = true;
const valid = validateInputs();
if (valid) {
  // Recoger los datos del formulario
  const templateparams = {
  name: nameInput.value,
  email: emailInput.value,
  motivo: motivoInput.value,
  message: mensajeInput.value,
  };
  // Enviar el correo electrónico
  
  emailjs.send('service_espressoGmail', 'template_Form', templateparams)
  .then(function(response) {
  form.remove();
  Gracias.classList.remove("hidden");
  console.log("Email enviado correctamente", response.status, response.text);
}, function (error){
  alert("Ocurrió un error. trata de nuevo");
  console.log("Failed...", error);
});
}//cierre de if valid
});//cierre event listener submit

inputs.forEach(input =>{
input.addEventListener('input', () => {
  validateInputs();
});
});
//correo electronico atencion.cafeespresso@gmail.com password: cafe.espresso