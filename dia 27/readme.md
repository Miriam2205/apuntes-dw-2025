# Manipulacion de Textos

1.Concetanacion
```js
const nombre="Lucia";
const apellido="Perez";

const nombreCompleto = nombre + " " + apellido;//Lucia Perez
const fullName = apellido+","+nombre; //Perez, Lucia





//concatenar usando +=
//usar siempre+=
let saludo = "Hola, ";
saludo+="¿Cómo estas?";
console.log(saludo); // Hola, como estas?
//+= es importante porque por ejemplo en una lista de items si queremos agregar algo y añadir algo más
//no se puede aplicar enters
```
<ul id="listaDeItems">
    <li>item</li>
    <li>item</li>
    <li>item</li>
</ul>

2.Interpolación
Cuando usamos plantillas literales `(template lietrals/template strings)` se pueden insertar `variables` o `expresiones` de una cadena de texto usando ${}
Plantillas literales son =>`  `


```js

let nombre="Ana";
let edad=25;

//interpolación
//se puede aplicar enters
//Aplicar esta forma
let mensaje=`Hola, mi nombre es${nombre} y tengo ${edad}años`;
//con interpolacion
const FullName=`${apellido}, ${nombre}`//Perez, Lucia 

//concatenación
let mensaje="Hoa, mi nombre es "+ nombre+ " y tengo " +edad+ "años";

//insertar expresión
const total=50;
const iva=0.21;
console.log(`El total con impuesto es ${total +(total*iva)}`);


const texto="El total con impuestos";
["El", "l", " ", "t", "o", "t", "a", "l".........];
```

3. Metodos de String( el texto que va `   `)
Js nos ofrece multiples metodos/funciones para manipular cadenas de texto.
Los metodos son funciones y se pueden hacer funciones

-`toUpperCase()` y `toLowerCase()`
Convierte todas las letras de una cadena en mayúsculas o minúsculas.

-`split()`
Divide una cadena de texto en una lista/array basada en el separador elegido

- `slice()`
Sacar una porcion de la cadena basada en indices de inicio y fin (sin inncluir el indice final). Recibe dos valores, la del inicio y la del fin aunque se puede poner solo la del inicio.
Se usa para recortar texto y no mostrar al usuario todo
- `replace()` `replaceAll`
reemplazar una parte de la cadena por otra (la primera ocurrencia).
Soporta expresion regulares(regex)para potenciar la busqueda

-`trim()`
Eliminar los espacios en blanco al inicio y al fin de la cadena. 

-`incluse()`
Verifica si una cadena contiene una subcadena específica.

-`startswith()` y `endsWith()`
Verifica si una cadena comienza o termina con una subcadena espcefica.

-`repeat()`
Repite una cadenna un numero especifico de veces
```js
let texto="Me encatanta Javascript";
//toUppercase(), toLowerCase()
console.log(texto.toLowerCase()); me encanta javascript
console.log(texto.toUpperCase()); ME ENCANTA JAVASCRIPT

//split
const palabras=texto.split(" ");
console.log(palabras);//["Me", "encanta", "Javascript"]
const palabras2=texto.split("encanta");
console.log(palabras2);//["Me","Javascript"]; Lo que hace es eliminar esa palabra seleccionada

const email="Maria@alumnos.cei.es";
const separacion = email.split("@")
console.log(email);//["maria", "alumnos.cei.es"];

//Slice
let frase="Aprender javascript es divertido";
console.log("Parte de la frase : ", frase.slice(9,19)); //javascript
console.log("Desde el indice 9 al final: ", frase.slice(9)); //javascript es divertido

//Replace
let frase="Hola mundo. hola hola hola hola universo";
console.log("Reemplazar a 'hola' por 'Hola': ", frase.replace("hola","Hola"));
//eso me cambia la primera que encuentre
console.log("Reemplazar a 'hola' por 'Hola': ", frase.replaceAll("hola","Hola"));
//Hola mundo.Hola Hola Hola Hola universo;

//trim()
let frase="         Hola mi nombre es       Luka         ";
console.log(frase.trim();)//Hola mi nombre es       Luka"

//includes
let frase="El sol brilla en el cielo";
console.log("contiene 'sol'?" + frase.includes("sol")); //true
console.log("contiene 'luna'?" + frase.includes("luna")); //false

//stratsWith u endsWith
let frase="Javascript es genial";
console.log("¿Empieza con'Java': ",frase.startWith("Java"));//true
console.log("¿Empieza con'Java': ",frase.startWith("Java"));//false
console.log("¿Termina con 'genial': ?", frase.endsWith("genial"));
//tambien se puede preguntar con template
console.log(`¿Termina con 'genial': ?`, frase.endsWith("genial"));

//repeat
let risa="Ja";
console.log("Me causa mucha gracia: ", risa.repeat(3)); //JaJaJa

let frase="HolaComo Andan?";
console.log(frase.length);//15 letras; devuelve el numero de letras


```
Podmeos combinar los metodos
```js

let frase="       No me gusta Javascript en diseño web   ";
//trim(), toUpperCase(), replace()
let resultado= frase.trim()//elimina los espacios
                    .replace("No me gusta", "me encanta");
                    .toUpperCase()//pasarlo a mayusculas
//Resultado: ME ENCANTA JAVASCRIPT EN DISEÑO WEB


innerText => solo el texto visible (renderizado)
textContent => todo el texto dentro de la etiqueta
innerHTML => soporta etiquetas
```
innerText => solo el texto visible (renderizado)
textContent => todo el texto dentro de la etiqueta
innerHTML => soporta etiquetas

## EJERCICIOS
Nivel 1: formateo basico de texto
1.  **Mayúsculas y Minúsculas en Títulos:**

    *   Pide al alumno que cree un archivo HTML con un título (`<h1>`) que contenga texto en minúsculas.
    *   Usando JavaScript, seleccionar el elemento `h1` y transformar el texto a mayúsculas utilizando `.toUpperCase()`. Mostrar el resultado en la consola.
    *   Repetir el ejercicio, pero transformando el texto a minúsculas con `.toLowerCase()`.
