# Dia 32
## Listeners para eventos del usuario
Son funciones que se ejecutan en respuesta a eventos especificos que ocurren en el DOM, como por ejemplo clikcs, movimiento del mouse, teclas presionadas, teclas levantadas etc. Para agregar un evento usamos `addEventListener(evento, funcion)`

```js
//selector item del DOM
const boton = document.querySelector('button');
//Agregar un event Listener  para el evento de click
boton.addEventListener("click", miFuncion);




```
## Pasar parametros a funciones con eventos
A veces necesitamos enviar parametros adicionales a la funcion que maneja el evento
```js
boton.addEventListener("click". function(){
    miFuncion("Tomi");
})

//ejecutar la funcion sin enviar parametros
boton.addEventListener("click",miFuncion);
//ejecutar la funcion  enviando parametros, la debo meter dentro de una funcion flecha
boton.addEventListener("click",()=>miFuncion("Maria"));

function miFuncion(usuario){
    console.log(`HOLA ${usuario}`);
}
``` 
Ejercicio
1. Cambiar el color de un elemento al hacerle click
 Crear dos botones (rojo y azul) que cambien el color de fondo de un bloque al hacerle click. La funcion de cambia de color tiene que ser la misma


 2. Mensaje al pasar el mouse:
 Crear un elemento que muestre un mensaje cuando el raton pase por encima de el.

 ### Parametro "e" (event/evento)
 Es un objeto que contiene informacion sobre el evento ocurrido. Este se pasa automáticamente a la funcion que maneja el evento
 ```js
 function handleClick(){
    console.log("El boton ha sido clickeado");
    console.log("Coordenadas del mouse: ", e.clientX, e.clientY);
 }
 boton.addEventListener('click',handleClick);
 ```
 Ejercicio 3: 
 Formulario de entrada: 
 Crear un formulario que valide de un usuario y muestre en pantalla si la entrada