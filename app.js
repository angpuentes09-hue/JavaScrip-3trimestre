const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Aprendicez ficha 3407186');
});

app.listen(port, () => {
  console.log(`servidor en funcionamiento al puerto: ${port}`);
});