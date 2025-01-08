const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const express = require("express");
const app = express();
const connectToDb = require("./db/db");
const cookiesParser = require("cookie-parser");
const userRoutes = require("./routes/user.routes");
const driverRoutes = require("./routes/driver.routes");
connectToDb();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookiesParser());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/users", userRoutes);
app.use("/drivers", driverRoutes)

module.exports = app;
