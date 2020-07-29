const mongoose = require("mongoose");
const URI = process.env.DB_URI
console.log(URI)

mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true }, (err) =>
  err ? console.error(err) : console.info("Database Connected")
);
