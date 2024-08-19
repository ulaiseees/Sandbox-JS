// Clase 4 - FUNCIONES

// https://makeitrealcamp.gitbook.io/javascript-book/funciones 👈🏻 Página con más información sobre Funciones!

// Descripción Simple de una Función 👇🏻
// Estructura que nos permite ejecutar 1 o más Líneas de Código, como por ejemplo, que haya actualizaciones de un carrito
// en un Ecommerce (Si se agregan productos, se quitan, que se muestren dichos productos en el Carrito, etc.)

// Funciones Declaradas! (FD)
// Palabra Reservada 👉🏻 function

function saludar() { // Palabra Reservada, y el Nombre de la Función (lo ideal es que el nombre sea descriptivo de lo que hace la función)
    console.log("(FD) Hola Mundo!") // La sentencia que queremos declarar
} // Cierre de la Función

// ☝🏻 Al escribir esta Función, no se ejecuta, a pesar de que está escrito de Arriba a Abajo. 
//    Eso se debe a que tenemos que llamar a la función, para que se ejecute/muestre

saludar(); // Acá estamos llamando a la Función, y se muestra en la Consola.

function saludar2(nombre) { // Acá estamos utilizando un parametro.
    console.log("(FD) Hola " + nombre + "!")
}

saludar2("Ulaises"); // El String "Carpi", vendría a ser el Parámetro que está esperando la función para utilizar.
saludar2("ZeTeX"); // Si quiero puedo pasarle otro parametro de esta manera y lo muestra igualmente.

function saludar3(nombre, apellido) { // Acá estamos utilizando 2 parámetros. (Que en caso de no pasarle el "apellido", en consola sale "undefined")
    console.log("(FD) Hola " + nombre + " y " + apellido)
}

//    Acá le pasamos 2 parámetros, que vendrían a ser "nombre" y "apellido", y si o si los parámetros deben enviarse en el orden
// 👇🏻 que están establecidos.
saludar3("Ulaises", "ZeTeeX");



// Funciones Anonimas (FA)
// La gracia de una función Anonima es que no se le establezca nombre a la función, y que sus datos se almacenen en
// la Constante (en este caso saludar)
// Es muy similar la estructura, la única diferencia es lo anteriormente mencionado, incluso es similar en el tema de pasar parámetros.

const saludaar = function() {
    console.log ("(FA) Hola Mundo!")
}
saludaar();

const saludaar2 = function(nombre) {
    console.log ("(FA) Hola " + nombre)
}
saludaar2("Ulaisees");



// Funciones Flecha! (FF)
// La particularidad es que se pueden resumir bastante.

const saludaaar = () => { // 👈🏻 Es practicamente lo mismo, solo que no se pone la palabra reservada "function"
    console.log("(FF) Hola Mundo")
}
saludaaar();

const saludaaar2 = (nombre) => { // Es la misma función de Arriba, solo que con el parametro "nombre"
    console.log("(FF) Hola " + nombre)
}
saludaaar2("Ulaiseees");

//    Y en caso que quiera comprimir aún mas la Función (siendo solo 1 parámetro y una sola sentencia),
// 👇🏻 puedo escribirla sin los () del parametro, y sin los {} de lo que se debería ejecutar dentro de la "function", escribiendo todo así.

const saludaaar3 = // 👈🏻 Constante  
    nombre => // 👈🏻 Parametro
        console.log("(FF) Hola " + nombre) // 👈🏻 Código de la Función
saludaaar3("ZeTeeeX") // 👈🏻 Función/Sentencia llamada con el parametro establecido

//  👇🏻 Así se debe escribir.
const saludaaar4 = nombre => console.log("(FF) Hola " + nombre)

saludaaar4("Ulaiseeees") 



// Funciones Declaradas con Retorno
// Basicamente creamos una función donde obtenemos un resultado que retorna a nostros, luego de que le pasemos los parámetros que nos pide.

function suma(a, b) {
    return a + b;
}
console.log(suma(3, 5));

// 👇🏻 Otra opción que tenemos, es utilizar la Función Flecha (FF), la cual ya viene con el Return implícito.
//                      👇🏻 Acá iria un Return, pero ya está implicito.
const resta = (a, b) => a - b
console.log (resta(5, 3));