const userServices = require('../services/userServices');
const User = require('../models/User');

module.exports = {
  create: async(req, res) => {
    console.log(req.body)
    try {
      const user = await userServices.create(req.body);
      res.status(201).send({user});
    } catch (error) {
      res.status(409).send({error});
    }
  },
  getUsers: async(req, res)=>{
    try {
      const users = await userServices.getUsers();
      res.status(200).send({users});
    } catch (error) {
      res.status(404).send({error});
    }
  },
  getUser: async(req, res)=>{
    try {
      const user = await userServices.getUser(req.params.id);
      res.status(200).send({user});
    } catch (error) {
      res.status(404).send({error});
    }
  },
  updateUser: async(req, res)=>{
    try {
      const user = await userServices.getUser(req.params.id);
      const modifiedUser = await userServices.updateUser(user, req.body);
      res.status(200).send({user: modifiedUser});
    } catch (error) {
      res.status(404).send({error});
    }
  },
  deleteUser: async(req, res)=>{
    try {
      const user = await userServices.getUser(req.params.id);
      await userServices.updateUser(user, {is_active: false});
      res.status(200).send({message: 'Usuario exterminado'});
    } catch (error) {
      res.status(404).send({error});
    }
  },
  login: async(req, res)=>{
    try {
      const user = await userServices.findUserByEmail(req.body.email);
      if(!user) res.status(404).send({message: 'Usuario no encontrado'});

      const isMatch = userServices.comparePasswords(req.body.password, user.password);
      if (!isMatch) res.status(409).send({message: 'Datos incorrectos'});

      res.status(200).send({user});
    } catch (error) {
       res.status(404).send({error});
    }
  }
}