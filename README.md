# PRUEBA DE SEREMPRE
En este proyecto se genera un ejemplo de consumo de google functions y firestore de firebase

## 馃敤 Pre-requisitos
- Tener instalado Node V.14
- Tener una cuenta de **GMAIL**
- Tener instalado firebase-tools de forma global (`npm install -g firebase-tools`)

## 馃弮 Primeros pasos
- Crear un nuevo proyecto en la consola de firebase
- Generar nueva clave privada del proyecto
- Descargar la clave privada del proyecto con el nombre **permissions.json**

## 鈿欙笍 Configuraci贸n
- Dentro de la carpeta functions hay que agregar nuestro archivo de credenciales (clave privada) descargado de la consola de firebase de nuestro proyecto.
- Dentro de la carpeta **functions** correr el siguiente comando:
```
npm install
```
Este comando instalar谩 las dependencias necesarias del proyecto
**NOTA:** Existe en la ra铆z del proyecto un archivo llamado **.firebaserc** apuntando por default a un proyecto, si es necesario cambialo por el **ID** de tu proyecto.
{
  "projects": {
    "default": `"gf-test-81523"` --------> Reemplazar
  }
}

## 馃弮 Iniciar el proyecto
Para correr el proyecto ingresar a la carpeta **functions** desde la terminal y correr el comando `firebase serve` para iniciar el servidor local de firebase y poder probar las funciones.

## Documentaci贸n
Anexado al proyecto se encuentra la colecci贸n de la herramienta **Postman** con los endpoints del REST API en la carpeta **doc**.

## Estructura del proyecto
|--/doc                         #Documentaci贸n de endpoints en postman
|--/functions                   #funciones de firebase
|---/controllers                #Controladores de las funciones
|----point.js                   #Contiene la l贸gica del controlador de point
|----user.js                    #Contiene la l贸gica del controlador de user
|---/lib                        #Librer铆as de uso general
|----/controllers               #Contiene la l贸gica de controladores de errores
|-----ErrorController.js        #Controlador de errores
|----/utils                     #Contiene funciones de utiler铆a
|-----index.js                  #Funciones de utiler铆a
|----/validators                #Contiene los esquemas de las colecciones para poder validar sus valores
|-----PointValidator.js         #Contiene el esquema de validaci贸n de Point
|-----UserValidator.js          #Contiene el esquema de validaci贸n de User
|---/routes                     #Rutas de acceso de los endpoints
|----point.js                   #Rutas de point
|----user.js                    #Rutas de user
|---index.js                    #Punto de arranque de las funciones