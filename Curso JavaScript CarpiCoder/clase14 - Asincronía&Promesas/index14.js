// Clase 14 - Asincronía y Promesas
// JS trabaja de Manera Sincronica, es decir, en el orden que se escribe (o una atrás de otra.)
// 👇🏻 Por Ejemplo...

console.log("Hola Mundo")
console.log("Hola, me llamo Ulaises.")

// Pero por ejemplo, si hacemos lo mismo que antes, pero que en el 2do console.log exista un error, no se va a mostrar el 3er console.log!

console.log("Hola Mundo")
// console.log(variable) // 👈🏻 La comento xq sino no puedo mostrar más ejemplos en Consola.
console.log("Hola, me llamo Ulaises.")

// Cuando se trabaja de manera Asincronica, lo que permitimos es utilizar funciones que se guarden en ciertos lugares, y que puedan mostrarse
// luego. Y también no bloquean las funciones siguientes que se vayan a ejecutar.
// 👇🏻 Por ejemplo, tenemos...

setTimeout(() => {
   console.log("Hola, estoy en la línea 19 y tardé 3 segundos en aparecer.") 
}, 3000);

// 👆🏻 Lo que logramos con "setTimeout", es que se ejecute dicha función una véz que se termine de ejecutar TODA la página.
//    Es por ello que si ejecuto las siguientes líneas, el "setTimeout" va a salir al final

console.log("Hola! Estoy primero en el Código.")

setTimeout(() => {
    console.log("Hola, estoy segundo en el Código.") 
 }, 0);

console.log("Hola! Estoy tercero en el Código.")


console.log("Separación 👨🏻‍💻")


/***********************************/
/***********************************/

// Vamos con el "setInterval"
// Esto lo que hace es ejecutar la función cada "X" cantidad de tiempo.

// 👇🏻 Esta es una Versión básica de setInterval (está comentada xq sino sería infinito.)

// setInterval(() => {
//     console.log("Hola, me ejecuto cada 5 segundos!")
//     console.log("Hola, soy la copia de me ejecuto cada 5 segundos!")
// }, 5000);

// 👇🏻 Vamos a ver un ejemplo práctico.

let contador = 0;

const intervalo = setInterval(() => {
    contador++;
    console.log("Hola! Soy un Mensaje que se repitió " + contador + " veces")

    if(contador === 5) {
        clearInterval(intervalo)
        console.log("El Contador fué frenado!")
    }
}, 5000)


console.log("Separación 👨🏻‍💻")


/***********************************/
/***********************************/

// Promesas
// Es un objeto que representa un Objeto a futuro (información que vamos a traer de una base de datos x ejemplo.)
// Generalmente queremos que sea retornada dentro de una función!

// resolve representa lo que queremos que la promesa nos traiga, sin errores.
// reject se presenta cuando hay un error en la promesa.


const eventoFuturo = () => {
    return new Promise((resolve, reject) => {

    })
}

console.log(eventoFuturo()) // 👈🏻 Al traerla con un console.log de la siguiente manera, en consola nos dice "promise" y en estado de "pendiente".

// Vamos a continuar desde acá 👇🏻

const eventoFuturo2 = (res) => { // 👈🏻 res, es abreviación de "response", pero a la hora de codear, podemos poner eso (response, res, respuesta) como valor.
    return new Promise((resolve, reject) => { 
        if (res === true) { // 👈🏻 Hace chequeo de si la respuesta es True y ejecuta el resolve
            resolve("Promesa Resuelta!")
        } else { // 👈🏻 En caso de que no es True, devuelve el reject.
            reject("Promesa Rechazada!")
        }
    })
}

const valor = true; // 👈🏻 Esto es el Valor de la Respuesta, o res.

    eventoFuturo2(valor) // 👈🏻 Ejecutamos la función con "valor"
        .then((respuesta) => {
        console.log(respuesta) // 👈🏻 Tenemos un .then, que hace que muestre la respuesta definida en el "resolve"
        })
        .catch((respuesta) =>{
        console.log(respuesta) // 👈🏻 Tenemos un .catch, que hace que muestre la respuesta definida en el "reject"
        });
        .finally(() => {
            console.log("Finalizó el Proceso!") 
            // 👆🏻 Y .finally se ejecuta sin importar el resultado, y sirve para saber si se ejecutó la función.
        })

    
/***********************************/
/***********************************/


// Y queda un Ejemplo más que lo puse en una Carpeta aparte, dentro de la misma de la Clase.