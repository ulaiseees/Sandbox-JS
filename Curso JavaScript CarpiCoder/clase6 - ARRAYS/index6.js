// CLASE 6 - ARRAYS
// Los Arrays es un tipo de dato más (como el String, Numero, Objeto), el cual sirve para almacenar valores en
// formato de Lista.
// Los Array se pueden declarar con const o let



// const numeros = [1, 2, 3, 4];
// const booleanos = [true, true, false]; 👈🏻 Ejemplos
// const mezcla = ["Sillón", 1, 2, true];

const usuarios = [ { nombre: "Ulaises", edad: 21}, { nombre: "Luis", edad: 27}, ]
// ☝🏻 Podríamos hacerlo separando las propiedades como en el Objeto, pero mejor hacerlo solo cuando hay muchas propiedades.


//Accediendo a Nuestro Array 👇🏻
const productos = ["Sillón", "Silla", "Mesa", "Ropero"]; // 👈🏻 Este Array va a ser el que se use en todos los Ejemplos.

// const arrayLargo = ["Sillón", "Silla", "Mesa", "Ropero", "Sillón", "Silla", "Mesa", "Ropero", "Sillón", "Silla", "Mesa", "Ropero"];
// console.log(arrayLargo)
//  ☝🏻 Si hacemos este console.log, la consola nos va a mostrar hasta cierto numero de valores, y si se supera, pondrá la 
//     cantidad restante de los valores que faltan.

console.log(productos)
console.log(productos[0]) // 👈🏻 En caso de que querramos acceder a un elemento específico del Array. Se cuenta del 0 en adelante.

console.log("Separación 👨🏻‍💻")

// Recorriendo nuestro Array

// Con este ciclo, recorremos la cantidad de productos que tengamos.
for (let i = 0; i < 4; i++) {
    console.log(productos[i]) 
    //                    ☝🏻 Poniendo esa i, hacemos que en la consola se muestren todos los productos, ya que se le pone i a cada uno en el Ciclo.
}

console.log("Separación 👨🏻‍💻")

// Métodos

// Length / Longitud

//    Con este método, no es necesario saber la Longitud del Array, como en el otro ejercicio, ya que length se encarga de que
// 👇🏻 se sepa cual es la longitud, y a partir de ahí se cumpla el for.
for (let i = 0; i < productos.length; i++) {
    console.log(productos[i]) 
}

// Push
// Nos permite sumar un valor al final de la lista, sin tener que hacerlo manualmente.

productos.push("Cama"); // 👈🏻 Con esto sumo "cama" al array
console.log(productos)

// Unshift
// Nos permite sumar un valor al comienzo de la lista, sin tener que hacerlo manualmente.

productos.unshift("Puerta");
console.log(productos);


// Shift
// Al contrario que Unshift, este elimina el primer Valor del Array.

productos.shift();
console.log (productos)


// POP
// Lo que hace es Eliminar el ultimo valor/elemento

productos.pop();
console.log(productos)


// Splice
// Eliminar los valores que deseemos en el Array, sean 1 o más (Siempre y cuando sepamos cual es el índice).
// Cuando ponemos el splice(1, 1), el primer número es la posición dentro del Array que quermos eliminar,
// y el Segundo es la cantidad de Valores/Elementos que queremos borrar a partir de la posición que dijimos primero.
// Es decir, si pongo (1, 2), me va a borrar el que está en 1, y el siguiente a la derecha.

productos.splice(1, 1)
console.log (productos)

//     Basicamente convierte el array en 1 String y con Join, uno le pone como quiere dividir cada
//  👇🏻 Item/Valor del Array en el String.
console.log (productos.join(" / "))
console.log (productos.join(", "))

// Concat
// Basicamente unir 2 arrays.

const productos2 = ["Puerta", "Ventana", "Cama"];
const productosFinal = productos.concat(productos2);
console.log(productosFinal)

// Slice
// Genera una copia de una Parte de nuestro Array. Este no toma la cantidad que le digas para la derecha como en el Splica,
// este hay que sumarle siempre 1 más, ya que el ultimo nunca lo toma.

const productosComedor = productos.slice(1, 3);
console.log(productosComedor)

// indexOf
// Nos permite saber el número de índice de nuestro elemento

console.log(productos.indexOf("Mesa"))

// includes
// Nos permite saber si existe un elemento en nuestro Array. Devuelve siempre un Booleano

// console.log(productos.includes("Cama")) 👈🏻 Lo comento para que quede lo otro.

// 👇🏻 Con esto se hace lo mismo que antes, pero de otra forma

if (productos.includes("Silla")) {
    console.log(productos.indexOf("Silla"));
} else {
    console.log("Silla no se encuentra en el Array");
}

// reverse
// Invierte el Orden de nuestro Array

console.log(productos.reverse())

// ☝🏻 Comentá desde el ultimo hasta el 2do y anda sumando de a 1, para ver como reacciona.

