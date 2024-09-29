// 👇🏻 Tenemos una base de datos de Forma Local, la cual a veces está en la Nube o, depende la ocasión, en un JSON local.

const baseDeDatos = [
    { id: "silla", nombre: "Silla", precio: 1500 },
    { id: "sillon", nombre: "Sillón", precio: 2500 },
    { id: "puerta", nombre: "Puerta", precio: 3500 },
    { id: "ventana", nombre: "Ventana", precio: 4500 }
];

// 👇🏻 Creamos una constante que luego de 2 segundos (sin importar el resto de funciones y demás), muestre los datos del Array.

const pedirProductos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(baseDeDatos)
        }, 2000);
    })
}

// 👇🏻 Creamos un Array vacío el cual vamos a llenar para mostrar en el HTML. Y traemos la "ul" del HTML con el "querySelector".

let productos = [];
const lista = document.querySelector("#lista-productos")

// 👇🏻 Hacemos una función la cual crea "li" con un Array que le pasemos (sabemos que es un array, pero se lo vamos a pasar después).
//    Y hacemos que se meta en el "ul" del HTML que está almacenado en una constante llamada "lista".

function mostrarProductos(array) {
    array.forEach(item => {
        const li = document.createElement("li")
        li.id = item.id
        li.textContent = `${item.nombre} - ${item.precio}`
 
        lista.append(li)
    });
}

// 👇🏻 Llamamos a la función "pedirProducto", la cual le decimos que la respuesta de esta los meta en el Array vacío "productos".
//    Y después llamamos a la función "mostrarProductos", diciendo que utilize el Array "productos" para rellenar la "lista" en el HTML.

pedirProductos()
.then((res) => {
    productos = res;
    mostrarProductos(productos)
})