import express from 'express';
import "dotenv/config";
const app = express();
const port = process.env.PUERTO || 3000;

app.get('/', (_, res) => {
  res.send('Aprendices de la ficha 3407186');
});

app.get("/ruta1", (req, res) => {
  //template string 
  res.send(`<h1> Usando res.send </h1>`);
});

app.get("/ruta2", (req, res) => {
  res.json({ "dev": "node --watch app.js", "script": "node app.js" });
});

app.get("/ruta3/:nombre/:apellido", (req, res) => {
  const nameusuario = req.params.nombre;
  const apellido = req.params.apellido;
  res.json({ "usuario": nameusuario, "apellido": apellido });
});

app.get("/ruta4", (req, res) => {
  const numero = req.query.phone || 3236258841;
  const orden = req.query.orden || "sin orden";
  const pagina = req.query.pagina || 1;
  res.send(`<h1> Listado aprendices </h1>
            <h2> El listado en orden: ${orden} </h2>
            <h3> numero: ${numero} </h3>
            <p> pagina: ${pagina} </p>`);
});

app.get("/ruta5/:nombre", (req, res) => {
  const nameusuario = req.params.nombre;
  res.send(`Hola mundo ${nameusuario}`);
});
 
app.get("/ruta6/:nombre", (req, res) => {
  const nameproducto = req.params.nombre;
  res.json({ "producto": nameproducto, 
              "id": 1, 
              "stock": 10,
              "preciounitario": 2800,
              "categoria": "Comida" });
});



app.listen(port, () => {
  console.log(`SERVIDOR: http://localhost:${port}`);
});