# Transitions CSS
Es una forma de cambiar los valores de una o mas propiedades de manera suave y gradual. Se pueden aplicar transiciones a cualquier propiedad que acepte valores numericos o de color. Por ej: width, padding, j¡height, colot, background-color, opacity etc.

Propiedad numericas:
- Font-size
- Margin
- Border-width
- Transform (prop como scale, rotate, translate etc..)

Propiedades color:

- background-color
- color
- border-color
- box-shadow

## Como se define 

Utilizamos la prop `transition` y se puede personalizar de la siguiente manera:
- `transition-property`: nos indica la propiedad a animar
- `transition-duration`: duracion de la animacion (en seg)
- `transition-timing-function`: la manera en que se va a llevar a cabo la animacion
- `transition-delay`:demora antes de iniciar la transición

```css
div{
    transition-property: font-size
    transition-duration: 4s;
    transition-timing-function: ease-in-out;
    transition-delay: 2s;

    /*Podemos unificar estas 4 reglas en 1*/
    /*Prop duration timingfunction delay */
    transition: font-size 4s ease-in-ot 2s;
}
```

## Timing Functions
- `ease`: velocidad lenta - rápida - lenta (por defecto)
- `linear`: velocidad constante
- `ease-in`: lento-rapida
- `ease-out`: rapida-lenta
- `ease-in-out`: lenta-rapida-lenta (es mas brusca)
- `cubic-bezier()`: Timing Personalizado

