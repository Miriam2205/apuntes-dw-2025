# Unidades de Medidas en CSS: px, %, em, rem
## Pixel
Son unidades absolutas que representan un punto en pantalla. Son ideales para tamaños y dimensiones precios que no deben cambiar en relacion con otros elementos. Es recomendable usarlo para bordes y otros elementos de dimension fija

## Porcentaje "%"
Es una relativa al tamaño del elemento padre. Ej: el padre es de 200px y el elemento tiene un width de 50%, el ancho del objetivo será de 100px. Esta medida es util para diseño fluidos y responsive que se adapten al tamaño de pantalla. Es recomendable para contenedores que varien segun su contenedor

## EM "em"
(Wikipedia EM) (https://es.wikipedia.org/wiki/Em_(tipograf%C3ADa))

La unidad "em" es relativa al tamaño de la fuente del elemento padre (o el suyo). Por ejemplo si el padre tiene un `font-size: 10px;`, y un `margin: 3em;` el margen será de 30px. Esta unidad es util para crear tamaños de texto y margenes que escalen con el tamaño de la fuente.
Esto mejora la accesibilidad y flexibilidad del diseño
Por defecto lo navegadores asignan el font-size inicial a 16px.

```css
.card{
    font-size:1em;
    padding: 1.5em;
}
```
## REM (Root EM)
Es relativa al tamaño de la fuente de la RAIZ del documento (normalmente es <html>). Por ejemplo, si el tamaño de la fuente del HTML es de 8px, y un elemento descendente en varios niveles tiene una medida de "3rem" su media será de: "24px;". Rem es util para mantener una escala consistente en todo el documento, independientemente de la estructura del DOM. Es recomendable usar rem para tamaños globales, como el tamaño de la fuente principal y los margenes, para garantizar coherencia en todo el sitio

```css
html{
    font-size: 16px;
}
.card{
    font-size:2em;
}
.card__title{
    /*el REM ignora el font-size de .card */
}