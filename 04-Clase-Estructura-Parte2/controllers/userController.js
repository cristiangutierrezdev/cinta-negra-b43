const userServices = require('../services/userServices');

module.exports = {
  create: async (req, res) => {
    try {
      const user = await userServices.create(req.body);
      res.status(201).send({user});
    } catch (error) {
      res.status(409).send({error});
    }
  },
  getUsers: async(req,res) =>{
    try {
      const users = await userServices.getUsers();
      res.status(200).send({users});
    } catch (error) {
      res.status(404).send({error});
    }
  },
  getUser: async(req,res) => {
    try {
      const user = await userServices.getUser(req.params.id);
      res.status(200).send({user});
    } catch (error) {
      res.status(404).send({error});
    }
  },
  updateUser: async(req,res)=> {
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
  }
}