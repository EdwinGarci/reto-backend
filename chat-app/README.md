<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# Dev
1. Clonar el proyecto
2. Copiar el ```.env.template``` y renombrar a ```.env```
3. Ejecutar 
```
npm install
```
4. En caso no se tenga la imagen docker, descargarla
```
docker pull postgres:14.4
```
5. Levantar la imagen(Docker desktop) 
```
docker-compose up -d
```
6. Levantar el backend de Nest 
```
npm run start:dev
```
# Consideraciones
1. Se desintalo prettier por estar en entorno de desarrollo
```
npm uninstall prettier eslint-plugin-prettier eslint-config-prettier
```