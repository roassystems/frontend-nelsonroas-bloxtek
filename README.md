This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Desarrollado por Ing. Nelson Roas
## Getting Started

# Ejecutar en desarrollo

1. Clonar el repositorio con el comando
```
git clone https://github.com/roassystems/frontend-nelsonroas-bloxtek.git
```
2. ubicarse en el directorio del proyecto frontend-nelsonroas-bloxtek y ejecutar el comando:
```
npm install
```

3. ubicarse en el directorio del proyecto backend-nelsonroas y Copiar el archivo ```.env.template``` y renombrar la copia a ```
.env```

4. Llenar las variables de entorno definidas en el archivo .env 
```
Ejemplo:
NEXT_PUBLIC_API_URL=http://127.0.0.1:3000/api/auth/
NODE_ENV=desarrollo
NEXT_PUBLIC_APP_NAME=App para demostrar skills Nelson Roas
PORT=3001
```
```
5. Asegurarse que la aplicacion backend configurada en las variables de ambiente anteriores este ejecutandose de forma exitosa

7. Ejecutar la aplicación en dev:
```
```
npm run dev
```
Si necesita especificar otro puerto ejecute
``` 
npx next start -p 3001
```
8. Puede acceder la aplicacion en el siguiente url:
```
http://localhost:3001/
```
# FORMA ALTERNA DE LEVANTAR ESTE BACKEND USANDO DOCKER
1. Ejecutar comando `````
```
docker build -t imagen-nelsonroas-frontend-bloxtek .
```
2. Ejecutar comando ``````
```
docker run -p 3001:3001  -d --rm --name contenedor-nelsonroas-frontendbloxtek --env-file ./.env imagen-nelsonroas-frontend-bloxtek
```
3. La aplicacion corre en la siguiente url: ```
```
http://localhost:3001/
```
## Stack usado
* Next 15.1.6
* Axios 1.7.0
* Zustand 5.0.3
* Bootstrap 5.3.3
* Zod 3.24.1
* JWT Decode 4.0.0
* react-hook-form 7.54.2
* Version de Node JS: v18.20.2

