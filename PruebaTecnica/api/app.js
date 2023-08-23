const express = require("express"); /*Aquí estás importando el módulo "express", que es un framework para construir aplicaciones web en Node.js de manera más fácil y estructurada. Te permite definir rutas, manejar solicitudes y respuestas HTTP, y mucho más. */
const fs = require("fs"); /* Estás importando el módulo "fs" (File System), que proporciona funciones para interactuar con el sistema de archivos del servidor. En este caso, se utiliza para leer el contenido de archivos, como el archivo "weather.json". */
const cors = require("cors"); /* Estás importando el módulo "cors", que es un middleware que habilita la política de mismo origen en las solicitudes HTTP. Esto permite que tu servidor responda a solicitudes desde diferentes dominios o ubicaciones sin restricciones de seguridad del navegador. */
const app = express();
const port = 3000;
const apiKey = "llaveSimulada";

app.use(cors()); // Enable CORS for all routes

app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});

app.get("/weather", (req, res) => {
  const providedKey = req.query.key;
  if (providedKey !== apiKey) {
    res.status(401).send("Clave inválida");
    return;
  } /* En caso de que la key no sea correcta */

  fs.readFile("weather.json", "utf-8", (err, data) => {
    if (err) {
      console.error("Error al leer el archivo weather.json:", err);
      res.status(500).send("Error del servidor");
      return;
    }
    const weatherData = JSON.parse(data);
    res.json(weatherData);
  }); /* En caso de que el json no se pueda leer */
});
