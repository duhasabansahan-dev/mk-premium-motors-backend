const express = require("express");
const router = express.Router();
const Car = require("../models/Car");

// Araçları listele (ziyaretçi)
router.get("/", async (req, res) => {
  try {
    const cars = await Car.find().sort({ createdAt: -1 });
    res.json(cars);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// Araç ekle (admin)
router.post("/", async (req, res) => {
  try {
    const car = new Car(req.body);
    await car.save();
    res.json(car);
  } catch (err) {
    res.status(500).json({ error: "Car could not be saved" });
  }
});

module.exports = router;
