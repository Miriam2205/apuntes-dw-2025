# Dia 8
-Los formularios utilizan las etiquetas envolventes de <form>
- Utilizaremos etiquetas <input> para ingresar datos. Algunos tipos (type) de ellos eran: radio,checkbox, tezt, email,password, submit
- Utilizaremos otras etiquetas para algunos tipos datos, por ej: <textarea> <select> <option>
-Los input suelen estar acompañados de un <label> como descripcion
-Todos los input requieres el atributo `name` para enviar la informacion.Este debe ser unico, excepto <input type="radio">

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

        Ejemplo de formulario:

        html

        C       opiar

        Editar
        <form method="POST" action="https://ejemplo.com/registro">
            <input type="text" name="usuario" placeholder="Escribe tu nombre">
            <button type="submit">Enviar</button>
        </form> 
        Elementos <input>en HTML
        Los <input>son los campos donde el usuario puede escribir. Pueden tener varios atributos que        afectan su comportamiento:

        Atributos principales de<input>
        name→ Nombre del campo, importante para que el servidor lo reconozca.
        value→ Valor predeterminado del campo.
        placeholder→ Texto guía que desaparece cuando el usuario empieza a escribir.
        readonly→ Hace que el campo sea de solo lectura.
        disabled→ Desactiva el campo, impidiendo que el usuario lo edite.
        maxlength→ Limita la cantidad de caracteres permitidos.
        required→ Obliga a completar el campo antes de enviar el formulario.
        Ejemplo:

        html

        Copiar

        Editar
        <input type="text" name="usuario" placeholder="Escribe tu nombre" required>
        <input type="email" name="correo" placeholder="Tu correo" maxlength="50">
        <input type="password" name="clave" placeholder="Contraseña" required>
        Otras etiquetas de formulario
        <select>→ Muestra una lista desplegable de opciones.

        html

        Copiar

        Editar
        <select name="pais">
            <option value="es">España</option>
            <option value="mx">México</option>
            <option value="ar">Argentina</option>
        </select>
        <textarea>→ Permite escribir textos largos, a diferencia de un <input type="text">.

        html

        Copiar

        Editar
        <textarea name="comentario" placeholder="Escribe tu comentario"></textarea>
        <button>→ Crea botones clicables para enviar el formulario o realizar acciones.

        html

        Copiar

        Editar
        <button type="submit">Enviar</button>
        <label>→ Proporciona una descripción para un campo y lo asocia con su id.

        html

        Copiar

        Editar
        <label for="usuario">Nombre:</label>
        <input type="text" id="usuario" name="usuario">
        Resumen
        Los formularios permiten que el usuario ingrese datos y los envíe a un servidor. Se componen de         distintos elementos como <input>, <select>, <textarea>, <button>, y <label>, cada uno con       atributos que definen su comportamiento.