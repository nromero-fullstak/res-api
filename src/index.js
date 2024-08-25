const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();


const app = express();
const port = process.env.PORT || 10000;

// Midelwares//


//rutas//
app.get("/", (req, res) => {
  res.send("Bienvenido a mi API");
});

//coneccion a DB Mongoose//
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Conected to MongoDB"))
  .catch((error) => console.error(error));

app.listen(port, () => console.log("server listenng on port", port));
