const express = require("express");
const router = express.Router();
const catsRoutes = require('./catRoutes')

router.get("/", (req, res) => res.status(200).send({ message: "Server on" }));

router.use(catsRoutes);

module.exports = router
