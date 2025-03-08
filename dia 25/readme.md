## Operadores OR y AND
Operador or => doble barra
Operador and => &&
```js
//Ejemplosde uso de while
//Bucle usando mientras (while) en vez de for
let i=0;
while(i<10){
    //inicio del bucle
    console.log(1)
    //fin del bucle
    i++;
}

//Bucle Do-while
//funciona igual  que el while pero se ejecuta al menos una vez

let i=25;
do{
    console.log(i);
    i++;
}while (i<10);010

//para que cumpla ambas opciones usar &&
if(edad<=120 && edad>=18){
    console.log("eres mayor de edad");
}
//para que cumpla alguna de las dos opciones usar doble barra
if (edad >= 18 tienePermiso == true){
    console.log("puedes entrar");
}


```
## Forma de escribir funciones
```js
//Funcion comun
function sumar(num1, num2){
    return num1+num2;
}
//la palabra return devuelve algo, en este caso recibe el num1 y num2 y el return dice que devuelve su suma

//este llamado a la funcion envia como"argumento" dos numeros. Es decir 2 y 3 son argumentos
sumar(2,3); vc
//y para imprimir esto se hace agreagando el const resultado
const resultado = sumar(2,3);
console.log(resultado);

//2.Funcion sin nombrar
const sumar = function(num1, num2){
    return num1+num2
}
const alumno = {
    nombre: "Juan",
    edad: 34,
    sumar: function(num1,num2){
        return num1 + num2
    }
}
alumno.sumar(3+1);

//3.Funcion flecha(LA MAS USADA Y LA MAS IMPORTANTE)
const sumar = ()=>{
    return num1+num2;
}
//4.Funcion flecha reducida
//solo se puede usar si mi codigo solo tiene una linea como la de arriba
const sumar = (num1,num2)=>num1+num2;

miBoton.addEventListener("click", ()=>{
    console.log("Me hicieron click");
});

```
## Truthy /Falsy
En JS podemos tener un valor Truthy o Falsy. Un valor Truthy es aquel que se evalua como verdadero en un contexto booleano, mientras que falsey se evalua como falso.
Podemos utilizar este concepto para la toma de decisiones en nuestro codigo.
Valores falsy: `undefined, null, NaN, 0, "" y false` 
Valores truthy: todo lo demás.

Ejemplos de valores que parecen falsy pero son truthy:
```js

//Todos estos son truthy
const val="false"; 
const val=-1;
const val=" "; 
const val=0.1;
const val="null";
const val="undefined";

edad=19;
if(edad>19){
    //truthy
}else{
    //falsy
}
let numero=16;
//numero%2 es falsy pero todo lo que hay entre el parentesis es truthy
if(numero%2==0){
    //es par
} else{
    //es impar
}

if(""){
    //es falsy
}else{
    // es truthy porque contradice a if y se ejecuta esta parte
}