//importar mi aplicación app
const app = require("./app")

//verificar el puerto de las variables de entorno
const PUERTO = process.env.PUERTO || 3333

//Imprimo por consola el link del servidor 
app.listen(PUERTO, () => {
  console.log(`Servidor escuchando en http://localhost:${PUERTO}`)
})