// CLASE 7 - Funciones de Orden Superior

// Funciones de Orden Superior
//

// Abstracción
// Lo mejor sobre realizar funciones, es que se pueden hacer 1 sola véz, y después se llamen en cualquier parte sin la necesidad
// de volver a escribir todo lo que esté dentro de ellas.

function sumarRango (min, max) { // Aca agregué parámetros a la función, haciéndola reutilizable.
    let total = 0;
        for (let i = min; i <= max; i++) { // 👈🏻 Cada véz que inicia el ciclo, se le suma 1 a i.
            // total = total + i; 👈🏻 Esta es la forma "larga" de escribir el código de la línea de abajo.
            total += i; // 👈🏻 Adentro del ciclo, también se le suma 1 a i.
            // console.log(total) // Terminan siendo 10 mensajes de Consola.
    }
    return total;
}

console.log(sumarRango(3, 10));
// console.log(sumarRango(4, 15)); 👈🏻 Podemos llamarla varias veces, y darle los parámetros que nosotros decidamos.


console.log("Separación 👨🏻‍💻")


// Retorno de Funciones
// Esto es algo que lleva practica, no hay que desesperarse si no anda (Consejo de Carpi jaja)
// El retorno es para eso, que creemos una función principal y que después generemos varias secundarias a partir
// de la principal.

// Nos podría servir para saber si un número es mayor o menor que otro por ejemplo.
// 👇🏻
const mayorQueDiez = (num) => num > 10; // 👈🏻 Como es solo 1 sentencia, no se necesitan {} después de la flecha, y el "return" está implicito.
console.log(mayorQueDiez(8)); // 👈🏻 El 8 vendría a ser el Parámetro que se debería definir si es mayor o menor.

// 👇🏻 Esto vendría a ser una Función dentro de otra Función.
function mayorQue (x) { // 👈🏻 Nombre de la función y el (parámetro)
    return (num) => num > x // 👈🏻 La otra función, teniendo (parámetro) y => condición
}

const mayorQueOnce = mayorQue(11); // 👈🏻 Con esta función, le pasamos el (11) como parámetro para que se cumpla la función que tiene el "return".

console.log(mayorQueOnce(9)) // 👈🏻 Con este console.log, vemos que la función es false.
console.log(mayorQueOnce(13)) // 👈🏻 Con este console.log, vemos que la función es true.


console.log("Separación 👨🏻‍💻")


// Métodos de Búsqueda y Transformación
//
// forEach() => Recorre el Array y ejecuta lo que le digamos con cada elemento.
// find() => Recorre el Array y retorna el primer elemento que cumpla con cierta condición.
// filter() => Recorre el Array y retorna un array nuevo con Elementos que cumplan con cierta condición.
// some() => Recorre el Array y responde true or false según si encuentra o no un elemento que cumpla con cierta condición.
// map() => Recorre el Array y retorna un nuevo Array con los elementos transformados del Array Original.
// reduce() => Recorre el Array y retorna un único valor tras hacer una operación sobre los elementos.
// sort() => Reordenar el Array según el criterio que se le indique.

// Estos Arrays se van a usar como Ejemplo en todos los Casos.
// 👇🏻 Si los Array los ponemos en Plural es mejor y buena práctica.
const numeros = [50, 12, 37, 25, 6];
const animales = ["Perro", "Gato", "Cisne", "Tortuga"];
const productos = [
    {nombre: "Mesa", precio: 3500 },
    {nombre: "Silla de Plástico", precio: 2000 },
    {nombre: "Silla de Madera", precio: 2500 },
    {nombre: "Ventana", precio: 4500 },
    {nombre: "Puerta", precio: 3000 },
]


console.log(" 👇🏻 forEach()")
// forEach() => Recorre el Array y ejecuta lo que le digamos con cada elemento.

//  👇🏻 Acá empezamos poniendo nombreArray.forEach((parámetro de cada elemento dentro del array en singular))
numeros.forEach((numero) => { // 👈🏻 Y cuando escribimos el parámetro, estamos haciendo un recorrido por cada elemento del array.
    console.log (numero) // 👈🏻 Esto es para que se entienda lo que hace el forEach().
});

console.log("Separación 👨🏻‍💻")
console.log(" 👇🏻 find()")
// find() => Recorre el Array y retorna el primer elemento que cumpla con cierta condición.


const perro = animales.find((animal) => {
    return animal === "Perro";
})
console.log(perro)

//     En este método find(), lo que estamos haciendo es que el producto que ingrese el Cliente, el find() debe buscarlo en el Array
//  👇🏻 y traerlo junto con todos sus datos (por ejemplo si quisiéramos mostrar la página de detalles de un Producto.)

// let productoElegido = prompt("Ingrese el Producto que desea Comprar!"); // 👈🏻 Aparte esto genera cierta "interacción" con el Cliente.
// console.log(productos.find((producto) => producto.nombre === productoElegido));

