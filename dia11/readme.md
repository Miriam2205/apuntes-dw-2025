
# Que es una Media Query (MQ)

-Declaraciones en css que nos permite definir que arreglas aplicar a partir de unas reglas asignadas por nosotros.

# Sintaxis de una MQ
Una media query se compone de las siguientes partes:
-Un @media la cual es una palabra reservada [keyword]
- un tipo de media [screen, print, all, speech] (Media Type)
-Operadores (and, not, only) [operators]
-Breakpoints una condicion (max-width, min-width, etc)

```css
/* keyword MediaType Operador/es    (breakpoint) */
/* @media screen and                (breakpoint) {} */

@media not/only/ screen and/or (min-width: 600px) {
    body{
        background-color: lightblue;
    }
    h1{
        color:red;
    }
}

/* Combinar breakpoint */
@media screen and (min-width:600px) and (nax-width: 800px){
    body{background-color: lightblue;}
}

/* cuando la pantalla esta horizontal */
@media screen and (orientation: landscape){

}
/*Reglas para modo oscuro*/
@media screen and (prefers-color-schema: dark){
    body{
        background-color: darkgray;
        color:white;
    }
}


``` 


### Media Types (screen /print)
-all:todos los dispositivos
-print: material de vista previa de impresion
-screen: pantallas a color (tablets, movil, computadora)

-speech: dispositivos de conversion de texto o voz
-otros: pueden aparecer types DEPRECIATED tv, handheld, speech, braille, etc..(no van mas apartir de CSS3)

Ejemplo de impresion
```css
@media print{
    .no-te-imprimas{
        display:none !important;
    }
}

### Tips para utilizarlos:
-Sobreescriben las reglas de css normales, pero no posee un amayor especificidad por lo tanto las media queries deben estar por debajo de las reglas que quiera reeplazar
-Deben tener el mismo selector para que remplace la regla que seamos. Como excepcion podemos utilizar las reglas principales en vez de especificas (background para remplazar background-color)
-Pensar bien los breakpoints
-Posdemos utilizar un @media para cada selector, o una sola para todos los selectores(recomendado)
-Mobile First

## Mobile First
Intentamos desarrollar siempre primero para el movil, y luego para pantallas mas grandes. De esta manera nos aseguramos de que se vea bien en dispositivos móviles.
2024
-Mobile 55%: 320px-488px
-Tablets 2%: 768px-1024px
Desktop (43%: 1024px-1920px

```css
/*Mobile first*/
/*reglas*/
/*tablets*/
@media only screen and (min-width: 768px){
    
/*reglas para tablet*/
}

## Utilizarlo en HTML
Podemos utilizarlo los MQ directamente en nuestro html con el atributo "media".Antes 

Ejemplos no recomendados:
```html
<link rel=stylesheet" media="screen and (min-width: 600px)" href=./css>

# Ejemplo de media queries en Imagenes (usando Picture)

```html
<picture>
    <source media="(min-width: 650px)" srcset="./img/grande.jpg">
    <source media="(min-width: 650px)" srcset="./img/grande.jpg">
    <img src="./img/foto-pequeña.jpg" alt="Mi mascota">
</picture>


## Trucos para un buen responsive
-Utilizar medidas relativas (%, vw, vh, em, rem) tratar de no utlizar px
- No utilizar etiquetas de Height

## Comprobacion de nuestro responsive + Media queries
-Utlizar el inspector de elementos de chrome
-Probarla en nuestro dispositivo
-Usar el app responsively para probar pantallas simultaneas

## Links de Interés

[CSS MQ w3Schools](https://www.w3schools.com/css/css3_mediaqueries.asp)
[Responsive Design w3Schools](https://www.w3schools.com/css/css_rwd_mediaqueries.asp)
[Responsive Design MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Media_queries)
[SCSS + MQ](https://www.freecodecamp.org/news/learn-css-media-queries-by-building-projects/)

