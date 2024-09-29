// CLASE 5 - OBJETOS

// Objetos son estructuras que nos permiten meter ciertos datos que se relacionan entre sí.
// 👇🏻 Un ejemplo para crear un user antes

let nombre = "Ulaises";
let edad = 21;
let nacionalidad = "Argentina";

// Objetos se podrían considerar como entidades con varias propiedades, como por ejemplo el user de arriba.
// Se pueden almacenar cualquier tipo de Dato, incluso un Objeto dentro del Objeto.

// Al almacenar datos dentro del objeto, ya sea el "name" o lo que esté luego del :, se guarda como String, por lo que se puede
// hacer el siguiente ejemplo *

const usuario1 = {
    name: "Ulaises",
    age: 21,
    nacionality: "Argentinian",
    hobbies: {
        hobby1: "Edición",
        hobby2: "F1"
    }
}

const usuario2 = {
    name: "Naruto",
    age: 25,
    nacionality: "Nijon-jin"
}

// Y en caso de querer tener los datos de un Objeto?
// Ponemos 👇🏻
console.log(usuario1);

// En caso de querer tener 1 dato específico del Objeto?
// Ponemos 👇🏻
console.log(usuario1.name);
console.log(usuario2.nacionality);

console.log(usuario1.hobbies.hobby2) // 👈🏻 En caso de querer acceder al  Objeto dentro del Objeto.

console.log(usuario1["name"]) // *

console.log("Separación 👨🏻‍💻")

const usuario3 = {
    name: "Luis",
    age: 27,
    nacionality: "Argentinian",
}

usuario3.nacionality = "Brazilian" // Con esto cambiamos el dato dentro del Objeto.
// usuario3.["nacionality"] = "Brazilian" 👈🏻 Esto es otra manera, la comento xq no es relevante.

console.log (usuario3.nacionality)

// OBJETOS CON FUNCIÓN CONSTRUCTORA

// const product1 = {
//     name: "Teléfono",
//     color: "Rojo",
//     price: 250000
// }

function Producto(name, color, price) { // Acá le estoy pasando los Parámetros del Objeto
    // Esto vendría a ser el Esqueleto de nuestros futuros Objetos.
    // Ya que, en véz de escribir toda la Const, se escribiría lo siguiente **

    this.Name = name; 
    // ☝🏻 Y en caso de que yo escriba "this.título", el objeto diría que es título donde iría "name".
    //    es por eso que se escriben los parámetros antes, y se debe respetar el orden en el que lo escribí.
    
    this.Color = color;

    this.Price = price;

// La palabra "this", basicamente referencia el Producto que vamos a crear, e.g. "this" reemplazaría a product1 en este caso,
// como puede representar a cualquier objeto.
}

const product1 = new Producto("Teléfono", "Rojo", 250000) //**
console.log(product1);

// ☝🏻 Con esto construímos un Objeto gracias a la estructura de "function Producto".

console.log("Separación 👨🏻‍💻")

// OBJETOS CON CLASES
// Es basicamente un esqueleto del Objeto como el anterior, solo que en este dice "constructor"

class ProductoClass {
    constructor(titulo, color, precio) {
        this.titulo = titulo;
        this.color = color;
        this.precio = precio;
    }
}

const producto1 = new ProductoClass("Sillón", "Azul", 50000)
console.log(producto1)

// Recomendación de Carpi, es que al empezar escribamos el Objeto así:
// 👇🏻

// const usuario1 = {
//     name: "Ulaises",
//     age: 21,
//     nacionality: "Argentinian",
//     hobbies: {
//         hobby1: "Edición",
//         hobby2: "F1"
//     }
// }
// Antes que escrito así: 
// 👇🏻

// class ProductoClass {
//     constructor(titulo, color, precio) {
//         this.titulo = titulo;
//         this.color = color;
//         this.precio = precio;
//     }
// }

