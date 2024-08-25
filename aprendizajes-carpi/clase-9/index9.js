// Clase 9 - Eventos
// Básicamente cambios o actualizaciones que se harían en base a la interacción del User.
// https://www.javatpoint.com/javascript-events 👈🏻 Lista de Eventos que tiene JS

// Eventos del Mouse

const alerta = document.querySelector("#alerta"); // 👈🏻 Traigo el botón del HTML a través de su Id.
alerta.addEventListener("click", mostrarAlerta); // 👈🏻 Hago que registre el evento "click", y que ejecute la función "mostrarAlerta".

function mostrarAlerta() { // 👈🏻 Esto es la función.
    alert("Hola, Mundo!"); // 👈🏻 Esto es lo que hace la función.
}

const consola = document.querySelector("#consola"); // 👈🏻 Traigo el botón del HTML a través de su Id.
consola.addEventListener("click", () => { 
// ☝🏻 Hago que registre el evento "click", pero esta véz ejecuto una función dentro del parámetro. Lo mejor es hacer esto
// cuando hay pocas sentencias que se deban ejecutar al momento del Evento.
    console.log("Hola Mundo!")
})

// 👇🏻 Esto es un evento para cambiar entre Modo Oscuro y Modo Claro.
const colorModeButton = document.querySelector("#color-mode"); // 👈🏻 Traemos el Botón del HTML.
const body = document.body; // 👈🏻 Traemos el body desde el HTML.

colorModeButton.addEventListener("click", cambiarModoColor); // 👈🏻 Hago que registre el evento "click", y que ejecute la función "cambiarModoColor".
function cambiarModoColor () {
    body.classList.toggle("dark-mode");
//  ☝🏻 Lo que hago acá es agregarle la Clase a body, y al poner ".toggle", hago que sea como un On/Off (Pone y Saca la Clase.)
//  👇🏻 Esto es básicamente para que cambie el texto si se ve de una forma u otra.
    if (body.classList.contains("dark-mode")) {
        colorModeButton.innerText = "Cambiar a Modo Claro!"
    } else {
        colorModeButton.innerText = "Cambiar a Modo Oscuro!"
    }
}

console.log("Separación 👨🏻‍💻")

// Evento de Formulario

const alertaForm = document.querySelector("#alerta-form") // 👈🏻 Traigo el Formulario del HTML a través de su Id.
const alertaInput = document.querySelector("#alerta-input") // 👈🏻 Traigo el Input del HTML a través de su Id.

alertaInput.addEventListener("submit", (event) => { // 👈🏻 Creo un Evento de tipo Input
    event.preventDefault(); // 👈🏻 Con esto evito una config default de los Formularios, que es el reinicio no deseado de la pág.
    alert(alertaInput.value) // 👈🏻 Básicamente, hasta que no presiono "Mostrar", no va a mostrarme en el Alert lo que escribí.
    alertaForm.reset(); // 👈🏻 Esto hace que, después de "submitear" lo que pusimos en el Input, se borra eso.
})

const abajoInput = document.querySelector("#abajo-input");
const abajo = document.querySelector("#abajo") // 👈🏻 Esto en el HTML, está vacío, por lo que al cambiar desde el JS sería como "nuevo".

abajoInput.addEventListener("input", () => {
    abajo.innerText = abajoInput.value;
})

console.log("Separación 👨🏻‍💻")

// Agregar Items a una Lista!

const agregarForm = document.querySelector("#agregar-form"); // 👈🏻 Esto es toodo el formulario
const agregarInput = document.querySelector("#agregar-input"); // 👈🏻 Aca vendría a ser el Texto que escribimos en el Formulario.
const agregar = document.querySelector("#agregar"); // 👈🏻 La "ul" donde agregamos cada "li" nuevo.

agregarForm.addEventListener("submit", agregarItems);

function agregarItems(e) {
    e.preventDefault(); // 👈🏻 Con esto evito una config default de los Formularios, que es el reinicio no deseado de la pág.

if (agregarInput.value != "") { // 👈🏻 La condición es que si ingresa algo con Texto, lo sume a la lista.
    let item = document.createElement("li");
    item.innerText = agregarInput.value;
    agregar.append(item);
} else { // 👈🏻 La condición es que si no ingresa algo con Texto, salte el Alert.
    alert("No escribiste nada!")
}
    agregarInput.focus(); // 👈🏻 Esto hace que, después de "submitear" no se pierda el "focus"  y pueda seguir agregando sin soltar el teclado.
    agregarForm.reset(); // 👈🏻 Esto hace que, después de "submitear" lo que pusimos en el Input, se borra eso.
}