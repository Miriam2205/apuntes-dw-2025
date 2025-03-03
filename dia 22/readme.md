# Javascript

Es un lenguaje de programacion  de alto de programacion de alto nivel, interpretado y orientado a objetos. Lo utilizamos para crear contenido dinámico e interactivos en sitios web.

Alto nivel: esta diseñado para ser facil de leer y escribir por humanos.
Interpretado: se ejecuta en tiempo real, linea por linea y NO necesita ser complicado.

```js
let numero = 1;
console.log("Linea 1 y numero vale: "); 
// imprime en consola el texto Linea 1 y numero vale: 1
numero = numero +2+numero+numero;
console.log("Linea 2 y número vale: ", numero);
// imprime el consola el texto Linea 2 y numero vale: 3

```
Orientado a objetos

js utiliza un paradigma (OOP - Object Oriented Programming), significa que organiza su código en "objetos". Un objeto es una colección de `propiedades` (características) y `metodos` (funciones) que se pueden leer y manipular.

Perro:

//Propiedades
-color:blanco y negro
-nombre: Lasie
// métodos
-ladran()
-moverLaCola()
```js
//ejemplo de propieades y metodos
const alumno ={
    nombre: "Lucia perez",
    edad: 35,
    saludar: function(){
        console.log("Hola, mi nombre es Lucia");
    }
}

//para imprimir el nombre del alumno usamos algo como: 
console.log(alumno.nombre);
console.log("Me llamo", alumno.nombre, "y tengo", alumno.edad, "años");
//Me llamo Lucia Perez y tengo 35 años

// para ejecutar un metodo/función tenemos que usar () al final.
alumno.saludar();
```

## Donde podemos probar/codificar con JS

- En el navegador: En la pestaña de consola.
- En etiquetas de `<script>` dentro del HTML, y se suelen poner al final antes de cerrar el `</body>`
- Se pueden usar archivos externos con la extension `js` linkeado html: <script src="./js/miarchivo"></script>
-Usar extension de VSC -> Quokka. Para empezar usar: "Command+P" ">Quokka
-Usar en paginas externas:

1. https://playcode.io/new
2. https://codepen.io
3. https://jsfiddle.net

# Funcionalidades
- Manipulación del DOM /Document Object Model): Agregar, modificar o quitar elementos HTML Y CSS
-Procesar Formularios: Verificar datos ingresados por el usuario, y realizar formularios complejos de multiples secciones
- Manejo de animacion: Manipular efectos visuales y animaciones en nuestra web.
- Manejo de Eventos: Responder a las acciones del usuario, como por ej: Hacer click, Mover el mouse, desplazarse por la web...
- Comunicación asíncrona con servidores mediante AJAX/Fetch: enviar y recibir datos de un servidor sin tener que recargar la página.

## Tipos de Datos
- Numeros: enteros, decimales, positivos, negativos etc.
- Cadenas de Textos (strings): textos, palabras, frases, 1 letra. Entre comillas `simples`, "dobles", o `backtickts`
- Booleanos: verdadero o falso


- Listas de cosas (arrays): se escriben con corchetes[] y los items se separan con coma.
- Objectos (object): coleccion de propiedades (caracteristicas) y metodods (funcionalidades )y se esciben con{}
```js

//PRIMITIVOS//
let texto = "Hola Alumnos de CEI";
let textoConComillas= 'Hola estoy "muy bien"';
let textoComillasDobles = "I'm Tomi";
let texto = "Quiero comillas "simples" y "dobles"`;

let numero = 123;
let numero2 = "123";
numero2 = Number(numero2);

let entero = 25;
let decimal = 22.30;
let negativo = -5;
const PI = 3.14159;

let estaPrendido = false;
let isPrimary = true;
let onActive = false;


//REFERENCIALES

//objeto
const alumno = {
    nombre: "Mario"
    edad: 33, 
    isRecibido: false
    presentarProyecto : function(){
        isRecibido= true;
        edad=34;
    }
    IrseDeVacaciones: function (){....}
}

alumno.edad; //33
alumno.presentarProyecto(); //presenta el proyecto 


//Listas o ARRAYS
const alumnosDeW = ["jHON", "Maria", "Sonia"....]
const edades = [25,32,18,49]
const listaMixta = [
    1,
    "Juan"
    true, 
    {vali: "hola", val2: "chau"}
]



//las listas comienzan su indice en 0
console.log(alumnosDeW[0])//jHON
console.log(alumnosDeW[1])//mARIA
console.log(alumnosDeW[2])//Sonia


//Para escribir un valor en una lista 
alumnosDeW[0]= "Jhon edward";
console.log(alumnosDeW[])


Ejercicio 2: Creación y acceso a objetos

- Crea un objeto llamado persona con las propiedades nombre (cadena), edad (número) y ciudad (cadena).
- Imprime en la consola el valor de la propiedad nombre del objeto persona.
- Cambia el valor de la propiedad edad a 30.
- Imprime en la consola el objeto persona completo para verificar el cambio.


Ejercicio 3: Arrays de objetos

- Crea un array llamado estudiantes que contenga tres objetos, cada uno representando a un estudiante con - las propiedades nombre y nota.
- Imprime en la consola el nombre del segundo estudiante.
- Cambia la nota del primer estudiante a 95.
- Utiliza un bucle for para imprimir el nombre y la nota de cada estudiante en la consola.


Ejercicio 4: Métodos en objetos

- Crea un objeto llamado calculadora con las propiedades a y b (números) y un método sumar que retorne la suma de a y b.
- Asigna valores a a y b y llama al método sumar, imprimiendo el resultado en la consola.