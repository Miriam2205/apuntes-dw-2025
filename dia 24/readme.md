Bucle para imprimir del 1 al 10
Los bucles for se dividen en 3 partes
1.iniciar una variable (normalmente i)
2.crear una condicion para esa variables (ej <10>)
3.aplicar un cambio a esa variable cada iteracion (ej : 1++)

```js
//imprimir
for(let i=1; i<=10 ; i++){
    console.log("numero:", i);
}

//ver numero pares del 1 al 10
for(let i=0; i<11; i=i+2){
    console.log("Numero: i")
}
```

# Funciones
Secciones de código reutilizables
```js
Puede haber dos funciones una es funcion ambito local es la console que esta dentro de la funcion pero si el console log esta fuera de la funcion no esta definido.
Por eso si queremos que una variable tenga vida en toda la pagina el const se queda fuera de la funcion.

Si es una variable que solo la queremos para una funcion solo ponemos el const y console log lo ponemos dentro de la funcion para que no afecte a otras funciones 

function saludar(){
    console.log("Hola, como andan?");  
}

//Parte 2: 
//entra juan
saludar ();
//entra maria
saludar();
//entra el profe
for(i=0;i<2;i++) {

}
