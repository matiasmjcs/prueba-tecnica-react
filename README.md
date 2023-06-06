# prueba-tecnica-react
Este proyecto es una prueba técnica de React que consiste en construir una aplicación web para buscar, filtrar y explorar una lista de libros utilizando la API pública "An API of Ice And Fire".

## Estructura del proyecto
El proyecto sigue una estructura organizada para mantener el código limpio y modular. A continuación se describe brevemente cada una de las carpetas principales:

`src/components:` Esta carpeta contiene los componentes reutilizables de la aplicación. Estos componentes pueden ser utilizados en diferentes partes del proyecto para mejorar la consistencia y la legibilidad del código.

`src/adapters:` Aquí se encuentran los adaptadores que se utilizan para transformar y ajustar los datos recibidos de la API antes de utilizarlos en la aplicación. Estos adaptadores ayudan a mantener una separación clara entre la lógica de la API y la lógica de la aplicación.

`src/interceptor:` Esta carpeta contiene el interceptor, que es responsable de interceptar las solicitudes y respuestas de la API. Puede utilizarse para agregar encabezados personalizados, manejar errores globales u otras operaciones de manipulación de datos.

`src/models:` Aquí se definen los modelos de datos utilizados en la aplicación. Estos modelos representan la estructura de los diferentes objetos que se utilizan en la aplicación, como libros, autores, géneros, etc.

`src/services:` Esta carpeta contiene los servicios que se encargan de realizar las llamadas a la API y gestionar la obtención de datos. Los servicios encapsulan la lógica de comunicación con la API y proporcionan una interfaz clara para interactuar con ella.

`src/hooks:` Aquí se encuentran los hooks personalizados que se utilizan en la aplicación. Los hooks son funciones que permiten compartir lógica entre componentes de manera eficiente y reutilizable.

`src/pages: ` Esta carpeta contiene las diferentes páginas de la aplicación. Cada página representa una vista diferente y está compuesta por componentes reutilizables.

`src/redux: ` Aquí se encuentra la implementación de Redux para el manejo del estado de la aplicación. Se utilizan acciones, reducers y el store para gestionar los datos de manera centralizada.

`src/router:` Esta carpeta contiene la configuración del enrutador de la aplicación utilizando react-router-dom. Define las rutas y las correspondientes páginas asociadas a cada ruta.

`src/utils:` Aquí se encuentran funciones y utilidades generales que pueden ser utilizadas en diferentes partes del proyecto. Estas utilidades ayudan a mantener un código limpio y modular.

## Instalación y ejecución
-  Clona este repositorio en tu máquina local: `git clone https://github.com/matiasmjcs/prueba-tecnica-react.git`
-  Navega hasta el directorio raíz del proyecto: `cd prueba-tecnica-react`
-  Ejecuta el siguiente comando para instalar las dependencias: `yarn`
-  Después de la instalación, ejecuta el siguiente comando para iniciar la aplicación: `yarn dev`
-  La aplicación se abrirá en tu navegador predeterminado en http://localhost:3000.

## Pruebas
El proyecto cuenta con pruebas unitarias y de componentes utilizando Jest y Storybook.

### Ejecutar pruebas unitarias
Para ejecutar las pruebas unitarias, puedes utilizar el siguiente comando: `yarn test`

Esto ejecutará los casos de prueba definidos en el directorio src utilizando Jest.

### Ejecutar Storybook
Storybook es una herramienta de desarrollo que permite visualizar y probar los componentes de manera aislada. Para ejecutar Storybook, puedes utilizar el siguiente comando: `yarn storybook`

Esto abrirá Storybook en tu navegador en la dirección http://localhost:6006, donde podrás explorar y probar los diferentes componentes de la aplicación.

### Ejecutar los tests de Storybook
Para asegurarte de que tus componentes se comporten correctamente en Storybook, puedes ejecutar los tests de Storybook. Estos tests verifican que los componentes se rendericen sin errores y cumplan con los casos de uso esperados.

Para ejecutar los tests de Storybook, puedes utilizar el siguiente comando: `test-storybook`

### Generar la versión compilada de Storybook
Si deseas generar una versión compilada de Storybook para desplegarla en un entorno de producción, puedes utilizar el siguiente comando: `build-storybook`

Esto generará los archivos estáticos optimizados de Storybook en la carpeta storybook-static. Puedes desplegar esta carpeta en un servidor web estático para compartir y documentar tus componentes.

##Contribución

Si deseas contribuir a este proyecto, siéntete libre de hacer un fork y enviar tus pull requests. Apreciamos tus contribuciones.




