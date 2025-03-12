# Metodos de arryas/listas
## Pop()
El método `pop()`, elimina el ultimo elemento de un array, y lo devuelve.
Este metodo modifica la longitud array.
```js
let frutas=["manzana","naranja","tomate","uvas","bananas"];
let ultimoElemento = frutas.pop();
console.log(frutas);//(4)
console.log(ultimoElemento);
```
## Push()
El metodo `push()`es uno de los mas comunes, añade uno o mas elementos al final de un array. Me devuelve la nueva longitud del array
```js
const frutas=["manzana", "naranja"];
let nuevaLongitud = frutas.push("pera","tomate");
console.log(frutas);
console.log(nuevaLongitud); //4
```

## Shift()
El metodo `shifth()` elimina el primer elemento del array y lo devuelve. Este metodo modifica  la longitud del array.
```js
const frutas = ["manzana","naranja", "tomate","uvas", "bananas"];
const elementoQuitado = frutas.shifth();

console.log(frutas); //4 [naranja, tomate, uvas y bananas]
console.log(elementoQuitado);//manzana
```
## Unshift()
Con el metodo `unshift()`podemos añadir uno o mas elemento al inicio del array. Devuelve la nueva longitud del array.
```js
const frutas = ["manzana", "naranja", "tomate"];
let nuevaLongitud = frutas.unshift("pera", "ciruela")
console.log(frutas);// 5, pera ciruela manzana naranja y tomate
console.log(elementoQuitado);//5
```

## Splice()
El metodo `splice()`cambia el contenido de un array Eliminando, creando o reemplazando sus elementos. Modifica el valor original, y recibe 3 parametros.
Devuelve los elementos eliminados

- El indice del vector donde se va a realizar la operacion 
- La cantidad de elementos a eliminar
- La cantidad de elementos que quiero agregar

````js
const frutas = ["manzana", "naranja", "tomate", "uvas", "bananas"];
let frutasEliminadas = frutas.splice(2,2, "pera", "ciruela")
console.log(frutas);//manzana naranja pera ciruela bananas
console.log(elementoQuitado);//devuelve tomates y uvas
```

````
Ejercicio de Splice:
```js
let lenguajes = ["python", "java, "javascript", "php", "C+", "C#"];
lenguajes.splice(0,1);//Elimino el primer valor del array (shift())..quitar Python
lenguajes.splice(-1,1);//elimina el ultimo valor del array (porp())..quita"C#"
lenguajes.splice(-1,0,"C", "Cobol");//se posiciona al final,no borra nada, y agrega c y cobolo
//quitar 2 elementos a partir del indice 2
lenguajes.splice(2,2);
```
## ForEach

El forEach recorre cada elemento de una lista y ejecuta la funcion indicada dentro del mismo
```js

["a", "b","c"].forEach((letra)=>{
console.log(letra);
})
```
##Map 
Devolver el doble de cada elemento:
```js
const listaNumeros = [5,15,7];


const listaNumerosDobles = listNumero.map(()=>{
return num*2
})
console.log(listaNumerosDobles); // 10, 30, 14
//Maneras de optimizar, el code de arriba. Pero se puede solo optimizar cuando la funcion tiene una sola linea y esa linea es un return
```
const listaNumerosDobles = listaNumeros.map(num => num*2);
## Buscar item
El metodo `find()`devuelve el primer elemento del array que cumpla la funcion de prueba proporcionada. En caso contrario devuelve undefined.
```js
const numeros = [5,12,8,130,44,12];
const  item = numeros.find(num => num>10);
console.log(item);
```
## Buscar multiples items
la funcion `filter()`devuelve un array/lista con todos los elementos que cumpla la condicion especificada.
```js
const numeros = [5,12,8,130,44,12];
const listaItems = numeros.filter(num=>num>10);


console.log(listaItems);//12,130,44,12

const personas = [
    {nombre: "Juan", edad: 33},
    {nombre: "Pedro", edad: 18},
    {nombre: "Ana", edad: 15},
    {nombre: "Luis", edad: 9}
    {nombre: "Maria", edad: 30}
]
//obtener una lista de las personas mayores de edad 
const listaMayores = personas.filter(persona => persona.edad >= 18);
const mayoresDeEdad = personas.filter(persona => persona.edad >= 18);
console.log(listaMayores)



```
1.De una lista de numeros devolver solo los impares
````js
const numeros =[3,5,8,9,12]
const numerosPares = numeros.filter(num => num % 2 != 0);
console.log(numerosImpares)


```

2.De una lista de objetos de personas, imprimir su nombre
    {nombre: "Juan", edad: 33},
    {nombre: "Pedro", edad: 18},
    {nombre: "Ana", edad: 15},

3.Encuentra un libro cin el titulo especifico(buscar la odisea)
const libros = [
    {titulo: 'El quijote' autor: 'miguel de cervantes'},
    {titulo: 'Cien años de soledad', autor: 'gabriel garcia marquez'},
    {titulo: 'La odisea', autor: 'Homero'},
]
3b.usar los metodos de string para busquedas parciales cien años

4.Dado una lista de numeros desordenados, ordenar de menor a mayor (investigar)