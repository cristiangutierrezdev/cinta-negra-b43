const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const { User } = require("./models");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => res.status(200).send({ message: "Server on" }));

app.post("/api/v1/users", async (req, res) => {
  const newUser = new User(req.body);

  try {
    const user = await newUser.save();
    res.status(201).send(user);
  } catch (error) {
    console.error(error);
  }
});

// app.listen(PORT, (err) =>
//   err ? console.error(err) : console.info(`Server on port ${PORT}`)
// );
app.listen(PORT, (err) =>
  err ? console.error(err) : console.info(`Server on port ${PORT}`)
);
