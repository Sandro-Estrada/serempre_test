# PRUEBA DE SEREMPRE
En este proyecto se genera un ejemplo de consumo de google functions y firestore de firebase

## Pre-requisitos
- Tener instalado Node V.14
- Tener una cuenta de **GMAIL**
- Tener instalado firebase-tools de forma global (`npm install -g firebase-tools`)

## Primeros pasos
- Crear un nuevo proyecto en la consola de firebase
- Generar nueva clave privada del proyecto
- Descargar la clave privada del proyecto con el nombre **permissions.json**

## Configuración
- Dentro de la carpeta functions hay que agregar nuestro archivo de credenciales (clave privada) descargado de la consola de firebase de nuestro proyecto.
- Dentro de la carpeta **functions** correr el siguiente comando:
```
npm install
```
Este comando instalará las dependencias necesarias del proyecto

## Iniciar el proyecto
Para correr el proyecto ingresar a la carpeta **functions** desde la terminal y correr el comando `firebase serve` para iniciar el servidor local de firebase y poder probar las funciones.

## Documentación
Anexado al proyecto se encuentra la colección de la herramienta **Postman** con los endpoints del REST API.