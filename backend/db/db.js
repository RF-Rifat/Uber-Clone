const mongoose = require("mongoose");

function connectToDb() {
  return mongoose
      .connect(process.env.MONGO_URI,
        //   { useNewUrlParser: true }
      )
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.error("Error connecting to MongoDB", err);
    });
}

module.exports = connectToDb;
