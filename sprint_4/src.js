const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/api/emission-measurement/ranges_parameters", (req, res) => {
  res.json(ranges_parameters);
});

app.get(
  "/api/emission-measurement/limits",
  (req, res) => {
    res.json(limits);

  }
);

app.post("/api/emission-measurement/ranges_parameters", (req, res) => {
  //range creation
  const newRange = req.body;
  ranges_parameters.push(newRange);
  res.status(200).json(ranges_parameters);
});
module.exports = app;
