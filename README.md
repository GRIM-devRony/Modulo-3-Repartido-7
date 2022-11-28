# Modulo-3-Repartido-7

En este proyecto manejaremos una api de un liceo, precisamente a sus estudiantes.
Las tecnologías que utilizamos son MongoDB(Mongoose) y Node.js(Express).
Las dependencias a instalar están en 'package,json'
Para utilizar y probar la app, debemos primeramente cargar los datos a la base de datos que se encuentran en 'upload.js',
para ello colocamos en nuestro terminal 'node upload.js'. Seguido, podemos hacer npm start para iniciar la app.
Para poder usarla necesitamos una aplicación de manejo de apis, como insomnia, postman, thunderClient que se encuentra en el mismo VS Code, etc.
Luego allí, vamos a ir haciendo peticiones seguido de http://localhost:3000/
Todas las rutas están en 'app.js', y sustituiremos los valores por los que querramos buscar, por ejemplo:

La ruta base para buscar estudiantes por orientación es la siguiente y yo sustituyo el valor...

http://localhost:3000/api/estudiantes/orientacion/:valor

http://localhost:3000/api/estudiantes/orientacion/Ingeniería

El esquema para agregar un estudiante nuevo es el siguiente:

{
      "name": "Rony",
      "age": 18,
      "grade": 5,
      "group": "A",
      "subjects": [ "Matemáticas", "Programación" ],
      "orientation": "Tecnológico"
    }
    
  y esta es la url  
  http://localhost:3000/api/estudiantes/nuevo'  
  
  
