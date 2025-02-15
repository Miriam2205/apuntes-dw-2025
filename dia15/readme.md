# CSS GRID
Grid es un sistema de maquetacion bidimensional para crear interfaces y layouts tipo tablas.
Se compone de filas y columnas, y se pueden anidar unos de otros
Se pueden crear layouts complejos con muy pocas lineas de codigo

- Nos sirve para crear layouts
- No es opuesto a Flex, se pueden combinar entre ellos
- Grid si sustiyuye a las <tables> para el armado de layouts

Utilizamos `display:grid` para crear un grid y `grid-template-columns` y `grid-template-rows` para definir el numero de columnas y filas.

```css
/*layour 3 x 3 */
.container{
    display: flex;
    grid-template-columns: 100px 100px 100px;
    grid-template-rows: 100px 100px 100px;
}

``` 
Pueden visualizar el layout de GRID desde la consola de chrome
Podemos indicar a cada item, donde posicionarlo usando `grid-row-start`, `grid-row-end`, `grid-column-start` y `grid-column-end`, teniendo en cuenta que las filas y col empiezan en 1 (no en 0)

Si queremos que ocupe 3 columnas y 1 fila, debemos indicar que comience en la col 1, y termine en la col 4. Y que la fila comience en la 1 y termine en la 2.

```css
/*item de 3 cols y 1 fila*/
.item{
    grid-column-start:1;
    grid-column-end:4;
    grid-row-start:1;
    grid-row-end:2;
    background-color:lightgreen; 
}

```
Se pueden utilizar valores negativos para seleccionar elementos desde el final del grid invertir el start y el end y funcionará igual.
```css
/* item de 3 cols y 1 fila*/
.item-1{
    grid-column-start:1;
    grid-column-end:-1;
    grid-row-start:1;
    grid-row-end:-1;
}
```
En vez de seleccionar la fila/columna de destino, podemos utilizar span para indicar cuantas filas/columnas queremos que un item.

```css
/*item de 3 cols y 1 fila*/
.item-1{
    grid-column-start: 2;
    grid-column-end: span 2;
    grid-row-start: 2;
    grid-row-end: span 2;
    background-color: lightgreen;
}
``` 
Para reducir grid-colum-start y grid-column-end en una sola linea, podemos usar grid-column. Lo mismo con grid-row.
```css
/* item de 3 cols y 1 fila */
.item-2{
    grid-column: 1/3; /*start / end */
    grid-row: 2/4; /*start / end */
}
``` 
Podemos utilizar una forma aún más corta usando `grid-area`, donde definimos grid-row-start, grid-column-start, grid-row-end, grid-column-end

```css
.item-2{
    grid-area: 1/1/4/4;
}

```
con grid es muy simple crear un elemento por encima de otro
Podemos utilizar grid-gap para definir un espacio entre las columnas y filas. El mismo soporta un valor para fila y columna, o 2 valores para diferenciarlos.

```css
/*layour de 3x3*/
.container{
    display: flex;
    grid-template-columns: 100px 100px 100px;
    grid-template-rows: 100px 100px 100px;
    grid-gap: 10px;
    grid-gap: 1em 3em;
}
```
Existe la opcion repeat() que nos permite repetir el numero de veces que quiero para un afila o coluna.
```css
.container{
    display: flex;
    grid-template-columns: repeat(3, 100px);
    grid-template-rows: repeat (3, 3em);
    grid-gap: 10px;
    
}
``` si agregamos mas bloques dentro  de nuestro grid, se intentará ubicarlo en la primea posicion libre disponible. Si no quedan posiciones libre, se creará una nueva fila. Esta nuevas eldas no tendran el tamaó asignado en nuestro grid-template, y se llama "grid-implictas" . Podemos usar `grid-auto-rows: 100px` para definir el tamaño de nuestras nueas filas

```css
/*layour de 3x 3*/
.container{
    display:grid;
    grid-template-columns: repeat(3, 100px);
    grid-template-rows: repeat (3, 3em);
    grid-gap: 10px;
    grid-auto-rows: 100px;
    grid-auto-flow: column;
}
```
Las unidades que podemos utilizar son px, %, em, rem, pero se le suma una  nueva de valor fraccional, o `fr`. Este valor nos permite fraccionar el tamaño disponible.
Por ejemplo, si tenemos 3 columnas y definimos que la primer columna tenga un tamaño de 1fr, la segunda de 2fr y la tercera de 1fr, la segunda  ocupará el doble de espacio que las otras 2.

```css
/*layour col del medio ocupa 2x*/
.container{
    display:grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: repeat(3, 3em);
    grid-gap: 10px;
}