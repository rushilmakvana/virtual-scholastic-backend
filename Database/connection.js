const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://test:1234@cluster0.avclcee.mongodb.net/?retryWrites=true&w=majority"
);

mongoose.connection.once("open", () => true).on("error", () => false);
