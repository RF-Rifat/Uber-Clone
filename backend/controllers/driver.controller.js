const { validationResult } = require("express-validator");
const driverModel = require("../models/driver.model");
const driverService = require("../services/driver.services");
const blacklistTokenModel = require("../models/blacklistToken.model");
module.exports.registerDriver = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { email, password, fullName, vehicle } = req.body;
  const isDriverExist = await driverModel.findOne({ email });
  if (isDriverExist) {
    return res.status(400).json({ message: "Driver already exist" });
  }
  const hashPassword = await driverModel.hashPassword(password);
  const driver = await driverService.createDriver({
    firstName: fullName.firstName,
    lastName: fullName.lastName,
    email,
    password: hashPassword,
    color: vehicle.color,
    plate: vehicle.plate,
    capacity: vehicle.capacity,
    vehicleType: vehicle.vehicleType,
  });
  const token = await driver.generateAuthToken();
  res.status(201).json({ token, driver });
};

module.exports.loginDriver = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { email, password } = req.body;
  const driver = await driverModel.findOne({ email }).select("+password");

  if (!driver) {
    return res.status(401).json({ message: "Invalid email or password" });
  }
  const isMatch = await driver.comparePassword(password);
  if (!isMatch) {
    return res.status(401).json({ message: "Invalid email or password" });
  }
  const token = await driver.generateAuthToken();
  res.cookie("token", token);
  res.status(200).json({ token, driver });
};
module.exports.getDriver = async (req, res, next) => {
  res.status(200).json({ driver: req.driver });
};

module.exports.logoutDriver = async (req, res, next) => {
  res.clearCookie("token");
  const token =
    (await req.cookies.token) || req.headers.authorization.split(" ")[1];
  await blacklistTokenModel.create({ token });
  res.status(200).json({ message: "Logout successful" });
};
