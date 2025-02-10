<<<<<<< HEAD
# Dia 8
-Los formularios utilizan las etiquetas envolventes de <form>
- Utilizaremos etiquetas <input> para ingresar datos. Algunos tipos (type) de ellos eran: radio,checkbox, tezt, email,password, submit
- Utilizaremos otras etiquetas para algunos tipos datos, por ej: <textarea> <select> <option>
-Los input suelen estar acompañados de un <label> como descripcion
-Todos los input requieres el atributo `name` para enviar la informacion.Este debe ser unico, excepto <input>

## Metodos de GET Y POST para enviar informacion
-GET tiene un limite de 2948 caracteres y POST no se utiliza para enviar informacion de mayor tamañ, incluyendo el upload de archivos
-Normalmente GET se utiliza para obtener informacion y POST para enviarla

Ejemplos de formularios con GET:
-Buscadores
-Filtros
-Paginacion

Ejemplos de formularios con POST
-Formulario de contacto(aunque le solicitamos datos nuestro fin es mandarle cosas a ese usuario)
-Formulario de login/Registro
-Formulario de PAGO

Hacer un "login-form.html" sin estilos enviando información al atributo action=""
<form action="./"> metod="GET">
</form>
Utilizar "labels" y que el usuario y clave sean obligatorios


# Explicacio chatgpt de formulario y sus atributos:
Formularios en HTML
Los formularios ( <form>) son elementos en los que el usuario puede escribir datos y luego      enviarlos a un servidor. Dentro del formulario se colocan diferentes tipos de campos ( <input>,     <select>, <textarea>, etc.) para que el usuario rellene.

Atributos principales del<form>
method: Indica cómo se enviarán los datos.

GET: Envía los datos en la URL (visible en la barra de direcciones).
POST: Envía los datos en segundo plano, sin mostrarlos en la URL.
action: Defina la URL a la que se enviarán los datos cuando se envíe el formulario.
