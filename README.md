# API REST con node.js y Firebase

Este proyecto consiste en una API RESTful desarrollada con Node.js, Express y Firestore, que permite gestionar productos para una tienda online. Es parte del proyecto final integrador de backend.

## Tecnologías utilizadas

- Node.js
- Express.js
- Firebase Firestore (como base de datos)
- JSON Web Token (JWT) para autenticación
- Dotenv para variables de entorno
- CORS

## Estructura de carpetas

- proyectoBack/
- ├── index.js
- ├── .env
- ├── utils/
- │ └── generateToken.js
- ├── src/
- │ ├── controllers/
- │ ├── middlewares/
- │ ├── models/
- │ ├── routes/
- │ └── services/
- └── README.md

## Instalacion y configuracion

instalar dependencias:

```shell
npm install
```

crear archivo .env:

- PORT=3000

- FIREBASE_API_KEY=tu_api_key
- FIREBASE_AUTH_DOMAIN=tu_proyecto.firebaseapp.com
- FIREBASE_PROJECT_ID=tu_proyecto
- FIREBASE_STORAGE_BUCKET=tu_proyecto.appspot.com
- FIREBASE_MESSAGING_SENDER_ID=0000000000
- FIREBASE_APP_ID=1:0000000000:web:abc123

- JWT_SECRET=miclavesecreta123

ejecutar el servidor:

```shell
npm start
```

Autenticación con JWT:

Para acceder a los endpoints protegidos, necesitás un token válido.

Podés generar uno con el script:

```shell
node utils/generateToken.js
```

Y usarlo en Postman o cualquier cliente, agregando este header:

Authorization: Bearer <tu_token>

## Endpoints disponibles

- Productos (ruta base: /api/products)

- Método	Ruta	            Descripción
- GET	    /api/products	    Obtener todos los productos
- GET	    /api/products/:id	Obtener producto por ID
- POST	/api/products	    Crear nuevo producto
- PUT	    /api/products/:id	Actualizar producto completo
- PATCH	/api/products/:id	Actualizar parcialmente
- DELETE	/api/products/:id	Eliminar producto

## Base de Datos

Se utiliza Firestore como almacenamiento en la nube. La colección debe llamarse:

- products

Cada documento debe contener los campos:

- name (string)

- price (number)

- description (string)

## Licencia

Este proyecto es parte de una entrega académica. Uso educativo.

