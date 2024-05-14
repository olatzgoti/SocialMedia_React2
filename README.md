SocialMedia_React_MongoDB
Introducción

En este proyecto de fullstack, se integrarán los conocimientos en las tecnologías Node.js y Express, junto con MongoDB/Mongoose en el backend. Y React + Vite, Redux en el frontend. El objetivo principal es desarrollar una applicacion web para una red social.
Tecnologías

NodeJS, Express, Mongoose, React + Vite, Redux
Instalación

Clonar el repositorio y instalar las dependencias con npm install.
Variables de entorno

Crear archivo .env y agregar las variables de entorno a tu archivo. El backend se encuentra en el archivo SocialMedia. Se proporciona un ejemplo en .env.example en la carpeta Backend. PORT, MONGO_URI, JWT_SECRET

Frontend

La navegación se gestiona desde el componente TheHeader, se proporcionan las opciones de enlaces. El Usuario puede ver su perfil, las publicaciones.

En el encabezado se integra la búsqueda de publicaciones, que busca publicaciones por título.

Cada publicación tiene una página separada que se renderiza dinámicamente, con la información sobre la publicación y los comentarios.

Se utilizan para renderizar elementos de Ant Design. Redux está compartiento los estados de Auth(users), Posts, Comments. Como medida de seguridad adicional, se implementaron Guards para las áreas de inicio de sesión y administración. Estos Guards aseguran que solo los usuarios autorizados puedan acceder a las áreas protegidas, proporcionando una capa adicional de seguridad para la aplicación.
