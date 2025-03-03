## Variables Referenciales vs Primitivas

Primitivo es la cubeta donde guardamos algun dato. `Strings, numeros, booleanos` y otros pueden ser `let` o `const`

Referencial es la llave del camion (no el camion ), donde guardamos muchos datos. `Objetos, Arrays Funciones`.Estos son siempre `const`

```js
const num=25;
num=30;  //ERROR no se puede modificar una constante

const alumnos=["Juan" "Maria" "`Pedor"];
alumnos[0]="Tomas"; //OK se puede modificar el contenido de un array.
```

## Comentarios en JS
- Comentario simple: se utiliza `//` para 1 sola linea
- Comentario simple en linea: puede usarse`//` al final de la linea

Importante, usarlo en el proyecto final
- Comentario de Documentación: se utiliza `/**......*/`para iniciar un bloque informativo. Se usa mucho para funciones. 

```js
// 1 sola linea
let nombre="Juan"; //1 sola linea al final

//JSDOC
/**
 *Esta es una funcion que suma 2 numeros
 * 
 * @param {number}num1-El primer numero
 * @param {number}num2-El segundo numero
 * @return {number} La suma de num1 y num2
 * 
 * 
 * */
 function sumar(num1, num2){
 return num1+num2;
 }


/*-------------------------------------------*/
//                  Seccion 1               //
/*-------------------------------------------*/
```

# Operadores aritmétricos
Tenemos operadores de asignacion, comparacion, lógicos

los aritmetricos mas comunes son: 
- Suma "+": Suma 2 valores
- Resya "-": resta 2 valores
- Incrementar un valor "++": incrementar el valor de una variable
- Decrementar un valor "--": Decrementa el valor de una variable
- Multiplicacion"*".
- Division "/".
- Modulo"%": El resto de la división de 2 valores
```js
let a= 10;
let b= 5;

let suma= a+b; 15
let resta= a-b; 5
let multi= a*b; 50
let divi= a%b; 2
let modulo= a&b; 0
let incrementoParaA=  a++b
let decrementoParaB= b--;

//Simbolos comparativos
== // para ver si son iguales
!= // para ver si son distintos
<//para ver si es menor
>//para ver si es mayor
<= //para ver si es menor o igual que..
>= //para ver si es mayor o igual que 

let a = 5;
let b = 10;
let c="5";