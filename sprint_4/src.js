const express = require( "express");
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/api/emissionmeasurement/ranges_parameters", (req, res) => {
    res.json([ranges_parameters]);
});

app.post("/api/emissionmeasurement/ranges_parameters", (req, res) => {
    const newRange = req.body;
    ranges_parameters.push(newRange)
    res.json([ranges_parameters]);
});

app.get("/api/emission-measurement/limits", (req, res) => {
    res.json([limits]); 
}); 


module.exports = app;
