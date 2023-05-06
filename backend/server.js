const express = require("express");

const cors = require("cors");
const { connection } = require("./config/db");
const { Car } = require("./models/cars.model");
const { seedCarData } = require("./Seed/Car.Seed");
const { seedBikeData } = require("./Seed/Bike.Seed");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  seedCarData();
  seedBikeData();
  res.send("This is the Home Page");
});

app.listen(PORT, async () => {
  try {
    await connection;
    console.log(`MongoDb COnnected: ${(await connection).connection.host}`);
  } catch (err) {
    console.log(err);
    console.log(`Error: ${err.message}`);
  }
  console.log(`Server is listening on PORT ${PORT}`);
});
