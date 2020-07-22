// Notas:
// - El Backend siempre recibe peticiones y envia respuestas.

const express = require("express"); // Llamamos express
const app = express(); // Inicializamos express

// Estamos utilizando un middleware
// Explicacion de middlewares
//    Cliente(Insomnia) <--------------- MIDDLEWARE -----------------> Servidor(Backend)
app.use(express.json()); // Permite que nuestro backend entienda formato JSON
app.use(express.urlencoded({ extended: true })); // Permite que nuestro backend entienda archivos media

// Creamos nuestro primer endpoint escuchando la ruta inicial "/"
// CRUD (Read)
app.get("/", function (request, response) {
  response.send("Hello world");
});

// CRUD (Create)
app.post("/users", function (request, response) {
  response.status(201).send(request.body.email);
});

// CRUD (Update)
app.put("/users", function (request, response) {
  response.status(200).send(request.body.email);
});

// CRUD (Update partial)
app.patch("/users", function (request, response) {
  response.status(200).send(request.body.email);
});

// CRUD (Delete)
app.delete("/users", function (request, response) {
  response.status(200).send(request.body.email);
});

// Podemos recibir queries a traves de la URL
app.get("/dogs", function (req, res) {
  res.send(req.query.name);
});

// Podemos recibir parametros a traves de la URL
app.get("/dogs/:id", function (req, res) {
  res.send(req.params);
});

// Levantamos el servidor con el metodo listen
app.listen(3000, function (error) {
  if (!error) {
    console.info("Server on port 3000");
  } else {
    console.error(error);
  }
});
