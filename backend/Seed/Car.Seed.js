
const { carData } = require("../data/car.data");
const { Car } = require("../models/cars.model");


const seedCarData = async () => {
  await Car.deleteMany({});

  await Car.create(carData);

  console.log("Car Database seeded successfully");
};

module.exports = { seedCarData };
