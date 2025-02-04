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
