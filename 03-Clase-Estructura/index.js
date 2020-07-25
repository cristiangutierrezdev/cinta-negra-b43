const { app, PORT } = require("./server");
require('./database')

app.listen(PORT, (error) =>
  !error ? console.info(`Server on port ${PORT}`) : console.error(error)
);
