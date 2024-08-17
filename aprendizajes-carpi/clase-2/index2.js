// CLASE 2 - CONDICIONALES Y OPERADORES LÓGICOS

// 👇🏻 Pequeña Guía de Carpi

// ==           Es igual
// ===          Es estrictamente igual
// !=           Es distinto
// !==          Es estrictamente distinto
// < <= > >=    Menor / Mayor / Menor o igual / Mayor o igual

// &&           Operador AND (y)
// ||           Operador OR (o)
// !            Operador NOT (no)



// if 👈🏻 palabra reservada
// puedo poner if y seleccionar "if (statement)" para escribir más rapido en el código.

// let edad = 18; // 👈🏻 Se usó para un ejemplo, lo comento xq ya no se usa.
let edad = prompt("Ingrese su Edad");

//    En este código, si se ingresa un número que no sea 18 (sea mayor o sea menor), 
// 👇🏻 el código reconocía como que era menor de edad. En el siguiente ejemplo se arregla eso.

if (edad == 18) {
    alert("Sos mayor de Edad. Podés Ingresar!")
} else {
    alert("Sos menor de Edad. No podés ingresar.")
}


let age = prompt("Ingrese su Edad"); // *

// Poniendo >= decimos "if edad es mayor o igual a 18", ejecutar ese if. Y así solucionamos el problema que mencioné antes.
if (age >= 18) {
    alert("Sos mayor de Edad. Podés Ingresar!")
} else {
    alert("Sos menor de Edad. No podés ingresar.")
}



let hora = prompt("Ingrese la Hora!");

// >= significa mayor o igual, && significa "y" (or AND), y < es menor que... 

if (hora >= 6 && hora < 12) {
    alert("Buenos Días!");
} else if (hora >= 12 && hora < 20) {
    alert("Buenas Tardes!")
} else {
    alert("Buenas Noches!")
}

// Esto es un Ciclo de "If" and "Else", donde si un dato está dentro de "if" se ejecuta el mensaje de este, si está en el else "if"  
// sería el mensaje de aquel, pero si está por fuera de aquellos 2 ("if" y el "else if"), se ejecutaría el "else".



let usuario1 = "Ulaises";
let usuario2 = "ZeTeX";

let nombreUsuario = prompt("Ingrese su nombre de Usuario");

// if (nombreUsuario == "Ulaises") {
//     alert("Bienvenido " + nombreUsuario)
// } else if (nombreUsuario == "ZeTeX") {
//     alert("Bienvenido " + nombreUsuario)
// } else {
//     alert("Nombre de Usuario no reconocido!")
// }

// 👇🏻 Aquí simplificamos el código ☝🏻 (de arriba) utilizando el Operador || 👉🏻 "OR"

if (nombreUsuario == "Ulaises" || nombreUsuario == "ZeTeX") {
    alert("Bienvenido " + nombreUsuario)
} else {
    alert("Nombre de Usuario no Reconocido!")
}