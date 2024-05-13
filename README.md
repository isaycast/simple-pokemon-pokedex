# Configuración de Variables de Entorno

Para que el proyecto funcione correctamente, es necesario configurar algunas variables de entorno. Estas variables permiten que tu aplicación de React se comunique con servicios externos o backend sin hardcodear URLs o tokens directamente en el código fuente.

## Creando el Archivo `.env`

Crea un archivo `.env` en la raíz de tu proyecto (al mismo nivel que `src/`, `public/`, y `package.json`). Este archivo no debe ser añadido al control de versiones (git).


Añade la siguiente línea en tu archivo `.env`:
```
REACT_APP_API_URL=http://127.0.0.1:8000/pokemon
```

## Antes de ejecutar

Asegurate que tu  código de backend este ejecutado correctamente 
[backendAPI](https://github.com/isaycast/django-pokemon-api)

Es necesario correr el siguiente bloque de código para instalar todas las librerias.
```
npm install
```

## Scripts Disponibles

En el directorio del proyecto, puedes ejecutar:

### `npm start`

Ejecuta la aplicación en modo de desarrollo.  
Abre [http://localhost:3000](http://localhost:3000) para verla en tu navegador.

La página se recargará cuando hagas cambios.  

### `npm run build`

Construye la aplicación para producción en la carpeta `build`.  
Agrupa correctamente React en modo de producción y optimiza la compilación para el mejor rendimiento.


