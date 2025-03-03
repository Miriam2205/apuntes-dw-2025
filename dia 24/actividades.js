//Actividad js: Variables y Tipos de Datos

//Escribir un programa que defina variables de diferentes tipos y las imprima en la consola.

//Instrucciones:

//Crea variables de tipo Number, String, Boolean, Null, Undefined, Symbol, y BigInt.
//Imprime cada variable en la consola usando console.log.

let numero= 10;
let nombre="Luciana";
let esMayorDeEdad = true; 
let valorNulo= null
let nodefinida;

//Actividad 2: Operadores y Expresiones: 
    // Escribir un programa que realice operaciones aritméticas y compare valores.
    //Crea dos variables numéricas.
    //Realiza operaciones aritméticas básicas (suma, resta, multiplicación, división) y guarda los resultados en variables.
    //Compara los dos números usando operadores de comparación y guarda los resultados en variables.
    //Imprime los resultados de las operaciones y comparaciones en la conso la.

let num1= 3;
let num2= 2;

let suma = (num1 + num2);
let resta = (num1 - num2);
let multi = (num1 * num2);
let divi = (num1 % num2);

let esMayor = (num1 > num2);
console.log(esMayor);



// Actividad 3: Estructuras de Control


//usa una variable de edad
const edad = 18;
//dice si edad es mayor de 18 años
if ( edad >=18) {
    console.log("Eres mayor de edad");
} 
//else quiere decir si nose cumple if haz esto 
else{
    console.log("Eres menor de edad");
}

//bucles para repetir una tarea
const num=0;
//for significa para 
console.log("iniciar bucle");
//esto quiere decir que i vale uno y repite 10 veces, la i++ incrementa uno mas de i=1
for( let i=1 ; i < 10; i++){
    console.log("hacer una tarea");
}
console.log("termina bucle")


//Actividad 4: Funciones
        //Crea una función saludar que reciba un nombre como parámetro y devuelva un saludo personalizado.
        //Crea una función sumar que reciba dos números como parámetros y devuelva su suma.
        //Llama a ambas funciones y muestra los resultados en la consola.


 //Crea una función saludar que reciba un nombre como parámetro y devuelva un saludo personalizado.

//Parte 1 de crear la funcion
function saludar(saludo) {
    console.log("Hola que tal?")
}
//Parte 2: usar la funcion desde donde queramos
saludar();



//saludo 2 con nombre
const nombree = "Tom"
function saludo() {
    console.log("Hola"+ nombree +"como andas?")
}
saludar();

// Pero una forma mas eficaz de si queremos cambiar variables es meter la variable dentro del parentesis

function saludo(nombre) {
    console.log("Hola"+ nombre +"como andas?");
}
saludo("tomas");
saludo("maria");
saludo("ruben");

const a= 10;
const b= 5;

 function sumar() {
    //todo lo que esta dentro aqui se ejecuta la funcion
    console.log(a + b)
 }
 //parte 2 ejecuta la funcion
 sumar();



 //Actividad 5: manipulación del DOM
 //Escribir un programa que manipule elementos del DOM.

//Crea un archivo HTML con un elemento <div> con el id "contenedor".
//Escribe un script que cambie el contenido de ese <div> al hacer clic en un botón.
//Ejemplo (HTML y JS):
