const Services = jest.genMockFromModule("../userServices.js");

function create(body) {
  const keys = ["name", "last_name", "email", "password"];

  const newUser = {
    _id: "advajksdn32e2fda32ca",
    name: "Cristian",
    last_name: "Gutierrez",
    email: "test@test.com",
    password: "qwerty123456",
    phone_number: 345678,
    is_admin: false,
    is_active: true,
    createdAt: "2020-07-29T00:54:28.834Z",
    updatedAt: "2020-07-29T00:54:28.834Z",
    __v: 0,
  };

  const dataBase = new Promise((resolve, reject) => {
    if (keys.every((key) => Object.keys(body).includes(key))) {
      resolve(newUser);
    } else {
      reject(new Error("Mongo Error"));
    }
  });

  return dataBase;
}

Services.create = create

module.exports = Services
