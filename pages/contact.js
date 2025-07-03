const form = document.querySelector(`form`);
//fijando valor al local storage
//localStorage.setItem("ch55", "francisco, maara, sarai, alan");
//obteniendo valor del local storage
console.log(localStorage.getItem("ch55"));
//eliminando llave y valor del localstorage
//localStorage.removeItem("ch55");
//eliminar todo del local
//localStorage.clear();
form.addEventListener(`submit`, function(event) {
event.preventDefault();
const firstName = form.elements[`firstName`].value;
const lname = form.elements[`lastName`].value;
const email = form.elements[`email`].value;
const password = form.elements[`password`].value;
const phone = form.elements[`phoneNumber`].value;
const dataArray = [...new FormData(form)];
const dataObject = Object.fromEntries(dataArray);
const dataText = JSON.stringify(dataObject);
localStorage.setItem(dataObject.email,dataText)
console.log('first Name: ', firstName);
console.log('last Name: ', lname);
console.log('phone Number: ', phone);
console.log('email: ', email)
console.log('password: ', password);
form.reset();
// setTimeout recibe una funcion de callback donde va lo que se va a ejecutar
  //y como segundo argumento recibe el tiempo en milisegundos
setTimeout(() =>{
 window.location.href = "/pages/contact.html";
}  , 3000);
});
