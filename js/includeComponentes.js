//Ruta de la URL que se ve en el navegador
//Revisa si la cadena del path contiene la palabra pages devuelve un vertadero o falso si es verdadero ../ y si es falso ./ utilizando un operador ternario
const rutaBase = window.location.pathname.includes('/pages') ? '../' : './';
// carga el navbar 
//fetch solicita (descarga) un archivo desde el servidor.
//${rutaBase}navbar.html construye la ruta correcta del archivo
fetch(`${rutaBase}navbar.html`)
    //cuando el archivo llega (como respuesta), lo convierte a texto.
    //El contenido de navbar.html no es codigo JS ni JSON, es texto HTML, por eso se usa .text()
    .then(response => response.text())
    //Una vez convertido (HTML del navbar) en texto, se ejecuta la función 
    //data contiene todo el codigo HTML que hay en navbar.html
    .then(data => {
        //Inserta el HTML dentro del <div id = "navbar"> que hay en las paginas
        //Es decir remplaza el div vacío con el contenido del archivo navbar.html
        document.getElementById('navbar').innerHTML = data;
    })
    //Si algo sale mal, este bloque muestra en la consola del navegador el error
    .catch(error => console.error('Error cargando navbar:', error));
