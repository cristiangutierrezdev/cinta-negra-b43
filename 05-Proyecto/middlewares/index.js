const jwt = require('jsonwebtoken')

// Cliente -----> Middleware -----> Backend(controller)
//         <-----            
module.exports = {
  validateToken: (req, res, next) => {
    try {
      if(!req.headers.authorization) res.status(403).send({error: 'Necesitas un token continuar'});
      
      const { authorization } = req.headers;
      const splitted = authorization.split(' ');

      if(splitted[0] !== 'myapp') res.status(403).send({error: 'Tu bearer es incorrecto'});

      const decoded = jwt.verify(splitted[1], process.env.JWT_SECRET);
      req.decoded = decoded;
      next();
    } catch (error) {
      res.status(403).send({ error })
    }
  }
}