function maquinaCocacola(dinero) {
  if (dinero >= 200) {
    return "Cocacola";
  } else {
    return "Por favor inserta tu dinero";
  }
}

function entregaPepsi() {
  return "Pepsi";
}

// console.log(maquinaCocacola(dinero))
// console.log(entregaPepsi())

function maquinaFanta(dinero, callback) {
  if (dinero >= 150) {
    return callback();
  } else {
    return "Por favor inserta tu dinero";
  }
}

// console.log(
//   maquinaFanta(140, function () {
//     return "Toma tu fanta";
//   })
// );

const users = [
  {
    id: '12345',
    name: 'Pepito',
    age: 24
  },
  {
    id: '9876',
    name: 'John',
    age: 30
  }
]

function getUser(id, error, response){
  if(!id){
    error = 'por favor ingresa un id'

    return error
  } else {
    const user = users.find(function (user) { return user.id === id })

    if(user){
      response = user
      return response
    } else {
      error = 'el usuario no existe'
      return error
    }
  }
}

console.log(getUser())