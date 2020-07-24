const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const { User } = require("./models");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => res.status(200).send({ message: "Server on" }));

// CRUD ----- CRUD ----- CRUD

// CREATE

app.post("/api/v1/users", async (req, res) => {
  const newUser = new User(req.body);

  try {
    const user = await newUser.save();
    res.status(201).send(user);
  } catch (error) {
    console.error(error);
  }
});

// READ

app.get("/api/v1/users", async function (req, res) {
  try {
    const users = await User.find({is_active: true});
    res.status(200).send(users);
  } catch (error) {
    console.error(error);
  }
});

app.get("/api/v1/users/:userid", async (req, res) => {
  try {
    const user = await User.findById(req.params.userid);
    res.status(200).send(user);
  } catch (error) {
    console.error(error);
  }
});

// UPDATE

app.put('/api/v1/users/:userid', async(req,res)=>{
  try {
    const user = await User.findByIdAndUpdate(req.params.userid, req.body, {new:true});
    res.status(200).send(user);
  } catch (error) {
    console.error(error)
  }
})

app.patch('/api/v1/users/:userid', async(req,res)=>{
  try {
    const user = await User.findByIdAndUpdate(req.params.userid, {$set:{email:req.body.email}}, {new:true});
    res.status(200).send(user);
  } catch (error) {
    console.error(error)
  }
})

// DELETE

app.delete('/api/v1/users/:userid', async (req, res) => {
  try {
    await User.findByIdAndUpdate(req.params.userid, {$set:{is_active: false}}, {new:true})
    res.status(200).send({message: 'Usuario eliminado'})
  } catch (error) {
    console.error(error)
  }
})

app.listen(PORT, (err) =>
  err ? console.error(err) : console.info(`Server on port ${PORT}`)
);
