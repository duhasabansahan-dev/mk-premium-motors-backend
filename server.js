const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB bağlandı"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("MK PREMIUM MOTORS BACKEND ÇALIŞIYOR");
});
app.use("/api/cars", require("./routes/cars"));
app.listen(process.env.PORT || 5000, () => {
  console.log("Server çalışıyor");
});