// ☝🏻 Lo comento para que no moleste a la hora de Abrir la página.

console.log("Separación 👨🏻‍💻")
console.log(" 👇🏻 filter()")
// filter() => Recorre el Array y retorna un array nuevo con Elementos que cumplan con cierta condición.

const gato = animales.filter((animal) => animal === "Gato")
console.log(gato)

// Haciendo este filter(), va a devolver un array vacío, ya que no hay ningún elemento que
// se llame "Silla"
// const sillas = productos.filter((producto) => producto.nombre === "Silla") 👈🏻 Lo comento para que no haga colisión.

// 👇🏻 Esta es la forma de "arreglarlo"
const sillas = productos.filter((producto) => producto.nombre.includes("Silla"))
console.log(sillas)
// Con el filter() junto al includes(), podemos hacer un buscador de productos en donde escribamos cierta palabra que está en
// el nombre del producto, y muestre todos estos que incluyan esa palabra.


console.log("Separación 👨🏻‍💻")
console.log(" 👇🏻 some()")
// some() => Recorre el Array y responde true or false según si encuentra o no un elemento que cumpla con cierta condición.

const cisne = animales.some((animal) => animal === "Cisne") // 👈🏻 Este da True
console.log (cisne)

const caballo = animales.some((animal) => animal === "Caballo") // 👈🏻 Este da False
console.log (caballo)


console.log("Separación 👨🏻‍💻")
console.log(" 👇🏻 map()")
// map() => Recorre el Array y retorna un nuevo Array con los elementos transformados del Array Original.
// map() se usa bastante en React (Cuenta Carpi)

const nombres = productos.map((producto) => producto.nombre)
console.log(nombres)

// 👇🏻 En esta función, lo que hacemos es retornar un nuevo Array con los precios cambiados. 
const preciosActualizados = productos.map((producto) => { 
    return {
        nombre: producto.nombre,
        precio: producto.precio * 1.5
    }
})
console.log(productos) // 👈🏻 En este console.log() estamos mostrando los precios viejos.
console.log(preciosActualizados) // 👈🏻 En este console.log() estamos mostrando los precios nuevos.


console.log("Separación 👨🏻‍💻")
console.log(" 👇🏻 reduce()")
// reduce() => Recorre el Array y retorna un único valor tras hacer una operación sobre los elementos.


// El parámetro "acumulador" guarda los resultados de las sumas que hagamos.
const total = numeros.reduce((acumulador, numero) => acumulador + numero, 0) // 👈🏻 Con ese 0, le decimos que largue la suma desde 0.
console.log(total)

// 👇🏻 El reduce podríamos usarlo en un Carrito por ejemplo, para sumar los precios de todos los productos que agregamos a este.
const totalCarrito = productos.reduce((acumulador, producto) => acumulador + producto.precio, 0)
console.log(totalCarrito)


console.log("Separación 👨🏻‍💻")
console.log(" 👇🏻 sort()")
// sort() => Reordenar el Array según el criterio que se le indique.
// Lo que hay que tener cuidado, es que esto reestructura el Array y lo deja así, nunca vuelve a su forma original.

// 👇🏻 Esto ordenó de menor a mayor el Array.
numeros.sort((a, b) => a - b)
console.log(numeros)

// 👇🏻 Esto ordenó de mayor a menor el Array.
numeros.sort((a, b) => a + b)
console.log(numeros)

// MATH

console.log("Separación 👨🏻‍💻")
console.log(" 👇🏻 math()")

const numeroDecimal1 = 1.25;
const numeroDecimal2 = 1.75

// math() => 
// min() => Retorna el Número mínimo de un Listado.
    console.log(Math.min(50, 12, 37, 25, 6))

// max() => Retorna el Número máximo de un Listado.
    console.log(Math.max(50, 12, 37, 25, 6))

// ceil() => Retorna el número que le indiquemos, como número entero, y redondeado hacia arriba.
    console.log(Math.ceil(numeroDecimal1));

// floor() => Retorna el número que le indiquemos, como número entero, y redondeado hacia abajo.
    console.log(Math.floor(numeroDecimal2));

// round() => Retorna el número que le indiquemos, redondeado hacia el número entero más cercano.
    console.log(Math.round(numeroDecimal1));
    console.log(Math.round(numeroDecimal2));


// Math.random() => Retorna un número aleatorio, entre 0 inclusive y 1 inclusive.

console.log(Math.random()) // 👈🏻 Estando así, solo da 1 número entre 0 y 1.

console.log(Math.round(Math.random())) // 👈🏻 Estando así, lo lleva a 1 ó a 0.

console.log(Math.round(Math.random() * 50)) // 👈🏻 Con esto da un número entre 0 y 50.