# Contenido asíncrono vs síncrono
L sincronia es la ejecución de tareas en un orden secuencial es decir una tarea se ejecuta después de otra
```js
console.log("Paso 1");
traerDatos();
console.log("Paso 3");

functionb traerDatos(){
    esperar(3000);
    console.log("Paso 2");
}
//simuñador de tiempo 
function esperar(milisegundos){
    const start= new Date().getTime();
    while(new Date()getTime() - start <milisegundos);
}`
```
La asincrono es la ejecucion de taeas en orden no secuencial, es decir una tarea se puede ejecutar antes de que la anterior haya terminado.
La obtención de datos asíncronos se utilizan para:
- taer información de DB (data base)
- traer informacion de una API(api es aplication program interface)
- Manipulacion de nuestros propios archivos
Para lograr una tarea asíncrono, simplemente debemos enviar como parámetro, una funcion de `callBack` que se ejecutara al finalizar la tarea.

ramon.traerUnMarcador(dibujrenLapizarra())
```js
console.log("Paso 1");
traerDatos();
console.log("Paso 3");
function traerDatos(){
    seTimeout (()=>{
        console.log("Paso 2");
    }, 3000);
}
```
En JS debido a que la ejecución ocurre en un solo hilo(callstack) la sincronía permite que el códgio siga corriendo mientras espera tareas lentas como leer archivos o hacer solicitudes HTTP. Esto evita que la interfz de usuario se congele mientrs esper la respuesta
## Casos de uso y no uso
Cosas de fuera de página, se usa cont asincrono
Y lo que usamos es el `fetch` que es extraer informacion de otras páginas 

## Funciones de Callback
Son funciones que se pasan como argumentos a otras funciones y se ejecutan después de que la funcion principal haya terminado su tarea. Funciona como una función de "vuelta".
Son útiles cuando se trabaja con codigo asincrono ya que puede hacer tareas despues de una operacion sin bloquear el flujo de ejecucción

## setTimeout 
Es una funcion de js que ejecuta un bloque de codigo después de un retraso especificpo(milisegundos)
```js
function saludar (nombre){
    alert("Hola"+nombre);
}
function procesarEntradaUsuario(callBack){
    var nombre = prompt("Por favor ingresa tu nombre.");
    callback(nombre);
}
procesarEntradaUsuario((nombre)=>{
    alert("Hola"+nombre);
});
```
# Ejercicio
Crear un código que muestre por consola:
1) Un comensal solicita a un camarero un entrante
2) El camarero va a buscar el plato solicitado (asincrona)
3) La persona toma un vaso de agua mientras espera
4) El camarero lleva el plato  la mesa 
5) La persona se come el plato de comida 
```js
let plato= "Ensalada";
console.log("1)Un comensal solicita a un camarero un entrante, plato");
hacerPedido(plato,()=>{
    console.log("4)El camarero lleva el plato  la mesa ");
    console.log("5)La persona se come el plato de comida ");
})
console.log("3)La persona toma un vaso de agua mientras espera:");

function hacerPedido(plato){
    console.log("2)El camarero va a buscar el plato: ", plato);
    setTimeout(()=>{
        //luego de preparar el plato ejecuto la funcion de callback
        callBack()
    }, 3000);
};
```
# Promesas
Una promesa es un objeto que representa la `determinación` o el `fracaso` de una operación asíncrona.
Puede estar en uno de estos tres estado:
- pendiente: cuando aun no se ha completado, y no se sabe si se completará con éxito o no.
- resuelta: (resolve) cuando se ha completado con éxito
- rechazada: (reject) cuando ocurre un error
```js
const miPromesa = new Promise((resolve, reject)=>{
    console.log("Te prometo que entrego el proyecto");

    setTimeout(()=>{
        resolve("EXITO, presente el proyecto");
    }, 3000)
});
miPromesa.then(result => console.log(result))
         .catch(error => console.log("Tuve un error", error))
         .finally( () => console.log("Finalmente terminé (con error o éxito)"))

```
Las promesas se pueden encadenar: 
```js
miPromesa.then(result => {//result= 5
                return result+3;
                })
          .then(result2 => {//result2= 8
                return result2/2;
                })
          .then(result3 => {//result= 4
                console.log(result3);
          })
         .catch(error => console.log("Tuve un error", error))
         .finally( () => console.log("Finalmente terminé (con error o éxito)"))
```
## Fetch API con .then() y .catch()
Uno de los usus fundamentales de las promesas, es en el uso de la Fetch API para realizar `peticiones HTTP` a otros servidores.
La funcion `fetch()` nos permite hacer una peticion y nos devuelve una promesa
```js
fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())//convertir nuestra respues a JSON
    .then(datos => {

        console.log(dato.name)
    })
    .catch(error => console.warn("Tuvimos un error",error));
```
Ejercicio: obtener 10 usuarios de la página de JsonPlaceholder, y mostrar en html una tarjeta para cada uno ``https://jsonplaceholder.typicode.com/users/`