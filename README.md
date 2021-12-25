# Prueba de selección TraffGen

## Introducción
En este repositorio se implementa una sencilla aplicación para la generación de cupones. El modo de generación y el número se establecen en un fichero en formato JSON (configuracion.json) pudiendo elegir entre las 2 implementaciones disponibles 'numerosSecuenciales' o 'caracteresAleatorios'.

La aplicación crea un endpoint en la dirección /api/cupones a la que se puede hacer peticiones get para obtener una lista del número de cupones indicado en la configuración. Además implemeta un frontend muy sencillo para poder visualizar los cupones y hacer nuevas peticiones a ese endpoint.
## Instalación y ejecución la aplicación

Una vez descargado el repositorio, situarse en la raíz y ejecutar el siguiente comando para instalar la aplicación si va a ejecutarla por primera vez:
```
npm run install-all
```

Tras ello, para compilar tanto el front como el backend, ejecutar:
```
npm run build
```

Finalmente, para ejecutar la aplicación ejecutar:
```
npm start
```
