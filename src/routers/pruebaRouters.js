//ruta de solo prueba  
const {Router} = require("express")
const enrutador = Router()
const { mostrarRuta } = require("../controllers/pruebacontroller")

//funcion (req,res) debe ir en el controlador 
enrutador.get("/rutaPersonal", mostrarRuta)

module.exports = enrutador