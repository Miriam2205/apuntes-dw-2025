
#Dia 4

## Selectores CSS
```CSS

/* Selector de id */
#caja1 { 
    color: blue;
}

/* Selector de clase */
.caja{ 
    color: red;
}

/* Selector de etiqueta */
div{ 
    color: green;
}

/* Selector de multiples items */
h1, h2, h3, p{
    color: red;
}

/* Selector con atributos */
img [alt="Foto1"]{
    color:brown;
}

div[ class="test"] { /* el asterisco hace de comodin en la busqueda*/
    background: salmon;
    }

/*selector de hijos directos*/
header > a{ } 

a{ }
header> nav> #logo> a {}

/*selector de todos los descendientes*/
header a li{

}
    
/*selector del siguiente hijo*/
p+a{ }

/*Display inline*/

/*Display block*/
hace un salto de linea y respeta el hedding

/*display inline-block*/
las pone en linea pero respta los tamaños 

/*display none*/
esconde elementos


```html 
<header>
    <nav>   
    <h1 id="logo">
        <a href=">

<h1 id="tituloPrincipal">Titulo</h1>
<h4 class="subTitulo></h4>
<img src="./img/foto.png" alt="Foto1" />
<img src="./img/foto2.png" alt="Foto2" />
<img src="./img/foto.png" alt="Foto3" />

<div class="caja" id="caja1">soy un div</div>
```

# Si hubiese tres mismas clases se aplicaria el ultimo atributo. Pero si hay un d y una clase el color se va a aplicar el del id por ser más especifico

# Reset css
Buscamos que todos los navegadores (chrome, safari, brave, firefox) inicien nuestros proyectos con los mismos estilos, sin aplicar los propios 

Ejemplos de reset CSS
[Meyer Web]{}

```css
/* Rset Minimo */
el asterisco incluye  a todos los elementos de mi web 
/*El border box utiliza el borde de la caja como ancho, en vez del contenido*/

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
```
# Mini actividad
1. crear una pagina con dos cajas que contenga parrafos y con la clase ".caja"
2. Agregar estilos a tus cajas para visualizar bordes, margenes y padding
3. A la segunda caja, agregarle la clase ".alternativa"
4. A la clase alternativa, agregar el estilo `box-sizing: border-box` y comparar la diferencia
5. Por ultimo buscar en internet alguna hoja reset e implementar en l web


