# Music Player
1. Crear un array con cinco canciones, recorrer el array y mostrar en consola en cada cancion.
"https: //www.soundhelix.com/exaples/mp3/SoundHelix-Song-1.mp3"
2. Crear un array con 5 artistas, cada artista corresponderá a su cancion.
3. Mostrar en HTML un div para cada cancion y artista generados con JS.
4. Crear un boton con el texto "Tema 3" que al hacer click muestre en consola el nombre de la cancion y el artista en la posicion 2.
5. Agregar botones de "siguiente" "anterior" "play" y "pausa" con id unicos.Y agregar el siguiente JS y explicar qe hace ese codigo:
```js
document.addEventListener("click", (e)=>{
    console.log(event.target.id);
})
```
Explicar que hace ese código
6. Agregar un atributo ID a cada elemento generado en el punto 3, y hacer que al hacer click en cada DIV muestre en consola el nombre de la cancion y el artista.
7. Actualizar el punto anterior para mostrar en el HTML un párrafo con el nombre de la cancion y el artista al que le hcieron click.
8. Agregar un array con imagenes para cada cancion
9. Darle la funcion necesaria a los botones de Siguiente/anterior para que pase de cancion mostrando su correspondiente HTML.
10. Convertit los 3 arrays en un array de objetos y que el programa siga funcionando