// CLASE 1 - Variables y Consola
// https://youtu.be/-H4W_PkFbls?list=PL8VCLfCNXjSboktEnd6CHCtxZHTwiQZQH

// Palabras Reservadas, son aquellas que ya tienen una función ya establecida dentro del ecosistema de JS. 
// Una costumbre que se toma cuando se trabaja con let y const, es que todo lo que sea Variable se escriba en minúsculas , 
// y lo que sea Constante, en mayúsculas.


// Variables, espacio donde se guardan datos (Numeros y Cadenas de Texto / Numbers or String)
// Una de ellas es "let" (para declarar variables), y a esta se le establece un nombre, aparte de que se pueden alterar sus datos.

    // 👇🏻 Esta es una Variable con nombre "nombre", y "nombre" pasaría a guardar el dato de "Ulaises"
let nombre = "Ulaises";

let apellido = "Ulaiseees";
const ESPACIO = " ";
let nombreApellido = nombre + ESPACIO + apellido;  // 👈🏻 acá concatenamos 2 cadenas de texto, haciendo que en consola salga escrito lo que sumamos.
    // ☝🏻 Esto es CamelCase, que se utiliza cuando escribimos variables de 2 o más palabras en JS.

console.log(nombreApellido)

let edad = 21; // 👈🏻 los numeros se ponen sin "" ya que se pueden utilizar para realizar cálculos. Si se ponen "", se toma como String o Cadena de Texto.

nombre = "ZeTeX" // al poner esto, estamos declarando que la Variable "nombre" utilize "ZeTeX" como dato nuevo, ya que lee de arriba a abajo. *

console.log("Hola Mundo!")

console.log(nombre)
// * nombre = "ZeTeX" // si yo lo pusiera acá abajo, seguiría diciendo que "nombre" es Ulaises, ya que lee de arriba a abajo. 


// Constantes, espacio donde se guardan datos (Numeros y Cadenas de Texto / Numbers or String)
// Otra palabra reservada es "const" (para declarar variables), que también se le establece un nombre, y no se pueden alterar sus datos.

const IVA = 21;
// IVA = 23; // 👈🏻 si yo pusiera eso ahí, sale un error en Consola.
// console.log(IVA) // 👈🏻 Lo comento para que no moleste.


// Carpi recomienda evitar caracteres extraños en los nombres de las Variables,
// es por ello que escribe "anio" en vez de "año".
let anioActual = 2024;
let anioNacimiento = 2003;

let age = anioActual - anioNacimiento; // 👈🏻 Esto fué solo una resta, pero se puede Sumar (+), Restar (-), Multiplicar (*), y Dividir (/).
console.log(age)



// Prompts & Alerts
// prompt ("Ingrese su Nombre!") // 👈🏻 Esto es solo para aprender, pero está prohibido que usemos esto en una página que creemos. 
//(Lo comenté para escribir lo de debajo)

let nombreUsuario = prompt("Ingrese Su Nombre!") // 👈🏻 Acá vamos a almacenar la información que entre en el Prompt en la Variable "nombreUsuario"
console.log(nombreUsuario) // Acá debería salirte en consola el nombre que escribiste en el Prompt.

alert("Hola " + nombreUsuario) // 👈🏻 Con esto basicamente mostramos el nombre que ingresamos en el Prompt y que se había alojado en la Variable "nombreUsuario"