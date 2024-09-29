// Clase 8 - DOM
// (Document Object Model)

// Básicamente nos permite acceder a nuestro JS desde el HTML para hacer lo que decidamos.

// getElementById() básicamente nos permite acceder al elemento que tenga ese ID.


const contenido = document.getElementById("contenido"); // 👈🏻 Con esto, lo que hago es traer parte del HTML al JS.
const parrafos = document.getElementsByClassName("parrafo") 
// ☝🏻 Con esto, traigo ciertos elementos dentro del HTML, y los almaceno en una variable para utilizarlos después.

console.log(contenido)
console.log(parrafos)

console.log("Separación 👨🏻‍💻")

// 👇🏻 Esta es la forma más nueva de llamar elementos del HTML al JS. Que trae a los elementos dentro de un Array.
const contenidoo = document.querySelector("#contenido") // 👈🏻 Si es una clase, lo llamamos con el . y si es con id, con el # (igual que en el css)
console.log(contenidoo)

// 👇🏻 Esto también es para traer desde el HTML, pero es para traer multiples elementos de allí. Y trae a los elementos dentro de un Array.
const parrafoss = document.querySelectorAll(".parrafo")
console.log(parrafoss)


// Que cosas podemos hacer trayendo elementos del HTML al JS?
console.log(contenido.classList) // 👈🏻 Con esto hacemos un Array de todas las Clases que contenga el elemento que traemos.
contenido.classList.add("prueba2") // 👈🏻 Con esto le agregamos esa clase al Array
console.log(contenido.classList) // 👈🏻 Ahora debería verse "prueba2" como un item más del Array de clases.
contenido.classList.remove("contenido") // 👈🏻 Con esto, sacamos la Class "contenido"
console.log(contenido.classList) // 👈🏻 Ahora no debería verse "contenido" dentro del Array de clases.

contenido.className = "prueba3" // 👈🏻 Con esto, estamos redefiniendo la clase de "Contenido" sin importar la clase que tenía antes.

console.log(contenido.innerHTML) // 👈🏻 Básicamente trae todo lo que sea HTML que esté dentro de la Class que le definimos. (Incluso la podemos modificar)
console.log(contenido.innerText) // 👈🏻 Lo mismo que antes, solo que el Texto, sin sus etiquetas.


parrafos[0].innerText = "Hola Mundo!" // 👈🏻 Desde el JS, estoy manipulando el HTML, trayendo solo Texto.

parrafos[1].innerHTML = "Hola mi rey, como va? <a href='#'>Esto es un Enlace!</a>"
// ☝🏻 Acá, traemos directamente el HTML para poder agregarle un Enlace, y en donde va el enlace, tiene que ir '', ya que sino
//    el "link" quedaría por afuera del string

// contenido.remove() // 👈🏻 Con esto básicamente removemos lo que queramos del HTML (Lo comenté por obvias razones.)

const productos = ["Sillón", "Silla", "Mesa", "Ventana", "Banco", "Teléfono"]; // 👈🏻 Este Array lo podemos agregar para sumar contenido a "lista" (variable).

let lista = document.createElement("ul"); // 👈🏻 Creamos un elemento llamado "ul", el cual el HTML detecta como una "ul"
lista.classList.add("lista"); // 👈🏻 Agregamos a "lista" (variable) la class "lista"
lista.innerHTML = "<li> Item 1 </li>"; // 👈🏻 Sumamos dentro del HTML de lista (variable), la etiqueta "li" con su "Item 1" respectivo.
lista.innerHTML += "<li> Item 2 </li>"; // 👈🏻 Si queremos sumar otro "li" al "Item 1" anterior, debemos escribir "+=".
lista.innerHTML += "<li class='lista-item'> Item 3 </li>"; // 👈🏻 Incluso después de agregar los respectivos "Item X", le podemos poner "class="
lista.innerHTML += "<li class='lista-item'>" + productos[0] + "</li>"; // 👈🏻 Solo una forma de añadir un Item del Array, el [] es para seleccionar cual mostrar.
lista.innerHTML += "<li class='lista-item'>" + productos[1] + "</li>";
lista.innerHTML += `<li class="lista-item">${productos[2]}</li>`;
//☝🏻 Esta es una manera de escribir el Item en el HTML, utilizando backtick, la técnica se llama "Template String".
//  (que se escriben presionando Alt Gr + } en el Teclado)

contenido.append(lista); // 👈🏻 Agregamos el HTML que creamos dentro del HTML, al HTML.

console.log(lista) // 👈🏻 Solo para verlo también en la Consola.



console.log("Separación 👨🏻‍💻")



// 👇🏻 Utilizando un "for...of" para armar la lista de antes, pero muuucho más simple.

let lista2 = document.createElement("ul"); // 👈🏻 Creamos un elemento llamado "ul", el cual el HTML detecta como una "ul"
lista2.classList.add("lista2"); // 👈🏻 Agregamos a "lista2" (variable) la class "lista2"

for (producto of productos) { // 👈🏻 Hacemos que haga un ciclo y que tome cada producto de productos.
    lista2.innerHTML += `<li class='lista2-item'>${producto}</li>` 
    // ☝🏻 Sumamos dentro del HTML de lista2 (variable), la etiqueta "li" con su "Item"/producto respectivo.
    // Y hace un ciclo sin parar hasta que recorra todos los productos.
}

contenido.append(lista2); // 👈🏻 Agregamos el HTML que creamos dentro del HTML, al HTML. 

console.log(lista2) // 👈🏻 Solo para verlo también en la Consola.
