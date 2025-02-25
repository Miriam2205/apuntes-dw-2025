# Variables en CSS
Se pueden crear variables de CSS para reutilizar valores en iferentes partes del código.

- Mejora la legibilidad del código 
- Facilita la actualización de valores

Se suele crear de manera global en a ríz del documento, en Web el root es la etiqueta <html>, en svg es la etiqueta <svg>, además tiene mayir especificidad ":root" que html.
Ejemplo bootstrap: https://getbootstrap.com/docs/4.0/getting-started/theming/#available-variables

```css
:root {
    --blue: #007bff;
    --indigo: #6610f2;
    --purple:#6f42c1;
    --pink: #e83e8c;
    --red: #dc3545;
    --mi-color-principal: #fff;
    --mi-color-secundario: #000;
    --mi-bg-principal: #000;
    --mi-bg-secundario: #fff;
}

.container{
    background-color: var()
}