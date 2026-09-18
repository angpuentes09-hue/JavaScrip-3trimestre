//agrupa las rutas de mi aplicación 
const {Router} = require("express")
const enrutador = Router()
const pruebaRouters = require("./pruebaRouters")

enrutador.use("/rutaPrueba", pruebaRouters)
//ejemplo
//enrutador.use("/usuarios", usuarioRouter)

module.exports = enrutador