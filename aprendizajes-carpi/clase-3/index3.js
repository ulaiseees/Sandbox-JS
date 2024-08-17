// CLASE 3 - CICLOS Y SWITCH
// Los ciclos nos permiten ejecutar el código que nosotros queramos o las que el usuario decida.


// Utilizando WHILE para crear un ciclo

let x = 0; // Esto sería el Inicializador
while (x < 10) { // Lo que está dentro del () vendría a ser la Condición.
    console.log("Ciclo WHILE Número " + x) // Esto sería el código que debería ejecutarse en caso de que la Condición no esté Completa.
    x = x + 1 // Y esto es el Incrementador.
} // En vista de que al terminar la primera véz con x siendo 1, se repetirá el Ciclo hasta que se cumpla la Condición.


    // Utilizando FOR (el cual se creó para economizar el While, según lo que leyó Carpi.)

for (let xx = 0; xx < 10; xx++) {
    console.log("Ciclo FOR Número " + xx) // Esto es otro Ciclo basicamente pero mucho más reducido.
}


// Utilizando FOR Anidado
// Lo que hacemos acá, es que el FOR ANIDADO Principal (FAP), se reproduce cada véz que se completa el 
// FOR ANIDADO Secundario (FAS). 
// Por lo que sería: (Así se ve en la Consola del Navegador)
// FAP=0
// FAS=0
// FAS=1
// FAS=2
// FAS=3 
// FAS=4
// FAP=1
// y así hasta completar los 10 del FAP.


for (let xxx = 0; xxx < 10; xxx++) {
    console.log("Ciclo FOR ANIDADO Principal Número " + xxx);
    
    for (let y = 0; y < 5; y++) {
        console.log("Ciclo FOR ANIDADO Secundario Número " + y)
    }
}


// Utilizando DO...WHILE
// La diferencia entre el WHILE y el DO...WHILE es que mientras el WHILE chequea la Condición para saber si ejecutarse o no,
// el DO...WHILE se ejecutaría al menos una vez si la condición ya se cumple o las que hagan falta para que se cumpla.

let z = 0; // Va a evaluar el Inicializador
do {
    console.log("Ciclo DO...WHILE Número " + z); // Va a evaluar y ejecutar este código dentro del DO.
    z++; // Va a ver el Incrementador
} while (z < 10); // Y recién después ver la Condición, y si no se cumplió (o no es verdadera), se vuelve a ejecutar el DO.


// Utilizando SWITCH
// Esto es un caso básico de SWITCH, con el detalle de que a la hora de Escribir el Prompt, tengo que poner Number antes así me lo toma
// como tal y no como String. Aunque si quisiera podría ponerle "" a los numeros de cada case y así lo detectaría sin necesidad de Number.

let diaDeLaSemana = Number(prompt("Ingrese día de la semana con números"));
switch (diaDeLaSemana) {
        case 1:
            alert("Lunes");
            break;
        case 2:
            alert("Martes");
            break;
        case 3:
            alert("Miércoles");
            break;
        case 4:
            alert("Jueves");
            break;
        case 5:
            alert("Viernes");
            break;
        case 6:
            alert("Sábado");
            break;
        case 7:
            alert("Domingo");
            break;
        default:
            alert("Ese día no existe");
            break;
}