// La única diferencia es la forma en la que se escribe, por eso es la Recomendación 😊


console.log("Separación 👨🏻‍💻")


// Métodos en los Objetos
// Operaciones que podemos hacer con las propiedades del Objeto o en el constructor (que es más común que se haga),
// ya que podemos Setear/Pre-Setear acciones que se pueden realizar con nuestras propiedades.

class Persona {
    constructor(nombre, edad, nacionalidad) {
        this.nombre = nombre;
        this.edad = edad;
        this.nacionalidad = nacionalidad;
    }
}

const persona1 = new Persona("Ulaises", 21, "Argentina")
console.log(persona1)


// En esta Función 👇🏻, lo que hice fué agregarle un Método, el cual hacía que a la edad de persona2 (o de quién sea), se le sume 1 año.

class Persona2 {
    constructor(nombre, edad, nacionalidad) {
        this.nombre = nombre;
        this.edad = edad;
        this.nacionalidad = nacionalidad;

        this.cumpleanios = function(){ this.edad = this.edad + 1 } 
        // Pero si hicieramos esto ☝🏻, sin agregar el "persona2.cumpleanios()" y poniendo el "console.log(persona2)", no pasaría nada (Probalo),
        // eso se debe a que no estamos llamando a la función a que se cumpla. Por lo que al agregar "persona2.cumpleanios()", se ejecuta, suma 1 año,
        // y luego en el "console.log(persona2)" muestra la edad con un año más. (Esto se explicó mas arriba de que se podían cambiar los datos de un
        // objeto, solo que aquí se hace dentro del mismo objeto jaja)
        // Y si quisieramos simplificar ese código, ponemos // this.cumpleanios = function(){ this.edad++ } 
    }
}

const persona2 = new Persona2("Luis", 27, "Argentina")

persona2.cumpleanios(); // Probá a ejecutar "console.log(persona2.edad)" con esta línea comentada, y después sin comentarla n.n
console.log(persona2.edad)

// Otra manera de ver como se activa la Función de "persona2.cumpleanios();" es escribiendo los siguientes
// "console.log()" 👇🏻

// console.log(persona2.edad)
// persona2.cumpleanios();
// console.log(persona2.edad)

// Los dejo comentados pero probalos comentando las líneas 167 y 168.


console.log("Separación 👨🏻‍💻")


// OPERADOR IN
// IN se utiliza para saber si existe dicho dato o no dentro del Objeto, y siempre devuelve un Valor Booleano,
// es decir, devuelve True o False.
// Estoy usando los datos de la línea 165.

// 👇🏻 En este ejemplo si hay

if ("nombre" in persona2) {
    console.log(persona2.nombre);
} else {
    console.log("No Hay Nombre!");
}

// 👇🏻 En este ejemplo no hay

if ("hobbies" in persona2) {
    console.log(persona2.hobbies);
} else {
    console.log("No Hay Hobbies!");
}


console.log("Separación 👨🏻‍💻")


// OPERADOR FOR IN
// Con esto hacemos un ciclo que recorra todas las propiedades del Objeto, permitiendonos asignar valores, cambiarlos, 
// entre otras cosas.

for (const propiedad in persona2){ //propiedad es una variable, pero se le pone ese nombre para reconocer para que se usa.
    console.log(propiedad)
}

// PROPIEDADES Y MÉTODOS CON VARIABLES Y FUNCIONES EXTERNAS
// Con esto basicamente se refiere a que podemos meter una Constante como la de IVA como propiedad dentro del objeto, así como
// una función que creamos antes, utilizando el mismo método de carga para la función antes de mostrarla en Consola o donde sea
// que vamos a mostrar los datos.

const IVA = 1.21;

function saludar() {
    console.log("Hola, soy " + this.nombre);
}

const producto5 = {
    nombre: "Sillón",
    color: "Rojo",
    precio: 50000,
    iva: IVA,
    saludar
}

producto5.saludar();
console.log(producto5)