# delilahResto
El objetivo del proyecto Delilah Restó es emular la tarea de un desarrollador backend .
Api desarrollada para ser utilizada por un delivery de comidas. 
Como cliente podras registrarle, ver el listado de nuestros productos y realizar una orden. Los administradores del restaurante tienen la posibilidad de recibir pedidos y actualizarlos.

## **Instalaciones requeridas:**
**Instalar NodeJS**<br>
Nodejs es un entorno JavaScript que nos permite ejecutar en el servidor, de manera asíncrona, con una arquitectura orientada a eventos y basado en el motor V8 de Google.
* [Descargar NodeJS](https://nodejs.org/en/download/)

**Instalar XAMPP**<br>
Wampp es un paquete de software libre de Apache, completamente gratuito y fácil de instalar, que consiste principalmente en la base de datos MySQL, el servidor Web Apache y los intérpretes para lenguajes de script: PHP y Perl.
* [Descargar XAMPP](https://www.apachefriends.org/es/download.html)

**Instalar Postman**<br>
Postman es una herramienta que nos permite crear peticiones sobre APIs de una forma muy sencilla y poder, de esta manera, probar las APIs.
* [Descargar Postman](https://www.postman.com/product/api-client/)

## Despliegue
**1) Clonar el proyecto**<br>
* Clonar el repositorio desde github accediendo al link: [DelilahResto](https://github.com/minimarmar/delilahResto)
* Desde la consola ejecutar el comando:<br>
`git clone https://github.com/minimarmar/delilahResto`

**2) Instalar dependencias**<br>
- npm init 
- Instalar el package nodemon para ejecutar aplicaciones Node en modo monitor<br>
    npm i -g nodemon
- Instalar el package express para poder crear API’s<br>
    npm i --save express
- Instalar el package body-parser para poder leer el cuerpo de los http-request<br>
    npm i --save body-parser
- Instalar el package jsonwebtoken para agregar seguridad a nuestra API<br>
    npm i --save jsonwebtoken
- Instalar el package dotenv para poder levantar en nuestro codigo variables de entorno y evitar el hardcodeo<br>
    npm -i --save dotenv
- Instalar sequelize<br>
    npm -i --save sequelize
- Instalar MySQL<br>
    npm -i — save mysql2
- Instalar Bcrypt<br>
    npm -i --save bcrypt
- Instalar jsonwebtoken<br>
    npm - i --save jsonwebtoken
    
**3) Acceder a RemoteMySQL**<br>
* Abrir XAMPP e iniciar los servicios de Apache y MYSQL
* Para abrir MYSQL: [Database](https://remotemysql.com/databases.php) y luego acceder a phpmyadmin
* Ver información de acceso a la DB en el archivo .env

**4) Ejecutar el proyecto**<br>
```nodemon app```

## Documentación de la API<br>
* Abrir el archivo openapi.js e importarlo en [Swagger](https://editor.swagger.io/)
* **IMPORTANTE:** Para crear un **usuario ADMIN**, es necesario agregar la propiedad **'isAdmin: true'**, ya que por defecto si no agregamos esta propiedad el usuario no tiene permisos de edición.
* A continuación se muestra un breve resumen de todos los endpoints disponibles.<br>
URL: http://localhost:3000/


| Métod	| Endpoints	| Descripción |	Rol
| ------------- | ------------- |------------- |------------- |
| POST	 | /usuarios/login	| Autenticación al sistema	| all
| POST	 | /usuarios |	Creación de usuarios	| all
| GET	 | /usuarios|	Obtiene información de todos los usuarios	| admin
| POST |	/productos	| Crea un nuevo producto	| admin
| GET	| /productos	| Obtiene información de todos los productos	| all
| GET	| /productos/{id}	| Obtiene información de un producto	| all
| PUT	| /productos/{id}	| Modifica la información del producto	| admin
| DELETE	|/productos/{id}	| Elimina un producto	| admin
| POST |	/pedidos	| Crea un nuevo pedido del usuario que inició sesión	| all
| GET |	/pedidos	| Obtiene información de los pedidos del usuario que inicio sesión	| all
| GET |	/pedidos/all	| Obtiene información de todos los pedidos	| admin
| GET	| /pedidos/{id}	| Obtiene información de los pedidos por id	| admin
| PUT |	/pedidos/{id}	| Modifica el estado de un pedido	| admin
| DELETE |/pedidos/{id}	| Cancela el pedido y lo elimina	| admin

## Testing<br>
Testear los endpoints provistos desde postman para poder hacer uso de la API y base de datos generadas

## Recursos y tecnologías utilizadas<br>
* Node
* Postman
* XAMPP
* Swagger
* NPM PACKAGES:
    * Express
    * Nodemon
    * Jsonwebtoken
    * Dotenv
    * Mysql
    * Moment
    * Bcryptjs
    
    
## Autor

Marcela Alejandra Gonzalez - [Github](https://github.com/minimarmar)

