const express = require( "express");
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.get("tu ruta aquí ", (req, res) => {
  //manejador paa retornar los rangos
});
app.post("tu ruta aquí", (req, res) => {
  //range creation
});
app.get(
  "tu ruta aquí",
  //retornar los límites
);
module.exports = app;