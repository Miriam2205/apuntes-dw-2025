# Dia 9
hacer un `login-form.html` sin estilos enviando informacion al atributo action="#". y Metodo GET. Utilicen "labels" y que el usuario y clave sean obligatorios.
-nvestigar los siguientes types, explicar que hacen y crear un ejemplo en `otros-inputs.html` "number, color, date, file, reset, hidden, range".

esto es solo cuando tenemos un formulario que hace upload/carga de archivos.
<form method="POST" enctype="multipart/form-data">
    <input type="file">
</form>

-Nuevas etiquetas/tipos: tel,url, search, time, week, month, datetime-local

# Introduccion a nonenclaturas CSS y BEM
 para mantener codigo limpio y ordenado. Buscamos codigo comprensible, predecible y facil de mantener

 ## Nombres de variables/selectores/archivos

 -UPPERCASE
 -lowercase
 -Title Case
 -canalcase: `miClaseDeHtml`
 -PascalCase: `Miclasedehtml`
 kebab-case:`mi-clase-de-html` (se utiliza para nombrar archivos)
 snake_case `mi_clase_de_html`

# Monenclaturas
 -(BEM) (https://getbem.com/naming)

 Para que usamos BEM?
 1. Comunicar un propósito o función
 2. Comunicar la estructura de componente
 3. Marca una especificidad baja consistente. Lo que busca es cuantas menos clases y mas ordenado y limpio sea el codigo mejor.
 
 https://https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fdkerupv5p9lu9k10w5l1.png

 Su nombre es un kebab-case separando__para elementos y -- para modificadores
 El nombre de clase BEM posee 3 partes:

 1. **Bloque** El nombre del componente, el cual por si solo tiene sentido: card, header, container, button, footer
 2. **Elementos** Dentro de un bloque puede haber uno o mas elementos. Estas partes no tienen sentido por si solos: menu item, list item
 3. **Modificadores** Una variacion o estado diferente para un bloque o elemento. Que cambia la apariencia o comportamiento del mismo. disabled, highlighted. No olvidemos que si agregamos un modificador, la etiqueta debe tambien incluir el nombre del elemento o bloque

 `<div class="footer footer-red"></div>`


 <style>
    .card{

    }
    .card_header{}
    .card_content{}
    .card_hfooter{}
</style>

<div class="card">
    <div class="card_header">Cabecera de la tarjeta</div>
    <div class="card_content">Contenido</div>
    <div class=" card_footer">Footer/Pie de la tarjeta</div>
</div>
<div>
<div class="sidebar">
    <h1 class="sidebar_title">titulo</h1>
    <ul class="sidebar_nav-list">
        <li class="sidebar_nav-item">
            <a class="sidebar__link" href="#">Home</a>
        </li>
        <li>
            <a href="#">Contacto</a>
        </li>
        <li class="lista__item">
            <a href="#">Acerca de nosotros</a>
        </li>
    </ul>
