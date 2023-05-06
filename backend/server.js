const express = require("express");

const cors = require("cors");
const { connection } = require("./config/db");
const { Car } = require("./models/cars.model");
const { carsData } = require("./data/car.data");
const { bikesData } = require("./data/bike.data");
const { Bike } = require("./models/bikes.model");

require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  carsData.forEach((car) => {
    const newCar = new Car(car);
    // newCar.save();
  });
  bikesData.forEach((bike) => {
    const newBike = new Bike(bike);
    // newBike.save();
  });
  res.send("This is the Home Page");
});

//GET - values of CAR
app.get("/api/cars", async (req, res) => {
  const cars = await Car.find({});
  res.json(cars);
});

//GET - values of Bike
app.get("/api/bikes", async (req, res) => {
  const bikes = await Bike.find({});
  res.json(bikes);
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
