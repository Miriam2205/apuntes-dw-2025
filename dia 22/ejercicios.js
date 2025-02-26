// 1. Crear un array llamado frutas con las frutas indicadas
const frutas = ["Manzana", "Banana", "Naranja"];

// 2. Imprimir en la consola el primer elemento del array frutas
console.log(frutas[0]); // Salida: "Manzana"

// 3. Cambiar el segundo elemento del array frutas a "Mango"
frutas[1] = "Mango";

// 4. Imprimir en la consola el array completo para verificar el cambio
console.log(frutas);
console.log(frutas.length); 
// Salida: ["Manzana", "Mango", "Naranja"]



//Ejemplo 2//
// 1. Crear un objeto llamado persona con las propiedades nombre, edad y ciudad
const persona = {
    nombre: "Juan",
    edad: 25,
    ciudad: "Madrid"
};

// 2. Imprimir en la consola el valor de la propiedad nombre del objeto persona
console.log(persona.nombre); 
// Salida: "Juan"

// 3. Cambiar el valor de la propiedad edad a 30
persona.edad = 30;

// 4. Imprimir en la consola el objeto persona completo para verificar el cambio
console.log(persona);
// Salida: { nombre: "Juan", edad: 30, ciudad: "Madrid" }


//Ejemplo 3//
// 1. Crear un array llamado estudiantes con tres objetos con las propiedades nombre y nota
const estudiantes = [
    { nombre: "Carlos", nota: 85 },
    { nombre: "Ana", nota: 90 },
    { nombre: "Luis", nota: 78 }
];

// 2. Imprimir en la consola el nombre del segundo estudiante
console.log(estudiantes[1].nombre); 
// Salida: "Ana"

// 3. Cambiar la nota del primer estudiante a 95
estudiantes[0].nota = 95;


// Salida:
// Nombre: Carlos, Nota: 95
// Nombre: Ana, Nota: 90
// Nombre: Luis, Nota: 78


// 1. Crear un objeto llamado calculadora con propiedades a, b y un método sumar
const calculadora = {
    a: 0,
    b: 0,
    sumar: function() {
        return this.a + this.b;
    }
};

// 2. Asignar valores a las propiedades a y b
calculadora.a = 10;
calculadora.b = 20;

// 3. Llamar al método sumar e imprimir el resultado en la consola
console.log(calculadora.sumar()); 
// Salida: 30
