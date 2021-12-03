const express = require( "express");
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.get("tu ruta aquí ", (req, res) => {
  ///api/emissionmeasurement/ranges_parameters
  //manejador paa retornar los rangos
});
app.post("tu ruta aquí", (req, res) => {
  //api/emissionmeasurement/ranges_parameters
  //range creation
});
app.get(
  "tu ruta aquí",
  //api/emission-measurement/limits
  //retornar los límites
);
module.exports = app;
