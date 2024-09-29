// Clase 10 - Storage y JSON

// https://www.javatpoint.com/javascript-events 👈🏻 Carpi dejó este link como "machetito"

/* 
Storage 👉🏻 Forma de guardar información en el Navegador. Funciona como un Obj desde JS, guardando todo 
            dentro del navegador del usuario (ej. el modo oscuro del Navegador)

Hay 2: LocalStorage y SessionStorage
La forma de llamarlos ya sea uno u otro es igual, solo cambia el "Local" y el "Session"

Local 👉🏻 Guarda información indefinidamente, independientemente de si borramos historial u otra cosa. Siempre queda guardado 
          en la Config del Navegador (Pero el Usuario puede borrarla.)

Session 👉🏻 Guarda información durante una pestaña abierta, es decir que si la cerramos se pierde esa información.

*/

// Para trabajar con LocalStorage, se hace de la siguiente forma
// 👇🏻

localStorage.setItem("iva", 21);

// 👆🏻 Básicamente creamos un Objeto especial para el LocalStorage donde pasamos 2 variables 
//     ( "String(donde vemos el nombre que lleva el Objeto)", el number(que es el valor del String) )
// Haciendo esto, sea Local o Session Storage, el Navegador convierte el valor (sea el tipo de dato que sea), en un "String"

// 👇🏻 También, para hacer un Storage, podemos pasar el valor como una variable

let usuarioPrompt = prompt("Ingrese su Nombre!")
localStorage.setItem("Usuario", usuarioPrompt)

// 👆🏻 Así como podemos tomar un nombre y almacenarlo en el Storage, 
//    también podemos llamarlo y mostrarlo 👇🏻

let usuarioEnLocalStorage = localStorage.getItem("Usuario") // 👈🏻 Traemos el Item con la Key "Usuario" y lo almacenamos en la Variable.
console.log(usuarioEnLocalStorage) // 👈🏻 Mostramos la Variable en Consola.

// Ahora, si vamos a hacer un ECommerce, vamos a necesitar utilizar Objetos, verdad?
// Veamos el siguiente Ejemplo 👇🏻

const usuarioObjeto = {
    nombre:"Ulaises",
    edad: 27
}

// localStorage.setItem("usuarioObjeto", usuarioObjeto) // 👈🏻 Comento esta línea para escribirla abajo, sino no funciona xd

// 👆🏻 El tema con esto, es que al verlo en la pestaña de Almacenamiento en el Navegador, lo muestra como [object Object].

// 👇🏻Entonces para solucionar eso, escribimos el siguiente código

const usuarioJSON = JSON.stringify(usuarioObjeto) 
// 👆🏻 Lo que hacemos con esto, es convertir la variable "usuarioObjeto" en un array, permitiendo leer los datos del objeto.

console.log(usuarioJSON)

// localStorage.setItem("usuarioObjeto", usuarioObjeto) // 👈🏻 Comento esto xq sino no funciona la línea 63.

// Entonces, ahora en véz de guardar los datos de "usuarioObjeto" directamente, guardamos los datos luego de que pasen por el JSON.stringify
// Y quedaría algo así 👇🏻

localStorage.setItem("usuarioJSON", usuarioJSON)

const usuarioEnLocalStorage2 = localStorage.getItem("usuarioJSON") 
// 👆🏻 Haciendo esto, nos quedan los objetos en un array.
// 👇🏻 Ahora hay que hacer un parseo para poder transformar los datos a objeto y usarlos.
const usuarioObjeto2 = JSON.parse(usuarioEnLocalStorage2)

console.log(usuarioObjeto)

// 👆🏻 Al momento de guardar los datos, se hace con un Stringify y después al momento de recuperarlo se Parsea.

// 👇🏻 Incluso, para hacer el Stringify o el Parse, podemos ahorrar una línea de código de la siguiente manera...

const usuarioObjeto3 = {
    nombre:"Luis",
    edad: 27
}

localStorage.setItem("usuarioJSON3", JSON.stringify(usuarioObjeto3))

const usuarioEnLS = JSON.parse(localStorage.getItem("usuarioJSON3"))

// 👇🏻 Un ejemplo un poco más profundo y mas común en la práctica

const productos = [
    { nombre: "Pizza", precio: 5000 },
    { nombre: "Lomito", precio: 3500 },
    { nombre: "Milanesa", precio: 4500 }
]

localStorage.setItem("productos", JSON.stringify(productos))

const productosEnLS = JSON.parse(localStorage.getItem("productos"))
console.log(productosEnLS)

// 👇🏻 El ejemplo super común de todo esto es el Modo Oscuro

const botonColorMode = document.querySelector("#color-mode"); // 👈🏻 Traemos el Botón con un ID
const body = document.body; // 👈🏻 Traemos el Body

let darkMode = localStorage.getItem("dark-mode"); // 👈🏻 Hacemos una Variable y metemos un Item en Local Storage que es "dark-mode"

function activarDarkMode() { // 👈🏻 Básicamente, con esto le decimos que está "activado" y con la clase en Body
    body.classList.add("dark-mode");
    localStorage.setItem("dark-mode", "activado");
}

function desactivarDarkMode() { // 👈🏻 Básicamente, con esto le decimos que está "desactivado" y sin la clase en Body
    body.classList.remove("dark-mode");
    localStorage.setItem("dark-mode", "desactivado");
}

if (darkMode === "activado") {
    activarDarkMode(); // 👈🏻 Si en el LocalStorage, está "activado", entonces carga la página con la función activarDarkMode
} else {
    desactivarDarkMode(); // 👈🏻 Si en el LocalStorage, está "desactivado", entonces carga la página con la función desactivarDarkMode
}

botonColorMode.addEventListener("click", () => { // 👈🏻 Registra si se hace el evento "click"
    darkMode = localStorage.getItem("dark-mode"); // 👈🏻 Llamamos al Item "dark-mode"

    if (darkMode === "activado") { // 👈🏻 Si en el LocalStorage, está "activado", entonces cuando presione el botón se va a activar "desactivarDarkMode"
        desactivarDarkMode();
    } else {
        activarDarkMode(); // 👈🏻 Si en el LocalStorage, está "desactivado", entonces cuando presione el botón se va a activar "activarDarkMode"
    }
})