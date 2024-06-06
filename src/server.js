/**
 * Este archivo es responsable de iniciar el servidor y escuchar en un puerto específico. 
 * Es el punto de entrada principal de tu aplicación y su responsabilidad principal es 
 * arrancar el servidor.
 *Basicamente inicia y levanta la api
 Arranca el servidor y conecta a la base de datos.
 */

const app = require("./app");
const conectarBD = require("./config");
require("dotenv").config();

const puerto = process.env.PORT || 3000;

conectarBD();

app.listen(puerto, () => {
  console.log(`Servidor está corriendo en el puerto ${puerto}`);
});
