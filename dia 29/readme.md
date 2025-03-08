## Operacion ternaria
Una forma de reescribir el `if...else...`. Se compone de tres partes:
1. Una expresion que se evalúa
2. Expresión que se ejecuta en caso de ser cierta
3. Expresion que se ejecuta en caso de ser falsa

Simplifica la legibilidad, pero no se recomienda para anidar operaciones ternarias, o cuando el resultado de la operacion es muy complejo
No se pueden utilizar ternarias si no tengo el "else..." (solo me sirven si tengo truthy y falsy)


```js
let numero = 10;
if(numero % 2 === 0){
    mensaje = "Es par";
} else {
    mensaje = "Es impar";
}

//versión ternaria
let numero = 10;
if(numero % 2 === 0){
    mensaje = "Es par";
} else {
    mensaje = "Es impar";
}
let mensaje = (numero%2 === 0)?"Es par"    : "Es impar";



if(edad>=18) {
    mensaje = "Es mayor de edad";
} else {
    mensaje = "Es menor de edad";
}

let  mensaje =(edad>=18)?"Es mayor de edad" : "es menor de edad";
```
```js
//funcion que recibe 2 numeros y devuelve el mayor
function mayor(num1, num2){
    if(num1>num2){
        return num1;
    } else{
        return num2;
    }
}
//Con ternaria
function mayor(num1,num2){
    return num1>num2 ?  num1 :  num2;   
}

numMayor = mayor(5,3);//5
numMayor = mayor(-5,7);
```

Crear una funcion que reciba 2 parámetros (`jugador1 y jugador2`)y que devuelva si el jugador 1 le gana al jugador en "piedra" "papel" "tijera"

```js

function jugador(jugador1, jugador2){
    //caso empate
    if(j1 == j2){return "empataron";}
    // los casos donde gana jugador 1
    
    if( (j1 === "tijeras" && j2 === "piedra")
        (j1 === "piedra" && j2 === "tijeras")
        (j1 === "papel" && j2 === "piedra")
    ){
        return "Gano el jugador 1;
    }
    //por descarte gana j2
    return "Gano el jugador 2"; 
}
    let ganador = queJugadorGana("piedra","tijera");
    ganador = queJugadorGana("piedra", "piedra");
    ganador = queJugadorGana("tijeras", "piedra");
    ganador = queJugadorGana("tijeras","piedra");

```

## Recorrer Arrays/Listas

### ForEach
-recorrer cada item de un array, y ejecuta una funcion dentro del mismo
-Se le asigna una variable a cada item.
Ejemplo:
    listaAlumnos ->alumno
    listaLetras -> letra
    listaHobbies ->hobbie


### Modificar elementos con un forEach
```js

const listaLetras = ["a", "b", "c"];
listaLetras.forEach((letra, indice)=>{
    letra = letra.toUpperCase();
    console.log(letra,); 'A','B','C',
})

const listaLetras = ["a", "b", "c"];
listaLetras.forEach((letra, indice)=>{
    listaLetras[indice] = letra.toUpperCase();
})
console.log(listaLetras);
```

### Map
Si deseamos generar una copia de la lista, podemos utilizar el método map(), quien crea una nuevo array con los resultado de la función flecha. 
El map devuelve una lista nueva a diferencia de forEach
```js

const listaNumero = [1,2,3,4,5];
listaNumeros.map(()=>{});
const nuevaLista = listaNumeros.map((numero)=>{
    return numero *2;
});
console.log(listaNumeros);//1,2,3,4,5
console.log(nuevaLista);//2,4,6,8,10
```




