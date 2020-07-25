const express = require("express");
const app = express();
const router = require("../routes");
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/", router);

module.exports = { app, PORT };
