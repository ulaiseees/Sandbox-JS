// Clase 11 - Operadores Avanzados

/*
Valores Falsy
0, null, undefined, NaN, false, string vacío

Valores Nullish
null, undefined
*/

// Operadores += y ++

let numero = 10; // 👈🏻 Definimos una Variable

// numero = numero + 1; 👈🏻 Esta es una manera de sumarle 1 a "numero"
// numero += 1; 👈🏻 Esta también es una manera de sumarle 1 a "numero", pero con menos código.

numero++; 
// 👆🏻 Y esta es una manera mucho más simple de sumarle 1 a "numero", pero la diferencia es que este solo suma de a 1, 
//    mientras que los otros podrían sumar la cantidad que nosotros queramos.

console.log(numero); // 👈🏻 Vemos el resultado en consola, siendo 11 en ambos casos.


console.log("Separación 👨🏻‍💻")


/***********************************/
/***********************************/

// Operador Ternario
// En el Operador Ternario, si o si tiene que haber un If con un Else, una condición u otra que deba cumplirse.

let edad = 15;

/*
if (edad >= 18) {
    console.log("Podés ingresar");
} else {
    console.log("No podés ingresar")
}
*/
// 👆🏻 Así como tenemos la manera de hacer un simple chequeo de edad escribiendo este código, 
// tenemos otra, la cual es la siguiente... 👇🏻

/*
Entonces, la Sintaxis sería 👇🏻
// condicional 👈🏻 Aca sería la condición que debería cumplirse ( por ejemplo (edad >= 18) ).
        ? resultado1 👈🏻 Aca sería la primera respuesta que debería dar en caso de que se cumpla la condición.
            : resultado2 👈🏻 Y aca sería la segunda respuesta que debería dar en caso de que se cumpla la 2da condición.
*/

// 👇🏻 Quedando así, escrito el ejemplo anterior de la siguiente manera...

edad >= 18 ? console.log("Podes ingresar") : console.log("No podes ingresar")

// 👇🏻 Incluso, se puede simplificar aún mas!

console.log( edad >= 18 ? "Podes ingresar" : "No podes ingresar" )


console.log("Separación 👨🏻‍💻")


/***********************************/
/***********************************/

// Operador &&

const carrito = [];

if (carrito.length === 0) {
    console.log("El Carrito está Vacío")
}

//     Haciendo esto, simplificamos el código. 
//  👇🏻 Pero, la diferencia con el Ternario, es que al no tener un "else", no muestra nada en consola si la condición del "if" no se cumple.

carrito.length === 0 && console.log("El Carrito está Vacío")


console.log("Separación 👨🏻‍💻")


/***********************************/
/***********************************/

// Operador || (OR)
// Este operador se puede usar en Local Storage por ejemplo. 

let usuario1 = "Ulaises";
let usuario2 = null;

// 👇🏻 Esto daría el nombre de "usuario1" ya que este tiene un valor ("Ulaises")
if (usuario1) {
    console.log(usuario1);
} else {
    console.log("El Usuario 1 No Existe!")
}


// 👇🏻 Este daría el String del "else" ya que "usuario2" es null.
if (usuario2) {
    console.log(usuario2);
} else {
    console.log("El Usuario 2 No Existe!")
}

// 👇🏻 Ahora, con el Operador || podemos resumir esos if de la siguiente manera

console.log(usuario1 || "El User 1 no Existe!")
console.log(usuario2 || "El User 2 no Existe!")

// 👆🏻 Esto lo podemos usar por ejemplo para cuando buscamos algo en un Local Storage,
//    haciendo que, en caso de que esté en el Local se muestre, y en caso contrario, que no lo muestre.


console.log("Separación 👨🏻‍💻")


/***********************************/
/***********************************/

// Operador ?? (Nullish 👉🏻 null, undefined)

let numeroZero = 0

console.log(numeroZero || "El Número no es Válido.") // 👈🏻 Acá mostraría "numero"
console.log(numeroZero ?? "El Number no es Válido") // 👈🏻 Acá mostraría el String

// 👆🏻 Básicamente si lo que está a la Izquierda no es "null" o "undefined", lo muestra. Sino, muestra lo de la Derecha.


console.log("Separación 👨🏻‍💻")


/***********************************/
/***********************************/

// Acceso Condicional a un Objeto

const userNuevo = {
    nombre: "Ulaises",
    cursos: {
        dw: "Aprobado",
        rn: "Desaprobado"
    }
}

console.log(userNuevo.cursos.dw || "La propiedad no Existe.") 
// 👆🏻 Haciendo esto, accedemos al Objeto, entramos en una propiedad de este, y luego en una más. Pero en el caso que no existiera
//    dicha propiedad, en la consola saltaría un error que dice "La propiedad is undefined". 
//    Es por eso que se escribe de la siguiente manera... 👇🏻

console.log(userNuevo?.trabajos?.editor || "La propiedad no Existe.")
// 👆🏻 Al usar ? luego de cada propiedad dentro del Objeto, básicamente lo que hace es Preguntar a ver si existe dicha propiedad dentro del Objeto.
//    Comúnmente, si no estuviera el ||, en la consola saldría un simple "undefined", pero al tener la segunda opción si no se cumple la primera, sale el String.


console.log("Separación 👨🏻‍💻")


/***********************************/
/***********************************/

// Desestructuración de Objetos

const userNuevo2 = {
    nombre: "Luis",
    edadNueva: 27,
    cursos: {
        dw: "Aprobado",
        rn: "Pendiente"
    }
}

let {nombre: nombreUsuario, edadNueva} = userNuevo2;

console.log(nombreUsuario)

// 👆🏻 Haciendo todo esto, básicamente lo que hacemos es convertir Propiedades del Objeto en Variables,
//    las cuales podemos usar en Funciones externas y así.


console.log("Separación 👨🏻‍💻")


/***********************************/
/***********************************/

// Desestructuración de Arrays

const nombres = ["Ulaises", "Luis", "Pure"]; // 👈🏻 Creamos un Array con 2 Strings.

const [a, b] = nombres; // 👈🏻 Declaramos [0, 1] del index como variables "a" y "b", sacadas de "nombres".
const [ , c, d] = nombres; // 👈🏻 Dejando el espacio al comienzo, hacemos que [0] quede sin variable, y que [c] empiece recién en [1].

console.log(a) // 👈🏻 Lo mostramos en Consola.
console.log(d) // 👈🏻 Si lo Consologueamos, nos muestra el String "Pure", el cual sería el [2].


console.log("Separación 👨🏻‍💻")


/***********************************/
/***********************************/

// Spread de Arrays
// El Spread para lo que más lo uso Carpi es para que se haga una copia segura de un Array y que el Original no se pierda.

const nombres2 = ["Ulaises", "Luis", "Pure"]; // 👈🏻 Tenemos el Array principal con Datos.

const nombres3 = [...nombres2] // 👈🏻 Llevamos los Datos del Array "nombres2" a una variable nueva llamada "nombres3"

nombres3[0] = "ZeTeeeX" // 👈🏻 Cambiamos el dato en el Index [0] por otro String.

console.log(nombres2) // 👈🏻 Este Array se mantiene sin Cambiar.
console.log(nombres3) // 👈🏻 Este Array se le cambia el Index [0].