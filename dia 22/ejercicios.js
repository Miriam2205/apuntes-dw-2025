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

// 3. Cambiar el valor de la propiedad edad a 30
persona.edad = 30;

// 4. Imprimir en la consola el objeto persona completo para verificar el cambio
console.log(persona);



//Ejemplo 3//
// 1. Crear un array llamado estudiantes con tres objetos con las propiedades nombre y nota
const estudiantes = [
    { nombre: "Carlos", nota: 85 },
    { nombre: "Ana", nota: 90 },
    { nombre: "Luis", nota: 78 }
];

// 2. Imprimir en la consola el nombre del segundo estudiante
console.log(estudiantes[1].nombre); 

// 3. Cambiar la nota del primer estudiante a 95
estudiantes[0].nota = 95;

//Ejercicio 4

// 1. Crear un objeto llamado calculadora con propiedades a, b y un método sumar
const calculadora = {
    a: 0,
    b: 0,
    sumar: function() {
       console.log(this.a + this.b);
    }
};

console.log(calculadora.a);
console.log(calculadora.b);
calculadora.sumar();

calculadora.a = 15;
calculadora.b = 30;
calculadora.sumar();

