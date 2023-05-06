const { bikeData } = require("../data/bike.data");
const { Bike } = require("../models/bikes.model");

const seedBikeData = async () => {
  await Bike.deleteMany({});

  await Bike.create(bikeData);

  console.log("Bike Database seeded successfully");
};

module.exports = { seedBikeData };
