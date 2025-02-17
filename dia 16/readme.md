# BEM (Block, element, modifier)

# Suite CSS
- Block-> Componente
- Element-> Elemento
- Modifier-> Modificador

nuevos
- utilities
- estados

## Utilities:
- Se escribe con `u-utilityName` por ejemplo `u-red`
- Se escribe con u- camelCase
- Se utiliza para aplicar un estilo a cualquier elemento

```css
.u-red {
    background-color: red;
    color: white;
}

.u-big{
    font-size:5rem;
}
    /*utilities responsive*/
.u-sn-text{
    /*texto pequeño (small)*/
}
.u-nd-text{
    /*texto pequeño (medium)*/
}
.u-lg-text{
    /*texto grande (large) */
}
```

    # Componente
    Igual al bloque de BEM, pero se escribe con PascalCase. Por ejemplo `Header`, `MiBoton`, `SeccionHero`, `Card`, `Tweet`
    # Elementos (Part, DescendentName)
    Igual que el elemento en BEM, pero se escribe con camelCase. Por ejemplo `Header-title`, `Card-imageFront` , `Tweet-bodyImage`, `Tweet-bodyText`

    ```html

    <article class="Tweet">
        <header class="Tweet-header" src=>
        </header>
        </div>
        </article>

    ## Modificadores
     Al igual que en BEM, y se utiliza con camelCase `Componente--nombreModificador`

     ```html
     <button class="Button">Boton normal</button>
     <button class="Button Button--navidad">Boton normal</button>
     ```

     ## Estados
     Nuevo: Clases para elementos que marcan el estado de un componente/elemento. Se escribe con camelCase y usa la palabra `is-` delante.

     ```css
     .Tweet{
        /*estilos de un tweet comun*/
     }
     .Tweet.is-expanded{
    /*solo cambios para el tweet 
     }
      ```
```html
<article class="Tweet">
</article>
<article class="Tweet u-textBig is-expanded">
</article>
```

    # Grid continuacion (2/2)
Existe la opcion mimax() que nos permite definir un tamaño minimo y maximo para las columnas y filas
```css
container{
    display: grid;
    grid-template-columns:minmax(100px, 1fr) minmax(200px, 2fr) minmax (100px, 1fr);
    grid-template-rows: 100px 100px 100px;
    grid-gap: 10px;
}

```
# Grid Template Areas
Podemos nombrar las celdas utilizando `grid-template-areas` y asignando un nombre a cada una:
```css
.container{
    display:grid;
    grid-template-rows: repeat(3, 100px);
    grid-template columns: repeat(3, 100px);
    grid-gap: 10px;
    grid-template-areas:
        "header header header"
        "main main main"
        "footer footer footer"
}

.item-1{
    grid-area:header;
}
.item-2{
    grid-area:main;
}
.item-3{
    grid-area:sidebar;
}
.item-4{
    grid-area:footer;
}
```
Podemos utilizar `justify-content` y `align-items` para alinear los elementos dentro de las celdas.Sus opciones posibles son:start, end, center, stretch y baseline. Por defecto se aplica stretch.
```css
.container{
    display:grid;
    grid-template-column: repeat(3, 1fr);
    grid-template-rows: repeat(3, 100px);
    grid-gap: 10px;
    justify-items:start;
    align-items:end;

}
```
Podemos decirle a un item especifico que se alinee de manera diferente utilizando `justify-content` y `align-content`
Sus opciones son:start, end, center,strech, space-around,space-between y space-evenly

```css
.container{
    display:grid;
    grid-template-column: repeat(3, 1fr);
    grid-template-rows: repeat(3, 100px);
    grid-gap: 10px;
    justify-content:center;
    align-content:center;

}
```
Podemos crear un grid responsive con el uso de `auto-fit`. Esto nos permite que elementos se ajusten alt tamaño del contenedor

```css
.container{
    display:grid
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-gap: 10px;
}