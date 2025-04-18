# Async/Await
Las desventajas de las promesas es que se vuelven difíciles de entender cuando se anidan. Por eso se desarrollo `async/await`.Es más fácil de leer y entender que las compromesas con callbacks
# Ventajas
-Legibilidad: se parece más al código síncrono tradicional, lo que facilita

```js
//mismo codigo utilizando async/await
async function traerDatos (){
    try{
        const response = fetch("https://jsonplaceholder.typicode.com/users");
        const datos = await response.json();

        console.log(datos);
        console.log(datos[0]);//los datos del primer usuario
        //simulamos un segundo request, trayendo lso posts del primer usuario
        const responsePost = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${datos[0].id}`);
        const datosPost = await respondePost.json();
    } catch (error){
        console.log("Tuvimos un error:", error);
    }
}

//Convertir el siguiente ejercicio en try catch
console.log(" 1) solicitar al camarero un plato de ensalada de atún");
pedirPlato("ensalada de atún");
console.log("3) la persona se toma el vaso de agua");
function pedirPlato(plato) {
    console.log("2) el camarero va a buscar el plato de comida: ", plato);
    fetch("http://restaurante.com/api/traerPlato")
        .then(response => response.json())
        .then(datos => {
            console.log("Paso 4: El camarero lleva el plato de :", datos.plato);
            console.log("Paso 5: El comensal se come su comida");
        })
        .catch(error => {
            console.log("No tenemos mas atún, lo siento");
        });
}

//Convertido a try catch
console.log("1) Solicitar al camarero un plato de ensalada de atún");

try {
    pedirPlato("ensalada de atún");
} catch (error) {
    console.log("Error al pedir el plato:", error.message);
}

console.log("3) La persona se toma el vaso de agua");

function pedirPlato("ensalada de atún");

console.log("3)Tomar un vaso de agua");

const pedirPlato = async (plato) =>{
    console.log("2)el camarero va a buscar el plato de comida: ", plato);
    try{

    const buscarPlato = await fetch(`http://resturante.com/api/traerPlato/${plato}`)
    const miplato = await buscarplto.json();

    //que hacer con esos datos
    console.log("Paso 4: El camero lleva el plato de: ", miPlato.plato);
    console.log
} catch(e) {
    const buscarplato = await fetch(`http://restaurante.com/api/traerplato/${plato}`)
}
