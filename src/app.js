require("dotenv").config()
const express = require("express")
//importar enrutador 
const enrutador = require("./routers")

const app = express()
//usar middleware, formatear el body 
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//Importar el archivo enrutador(todas las rutas) de rourters 
app.use("/api", enrutador)

//Endpoint raiz de bienvenida 
app.get("/", (req, res) => {
  res.send("API. REST Estructurado en capas")
})

module.exports = app