# localstorange
sirve para alamcenar info en nuestro navegador
la informacion se guarda segun el dominio
solo guarda strings(textos), si quiero guardar arrays objetos utilizamos json. pa ello usamos `JSON.stringinfy(nuestraLista);` y para volver a tener nuestros datos en js usamos `json.parse<nuestrostring);`
```js
localStorage.setItem("edad",25);
localStorage.setItem("edad");
```
para que se usa: 
-guardar pref. del usuario: "modo claro/oscuro", tamaño de fuente si la barra lateral esta abierta
- recordar las decisiones del usuario, por ejemplo si ya acepto o no in mensaje de bienvenida
- almacenar datos sin necesidad de un servidor. por ejemplo carritos de compra
```js
//catalogo.html
const productos = ["producto 1 ", "producto 2 ", "producto 25 ",];
productos.push("Producto 4")
const textoAGuardar = JSON.stringify(producto);
localStorage.setItem("listaProductos", textoAGuardar)

//checkout.html
const textoProductos = localStorage.getItem("listaDeProductos");
const listaProductos = JSON.parse(textoProductos);
```
```
# SetTimeout
//version de funcion externa
let sumar = () => {

}
setTimeout(sumar, 2000);

//versión de una sola linea
const idTimeout = setTimeout (()=>{

}, 2000);

//quitar el timeout
clearTimeout(idtimeout);
```
#SetInterval
```js
const idInterval = setInterval (sumar, 2000);
clearInterval(idInterval);
```